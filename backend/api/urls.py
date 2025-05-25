from .views import CreateItemView, ItemRetrieveUpdateDestroyView
from django.urls import path

urlpatterns = [
    path('items/', CreateItemView.as_view(), name='Item List'),
    path('items/<int:pk>/', ItemRetrieveUpdateDestroyView.as_view(), name='Edit Item List'),
]
