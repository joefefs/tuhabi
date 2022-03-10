# Instrucciones para probar el app

Clonar el repositorio en un directorio local con `git clone https://github.com/joefefs/tuhabi.git`

Navegar al directorio en la terminal y ejectura `yarn` o `npm install` para instalar todas las dependencias.

Incializar con un servidor local (https://localhost:3000) ejecutando `yarn start` o `npm start`


## Acerca de mi approach

El formulario me representó varios retos, aquí un poco sobre el approach que tomé:

Crear un componente por cada paso del formulario así como uno general para todo el formulario. El componente `Form` es el que guarda el estado del app y el que genera toda la lógica pasando la data como props a los componentes hijos. Inicialmente en este paso utilice una lógica burda en la función `StepDisplay()` con if y else if para pasar de un paso al otro (pienso que esto se puede simplificar mucho). La intención era probar el formulario para después utilizar `react-router-dom` para generar las URLs en cada paso y renderear los componentes. Este último paso no me dio tiempo de terminar.

Todos los componentes en el formulario son controlados y están guardados en el state por lo que podemos visualizar en tiempo real la data que está ingresando el usario.

Para el progress bar se utilizó otra variable que guarda state y se va 'rellenando' en la función `handleClickNext()` con una función que determina el porcentaje de `width` a través de una operación matématica. Lo mismo se hace a la inversa con `handleClickPrev()`.

 - Formulario en JSON: Un feature que no pude desarrollar para hacer el formulario reutilizable. No tengo mucha experiencia creando templates en JSON y aunque si logré renderear algunos componentes, no logré hacerlos funcionales de esta manera.

## Lo que no pude resolver

1. Implementación de React Router Dom. Por falta de tiempo no pude enlazar cada componente a su ruta.

2. Formulario JSON. Me falta experiencia haciendo templates con JSON por lo que pasé mucho tiempo tratando de convertir los formularios en JSX a JSON pero no tuve suerte. Si logré renderear los campos, pero no guardar la data en el state del formulario rendereado a partir del JSON, por lo que opté por vovler al hardcoded form.

3. El paso de la imagen tiene un bug al cargar la imagen

4. No es del todo responsive, el problema fue falta de tiempo, solo era cuestión de corregir los estilos.

### Conclusiones

En general tuve complicaciones para implementar todo lo que pedía el ejercicio por lo que estaré estudiando estos conceptos y prácticando más a fondo. Estuve revisando algunas librerías como Formik y React Form Hooks para manejar esto de manera más óptima pero no tuve el tiempo suficiente para estudiar la documentación e implementarla.

Aún así, me sería de mucha ayuda un feedback detallado sobre el approach y otras mejoras que me permitirían crecer como desarrollador. Soy desarrollador completamente autodidacta, por lo que cualquier retroalimentación me es muy valiosa!