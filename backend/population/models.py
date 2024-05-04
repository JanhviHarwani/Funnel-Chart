from django.db import models

class PopulationData(models.Model):
    age_group = models.CharField(max_length=10,default='0-99')  # e.g., "0-4", "10-14", etc.
    male_percentage = models.FloatField(default=0)  # Stores percentage of male population
    female_percentage = models.FloatField(default=0)  # Stores percentage of female population

    def __str__(self):
        return f"{self.age_group}: {self.male_percentage}, {self.female_percentage}"
