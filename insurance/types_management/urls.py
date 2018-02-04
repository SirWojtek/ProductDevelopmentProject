from django.urls import path
from . import views

urlpatterns = [
    path('get/<int:id>', views.get_type, name = 'get_type'),
    path('get-all', views.get_all, name = 'get_all')
]
