from django.db import models

from ..types_management.models import InsuranceType

class InsuranceInstance(models.Model):
    name = models.CharField(max_length = 100)
    schema = models.ForeignKey(InsuranceType)
    payload = models.JSONField()

    def __str__(self):
        return self.name
