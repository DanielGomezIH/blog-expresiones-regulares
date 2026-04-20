# Blog — Expresiones Regulares en Java

Blog académico de una sola página sobre el uso de expresiones regulares en Java para validar los campos del CRUD de productos de **KD-Electronics**.

Actividad de la **Semana 6** del curso **Programación Orientada a Objetos** (NRC 8390) — UNIMINUTO, 2025.

---

## Contenido del blog

1. **¿Qué es una expresión regular?** — definición e introducción a `java.util.regex`.
2. **¿Por qué usarlas?** — motivación, rendimiento y reutilización con `Pattern.compile()`.
3. **Ventajas para la validación de datos** — tabla comparativa aplicada al inventario.
4. **Caso KD-Electronics** — 7 campos del CRUD con su regla de negocio, regex, ejemplos válidos/inválidos, snippet en Java y captura de validación en regex101.
5. **Clase validadora en Java** — clase `ValidadorProducto` que centraliza todos los patrones.
6. **Referencias** — bibliografía en formato APA.

## Campos validados

| # | Campo | Regex |
|---|---|---|
| 1 | Código de producto | `^KD-[A-Z0-9]{4,8}$` |
| 2 | Nombre | `^[A-Za-záéíóúÁÉÍÓÚñÑ\s]{3,100}$` |
| 3 | Descripción | `^[\s\S]{10,500}$` |
| 4 | Precio base | `^[1-9]\d*(\.\d{1,2})?$` |
| 5 | Precio de venta | `^[1-9]\d*(\.\d{1,2})?$` |
| 6 | Categoría | `^[A-Za-záéíóúÁÉÍÓÚñÑ\s]{3,50}$` |
| 7 | Cantidad disponible | `^\d+$` |

## Stack

- HTML5 + CSS3 vanilla (sin frameworks).
- JavaScript vanilla para scroll-reveal, botón "volver al inicio" y lightbox de imágenes.
- Tipografías: **Sora** (texto) y **JetBrains Mono** (código), cargadas desde Google Fonts.
- Tema oscuro con paleta accent cian/violeta.

## Estructura

```
blog-expresiones-regulares/
├── index.html
├── images/
│   ├── regex-01-codigo.png
│   ├── regex-02-nombre.png
│   ├── regex-03-descripcion.png
│   ├── regex-04-precio-base.png
│   ├── regex-05-precio-venta.png
│   ├── regex-06-categoria.png
│   └── regex-07-cantidad.png
├── .gitignore
└── README.md
```

## Uso local

Al ser un sitio estático, basta con abrir `index.html` en el navegador. También se puede servir con cualquier servidor estático:

```bash
# con Python
python -m http.server 8080

# con Node
npx serve .
```

Luego abrir <http://localhost:8080>.

## Deploy

Preparado para desplegarse en **Vercel** o **Netlify** conectando este repositorio — no requiere build step.

## Autoría

**Daniel Iván Gómez Hortúa** — NRC 8390, Programación Orientada a Objetos, UNIMINUTO 2025.
