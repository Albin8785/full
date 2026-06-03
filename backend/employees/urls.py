from django.urls import path
from .views import employee_list, delete_employee

urlpatterns = [
    path("", employee_list),
    path("<int:pk>/", delete_employee),
]