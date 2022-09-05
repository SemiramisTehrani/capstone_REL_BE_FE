from django.shortcuts import render,redirect
from django.contrib.auth.models import User
from django.contrib.auth.models import login,authenticare,logout
from django.conf import settings
from django.core.mail import send_mail


def signup(request) :
    if  request.method == "POST" :
        username = request.POST["username"]
        password = request.POST["password"]
        email = request.PSOT["email"]

        user = User.objects.create_user(
            username = username,
            password = password,
            email = email
        )
        login(request,user)
        subject = "Welcome to Rose Electronics Lab"
        message = f' Hi {user.username}, Thank you for registering in Rose Electronics Lab.'
        email_from = settings.Email_HOST_USER
        recipient_list = [user.email,]
        send_mail( subject, message, email_from, recipient_list)
        return redirect("/dashboard")
    return render(request, "signup.html")

# Create your views here.
