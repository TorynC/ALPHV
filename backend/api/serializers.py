from .models import Item
from rest_framework import serializers 

# Defining a serializer for item model 
class ItemSerializer(serializers.ModelSerializer):
    name = serializers.CharField(required=True)

    class Meta:
        # specifying model to serialize 
        model = Item 
        # fields of item 
        fields = ['id', 'name', 'color', 'shape', 'timestamp']
        # cannot modify 'timestamps'
        read_only_fields = ['timestamp']