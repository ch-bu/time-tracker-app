from django.shortcuts import render
from django.http import HttpResponse
from htmlmin.decorators import minified_response
from timetracker.models import Work

# Create your views here.
#
@minified_response
def index(request):
    # Get all work objects
    work = Work.objects.all()

    # Pick get comment of first work object
    comment = 'This is my comment'
    return render(request, 'timetracker/landing-page.html', {'comment': comment})
