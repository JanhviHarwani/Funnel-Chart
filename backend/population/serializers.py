from rest_framework import serializers
from .models import PopulationData

class PopulationDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = PopulationData
        fields = ['age_group', 'male_percentage', 'female_percentage']
