from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.http import HttpResponse, JsonResponse
from htmlmin.decorators import minified_response
from timetracker.models import Task
from django.contrib.auth.decorators import login_required

@minified_response
def index(request):
    # Serve landing page
    return HttpResponse('startseite')


@minified_response
def loginView(request):
    if request.method == "GET":
        # User has a valid session id
        if request.user.is_authenticated():
            # Redirect to app
            return redirect('app')
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
            return JsonResponse({'result': 'authenticated'}, status=202)
        # User is not authenticated
        else:
            return JsonResponse({'result': 'not authenticated'}, status=500)


@minified_response
@login_required
def appView(request):
    return render(request, 'timetracker/app.html')
