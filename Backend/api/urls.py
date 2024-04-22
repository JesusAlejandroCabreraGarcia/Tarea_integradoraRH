from django.urls import path,include
from rest_framework import routers
from api import views
router = routers.DefaultRouter()
#-----------------------------------------------------------------------
router.register(r'empleados', views.empleadosViewSet)
router.register(r'instructores', views.instructoresViewSet)
router.register(r'areas', views.areasViewSet)
router.register(r'sucursales', views.sucursalesViewSet)
router.register(r'horarios', views.horariosViewSet)
router.register(r'puestos', views.puestosViewSet)

urlpatterns = [
	path('api/v1',include(router.urls)),
 path('api/v1/puestos/', views.puestos_list, name='puestos_list'),
]
