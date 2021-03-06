# Generated by Django 3.2.6 on 2021-08-06 09:02

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Site',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100, verbose_name='Title')),
                ('slug', models.SlugField(max_length=100, unique=True, verbose_name='Slug')),
                ('description', models.TextField(verbose_name='Description')),
                ('link', models.CharField(max_length=255, verbose_name='Site link')),
                ('git_link', models.CharField(max_length=255, verbose_name='GitHub link')),
                ('img_link', models.CharField(max_length=255, verbose_name='Link on image')),
            ],
            options={
                'verbose_name': 'Site',
                'verbose_name_plural': 'Sites',
                'ordering': ['-id'],
            },
        ),
        migrations.CreateModel(
            name='Skill',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100, verbose_name='Title')),
                ('slug', models.SlugField(max_length=100, unique=True, verbose_name='Slug')),
                ('percent', models.PositiveIntegerField(verbose_name='Percent')),
                ('is_language', models.BooleanField(verbose_name='If is program language')),
            ],
            options={
                'verbose_name': 'Skill',
                'verbose_name_plural': 'Skills',
            },
        ),
    ]
