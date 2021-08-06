from django.db import models

class Site(models.Model):
    title = models.CharField(max_length=100, verbose_name="Title")
    slug = models.SlugField(max_length=100, unique=True, verbose_name="Slug")
    description = models.TextField(verbose_name="Description")
    link = models.CharField(max_length=255, verbose_name="Site link")
    git_link = models.CharField(max_length=255, verbose_name="GitHub link")
    img_link = models.CharField(max_length=255, verbose_name="Link on image")

    class Meta:
        verbose_name = "Site"
        verbose_name_plural = "Sites"
        ordering = ["-id"]

    def __str__(self):
        return self.title

class Skill (models.Model):
    title = models.CharField(max_length=100, verbose_name="Title")
    slug = models.SlugField(max_length=100, unique=True, verbose_name="Slug")
    percent = models.PositiveIntegerField(verbose_name="Percent")
    is_language = models.BooleanField(verbose_name="If is program language")

    class Meta:
        verbose_name = "Skill"
        verbose_name_plural = "Skills"

    def __str__(self):
        return f"{self.title} = {self.percent}%"
