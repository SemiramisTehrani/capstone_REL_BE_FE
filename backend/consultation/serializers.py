from rest_framework import serializers
from .models import Consultation

class ConsultationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Consultation
        fields = ['id', 'description', 'document', 'user_id']   # user_id & fullname tie toogether under foreignkey
        
        depth = 1
        
    user_id = serializers.IntegerField (write_only = True)
    document = serializers.FileField()
    
