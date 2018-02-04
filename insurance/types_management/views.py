from django.http import JsonResponse, HttpResponse
from django.core.exceptions import ObjectDoesNotExist

from .models import InsuranceType

def get_type(request, id):
    try:
        return JsonResponse(InsuranceType.objects.get(id = id))
    except ObjectDoesNotExist:
        return HttpResponse(status = 404)
