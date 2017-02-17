from django.shortcuts import render
from django.contrib.auth import authenticate, login
from django.http import HttpResponse
from htmlmin.decorators import minified_response
from timetracker.models import Work

@minified_response
def index(request):
    # Serve landing page
    return HttpResponse('startseite')


@minified_response
def loginView(request):
    if request.method == "GET":
        # Return template
        return render(request, 'timetracker/login.html')

    elif request.method == "POST":

        # Get post data
        username = request.POST.get('username')
        password = request.POST.get('password')

        # Try to authenticate user
        user = authenticate(username=username, password=password)

        # User is authenticated
        if user is not None:
            login(request, user)
            return HttpResponse('authenticated')
            # return redirect('app')
        # User is not authenticated
        else:
            return HttpResponse('Not authenticated')


@minified_response
def app(request):
    return HttpResponse('app')
