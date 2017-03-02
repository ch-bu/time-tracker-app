from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Task(models.Model):
    # work_category = models.CharField(max_length=300)
    # work_type = models.CharField(max_length=300)
    user =  models.ForeignKey(User)
    started = models.DateTimeField()
    stopped = models.DateTimeField()
    duration = models.PositiveSmallIntegerField(default=0)
    goal = models.TextField()
    # comment = models.TextField()
    # feeling = models.PositiveSmallIntegerField()
