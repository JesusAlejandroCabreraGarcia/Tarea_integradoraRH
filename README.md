<div align="center">
  
![WhatsApp Image 2024-08-22 at 11 29 16 PM](https://github.com/user-attachments/assets/6529eaca-aa32-4da0-9286-8e356dc99182)



  <h1>UNIVERSIDAD TECNOLOGICA DE XICOTEPEC DE JUÁREZ</h1>
</div>
<div align="center">
  <h1>Reporte Integrador - 
  Recursos Humanos</h1>
</div>
<div align="center">
  



| Empresa  | CDA |
| ------------- | ------------- |
| Proyecto  | Sitio web GYM BULL´S  |
| Fecha  | Mayo - Agosto 2024  |




#
| Logo del Sitio  
| ------------- 
| ![image](https://github.com/JesusAlejandroCabreraGarcia/Tarea_integradoraRH/assets/163442089/ceb72b9c-4bee-494d-b995-02fbc0c6a45e)
#
<div align="center">
  <h2>Integrantes del equipo:</h2>
</div>

![negro](https://github.com/user-attachments/assets/8aa2a511-f0d8-44b4-a783-a686a6162286)



#
### Responsables 
| Nombre | Cargo  |
| --- | --- |
| Jesus Alejandro Cabrera García | Líder/Desarrollador Backend  |
| Iram Daniel Zúñiga Agustín | Desarrollador Frontend |
| Amisadai Fernandez Reyes | DB Manager |
| Carlos Eduardo Varela Barrios | Documentador  |
| Adan Salas Galvan | Documentador  |
#
</div>


### Introducción
En el siguiente documento, se redacta el proyecto integrador del noveno cuatrimestre de la carrera de Ingeniería en Desarrollo y Gestión de Software, el cual es un proyecto que conlleva la integración de 2 materias, las cuales son: Extraccion de Base de Datos y Desarrollo Web Integral.
La gestión eficiente de los recursos humanos en las empresas de servicios, como los gimnasios, es crucial para garantizar un funcionamiento fluido y un excelente servicio al cliente. Con el objetivo de mejorar la administración y operatividad de un gimnasio, hemos desarrollado una API de frontend específica para la gestión de recursos humanos. Esta API se centra en cinco áreas clave: Puestos, Empleados, Personas, Servicio al Cliente, y Horarios.
#
### Objetivo General
Desarrollar una aplicación frontend intuitiva y eficiente que permita la gestión integral de los recursos humanos en un gimnasio, facilitando la administración de puestos, empleados, horarios y la atención al cliente, con el fin de optimizar las operaciones diarias y mejorar la experiencia tanto de los empleados como de los clientes.
#
### Objetivos Específicos
1.	Implementar un módulo de gestión de puestos.
2.  Desarrollar un sistema para la administración de empleados.
3.  Crear una base de datos centralizada de personas.
4.  Incorporar un módulo de atención al cliente
5.  Desarrollar un sistema de planificación y gestión de horarios.
   
#
### Justificación
La implementación de esta API de frontend responde a la necesidad de modernizar y simplificar la gestión de recursos humanos en gimnasios. Al integrar funciones clave en un solo sistema, se facilita la administración de la información, se reducen los errores manuales y se mejora la eficiencia en la gestión diaria. Además, la API está diseñada para ser flexible y escalable, permitiendo adaptaciones futuras conforme el gimnasio crezca o cambien sus necesidades operativas.

Este proyecto no solo proporciona una solución técnica efectiva, sino que también contribuye a una mejor experiencia para los empleados y clientes del gimnasio, al asegurar que todos los aspectos relacionados con la gestión de recursos humanos sean manejados de manera profesional y eficiente.

 
#
### Contexto del proyecto
En el ámbito de la gestión de gimnasios, la administración eficiente de recursos humanos es fundamental para garantizar un funcionamiento óptimo. Los gimnasios, como centros de bienestar y actividad física, requieren una coordinación precisa entre diversas funciones operativas y administrativas. La correcta gestión de puestos, empleados, horarios y servicios al cliente es esencial para ofrecer una experiencia de usuario de alta calidad y mantener un entorno laboral organizado y productivo. 
#
### Propósito 
 A través de esta solución, buscamos alcanzar los siguientes propósitos:
 1. Centralización de la Información
 2. Mejora en la Gestión del Personal
 3. Optimización del Servicio al Cliente
 4. Seguridad y Privacidad
 5. Flexibilidad y Escalabilidad

### Requerimientos Funcionales 
1. Capacidad de almacenar y gestionar la información personal de los empleados del gimnasio, como nombres, direcciones, números de contacto, fecha de contratación, salario, etc.
2. Funcionalidad para registrar y dar seguimiento a los horarios de trabajo de los empleados, incluyendo turnos, días libres, vacaciones, etc.
3. Capacidad de generar reportes de asistencia y puntualidad de los empleados.
4. Funcionalidad para gestionar el proceso de reclutamiento y selección de personal, incluyendo la publicación de vacantes, recepción de solicitudes, entrevistas, etc.
5. Herramientas para evaluar el desempeño de los empleados, incluyendo seguimiento de metas, evaluaciones de desempeño, etc.
6. Capacidad de gestionar la capacitación y desarrollo de los empleados, incluyendo programas de formación, seguimiento de cursos, certificaciones, etc.
7. Funcionalidad para gestionar las nóminas y pagos de los empleados, incluyendo cálculos automáticos de salarios, deducciones, bonificaciones, etc.
8. Herramientas para establecer y gestionar políticas internas de recursos humanos, como normas de conducta, políticas de beneficios, código de ética, etc.
9. Funcionalidades para la gestión de permisos, licencias, bajas médicas, entre otros aspectos relacionados con la gestión de personal.
10. Seguridad de acceso y gestión de permisos de usuario para garantizar la confidencialidad de la información de los empleados.

#
### Requerimientos No Funcionales 
1. Seguridad: La base de datos debe contar con medidas de seguridad robustas para proteger la información confidencial de los empleados del gimnasio, como datos personales, información financiera y registros de empleo.
2. Rendimiento: La base de datos debe ser capaz de manejar un alto volumen de consultas y transacciones sin experimentar retrasos significativos en el tiempo de respuesta.
3. Disponibilidad: La base de datos debe estar disponible en todo momento para que los empleados puedan acceder a la información necesaria en cualquier momento.
4. Integridad de los datos: La base de datos debe garantizar la integridad y consistencia de los datos almacenados, evitando la duplicación de información y errores en la inserción, actualización y eliminación de registros.
5. Cumplimiento normativo: La base de datos debe cumplir con las normativas y regulaciones pertinentes en materia de protección de datos personales, como la Ley de Protección de Datos Personales y la RGPD (Reglamento General de Protección de Datos).
6. Facilidad de mantenimiento: La base de datos debe ser fácil de mantener y administrar, permitiendo realizar copias de seguridad de manera regular y realizar tareas de mantenimiento sin interrumpir las operaciones del gimnasio.
7. Interoperabilidad: La base de datos debe ser compatible con otras aplicaciones y sistemas utilizados por el departamento de recursos humanos del gimnasio, permitiendo el intercambio de información de manera eficiente.


#
### Alcance del proyecto 
Desarrollar una base de datos que realice una gestión de los datos almacenados del gimnasio con base a las especificaciones dadas de los equipos, instructores, ejercicios, empleados y clientes, dadas por el usuario, este proyecto está enfocado para el público en general y orientado al área de entrenamiento físico. 
#
### Reglas de Negocio
1.	El usuario deberá registrarse correctamente al API para que la base pueda almacenar de manera adecuada los datos.
2.	Los cambios en la base de datos serán realizados únicamente cuando se registre un nuevo usuario o en caso de realizar cambios de los usuarios o el equipo.
3.	Se realizarán respaldos en la base de datos siempre y cuando se realicen cambios significativos en la misma.
4.	El dashboard debe mostrar el stock total de productos en tiempo real.
5.	El sistema debe cumplir con las normas de seguridad y privacidad de datos.
6.	Las promociones pueden ser exclusivas o combinables con otras ofertas.
7.	El sistema debe integrar con el software de gestión del gimnasio.
#
### Contexto del proyecto
Este repositorio contiene el código fuente de un sistema para un gimnasio desarrollado con Vue.js y utilizando la plantilla Flexy Vuetify Dashboard de WrapPixel como base.
#
### Tecnologías utilizadas
- Vue.js
- TypeScript
- SCSS
- CSS
#

--------------------------------------------------------------------------------
<div align="center">
  
![WhatsApp Image 2024-08-22 at 11 29 16 PM](https://github.com/user-attachments/assets/6529eaca-aa32-4da0-9286-8e356dc99182)



  <h1>UNIVERSIDAD TECNOLOGICA DE XICOTEPEC DE JUÁREZ</h1>
</div>
<div align="center">
  <h1>Reporte Integrador - 
  Recursos Humanos</h1>
</div>
<div align="center">


| Empresa  | CDA |
| ------------- | ------------- |
| Proyecto  | Sitio web GYM BULL´S  |
| Fecha  | Mayo - Agosto 2024  |




#
| Logo del Sitio  
| ------------- 
| ![image](https://github.com/JesusAlejandroCabreraGarcia/Tarea_integradoraRH/assets/163442089/ceb72b9c-4bee-494d-b995-02fbc0c6a45e)
#
<div align="center">
  <h2>Integrantes del equipo:</h2>
</div>

![negro](https://github.com/user-attachments/assets/ac7c17b5-a63c-4791-aaf3-8f64e7dedcb0)


#
### Responsables 
| Nombre | Cargo  |
| --- | --- |
| Jesus Alejandro Cabrera García | Líder/Desarrollador Backend  |
| Iram Daniel Zúñiga Agustín | Desarrollador Frontend |
| Amisadai Fernandez Reyes | DB Manager |
| Carlos Eduardo Varela Barrios | Documentador  |
| Adan Salas Galvan | Documentador  |
#
</div>


### Introducción
En el siguiente documento, se redacta el proyecto integrador del noveno cuatrimestre de la carrera de Ingeniería en Desarrollo y Gestión de Software, el cual es un proyecto que conlleva la integración de 2 materias, las cuales son: Extraccion de Base de Datos y Desarrollo Web Integral.
Este proyecto proporciona una API backend diseñada específicamente para gestionar los recursos humanos en un gimnasio. El sistema está enfocado en la administración de información clave relacionada con los empleados y la interacción con los clientes, permitiendo una gestión eficiente y efectiva de los procesos internos del gimnasio.
### Objetivo General
Desarrollar una API backend  eficiente para la gestión integral de los recursos humanos en un gimnasio, optimizando la administración de empleados, horarios, puestos de trabajo y servicios al cliente, con el fin de mejorar la operación diaria y la experiencia de los usuarios del gimnasio.
#
### Objetivos Específicos
1.  Implementar una estructura de base de datos que permita el almacenamiento y gestión eficiente de la información relacionada con los empleados, incluyendo sus roles, responsabilidades y horarios.

2. Desarrollar módulos específicos para la administración de puestos de trabajo, facilitando la asignación de roles y la actualización de descripciones y requisitos de cada puesto.

3. Crear un sistema de gestión de horarios que permita planificar y organizar los turnos de los empleados de manera eficiente, asegurando una cobertura adecuada en todas las áreas del gimnasio.

4. Diseñar y desarrollar un módulo de servicio al cliente que permita registrar y gestionar las interacciones y solicitudes de los usuarios del gimnasio, mejorando la calidad del servicio ofrecido.

5. Asegurar la integración de la API backend con una interfaz frontend, permitiendo a los usuarios interactuar con el sistema de manera intuitiva y eficiente.

6. Implementar mecanismos de seguridad y privacidad de datos que cumplan con las normativas vigentes, garantizando la protección de la información sensible de empleados y clientes.

7. Establecer procedimientos de respaldo y recuperación de datos para asegurar la continuidad del servicio y la integridad de la información almacenada en la base de datos.


   
#
### Justificación
La gestión de recursos humanos en un gimnasio es un componente crucial para su éxito operativo y la satisfacción de sus clientes. En un entorno donde la calidad del servicio y la eficiencia en la administración del personal son esenciales, contar con una herramienta tecnológica que centralice y automatice estos procesos es fundamental.
La implementación de una API backend específica para estos propósitos permite no solo una gestión más eficiente de los empleados y sus horarios, sino también una mejora significativa en la experiencia del cliente, al asegurar que cada interacción esté bien documentada y gestionada. Además, la automatización de estos procesos reduce el riesgo de errores humanos, mejora la coherencia en la administración de datos y facilita la toma de decisiones basada en información precisa y actualizada.
Finalmente, este proyecto se alinea con las mejores prácticas en cuanto a seguridad y privacidad de datos, un aspecto cada vez más relevante en la gestión de información sensible. Al asegurar que los datos de empleados y clientes estén protegidos según las normativas vigentes, el proyecto contribuye a la confianza y satisfacción tanto del personal como de los usuarios del gimnasio.

 
#
### Contexto del proyecto
El auge del fitness y la creciente demanda de servicios personalizados han transformado el sector de los gimnasios en los últimos años. Los gimnasios ya no son solo espacios para hacer ejercicio, sino centros integrales donde la atención al cliente, la gestión eficiente del personal y la oferta de servicios de alta calidad son esenciales para mantener la competitividad y la satisfacción de los usuarios.

En este contexto, la administración de los recursos humanos se ha vuelto una tarea cada vez más compleja. Los gimnasios deben gestionar una variedad de roles, desde entrenadores personales y especialistas en fitness, hasta personal administrativo y de atención al cliente. Además, la organización de horarios, la asignación de tareas, y la gestión de la interacción con los clientes requieren de sistemas robustos que puedan manejar grandes volúmenes de información de manera eficiente y segura.
#
### Propósito 
 La API backend tiene como objetivo centralizar y automatizar la administración de los recursos humanos del gimnasio. Permite la gestión de datos relacionados con los puestos de trabajo, empleados, personas, servicios al cliente y horarios. La implementación de esta API facilita el acceso y la manipulación de información crítica para la operación diaria del gimnasio, mejorando así la eficiencia y la calidad del servicio ofrecido.

### Requerimientos Funcionales 
1. Capacidad de almacenar y gestionar la información personal de los empleados del gimnasio, como nombres, direcciones, números de contacto, fecha de contratación, salario, etc.
2. Funcionalidad para registrar y dar seguimiento a los horarios de trabajo de los empleados, incluyendo turnos, días libres, vacaciones, etc.
3. Capacidad de generar reportes de asistencia y puntualidad de los empleados.
4. Funcionalidad para gestionar el proceso de reclutamiento y selección de personal, incluyendo la publicación de vacantes, recepción de solicitudes, entrevistas, etc.
5. Herramientas para evaluar el desempeño de los empleados, incluyendo seguimiento de metas, evaluaciones de desempeño, etc.
6. Capacidad de gestionar la capacitación y desarrollo de los empleados, incluyendo programas de formación, seguimiento de cursos, certificaciones, etc.
7. Funcionalidad para gestionar las nóminas y pagos de los empleados, incluyendo cálculos automáticos de salarios, deducciones, bonificaciones, etc.
8. Herramientas para establecer y gestionar políticas internas de recursos humanos, como normas de conducta, políticas de beneficios, código de ética, etc.
9. Funcionalidades para la gestión de permisos, licencias, bajas médicas, entre otros aspectos relacionados con la gestión de personal.
10. Seguridad de acceso y gestión de permisos de usuario para garantizar la confidencialidad de la información de los empleados.

#
### Requerimientos No Funcionales 
1. Seguridad: La base de datos debe contar con medidas de seguridad robustas para proteger la información confidencial de los empleados del gimnasio, como datos personales, información financiera y registros de empleo.
2. Rendimiento: La base de datos debe ser capaz de manejar un alto volumen de consultas y transacciones sin experimentar retrasos significativos en el tiempo de respuesta.
3. Disponibilidad: La base de datos debe estar disponible en todo momento para que los empleados puedan acceder a la información necesaria en cualquier momento.
4. Integridad de los datos: La base de datos debe garantizar la integridad y consistencia de los datos almacenados, evitando la duplicación de información y errores en la inserción, actualización y eliminación de registros.
5. Cumplimiento normativo: La base de datos debe cumplir con las normativas y regulaciones pertinentes en materia de protección de datos personales, como la Ley de Protección de Datos Personales y la RGPD (Reglamento General de Protección de Datos).
6. Facilidad de mantenimiento: La base de datos debe ser fácil de mantener y administrar, permitiendo realizar copias de seguridad de manera regular y realizar tareas de mantenimiento sin interrumpir las operaciones del gimnasio.
7. Interoperabilidad: La base de datos debe ser compatible con otras aplicaciones y sistemas utilizados por el departamento de recursos humanos del gimnasio, permitiendo el intercambio de información de manera eficiente.


#
### Alcance del proyecto 
Componentes Incluidos en el Alcance:

1. Gestión de Puestos de Trabajo.
2. Administración de Empleados.
3. Gestión de Horarios.
4. Módulo de Servicio al Cliente.
5. Integración con Frontend.
6. Seguridad y Privacidad de Datos.


#
### Reglas de Negocio
1.	Registro de Empleados y Usuarios.
2.	Asignación de Puestos y Roles.
3.	Gestión de Horarios.
4.	Servicio al Cliente.
5.	Actualización y Mantenimiento de Datos.
6.	Seguridad y Privacidad.
7.	El sistema debe integrar con el software de gestión del gimnasio.
#
### Contexto del proyecto
Este repositorio contiene el código fuente de un sistema para un gimnasio desarrollado con Vue.js y utilizando la plantilla Flexy Vuetify Dashboard de WrapPixel como base.
#
### Tecnologías utilizadas
- Vue.js
- TypeScript
- SCSS
- CSS
#
