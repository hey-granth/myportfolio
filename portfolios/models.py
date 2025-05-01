from django.db import models
from users.models import User

class Portfolio(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='portfolios')
    user_name = models.CharField(max_length=255)
    subdomain = models.TextField(blank=False, null=False)
    created_at = models.DateTimeField(auto_now_add=True)
