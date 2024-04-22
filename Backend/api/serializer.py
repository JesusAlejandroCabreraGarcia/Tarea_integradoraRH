from rest_framework import serializers
from .models import empleados,instructores,areas,sucursales,horarios,puestos

#---------------------------------------------------------------------
class empleadosSerializer(serializers.ModelSerializer):
	class Meta:
		model = empleados
		fields = '__all__'

class instructoresSerializer(serializers.ModelSerializer):
	class Meta:
		model = instructores
		fields = '__all__'

class areasSerializer(serializers.ModelSerializer):
	class Meta:
		model = areas
		fields = '__all__'

class sucursalesSerializer(serializers.ModelSerializer):
	class Meta:
		model = sucursales
		fields = '__all__'

class horariosSerializer(serializers.ModelSerializer):
	class Meta:
		model = horarios
		fields = '__all__'
  
class puestosSerializer(serializers.ModelSerializer):
	class Meta:
		model = puestos
		fields = '__all__'
