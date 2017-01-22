from django.shortcuts import render
from django.http import HttpResponse
from htmlmin.decorators import minified_response

# Create your views here.
#
@minified_response
def index(request):
    return render(request, 'mysite/base.html')
