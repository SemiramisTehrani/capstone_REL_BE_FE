from django.urls import path, include
from consultation import views

urlpatterns = [
    path('all/', views.get_all_consultation),
    path('' , views.get_all_consultation),
    path('add/' , views.get_all_consultation),
    
]