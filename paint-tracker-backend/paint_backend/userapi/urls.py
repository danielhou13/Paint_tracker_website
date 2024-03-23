from django.urls import path
from . import views

urlpatterns = [
    path("hello-world/", views.hello_world, name="hello_world"),
    path("can-edit/", views.can_edit, name="can_edit"),
    path("retrieve-paints/", views.retrieve_paints, name="retrieve_paints"),
]
