from django.shortcuts import render
from .models import Home
# Create your views here.
def index(request):
    sliding_item = Home.objects.all()
    return render(request, 'uifiles/index.html',{'sliding_item':sliding_item})

def page_not_found_view(request, exception):
    return render(request, 'uifiles/404.html', status=404)