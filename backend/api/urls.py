from .views import CreateItemView, ItemRetrieveUpdateDestroyView
from django.urls import path

urlpatterns = [
    # endpoint mapped to specific url pattern 
    # REST endpoint to create new item (POST) and list all items (GET)
    path('items/', CreateItemView.as_view(), name='Item List'),
    # REST endpoint to retrieve (GET), update (PUT/PATCH), or delete (DELETE) a specific item by ID
    path('items/<int:pk>/', ItemRetrieveUpdateDestroyView.as_view(), name='Edit Item List'),
]
