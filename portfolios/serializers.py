from rest_framework import serializers
from .models import Portfolio

class PortfolioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Portfolio
        fields = ['id', 'user', 'user_name', 'subdomain', 'created_at']
        read_only_fields = ['id', 'user', 'created_at']