from django.http import HttpResponse
from htmlmin.decorators import minified_response
from rest_framework.views import APIView
from rest_framework.response import Response


class Test(APIView):

    def get(self, request, format=None):
        return Response('tests')
