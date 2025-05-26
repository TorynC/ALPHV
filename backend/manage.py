#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys


def main():
    """Run administrative tasks."""
    # Sets default settings module for Django project
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
    try:
        # imports command-line execution function from Django
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        # error if Django isn't installed or venv isn't activated
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    
    # executes command-line instruction
    execute_from_command_line(sys.argv)


if __name__ == '__main__':
    main()
