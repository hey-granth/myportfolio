from rest_framework import serializers
from .models import Resume

class ResumeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resume
        fields = ['id', 'user', 'user_name', 'file', 'uploaded_at']
        read_only_fields = ['id', 'user', 'uploaded_at']
