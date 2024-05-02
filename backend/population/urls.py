from django.urls import path
from .views import PopulationListView

urlpatterns = [
    path('api/population/', PopulationListView.as_view(), name='population-list'),
]
