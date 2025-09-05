---
layout: landing.njk
title: "Landing Demo Cliente"
description: "Esta es una landing de prueba para mostrar secciones dinámicas."

seo:
  canonical: "https://demo-landing.com"
  og_title: "Landing Demo Cliente"
  og_description: "Prueba de landing dinámica con 11ty y Netlify CMS"
  og_image: "/assets/images/placeholder.jpg"
  twitter_title: "Landing Demo Cliente"
  twitter_description: "Prueba de landing dinámica con 11ty y Netlify CMS"

# 🔹 Menú de navegación
nav:
  - text: "Inicio"
    url: "#hero"
  - text: "Beneficios"
    url: "#benefits"
  - text: "Testimonios"
    url: "#testimonials"
  - text: "Contacto"
    url: "#contact"
  - text: "WhatsApp"
    url: "https://wa.me/5491121652703"
    external: true

sections:
  - type: hero
    title: "Bienvenido a nuestra Landing"
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    background: "/assets/images/placeholder.jpg"
    ctas:
      - text: "Contáctanos"
        url: "#contact"

  - type: benefits
    title: "Nuestros Beneficios"
    items:
      - icon: "/assets/images/placeholder.jpg"
        title: "Rápido"
        text: "Resolvemos todo en tiempo récord."
      - icon: "/assets/images/placeholder.jpg"
        title: "Seguro"
        text: "Tus datos siempre protegidos."
      - icon: "/assets/images/placeholder.jpg"
        title: "Fácil"
        text: "Interfaz simple y clara."

  - type: section-divider
    invert: true
    gradient:
      - offset: "0%"
        color: "#ff4a57"
        opacity: 0.6
      - offset: "100%"
        color: "#ff8a72"
        opacity: 0.6

  - type: about
    title: "Conocé más sobre nuestra marca"
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel libero ut erat volutpat ullamcorper. Integer viverra justo ac est fermentum, sed pharetra mauris dapibus."
    extra_text: "Este es un segundo párrafo que explica más sobre nuestra marca."
    images:
    - "/assets/images/slide1.webp"
    - "/assets/images/slide2.webp"
    - "/assets/images/slide3.webp"


  - type: testimonials
    title: "Testimonios de nuestros clientes"
    items:
      - name: "Juan P."
        text: "Excelente servicio, muy recomendable."
      - name: "María L."
        text: "Superó mis expectativas."
      - name: "Carlos R."
        text: "Profesionales y rápidos."
  
  - type: cta-video
    title: "¿Querés comenzar ya?"
    subtitle: "Revisa nuestros beneficios y contáctanos sin compromiso."
    ctas:
      - text: "Contactanos"
        url: "#contact"

  - type: contact
    title: "¿Querés empezar?"
    text: "Completa el formulario y nos pondremos en contacto."

  - type: footer
    text: "© 2025 Landing Demo. Todos los derechos reservados."
    email: "traduccioncreativadigital@gmail.com"
    links:
      - text: "Inicio"
        url: "#hero"
      - text: "Beneficios"
        url: "#benefits"
      - text: "Testimonios"
        url: "#testimonials"
      - text: "Contacto"
        url: "#contact"
    social:
      - type: "instagram"
        url: "https://instagram.com/demo"
      - type: "whatsapp"
        url: "https://wa.me/5491121652703"
