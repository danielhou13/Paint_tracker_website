from django.db import models


# Create your models here.
# Create the paint class for the frontend to use
class Paint(models.Model):
    colour = models.CharField(max_length=15)
    currentStock = models.IntegerField()

    # define the paint by its colour
    def __str__(self):
        """String for representing the MyModelName object (in Admin site etc.)."""
        return self.colour
