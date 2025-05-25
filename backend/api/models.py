from django.db import models

# Create your models here.
class Item(models.Model):
    SHAPE_CHOICES = [
        ('CIRCLE', 'Circle'),
        ('SQUARE', 'Square'),
        ('TRIANGLE', 'Triangle'),
    ]

    COLOR_CHOICES = [
        ('GREEN', 'Green'),
        ('BLUE', 'Blue'),
        ('YELLOW', 'Yellow'),
        ('RED', 'Red')
    ]
    name = models.CharField(max_length=100, blank=False, null=False)
    color = models.CharField(max_length=20, choices=COLOR_CHOICES)
    shape = models.CharField(max_length=20, choices=SHAPE_CHOICES)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
