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

def get_all(request):
    response = [ x.as_dict() for x in InsuranceType.objects.all() ]
    return JsonResponse(response, safe = False)
