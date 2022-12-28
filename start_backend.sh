#!/bin/bash
echo "Start backend ..."
source "/home/dev/project/typeVersion/venv/bin/activate"
cd "/home/dev/project/typeVersion/backend"
python3 manage.py runserver