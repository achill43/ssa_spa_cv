from rest_framework import serializers

from cv_info.models import Site

class SiteSerializers(serializers.ModelSerializer):
    class Meta:
        model = Site
        fields = [
            "id", "title", "slug", "description", "link", "git_link",
            "img_link"
        ]
