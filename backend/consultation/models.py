from django.db import models
from authentication.models import User

# Create your models here.


class Consultation(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    
    description = models.CharField(max_length=255, blank=True)
    document = models.FileField(upload_to='media/documents/')
    uploaded_at = models.DateTimeField(auto_now_add=True)
