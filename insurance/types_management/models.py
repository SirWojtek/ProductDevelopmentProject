from django.db import models

class InsuranceType(models.Model):
    name = models.CharField(max_length = 100)
    schema = models.JSONField()

    def __str__(self):
        return self.name
