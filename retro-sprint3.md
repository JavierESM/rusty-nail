Notas Sprint-3 

Retrospectiva: 

1 -Comenzar a hacer: 
 el que hace el codigo lo implementa

2 -Hacer mas: 
darle mas atencion al trello
hacer mas consultas

3 -Continuar haciendo: 
seguir comunicados

4 -Hacer menos:

5 -Dejar de hacer:


El tablero de trabajo
reiniciarlo 

completar trabajos del sprint 2: 

seba: terminar detalles de login 
mario: implementar footer en todas las paginas
guido: implementar nav en el carrito
javier: impementar nav de mobile en el carrito de mario


Consignas: 

1 - Realizar un breve retrospectiva
Entregable: Actualizar el archivo retro.md con las principales conclusiones de la retro del segundo sprint.



2- Actualizar el tablero de trabajo
Entregable: Link al documento o plataforma que utilicen para organizar el trabajo.

3- (Opcional) Implementar daily / weekly standups 
Entregable: Archivo daily.md o weekly.md con un resumen de las tareas completadas, los impedimentos encontrados y las soluciones propuestas indicando los integrantes.

4- Implementar el motor de templates
Implementar el módulo EJS y renombrar todas las vistas actuales para que utilicen la extensión .ejs.
Modificar los métodos de los controladores para que utilicen el método render().
Entregable: sitio actualizado con todas las vistas y rutas implementando EJS.

5-(Opcional) Separar las vistas en carpetas
Si tenemos en cuenta que nuestro sitio va a crecer y que muy pronto tendremos un montón de páginas, nos conviene mantener el orden desde el principio.
Crear dentro de la carpeta views la carpeta products y la carpeta users. Dentro de products pondremos todas las vistas de productos que tengamos (por ejemplo: listado, detalle, creación, edición, etc…), dentro de users pondremos todas las vistas de usuarios que tengamos (por ejemplo: registro, login, perfil, etc…)
Usuarios: src/views/users/
Productos: src/views/products/

Entregable: estructura actualizada de directorios y archivos de las vistas.

6-Separar los componentes repetidos en archivos parciales
Crear una carpeta llamada partials dentro de la carpeta de views, separar las áreas comunes del sitio. Como mínimo nos gustaría ver: 
Head (incluyendo todo el elemento <head></head>) → head.ejs
Header (incluyendo barras de navegación) → header.ejs
Footer (incluyendo todo el elemento <footer></footer>) → footer.ejs 
(Opcional) Otras secciones de su sitio que se repitan
Pueden separar otros componentes de la misma manera si lo creen útil. Los productos dentro de un listado por ejemplo.
Recuerden implementar los archivos parciales en todas las páginas que correspondan.
Entregable: carpeta partials dentro de views con todos los archivos parciales.
Entregable: sitio actualizado con la implementación de los partials.


7- Página: creación y edición de productos
Formulario al que accede el usuario administrador para cargar nuevos productos y editar los existentes.
Un buen punto de partida para los campos de estos formularios puede ser el siguiente:
Nombre del producto (name)
Descripción (description)
Imagen (image)
Categoría (category)
Colores (o cualquier otro campo similar como: tamaños, talles, etc)
Precio (price)
Historias de usuario
*Como administrador quiero poder crear nuevos productos para agregarlos a los listados del sitio.
*Cómo administrador quiero poder modificar los productos existentes para corregir información o actualizar precios.
Entregable: páginas de creación y edicion de productos en formato ejs junto con todos los recursos necesarios, estilos de css e imágenes.



Resumen de entregables
Archivo retro.md con el resultado de la retrospectiva 
(Opcional) Archivo daily.md con sus opiniones sobre las dailies / weeklies
Tablero de trabajo actualizado
Aplicación Node + Express + EJS con:
Archivos parciales (head, header, footer, etc…)
Home
Listado de productos 
Detalle del producto
Carrito de productos
Formulario de registro y login
Formulario de carga y edición de productos































