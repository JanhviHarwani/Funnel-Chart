import csv
from django.core.management.base import BaseCommand
from population.models import PopulationData

class Command(BaseCommand):
    help = 'Load U.S. population data from a CSV file and delete old data'

    def handle(self, *args, **kwargs):
        # First, delete existing data
        PopulationData.objects.all().delete()
        self.stdout.write(self.style.SUCCESS('Successfully deleted old data.'))

        # Now, load new data from CSV
        with open('res/india_population.csv', 'r') as file:
            reader = csv.DictReader(file)
            for row in reader:
                PopulationData.objects.create(
                    age_group=row['Years'],
                    male_percentage=float(row['MalePopulationPercentage']),
                    female_percentage=float(row['FemalePopulationPercentage'])
                )
        self.stdout.write(self.style.SUCCESS('Successfully loaded new data into the database.'))
