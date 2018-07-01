from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class Event(models.Model):
    title = models.CharField(max_length=144)
    slug = models.SlugField()
    body = models.TextField()
    date = models.DateTimeField(auto_now_add=True)
    # thumbnail of event
    thumb = models.ImageField(default="default.png", blank=True)
    # event created by
    author = models.ForeignKey(User, default=None)
    registered_people = models.CharField(max_length=5000, blank=True, default="")

    def __str__(self):
        return self.title

    def snippet(self):
        return self.body[:50] + "..."
