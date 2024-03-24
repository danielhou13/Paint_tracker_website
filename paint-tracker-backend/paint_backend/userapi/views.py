# Create your views here.
import json
from django.http import JsonResponse
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import Permission
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Paint
from django.core import serializers


@api_view(["GET"])
def hello_world(request):
    return Response({"message": "Hello, world!"})


@api_view(["GET"])
def can_edit(request):
    return Response({"message": True})


# convert all the paints into a json to send into the frontend
@api_view(["GET"])
def retrieve_paints(request):
    paint_json = serializers.serialize("json", Paint.objects.all())
    struct = json.loads(paint_json)
    data = {"paint_json": struct}

    return JsonResponse(data)


# Using id passed from frontend, update the stock of the respective paint
@api_view(["POST"])
def update_paints(request):
    print(request.data)
    if request.data:
        updated_paint = request.data
        paint = Paint.objects.get(id=updated_paint["id"])
        paint.currentStock = updated_paint["newStock"]
        paint.column = updated_paint["newColumn"]
        paint.save()
    return Response({"message": True})


# Using id passed from frontend, update the stock of the respective paint
@api_view(["POST"])
def login_function(request):
    username: str = request.data["username"]
    password: str = request.data["password"]
    user = authenticate(request, username=username, password=password)
    if user is not None:
        login(request, user)
        permissions = serializers.serialize(
            "json", Permission.objects.filter(group__user=user)
        )
        struct = json.loads(permissions)
        data = {"permissions_json": struct}
        print(data)
        return Response({"Logged_in": True, "Permissions": data})


@api_view(["POST"])
def logout_user(request):
    logout(request)
    return Response({"Logged_in": False})
