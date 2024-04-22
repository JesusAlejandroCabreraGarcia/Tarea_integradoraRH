from django.contrib import admin
from .models import empleados,instructores,areas,sucursales,horarios,puestos

# Register your models here.
admin.site.register(empleados)
admin.site.register(instructores)
admin.site.register(areas)
admin.site.register(sucursales)
admin.site.register(horarios)
admin.site.register(puestos)