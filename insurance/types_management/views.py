from django.http import JsonResponse, HttpResponse
from django.core.exceptions import ObjectDoesNotExist

from .models import InsuranceType

def get_type(request, id):
    try:
        result = InsuranceType.objects.get(id = id)
        return JsonResponse({
            'schema': result.schema,
            'enums': result.enums
        }, safe = False)
    except ObjectDoesNotExist:
        return HttpResponse(status = 404)

