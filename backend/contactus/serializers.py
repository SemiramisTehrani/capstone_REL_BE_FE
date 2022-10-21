from rest_framework import serializers
from .models import ContactUs

class ContactusSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactUs
        # fields = ['id', 'fullname', 'email', 'subject', 'message', 'user_id']   # user_id & fullname tie toogether under foreignkey
        fields = ['id', 'fullname', 'email', 'subject', 'message']
        # fields = ['id', 'fullname', 'email', 'subject', 'message','uploaded_at']
        depth = 1
        
    # user_id = serializers.IntegerField (write_only = True)