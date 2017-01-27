from django.http import HttpResponse
from htmlmin.decorators import minified_response

@minified_response
def index(request):
    # Landing Page

    return HttpResponse('Serializers')
