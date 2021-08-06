from rest_framework.viewsets import ReadOnlyModelViewSet

from cv_api.serializers import SiteSerializers
from cv_info.models import Site

class GetSitesViewSet(ReadOnlyModelViewSet):
    queryset = Site.objects.all()
    serializer_class = SiteSerializers
