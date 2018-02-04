from django.db import models
from django.contrib.postgres.fields import JSONField

class InsuranceType(models.Model):
    name = models.CharField(max_length = 100)
    schema = JSONField()
    enums = JSONField(default = list)

    def __str__(self):
        return self.name

    def as_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'schema': self.schema,
            'enums': self.enums
        }
