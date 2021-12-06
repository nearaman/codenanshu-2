from functools import partial
from http.server import HTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
import sys


def start_httpd(directory, port: int = 3000):
    print(f"serving from {directory}...")
    print(f"serving at http://localhost:{port}")
    handler = partial(SimpleHTTPRequestHandler, directory=directory)
    httpd = HTTPServer(('localhost', port), handler)
    httpd.serve_forever()

start_httpd(sys.path[0] + '/backend/build')