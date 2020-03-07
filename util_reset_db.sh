#!/bin/zsh
echo "Removing old DB"
rm app.db
echo "Creating empty DB"
source venv/bin/activate
flask db upgrade