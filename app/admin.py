from django.contrib import admin
from .models import Home
# Register your models here.
class  AdminHome(admin.ModelAdmin):
    list_display=('Id','Title','Description' ,'Image')


admin.site.register(Home,AdminHome)