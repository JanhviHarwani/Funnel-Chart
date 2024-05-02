from django.db import models

class PopulationData(models.Model):
    year = models.IntegerField()
    population = models.IntegerField()

    def __str__(self):
        return f"{self.year}"
