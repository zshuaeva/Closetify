from django.urls import path

from .views import api_list_hats, api_show_hat, api_show_locationVO

urlpatterns = [
    path("hats/", api_list_hats, name="api_list_hats"),
    path("hats/<int:pk>/", api_show_hat, name="api_show_hat"),
    path("locationvo/", api_show_locationVO, name="show"),
]
