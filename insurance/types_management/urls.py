from django.urls import path
from . import views

urlpatterns = [
        path('get/<int:id>', views.get_type, name = 'get_type')
]
