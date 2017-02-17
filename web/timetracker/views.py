from django.shortcuts import render
from django.contrib.auth import authenticate, login
from django.http import HttpResponse
from htmlmin.decorators import minified_response
from timetracker.models import Work

@minified_response
def index(request):
    # Landing Page

    return HttpResponse('startseite')
    # if request.method == "GET":
    #     # Get all work objects
    #     work = Work.objects.all()

    #     # Pick get comment of first work object
    #     comment = 'This is my comment'
    #     return render(request, 'timetracker/landing-page.html',
    #         {'comment': comment})

    # elif request.method == "POST":

    #     username = request.POST['username']
    #     password = request.POST['password']

    #     user = authenticate(username=username, password=password)

    #     if user is not None:
    #         login(request, user)
    #         return HttpResponse('Login Failed')
    #     else:
    #         return HttpResponse('Test')


@minified_response
def login(request):
    if request.method == "GET":
        # Get all work objects
        work = Work.objects.all()

        # Pick get comment of first work object
        comment = 'This is my comment'
        return render(request, 'timetracker/login.html',
            {'comment': comment})

    elif request.method == "POST":

        # username = request.POST['username']
        # password = request.POST['password']

        # user = authenticate(username=username, password=password)

        # if user is not None:
        #     login(request, user)
        #     return HttpResponse('Login Failed')
        # else:
        #     return HttpResponse('Test')
        #
        return HttpResponse('postrequestlogin')
