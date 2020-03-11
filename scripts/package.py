# Python script to build package and the server into a single binary resource

import subprocess
import os
import re
import sys
from pathlib import Path

from utils import *


print_header("Installing")
subprocess.run(['ls'], stderr=sys.stderr, stdout=sys.stdout)
# First install dependencies in backend and frontend projects
# result = subprocess.run(["npm run install"], text=True, cwd=frontend_path())
# result = subprocess.run(["npm run install"], text=True, cwd=backend_path())

print_header("Building")
# Next build both, note the build command 
# result = subprocess.run(["npm run build"], text=True, cwd=backend_path())
