"""Check a released student archive without importing/executing its code."""
import json
from pathlib import Path, PurePosixPath
import stat
import sys
import zipfile

ROOT_FILES = {
    "README.md", "README_EN.md", "STUDENT_GUIDE.md", "STUDENT_GUIDE_KO.md",
    "GRADING.md", "GRADING_EN.md", "agent.py", "student_policy.py", "policy_helpers.py",
    "grade.py", "score_grading.py", "grading.json", "learning_checks.py",
}
REQUIRED = {"README.md", "student_policy.py", "agent.py", "grade.py", "score_grading.py",
            "grading.json", "treasure_explorer/__init__.py", "treasure_explorer/__main__.py",
            "treasure_explorer/runner.py", "treasure_explorer/viewer.py", "treasure_explorer/viewer_page.py"}


def audit(filename):
    filename = Path(filename)
    if not 0 < filename.stat().st_size <= 10 * 1024 * 1024:
        raise ValueError("archive size is outside the student-package limit")
    with zipfile.ZipFile(filename) as archive:
        names = set()
        total = 0
        for entry in archive.infolist():
            name = entry.filename
            parts = PurePosixPath(name).parts
            if (entry.is_dir() or not parts or "\\" in name or ":" in name
                    or name.startswith("/") or ".." in parts or name in names
                    or stat.S_ISLNK(entry.external_attr >> 16) or entry.flag_bits & 1):
                raise ValueError("unsafe or duplicate archive entry")
            names.add(name)
            total += entry.file_size
            if entry.file_size > 10 * 1024 * 1024 or total > 30 * 1024 * 1024:
                raise ValueError("expanded archive exceeds student-package limit")
            allowed = len(parts) == 1 and name in ROOT_FILES
            if len(parts) == 2:
                allowed = ((parts[0] == "maps" and name.endswith(".json"))
                           or (parts[0] in {"tests", "treasure_explorer"} and name.endswith(".py"))
                           or name == ".vscode/settings.json")  # switches off code completion
            if not allowed:
                raise ValueError("archive contains a non-student file")
        if not REQUIRED.issubset(names) or not any(n.startswith("maps/") for n in names):
            raise ValueError("archive is missing required student files")
        if archive.testzip() is not None:
            raise ValueError("archive CRC validation failed")
    return {"entries": len(names), "maps": sum(n.startswith("maps/") for n in names)}


if __name__ == "__main__":
    try:
        print(json.dumps(audit(sys.argv[1])))
    except (ValueError, OSError, zipfile.BadZipFile, RuntimeError) as exc:
        print(f"Student archive rejected: {exc}", file=sys.stderr)
        raise SystemExit(1)
