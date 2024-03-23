# Create your views here.
import json
from django.http import JsonResponse
from django.shortcuts import render
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
