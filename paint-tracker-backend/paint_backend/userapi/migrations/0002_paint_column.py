# Generated by Django 5.0.3 on 2024-03-23 23:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('userapi', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='paint',
            name='column',
            field=models.CharField(default='1', max_length=15),
            preserve_default=False,
        ),
    ]