# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-03-01 18:04
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('timetracker', '0002_auto_20170301_1800'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Work',
            new_name='Task',
        ),
    ]
