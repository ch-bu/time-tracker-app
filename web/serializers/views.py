from django.http import HttpResponse, JsonResponse
from django.core.exceptions import ObjectDoesNotExist
from htmlmin.decorators import minified_response
from rest_framework.views import APIView
from rest_framework.response import Response
from serializers import TaskSerializer
from timetracker.models import Task
from django.contrib.auth.models import User

class Test(APIView):

    def get(self, request, id, format=None):

        task = Taks.objects.get(id=id)

        serializer = TaskSerializer(task)

        return JsonResponse({status: 'success'})

class TaskView(APIView):

    def getTask(self, id):
        try:
            task = Task.objects.get(id=id)
        except ObjectDoesNotExist:
            task = None

        return task

    def get(self, request, id, format=None):

        task = self.getTask(id)

        if not task:
            return JsonResponse({'status': 'failed'}, status=400, safe=False)

        serializer = TaskSerializer(task)

        return JsonResponse({'status': 'success',
            'data': serializer.data}, status=200, safe=False)

    def delete(self, request, id, format=None):

        task = self.getTask(id)

        if not task:
            return JsonResponse({'status': 'failed'}, status=400, safe=False)

        task.delete()

        return JsonResponse({'status': 'deleted task'}, status=200, safe=False)


class TasksView(APIView):

    def get(self, request):
        # Get all tasks from user
        tasks = Task.objects.filter(user=request.user)

        serializer = TaskSerializer(tasks, many=True)

        return JsonResponse(serializer.data, status=200, safe=False)


    def post(self, request):
        # Get request data
        data = request.data.copy()
        data['user'] = request.user.id
        data['duration'] = int(data['duration'])


        # return Response(data)
        serializer = TaskSerializer(data=data)

        # Check if serializer is valid
        # and save data
        if serializer.is_valid():
            serializer.save()
            return JsonResponse({'status': 'success',
                'data': {
                    'post': data
                }}, status=200)
        # Data passed to serializer is not valid
        else:
            return JsonResponse({'status': 'fail',
                'data': {
                    'post': data
                }}, status=500)
