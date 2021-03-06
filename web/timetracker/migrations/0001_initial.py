# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-01-22 12:22
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Work',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('work_category', models.CharField(max_length=300)),
                ('work_type', models.CharField(max_length=300)),
                ('started', models.DateTimeField()),
                ('stopped', models.DateTimeField()),
                ('goal', models.TextField()),
                ('comment', models.TextField()),
                ('feeling', models.PositiveSmallIntegerField()),
            ],
        ),
    ]
