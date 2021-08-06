from django.urls import path, include
from rest_framework import urlpatterns

from cv_api.router import api_router


urlpatterns = [
    path("", include(api_router.urls))
]
