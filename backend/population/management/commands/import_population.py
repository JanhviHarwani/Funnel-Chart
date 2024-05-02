import csv
from django.core.management.base import BaseCommand
from population.models import PopulationData
# from backend.models import PopulationData

class Command(BaseCommand):
    help = 'Load U.S. population data from a CSV file'

    def handle(self, *args, **kwargs):
        with open('res/us_population.csv', 'r') as file:
            reader = csv.DictReader(file)
            for row in reader:
                PopulationData.objects.update_or_create(
                    year=row['Year'],
                    defaults={'population': row['Population']}
                )
        self.stdout.write(self.style.SUCCESS('Successfully updated the database.'))
