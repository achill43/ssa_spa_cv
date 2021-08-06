from django.contrib import admin

from cv_info.models import Site

@admin.register(Site)
class SiteAdmin(admin.ModelAdmin):
    list_display = ["id", "title"]