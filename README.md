# Funnel-Chart

Funnel chart displaying data of population of country. Technical stack: Uses React in frontend and Django in backend

Running backend for api:
-cd backend
-venv\Scripts\activate
-python manage.py runserver

to make changes with data:
-cd backend
-update csv file in backend/res
-run script: python manage.py import_population
-run migration: 
python manage.py makemigrations
python manage.py migrate

Running frontend:
-cd frontend
-npm start
