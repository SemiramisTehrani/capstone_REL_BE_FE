from django.shortcuts import render
from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes

from .models import Consultation
from .serializers import ConsultationSerializer




# Create your views here.

@api_view(['GET','POST'])
@permission_classes([AllowAny])
def get_all_consultation(request):
    
    if request.method == 'GET' : 
        consultations = Consultation.objects.all()
        serializer = ConsultationSerializer(consultations, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST' :
         serializer = ConsultationSerializer(data = request.data)
         serializer.is_valid(raise_exception = True)
         serializer.save()
         return Response(serializer.data, status = status.HTTP_201_CREATED)
