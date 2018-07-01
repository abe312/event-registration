from django.conf.urls import url
from . import views

app_name = 'events'

urlpatterns = [
    url(r'^$', views.event_list, name="list"),

    url(r'^create/$', views.event_create, name="create"),
    url(r'(?P<slug_register>[\w-]+)/register$', views.event_register, name="register"),
#          (?P<slug_register>[\w-]+)/register$

    url(r'(?P<slug>[\w-]+)/$', views.event_detail, name="detail"),

]
