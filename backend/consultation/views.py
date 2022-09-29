from xmlrpc.client import ResponseError
from django.shortcuts import render, redirect
from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes

from .models import Consultation
from .models import User
from .serializers import ConsultationSerializer




# Create your views here.

@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_consultation(request):
    # print("Request Data")
    # print(request.data)
    # print("Request User")
    # print(request.user)
    # print("Request Method")
    # print(request.method)

    consultations = Consultation.objects.all()
    serializer = ConsultationSerializer(consultations, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)
    # u = request.user
    #print(u)
        
        #if request.user.is_authenticated: 
            
        #else:
        #    return redirect("/")



@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_consultation(request):
    print("Request Data")
    print(request.data)
    print("Request User")
    print(request.user)
    print("Request Method")
    print(request.method)

    new_consultation = request.data
    u_data = User.objects.get(username=request.user)
    print(str(u_data))
    new_consultation['user_id'] = u_data.id # request.user.id
    print(new_consultation['user_id'])
    #print(new_consultation)
    #serializer = ConsultationSerializer(data = request.data)
    serializer = ConsultationSerializer(data = new_consultation)
    #print(serializer)
    serializer.is_valid(raise_exception = True)
    serializer.save()
    return Response(serializer.data, status = status.HTTP_201_CREATED)
        
