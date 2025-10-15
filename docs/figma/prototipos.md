# Prototipos del Proyecto

## Información del Documento

**Última actualización:** [11/10/2025]  
**Versión del prototipo:** [v1.0]  
**Herramienta:** Figma  

---

## Propósito del Prototipo

Este documento centraliza toda la información sobre los **diseños y prototipos** creados en Figma para el proyecto. Sirve como **puente entre el diseño UX/UI y el desarrollo técnico**, facilitando la implementación durante los sprints.

**Objetivos del prototipo:**
- Validar la **experiencia de usuario** antes de desarrollar
- Alinear la **visión del producto** entre todos los miembros del equipo
- Servir como **referencia visual** durante el desarrollo backend y frontend
- Documentar las **decisiones de diseño** tomadas en cada sprint

---

## Enlaces Principales

### Proyecto Principal
**URL:** https://www.figma.com/design/3dyT5FUgMd4eJWOatt7J2M/sisJugueteria?node-id=29-8&t=X6uIpgBpy73nNOkE-1
---

## Estructura del Prototipo

### Sistema de Diseño

**Paleta de colores:**
- **Color primario:** #007C4E - Acciones principales
- **Color secundario:** #F1F5FC - Elementos complementarios
- **Color secundario2:** #93D4BC - Elementos complementarios 2
- **Color de fondo:** #FFFFFF - Color de fondo de algunos componentes
- **Degradado principal:** #007C4E (31%) / #008856 (44%) / #68E0B4 (100%) - Para botones
- **Color de texto principal:** #000000 - 
- **Color de texto secundario:** #776E79 - 
- **Colores de estado:**
  - Éxito: #93D4BC (relleno) / #007C4E (trazo)
  - Error: #93D4BC (relleno) / #E33A3A (trazo)
  - Advertencia: #DFCE4F



**Tipografía:**
- **Principal mobile:** itim 24 - Textos y contenido
- **Principal desktop:** itim 32 - Textos y contenido
- **Títulos mobile:** itim 32 - Encabezados
- **Títulos desktop:** itim 48 - Encabezados

**Espaciado:**
- Sistema de **8px grid**
- Espaciado base (mobile): 25px
- Espaciado base (desktop): 50px

---

## Pantallas incluidas:**
### Flujo Principal
1. **Landing page**
  `docs/figma/Pantallas/LandingPage.svg`

2. **Creación de cuenta**
  `docs/figma/Pantallas/CrearCuenta.svg`

3. **Formulario de registro**
  `docs/figma/Pantallas/IniciarSesion.svg` 

4. **Información de la cuenta registrada**
  `docs/figma/Pantallas/Cuenta.svg`

5. **Contactos**
  `docs/figma/Pantallas/Contacto.svg`

6. **Detalles de juguete**
  `docs/figma/Pantallas/Descripcion.svg`

7. **Agregar reseña al juguete**
  `docs/figma/Pantallas/Reseñas.svg`

8. **Agregar juguetes al carrito**
  `docs/figma/Pantallas/Carrito.svg`

9. **Pagar juguete**
  `docs/figma/Pantallas/Pagos.svg` 

10. **Método de envío**
  `docs/figma/Pantallas/MetodosEnvio.svg` 

**Interacciones prototipadas:**
- Navegación entre pantallas
- Validación de formularios
- Mensajes de error/éxito


## 🧩 Componentes Reutilizables


**Componentes diseñados:**

#### Botones
- **Botón principal:** Utilizado para acciones destacadas como “Ver más” o “Comprar”
- **Variante hover:** Cambia de color al pasar el cursor
- **Botón con ícono:** Combina texto e ícono (carrito)
- **Variante hover:** Cambia de color al pasar el cursor

#### Iconos
- **Iconos individuales:** Representan acciones o secciones del sitio (como carrito, usuario o menú)
- **Variante hover:** Cambian de color al pasar el cursor, para mejorar la interactividad

#### Textos interactivos
- **Links con hover:** Texto que cambia de color o estilo al pasar el mouse (usado en el menú y otras secciones)
- **Texto con flecha:** Componente “Volver” con icono de flecha y animación hover

#### Carrusel
- **Carrusel de imágenes:** Deslizable, muestra varios elementos con controles laterales

#### Categorias 
- **Tarjetas con imagen:** Representan distintas categorías de juguetes con efectos hover que se opaque la imagen y aparezca el texto al pasar el cursor

#### Marcas 
- **Imágenes de marcas:** Representan distintas marcas de juguetes con efectos hover que se hace zoom a la imagen al pasar el cursor

#### Figuras por edades 
- **Bloques ilustrativos:** Reppresentan los rangos de edades de los productos con efecto hover al pasar el cursor

#### Formularios
- **Input text:** Entrada de texto estándar
- **Input password:** Con toggle de visibilidad
- **Select dropdown:** Con búsqueda
- **Checkbox:** Individual y grupos
- **Radio buttons:** Opciones excluyentes
- **Date picker:** Selección de fechas
- **File upload:** Carga de archivos

#### Navegación
- **Navbar:** Barra superior de navegación
- **Sidebar:** Menú lateral colapsable
- **Tabs:** Pestañas para contenido
- **Pagination:** Paginación de listas
- **Footer:** Pie de pagina con datos de contacto

#### Feedback
- **Toast notifications:** Mensajes temporales
- **Modals:** Ventanas emergentes
- **Alerts:** Avisos en contexto
- **Progress bars:** Barras de progreso

#### Visualización de datos
- **Cards:** Tarjetas de información
- **Tables:** Tablas de datos
- **Charts:** Gráficos (si aplica)
- **Stats cards:** Tarjetas de estadísticas

---

### Responsive Design

**Breakpoints definidos:**
- **Mobile:** 402px - 874px+
- **Desktop:** 1440px - 1024px+

### Accesibilidad

**Criterios implementados:**
- Contraste de colores según WCAG 2.1 AA
- Textos alternativos para imágenes
- Navegación por teclado
- Estados de foco visibles
- Jerarquía semántica de encabezados



## 📋 Checklist de Implementación

### Para el Equipo de Desarrollo

**Antes de comenzar un sprint:**
- [ ] Revisar el prototipo de Figma correspondiente al sprint
- [ ] Identificar todos los componentes necesarios (botones, cards, carrusel, etc.).
- [ ] Validar los endpoints de backend requeridos
- [ ] Confirmar las historias de usuario vinculadas

**Durante el desarrollo:**
- [ ] Consultar especificaciones de diseño (colores, tipografía, espaciado)
- [ ] Implementar estados de los componentes (hover, active, disabled)
- [ ] Validar responsive design en todos los breakpoints
- [ ] Solicitar feedback del diseñador si hay dudas

**Al finalizar:**
- [ ] Comparar implementación con el prototipo
- [ ] Actualizar este documento con notas de implementación
- [ ] Marcar las pantallas como completadas

---

## 🎨 Assets y Recursos

### Imágenes y Gráficos

**Ubicación:** `src/frontend/assets/images/`

**Assets exportados de Figma:**
- Logotipo (SVG, PNG)
- Iconos personalizados (SVG)
- Imágenes de placeholder (PNG, WebP)
- Ilustraciones (SVG)

**Convención de nombres:**
```
[tipo]-[descripcion]-[tamaño].[extension]

Ejemplos:
icon-user-24px.svg
logo-primary-full.svg
img-hero-1920x1080.webp
illus-empty-state.svg
```


### Preguntas Frecuentes

**P: ¿Dónde encuentro las medidas exactas de espaciado?**  
R: En Figma, selecciona cualquier elemento y revisa el panel de propiedades. Todos los espaciados siguen el sistema de 8px grid.

**P: ¿Puedo modificar un componente para un caso específico?**  
R: Consulta primero con el equipo. Si es un caso único, crea una variante. Si es recurrente, actualiza el componente base en Figma.

**P: ¿Cómo exporto assets de Figma?**  
R: Selecciona el elemento → Export → Configura formato y resolución → Export [nombre].

---

## Contacto y Soporte

**Responsable de diseño:** Marianna Mori
**Canal de comunicación:** [Slack, Discord, etc.]  
**Horario de disponibilidad:** 10:00 - 18:00 

**Para dudas sobre el prototipo:**
1. Revisar este documento primero
2. Consultar directamente en Figma (comentarios)
3. Preguntar en el canal del equipo
4. Agendar sesión de revisión de diseño

---

## 🔗 Referencias Útiles

**Documentación relacionada:**
- `README.md` - Información general del proyecto
- `docs/sprint-planning/` - Planificación de sprints
- `CONTRIBUTING.md` - Guía de contribución
- `docs/retrospectivas/` - Aprendizajes de los sprints

**Recursos externos:**
- [Guía de Figma](https://help.figma.com)
- [Material Design Guidelines](https://m3.material.io)
- [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines)

---

**Última actualización:** 13/10/2025 
**Mantenido por:** Marianna Mori
**Versión del documento:** 1.0