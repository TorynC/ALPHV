from django.shortcuts import render
from .models import Item 
from rest_framework import generics
from .serializers import ItemSerializer

# Create your views here.
# view to handle listing all items and creating new item
class CreateItemView(generics.ListCreateAPIView):
    queryset = Item.objects.all() # get all items
    serializer_class = ItemSerializer 

# view to handle retrieving, deleting, updating a specific item by id
class ItemRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer