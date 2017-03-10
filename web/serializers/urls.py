from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^task/(\d+)/$', views.TaskView.as_view(), name="taskView"),
    url(r'^tasks/', views.TasksView.as_view(), name="tasksView"),
    url(r'^$', views.Test.as_view(), name='index')
]
