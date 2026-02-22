<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Relaciones interpersonales

    .row.justify-content-center.mb-4.mb-lg-5
      .col-xl-10
        p.mb-0 Los vínculos que se establecen entre las personas se llaman relaciones interpersonales, estos lazos tienen muchos rasgos como por ejemplo la convivencia y la vida como sociedad, estos vínculos se desarrollan con la familia, con los amigos, con los compañeros de trabajo y en otros escenarios de socialización, las relaciones interpersonales se inician desde la niñez y son muy importantes para desarrollar las sociedades, la construcción y el fortalecimiento de vínculos con los demás es una construcción individual.

    .row.justify-center.mb-5(data-aos="fade-down") 
      .col-12.col-lg-8
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__texto.px-5.py-4
            p Sostener los vínculos interpersonales contribuye a la generación de habilidades individuales y sociales con la comunidad. Esto se refiere a aprender a cooperar, dialogar, expresar emociones y sentimientos, trabajar en equipo, respetar instrucciones, normas, reconocer la autoridad, cumplir con nuestras labores, negociar, empatizar y escuchar al otro.
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema6/1.jpg')})`}") 

separador

    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.2 Factores

    p Según los portales <em>web</em> especializados Impulsa y Vida Profesional, la mejor forma para llegar al cliente es a través de la atención. Al momento de ofrecer productos hay que hablar de las ofertas y los descuentos, se debe estar atento a brindar una buena atención, estas acciones pueden llegar a reducir costos y benefician tanto a la empresa como al cliente.
    p.mb-5 Los factores que intervienen en la atención al cliente son:

    .bg_grad-06(data-aos="zoom-in")
      .row.justify-center
        .col-12.col-lg-8
          PasosA.color-acento-contenido.mb-5(tipo="n")
            .row
              .col-md-8.mb-4.mb-md-0.align-items-center
                div  
                  h3 Sociabilidad
                  p Capacidad de interrelacionarse con otros, saber entablar conversaciones amigables, demostrar interés por las personas.
              .col-md-4
                figure
                  img(src='@/assets/curso/tema6/t6-6.svg', alt='Texto que describa la imagen')
            .row
              .col-md-4.mb-3
                figure
                  img(src='@/assets/curso/tema6/t6-7.svg', alt='Texto que describa la imagen')
              .col-md-8.mb-4.mb-md-0.align-items-center
                div  
                  h3 Comunicación clara y directa
                  p La comunicación debe ser sana, se deben tener en cuenta las fortalezas de la empresa y los beneficios que se puedan ofrecer para cada caso.
            .row
              .col-md-8.mb-4.mb-md-0.align-items-center
                div  
                  h3 Honestidad
                  p No se debe engañar a los clientes, debe darle lo que le promete, el cliente engañado es cliente perdido.
              .col-md-4
                figure
                  img(src='@/assets/curso/tema6/t6-8.svg', alt='Texto que describa la imagen')
            .row
              .col-md-4.mb-3
                figure
                  img(src='@/assets/curso/tema6/t6-9.svg', alt='Texto que describa la imagen')
              .col-md-8.mb-4.mb-md-0.align-items-center
                div  
                  h3 Conocimiento del cliente
                  p Conozca muy bien a su cliente, manténgase informado sobre sus necesidades y expectativas, tome la delantera frente a lo que necesita, sea proactivo, esto puede darle ventaja con respecto a la competencia que ofrece los mismos productos y servicios.
            .row
              .col-md-8.mb-4.mb-md-0.align-items-center
                div  
                  h3 Saber escuchar
                  p Es muy importante estar atento, los clientes son el termómetro que mide nuestra productividad, esté pendiente de escuchar sus quejas y sugerencias.
              .col-md-4
                figure
                  img(src='@/assets/curso/tema6/t6-10.svg', alt='Texto que describa la imagen')
            .row
              .col-md-4.mb-3
                figure
                  img(src='@/assets/curso/tema6/t6-11.svg', alt='Texto que describa la imagen')
              .col-md-8.mb-4.mb-md-0.align-items-center
                div  
                  h3 Sea creativo y efectivo
                  p Sea innovador frente a las soluciones que le ofrezca de una manera efectiva, hágale sentir que sus necesidades son su prioridad.
            .row
              .col-md-8.mb-4.mb-md-0.align-items-center
                div  
                  h3 Busca las respuestas
                  p No solamente debemos escuchar, algunas veces tendremos que ir a buscar las respuestas que necesitamos del cliente para mejorar el servicio, en ocasiones el cliente desconoce lo que quiere, esa es la oportunidad que tiene para ofrecerle soluciones y brindarle sus productos y servicios
              .col-md-4
                figure
                  img(src='@/assets/curso/tema6/t6-12.svg', alt='Texto que describa la imagen')
</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
