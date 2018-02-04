from django.db import models
from django.contrib.postgres.fields import JSONField

class InsuranceType(models.Model):
    name = models.CharField(max_length = 100)
    schema = JSONField()

    def __str__(self):
        return self.name
