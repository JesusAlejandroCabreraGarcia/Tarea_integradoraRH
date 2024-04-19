![image](https://github.com/Carlosvarela1309/test-uno/assets/163442089/5840dc61-22a7-48f0-a9b9-6f30cffd09b8)


# Universidad Tecnológica de Xicotepec de Juárez
## Reporte Integrador 3B

| Empresa  | Second Header |
| ------------- | ------------- |
| Proyecto  | Sitio web GYM BULL´S  |
| Fecha  | Enero - Abril 2024  |

## Integrantes del equipo:
1. Jesus Alejandro Cabrera García
2. Iram Daniel Zúñiga Agustín
3. Carlos Eduardo Varela Barrios
#
![image](https://github.com/Carlosvarela1309/test-uno/assets/163442089/d8d5c149-3c68-48d1-8ef0-920205e213da)
#
### Responsables 
| Nombre | Cargo  |
| --- | --- |
| Jesus Alejandro Cabrera García | Líder/Desarrollador  |
| Iram Daniel Zúñiga Agustín | DB Manager |
| Carlos Eduardo Varela Barrios | Documentador  |
#
### Objetivo General
Garantizar la confidencialidad, integridad y disponibilidad de la información almacenada en la base de datos, protegiendo los datos personales de los empleados y garantizando el cumplimiento de la normativa vigente en materia de protección de datos. 
#
### Objetivos Específicos 
- Establecer roles de usuario específicos para cada tipo de usuario (administrador, desarrollador, analista, etc.) con permisos acotados según sus responsabilidades.
- Limitar los privilegios de cada rol de usuario para minimizar el riesgo de acceso no autorizado a la base de datos.
- Implementar mecanismos de autenticación fuertes, como contraseñas seguras, autenticación de dos factores o integración con servicios de autenticación externos.
- Regularmente revisar y auditar los privilegios de los usuarios para asegurarse de que siguen siendo apropiados para sus funciones.
- Establecer políticas de acceso y uso de la base de datos que sean claras y que todos los usuarios deben seguir.
- Realizar copias de seguridad periódicas de la base de datos para prevenir la pérdida de información en caso de un incidente de seguridad.
- Mantenerse al tanto de las actualizaciones de seguridad de MySQL y aplicar parches y correcciones de seguridad de manera oportuna.
- Capacitar a los usuarios sobre las mejores prácticas de seguridad para proteger la información confidencial almacenada en la base de datos.
Objetivos específicos para un plan de seguridad con roles, privilegios y usuarios en MySQL
#
### Introducción
En el siguiente documento, se redacta el proyecto integrador del octavo cuatrimestre de la carrera de Ingeniería en Desarrollo y Gestión de Software, el cual es un proyecto que conlleva la integración de cuatro materias, las cuales: Administración de Base de Datos, Desarrollo Web Profesional, Seguridad en el Desarrollo de Aplicaciones, Planeación y Organización del Trabajo.
El objetivo principal de este proyecto es implementar un sistema integral para la gestión y control de un gimnasio, que permita a los administradores y usuarios tener acceso a información en tiempo real, de forma segura y eficiente.
La integración de estas materias permitirá desarrollar un sistema completo y eficiente para la gestión de un gimnasio, que brinde a los usuarios una experiencia positiva y segura, y a los administradores las herramientas necesarias para llevar a cabo una gestión eficaz.
#
### Objetivo General
Implementar un sistema de administración de base de datos, desarrollo web profesional y seguridad en el desarrollo de aplicaciones para optimizar la gestión de un gimnasio, así como mejorar la planeación y organización del trabajo en todas las áreas de la empresa.
#
### Objetivos Específicos
1. Registrar la información personal de cada empleado, como nombre, dirección, teléfono y correo electrónico.
2. Llevar un registro de la información laboral de cada empleado, como cargo, salario, horario de trabajo y días laborales.
3. Controlar la asistencia y puntualidad de los empleados, así como las horas trabajadas.
4. Administrar las vacaciones, permisos y licencias de los empleados.
#
### Justificación
Una base de datos en un gimnasio es fundamental para organizar y gestionar de manera eficiente la información de los clientes, sus planes de entrenamiento, horarios, pagos, registro de asistencia, entre otros aspectos. Esto permite al personal del gimnasio tener un control o un seguimiento detallado de cada cliente, proporcionándoles un servicio personalizado y adaptado a sus necesidades y objetivos. Además, una base de datos en un gimnasio facilita la comunicación con los clientes, el seguimiento de su progreso y la evaluación del funcionamiento del negocio, lo cual contribuye a mejorar la satisfacción de los usuarios y la eficiencia de la operación. 
#
### Contexto del proyecto
Un gimnasio con una base de datos puede incluir información como los miembros inscritos, sus datos de contacto, fechas de inicio y vencimiento de membresía, historial de pagos, preferencias de clases y entrenadores personales, datos de evaluaciones físicas y progreso, reservas de clases y horarios de entrenamiento, entre otros. 
#
### Propósito 
La gestión de la base de datos tiene como propósito ofrecer a los usuarios confianza y seguridad al momento de tener su información a la base de datos, de este modo brinda y mejora la experiencia del cliente al proporcionar información personal.  
#
### Área
Una base de datos en el área de recursos humanos es un sistema de almacenamiento de información que recopila y organiza datos relacionados con los empleados de una organización, como sus datos personales, antecedentes laborales, información de contacto, historial de empleo, beneficios, evaluaciones de desempeño, formación y desarrollo, entre otros.
#
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
