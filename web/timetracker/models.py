from __future__ import unicode_literals
from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Task(models.Model):
    user =  models.ForeignKey(User)
    started = models.DateTimeField()
    stopped = models.DateTimeField()
    duration = models.PositiveSmallIntegerField(default=0)
    goal = models.TextField()
    task_category = models.CharField(max_length=500)
    task_type = models.CharField(max_length=500)
    # comment = models.TextField()

class TaskItem(models.Model):
    item_category = models.CharField(max_length=500)
    item_type = models.CharField(max_length=500)
