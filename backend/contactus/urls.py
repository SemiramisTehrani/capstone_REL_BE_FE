from django.urls import path, include
from contactus import views

urlpatterns = [
    path('all/', views.get_all_contactus),
]
