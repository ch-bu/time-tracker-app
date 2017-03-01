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

    def post(self, request):
        # Get request data
        data = request.data.copy()
        data['user'] = request.user.id
        data['duration'] = int(data['duration'])


        # return Response(data)
        serializer = TaskSerializer(data=data)

        if serializer.is_valid():
            return Response('valid')
        else:
            return Response('not valid')
