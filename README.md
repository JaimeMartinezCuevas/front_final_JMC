# BIBLIOTECA MUSICAL (FRONT)

En este ReadMe se resumirá el proceso de desarrollo enfocándonos en el frontend del proyect break final, además de los recursos empleados.
Será acompañado de las explicaciones pertinentes en cada caso.


## Índice

1. Estructura de archivos
2. Detalles de los archivos
3. Tecnologías empleadas
4. Creación y conexión con la base de datos
5. Creación de las tarjetas de canciones
6. Creación de las rutas
7. Creación de los componentes
8. Despliegue
9. Navegación y funcionalidades
10. Enlaces (Incluye el despliegue del backend)


## Estructura de archivos

```
.
├── public
│   └── img
│
├── src
│   ├── components
│   │   ├── NowPlayingContainer.jsx
│   │   ├── PopupForm.jsx
│   │   ├── SongCard.jsx
│   │   └── Table.jsx
│   │
│   ├── routes
│   │   ├── Add.jsx
│   │   ├── Artists.jsx
│   │   ├── Genre.jsx
│   │   └── Home.jsx
│   │
│   ├── AddSong.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .eslintrc.cjs
├── .gitignore
├── index.html
└── vite.config.js

```

## Detalles de los archivos

- `src/components/NowPlayingContainer.jsx`: Define el componente que muestra la miniatura, nombre y artista del vídeo de la canción. Recibe la informacióm del prop currentPlayingSong
- `src/components/PopupForm.jsx`: Formulario que aparece cuando se quiere editar los datos de una canción de la base de datos en MongoDB. Está creado gracias a la biblioteca de recursos MUI para react.
- `src/components/SongCard.jsx`: Archivo que maneja cada objeto durante el mapeado de la lista de canciones para aplicarles una serie de características, como la implementación de un iframe de youtube gracias a la biblioteca react-youtube, la vinculación con el componente `NowPlaying.jsx` y la muestra dw los datos de cada canción. 
- `src/components/Table.jsx`: Tabla que contiene todos los datos de la lista de canciones y las funciones de poder editarlas y eliminarlas. Tanto la estructura como las funcionalidades están construidas con la misma biblioteca MUI de `PopupForm.jsx`.
- `src/routes/Add.jsx`: Endpoint donde se localizan `PopupForm.jsx` y `Table.jsx`.
- `src/routes/Artists.jsx`: Endpoint con un input para filtrar las canciones según los artistas.
- `src/routes/Genre.jsx`: Endpoint con un input para filtrar las canciones según los géneros musicales.
- `src/routes/Genre.jsx`: Endpoint principal con un input para filtrar las canciones según su título.
- `src/AddSong.jsx`: Formulario que añade nuevas canciones a la base de datos. Incluye el título, artista, URL, género y año del lanzamiento.
- `src/App.css`: Archivo que contiene los estilos css por defecto para `App.jsx` y donde he incluido mis propios estilos.
- `src/App.jsx`: Archivo principal donde se renderizan los contenidos de la aplicación. Maneja el useState y el useEffect, las rutas y su navegación, además de controlar el fetch de las canciones y la lógica de búsqueda de los inputs, entre otros.
- `src/index.css`: Archivo que contiene los estilos css por defecto para `index.html`.
- `src/main.jsx`: Archivo encargado del manejo de `App.jsx` donde se importan los recursos necesarios de react para ser mostrado en el DOM.


## Tecnologías empleadas

- **React + Vite**: Ambas herramientas constituyen la base del tproyecto. React facilita diversas funciones de su biblioteca para trabajar con javascript y está presente en todos los archivos .jsx. Vite se coordina con react para proporcionar un entorno de desarrollo además de facilitar a los navegadores la lectura de los códigos donde se aplique react.

- **Axios**: Biblioteca de javascript necesaria para poder realizar las solicitudes HTTP a nuestro back, ya que este emplea Node.js.

- **MUI**: Biblioteca de recursos para react empleada para crear `PopupForm.jsx` y `Table.jsx`

- **React-Youtube**: Biblioteca de react que facilita el manejo y el renderizado de vídeos de youtube, incrustándolos a través de iframes. Otorga la ventaja de contar con los controles del reproductor de youtube.

- **CSS**: Empleado para dar estilos a la página y gestionar la interacción (botones, flexbox, efectos hover, etc.)

- **HTML**: Empleado para crear la estructura general a través de literl templates.


## Creación de la estructura y conexión con la base de datos

Tras haber comprobado que el backend funcionaba, comencé con el frontend para ver si podía hacer fetch de las canciones correctamente.

Creé un proyecto usando React y Vite comenzar a trabajar en Visual Studio Code. Realicé el fetch primero en `App.jsc`, y tras ver que funcionaba, preparé las rutas y sus endpoints para trabajarlos más adelante. También preparé la carpeta components para usar MUI.

Una vez terminada la estructura general, añadí `AddSong.jsx` para realizar peticiones e incluir nuevas canciones y hacer pruebas.


## Creación de las tarjetas de canciones

A continuación, en el archivo `SongCard.jsx` generé una estructura donde cada canción tendría un contenedor donde se mostraría la portada del vídeo de youtube y la información de la canción. Al mapear la lista de canciones, se le aplicaría a cada una la misma estructura y características con la finalidad de hacerlo más ordenado y estético. Más adelante añadí la funcionalidad de evitar que se reprodujera más de un iframe a la vez, además de vincular cada tarjeta al contenedor `NowPlayingContainer.jsx` para que se muestre la información del vídeo que se clique.


## Creación de las rutas

Gracias al BrowserRouter de react, definí los endpoints del navegador y los vinculé con sus respectivos archivos. A excepción de `Add.jsx`, que contiene la gestión de las canciones, todos incluyen un input para búsquedas y la lista de canciones.


## Creación de los componentes

Gracias a la biblioteca de MIU, estructuré los controladores para ser manejados en `Table.jsx` y `PopupForm.jsx`, aunque también están presentes en `Add.jsx`. La gran mayoría de movimientos se concentran en estos archivos.
A continuación incluyo un desglose de los controladores;

- **saveSong**: Esta función es una solucitud POST que añade una canción nueva a lal base de datos.

- **getSongs**: Esta función realiza un GET a la base de datos para guardar las canciones en la la variable songs y poder mapearla.

- **deleteSong**: Esta función hace una solicitud de eliminar una canción en la base de datos y así poder refrescar la lista de canciones.

- **updateSong**: Esta función se activa cuando se guardan los cambios aplicados a una canción a través de un PUT.

- **loadSong**: Estq función es necesaria cuando se cambia la prop de song, por lo que se fae una solicitud GET de los datos de la canción en cuestión.

- **onEdit y onDelete**: Estas funciones son específicas de los recursos de MIU que simplifican y facilitan el manejo de las funciones.



## Despliegue

El proyecto está subido y ha sido desplegado en netlify.com. Este recoge la información del backend subido en render.com.


## Navegación y funcionalidades

La aplicación tiene un nav que muestra las rutas a las que se puede acceder, facilitando la navegación. Consta de la ruta home, artistas, género y añadir.
Las rutas se manejan gracias a `App.jsx` que renderiza los contenidos y los maneja.

Entre las funcionalidades encontramos:

- Reproducción de vídeos a través de los iframes directos de youtube
- Redirección al inicio de la página al presionar el logotipo
- Despliegue e impresión de las canciones de la base de datos
- Contenedor de información adicional cuando se reproduce un vídeo
- Búsqueda por título, artista o género
- Agregar nuevas canciones
- Editar y eliminar canciones existentes
- Diversos efectos hover para mejorar el diseño interactivo de la web


## Enlaces

URL proyecto > https://front-final-jmc.netlify.app/

Netlify deploy > https://app.netlify.com/sites/front-final-jmc/overview

Render deploy > https://dashboard.render.com/web/srv-copq6tsf7o1s73e50cn0
