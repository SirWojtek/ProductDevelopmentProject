# Generated by Django 2.0.2 on 2018-02-04 04:37

import django.contrib.postgres.fields.jsonb
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('instances_management', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='insuranceinstance',
            name='name',
        ),
        migrations.AlterField(
            model_name='insuranceinstance',
            name='payload',
            field=django.contrib.postgres.fields.jsonb.JSONField(default=list),
        ),
    ]
