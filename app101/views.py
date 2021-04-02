from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    return render(request,'app101/index.html')

def login(request):
    return render(request,'app101/login.html')

"when server not running you have to code your terminal **pip install virtualenvwrapper-win** / **mkvirtualenv py2** / pip install django "