from django.shortcuts import render, redirect, HttpResponseRedirect
from .models import Event
# from django.http import HttpResponse
from django.contrib.auth.decorators import login_required
from . import forms


# Create your views here.
def event_list(request):
    events = Event.objects.all().order_by('date')
    return render(request, "events/event_list.html", {'events': events})


def event_detail(request, slug):
    # return HttpResponse(slug)
    event = Event.objects.get(slug=slug)
    if event.registered_people:
        event.registered_people = event.registered_people.split(' ')
    return render(request, 'events/event_detail.html', {'event': event})


@login_required(login_url="/accounts/login/")
def event_create(request):
    if request.method == 'POST':
        form = forms.CreateEvent(request.POST, request.FILES)
        if form.is_valid():
            # save to db
            instance = form.save(commit=False)
            instance.author = request.user
            instance.save()
            return redirect('events:list')

    else:
        form = forms.CreateEvent()
    return render(request, 'events/event_create.html', {'form': form})


@login_required(login_url="/accounts/login/")
def event_register(request, slug_register):
    print("here")
    event = Event.objects.get(slug=slug_register)
    #    print(type(event.registered_people)_
    search = str(request.user)+" "
    if search not in event.registered_people:
        event.registered_people = str(event.registered_people) + str(request.user) + " "
        event.save()
    else:
        # print to manage.py shell
        print("you're already registered!")
    #    return redirect('events:detail')
    #    return render(request, 'events/event_detail.html', {'event': event})
    return HttpResponseRedirect(request.META.get('HTTP_REFERER', '/'))