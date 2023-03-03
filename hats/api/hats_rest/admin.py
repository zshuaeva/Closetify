from django.contrib import admin
from .models import LocationVO, Hat

@admin.register(LocationVO)
class LocationVO(admin.ModelAdmin):
    pass

@admin.register(Hat)
class HatAdmin(admin.ModelAdmin):
    pass
# Register your models here.
