Setup and commands to run backend goes here:
to make changes with data:
-cd backend
-update csv file in backend/res
-run script: python manage.py import_population
-run migration:
python manage.py makemigrations
python manage.py migrate
