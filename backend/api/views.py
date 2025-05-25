from django.shortcuts import render
from .models import Item 
from rest_framework import generics
from .serializers import ItemSerializer

# Create your views here.
class CreateItemView(generics.ListCreateAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer 

class ItemRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer