from rest_framework import viewsets
from .models import empleados,instructores,areas,sucursales,horarios,puestos
from .serializer import empleadosSerializer,instructoresSerializer,areasSerializer,sucursalesSerializer,horariosSerializer,puestosSerializer
from django.http import JsonResponse
from .models import puestos

def puestos_list(request):
    puestos_data = list(puestos.objects.values())  # Obtener datos de los puestos desde la base de datos
    return JsonResponse(puestos_data, safe=False)




#----------------------------------------------------------------------------------- 
class empleadosViewSet(viewsets.ModelViewSet):
	queryset = empleados.objects.all()
	serializer_class = empleadosSerializer

class instructoresViewSet(viewsets.ModelViewSet):
	queryset = instructores.objects.all()
	serializer_class = instructoresSerializer

class areasViewSet(viewsets.ModelViewSet):
	queryset = areas.objects.all()
	serializer_class = areasSerializer
 
class sucursalesViewSet(viewsets.ModelViewSet):
	queryset = sucursales.objects.all()
	serializer_class = sucursalesSerializer

class horariosViewSet(viewsets.ModelViewSet):
	queryset = horarios.objects.all()
	serializer_class = horariosSerializer
 
class puestosViewSet(viewsets.ModelViewSet):
	queryset = puestos.objects.all()
	serializer_class = puestosSerializer
 













