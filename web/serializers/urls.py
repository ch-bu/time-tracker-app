from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^user-tasks/', views.tasksView, name="tasksView"),
    url(r'^$', views.Test.as_view(), name='index')
]
