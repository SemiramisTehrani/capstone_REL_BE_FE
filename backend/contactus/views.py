from django.shortcuts import render
from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes


from .models import ContactUs
from .serializers import ContactusSerializer


# Create your views here.

@api_view(['GET','POST'])
@permission_classes([AllowAny])
def get_all_contactus(request):
    
    if request.method == 'GET' : 
        contacts = ContactUs.objects.all()
        serializer = ContactusSerializer(contacts, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST' :
         serializer = ContactusSerializer(data = request.data)
         serializer.is_valid(raise_exception = True)
         serializer.save()
         return Response(serializer.data, status = status.HTTP_201_CREATED)


