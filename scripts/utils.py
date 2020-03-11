
import os
import re
from pathlib import Path


def project_path():
    script_path = Path(os.path.dirname(os.path.realpath(__file__)))
    project_path = script_path.parent
    return project_path


def frontend_path():
    script_path = Path(os.path.dirname(os.path.realpath(__file__)))
    frontend_path = script_path.parent / "frontend/"
    return frontend_path

    
def backend_path():
    script_path = Path(os.path.dirname(os.path.realpath(__file__)))
    backend_path = script_path.parent / "backend/"
    return backend_path

def print_stdout(stdout):
    print(re.sub('^', '^\t>', stdout))
    
def print_stderr(stderr):
    print(re.sub('^', '^\t>', stderr))

def print_line_break():
    print('--------------------------------------------------------------------------------')

def print_header(title):
    pad_len = int((80 - len(title)) / 2)
    padding = (' ' * pad_len)[:pad_len]
    print_line_break()
    print(padding + title)
    print_line_break()