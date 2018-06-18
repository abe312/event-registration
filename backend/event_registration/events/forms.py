from django import forms
from . import models


class CreateEvent(forms.ModelForm):
    class Meta:
        model = models.Event
        fields = ['title', 'body', 'slug', 'thumb']


# class Register(forms.ModelForm):
#     class Meta:
#         model = models.Event
#         fields = ['registered_people']
