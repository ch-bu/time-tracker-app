from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Work(models.Model):
    work_category = models.CharField(max_length=300)
    work_type = models.CharField(max_length=300)
    started = models.DateTimeField()
    stopped = models.DateTimeField()
    goal = models.TextField()
    comment = models.TextField()
    feeling = models.PositiveSmallIntegerField()
