from django.db import models
from authentication.models import User

# Create your models here.


class ContactUs(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    
    fullname = models.CharField(max_length=255)
    email = models.EmailField()
    subject = models.CharField(max_length=255)
    message = models.TextField()