from rest_framework import generics
from .models import PopulationData
from .serializers import PopulationDataSerializer


class PopulationListView(generics.ListAPIView):
    queryset = PopulationData.objects.all()
    serializer_class = PopulationDataSerializer