#!/bin/bash
echo "Start backend ..."
source "/home/dev/project/solution_vuexy/app/venv/bin/activate"
cd "/home/dev/project/solution_vuexy/app/backend"
python3 manage.py runserver