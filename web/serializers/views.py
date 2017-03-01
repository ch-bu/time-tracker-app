from django.http import HttpResponse
from htmlmin.decorators import minified_response
from rest_framework.views import APIView
from rest_framework.response import Response
from serializers import TaskSerializer
from django.contrib.auth.models import User

class Test(APIView):

    def get(self, request, format=None):
        return Response('tests')

class TaskView(APIView):

    def post(self, request, format=None):
        # Get request data
        requestData = request.data
        requestData['user'] = request.user

        serializer = TaskSerializer(data=requestData)

        if serializer.is_valid():
            return Response('valid')
        else:
            return Response('not valid')
