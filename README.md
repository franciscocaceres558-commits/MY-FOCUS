# FOCUS

Aplicación web estática en español para organizar tareas, mantener una racha de actividad y trabajar con sesiones Pomodoro. No requiere backend ni servicios de cuenta: el progreso se guarda en el almacenamiento local del navegador.

## Funciones y utilidad

### Organización de tareas

- Crear una tarea con nombre, hora opcional y prioridad alta, media o baja.
- Editar tareas existentes, marcarlas como completadas o volverlas a pendientes.
- Buscar por nombre y filtrar por estado o prioridad alta.
- Completar todas las tareas pendientes o borrar las completadas; ambas acciones piden confirmación.
- Las tareas se ordenan primero por estado (pendientes antes que completadas), luego por prioridad y hora.

### Enfoque y seguimiento

- Cada tarea completada suma 100 XP y 5 monedas; al volverla a pendiente se descuentan esos puntos, hasta un mínimo de cero.
- Los logros conceden XP y monedas adicionales. Se muestran nivel, título, progreso al siguiente nivel, tareas terminadas y pendientes.
- La misión diaria contabiliza hasta tres tareas completadas en la fecha local actual. La racha se calcula con las fechas registradas al completar tareas.
- El temporizador Pomodoro ofrece sesiones de enfoque de 25 minutos y pausas de 5. Se puede iniciar, pausar, reiniciar y cambiar de modo.
- El modo enfoque reorganiza el área principal para concentrar el contenido en una columna; no oculta ni elimina tareas.

### Avisos y almacenamiento

- Se pueden habilitar notificaciones del navegador para tareas con hora. El navegador debe conceder permiso; se comprueba la hora mientras la página está abierta, así que no es un recordatorio en segundo plano ni se garantiza que se dispare si el navegador o la página están cerrados.
- Tareas y progreso se guardan en `localStorage`, en el navegador y dispositivo actuales. No hay cuentas ni sincronización con otros dispositivos.

## Estructura del proyecto

```text
index.html
styles/
  main.css
js/
  app.js
  dates.js
  notifications.js
  progression.js
  storage.js
  tasks.js
  timer.js
  ui.js
```

### Página y presentación

- [`index.html`](./index.html): página de entrada. Define las secciones de tareas, estadísticas, progreso, logros, misión diaria y Pomodoro; enlaza la hoja de estilos y carga `js/app.js` como módulo.
- [`styles/main.css`](./styles/main.css): tema visual, componentes, estados de tareas, animaciones de fondo y diseño adaptable para pantallas pequeñas y grandes.

### Lógica de la aplicación (`js/`)

- [`js/app.js`](./js/app.js): punto de entrada. Carga el estado, conecta los eventos de botones y formularios, coordina las operaciones, actualiza las vistas y persiste cambios. También inicializa el reloj y el fondo de partículas.
- [`js/tasks.js`](./js/tasks.js): funciones para crear, editar, completar, descompletar y eliminar tareas, además de acciones en grupo. Aplica las recompensas asociadas a completar tareas.
- [`js/progression.js`](./js/progression.js): reglas de XP, niveles y títulos; declara los seis logros y calcula cuáles se desbloquean y sus recompensas.
- [`js/dates.js`](./js/dates.js): genera claves de fecha local y calcula rachas a partir de días consecutivos registrados.
- [`js/timer.js`](./js/timer.js): estado y ciclo del temporizador; separa los intervalos de tiempo de su representación visual.
- [`js/notifications.js`](./js/notifications.js): solicita permiso para notificaciones y envía un aviso una sola vez por tarea y minuto programado.
- [`js/storage.js`](./js/storage.js): estructura inicial, normalización, carga y guardado de datos en `localStorage`; también reconoce formatos de versiones anteriores.
- [`js/ui.js`](./js/ui.js): renderiza tareas, resumen, logros y temporizador en el DOM, y presenta mensajes temporales.

No hay un proceso de compilación ni dependencias de paquetes. Como la página usa módulos JavaScript, debe abrirse desde un servidor HTTP local; abrir `index.html` con `file://` no es compatible.

Los avisos requieren permiso explícito y un origen seguro (`localhost`). Funcionan únicamente mientras la página está abierta.

## Datos y privacidad

Las tareas y el progreso se guardan en `localStorage` del navegador y quedan asociados al origen del sitio y al dispositivo. No se sincronizan entre navegadores ni se envían a un servidor. Borrar los datos del navegador puede eliminar el progreso guardado.

La clave principal es `d10_focus_complete_v1`. Al iniciar, la aplicación también reconoce y migra los formatos utilizados por versiones anteriores (`d10_focus_ultra_v1`, `focusTareasPro`, `focusDatosPro` y `focusTareas`). La copia migrada se guarda en la clave principal.

La tipografía Inter se carga desde Google Fonts; si ese servicio no está disponible, se usa una tipografía alternativa del sistema.

## Versiones anteriores

Los archivos `Chata`, `h`, `miguelon` y `Sonido` eran implementaciones alternativas de la misma aplicación; `README.md` también contenía una copia idéntica de `Chata`, y `mu focus` solo apuntaba a un editor externo. Se consolidó la aplicación mantenida en `index.html` y se retiraron esas copias y prototipos. El historial de Git conserva las versiones anteriores.
