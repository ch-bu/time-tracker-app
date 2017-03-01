from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^tasks/', views.TaskView.as_view(), name="taskView"),
    url(r'^$', views.Test.as_view(), name='index')
]
