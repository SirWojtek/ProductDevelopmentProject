from django.db import models
from django.contrib.postgres.fields import JSONField

from types_management.models import InsuranceType

class InsuranceInstance(models.Model):
    schema = models.ForeignKey(InsuranceType, on_delete = models.CASCADE)
    payload = JSONField(default = list)

    def __str__(self):
        return self.name
