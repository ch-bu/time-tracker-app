# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-03-28 20:33
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('timetracker', '0006_auto_20170313_1800'),
    ]

    operations = [
        migrations.CreateModel(
            name='TaskItem',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('item_category', models.CharField(max_length=500)),
                ('item_type', models.CharField(max_length=500)),
            ],
        ),
    ]