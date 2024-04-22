from django.db import models
from django.utils import timezone

#--------------------------------------------------------------------------------------------
class empleados(models.Model):
    Persona_ID = models.AutoField(primary_key=True)
    Puesto = models.CharField(max_length=50)
    Area = models.CharField(max_length=60)
    Numero_Empleado = models.IntegerField(unique=True)
    Sucursal_ID = models.IntegerField(unique=True)
    Fecha_Contratacion = models.DateTimeField()
    
    class Meta:
        db_table = 'empleados'

class instructores(models.Model):
    Empleado_ID = models.AutoField(primary_key=True)
    Especialidad = models.CharField(max_length=100)
    Horario_Disponibilidad = models.TextField()
    Total_Miembros_Atendidos = models.IntegerField(unique=True)
    Valoracion_Miembro = models.IntegerField(unique=True)
    
    class Meta:
        db_table = 'instructores'

class areas(models.Model):
    ID = models.AutoField(primary_key=True)
    Nombre = models.CharField(max_length=80)
    Descripcion = models.TextField()
    Responsable_ID = models.IntegerField()
    Sucursal_ID = models.IntegerField(unique=True)
    Total_Equipos = models.IntegerField(unique=True)
    Estatus = models.BooleanField()
    
    class Meta:
        db_table = 'areas'

class sucursales(models.Model):
    ID = models.AutoField(primary_key=True)
    Nombre = models.CharField(max_length=150)
    Direccion = models.CharField(max_length=250)
    Responsable_ID = models.IntegerField(unique=True)
    Total_Clientes_Atendidos = models.IntegerField(unique=True)
    Promedio_Clientes_X_Dia = models.IntegerField(unique=True)
    Capacidad_Maxima = models.IntegerField(unique=True)
    Total_Empleados = models.IntegerField(unique=True)
    Horario_Disponibilidad = models.TextField()
    Estatus = models.BooleanField()
    
    class Meta:
        db_table = 'sucursales'

class horarios(models.Model):
    ID = models.AutoField(primary_key=True)
    Fecha = models.DateField()
    HoraInicio = models.TimeField()
    HoraFinalizacion = models.TimeField()

    class Meta:
        db_table = 'horarios'

class puestos(models.Model):
    ID = models.AutoField(primary_key=True)
    nombre_Puesto = models.CharField(max_length=50)
    descripcion_Puesto = models.TextField()

    class Meta:
        db_table = 'puestos'
    