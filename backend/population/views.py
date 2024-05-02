from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import PopulationData
from .serializers import PopulationDataSerializer

class PopulationListView(APIView):
    """
    List all population data.
    """
    def get(self, request, format=None):
        population_data = PopulationData.objects.all()
        serializer = PopulationDataSerializer(population_data, many=True)
        return Response(serializer.data)
