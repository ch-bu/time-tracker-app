from django.contrib import admin
from .models import Task, TaskItem

# Register your models here.
admin.site.register(Task)
admin.site.register(TaskItem)
