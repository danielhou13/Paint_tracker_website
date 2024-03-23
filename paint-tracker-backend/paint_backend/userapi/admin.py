from django.contrib import admin
from .models import Paint

# Register your models here.

# Add the paint to the admin page
admin.site.register(Paint)
