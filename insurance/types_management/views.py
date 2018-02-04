from django.http import JsonResponse

def get_type(request):
    return JsonResponse({ 'hello': 'world'})
