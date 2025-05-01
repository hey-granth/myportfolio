from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    name = models.TextField(blank=True, null=True)
    email = models.EmailField(blank=True, null=True)
    password = models.TextField(blank=True, null=True)
