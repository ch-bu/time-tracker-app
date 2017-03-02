from django.contrib.auth.models import User, Group
from rest_framework import serializers
from timetracker.models import Task


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ('id', 'started', 'stopped',
            'duration', 'goal', 'user')
        read_only_fields = ('id', )
