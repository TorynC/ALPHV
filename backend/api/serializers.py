from .models import Item
from rest_framework import serializers 

class ItemSerializer(serializers.ModelSerializer):
    name = serializers.CharField(required=True)

    class Meta:
        model = Item
        fields = ['id', 'name', 'color', 'shape', 'timestamp']
        read_only_fields = ['timestamp']