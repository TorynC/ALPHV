from django.db import models

# Create your models here.
# Defining a model representing an item with a name, shape, color, timestamps
class Item(models.Model):
    # Predefined choices for shape 
    SHAPE_CHOICES = [
        ('CIRCLE', 'Circle'),
        ('SQUARE', 'Square'),
        ('TRIANGLE', 'Triangle'),
    ]

    # Predefined choices for color
    COLOR_CHOICES = [
        ('GREEN', 'Green'),
        ('BLUE', 'Blue'),
        ('YELLOW', 'Yellow'),
        ('RED', 'Red')
    ]
    # id is primary key 
    name = models.CharField(max_length=100, blank=False, null=False)
    color = models.CharField(max_length=20, choices=COLOR_CHOICES)
    shape = models.CharField(max_length=20, choices=SHAPE_CHOICES)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
