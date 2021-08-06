from rest_framework import routers

from cv_api import viewset

api_router = routers.DefaultRouter()

api_router.register(
    "sites", viewset.GetSitesViewSet,
)
