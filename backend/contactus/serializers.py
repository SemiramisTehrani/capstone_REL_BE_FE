from rest_framework import serializers
from .models import ContactUs

class ContactusSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactUs
        fields = ['id', 'fullname', 'email', 'subject', 'message','user_id']
        # fields = ['id', 'fullname', 'email', 'subject', 'message']
        depth = 1