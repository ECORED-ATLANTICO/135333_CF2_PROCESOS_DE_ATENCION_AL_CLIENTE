<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.align-items-center.mb-5
      .d-none.d-lg-block.col-lg-3.col-xl-2
        figure(data-aos="fade-left")
          img(src="@/assets/curso/intro-icon.svg" alt="icono de acompañamiento")
      .col-lg-9.col-xl-10
        p.mb-0 Le damos la bienvenida al componente formativo Protocolos de servicio al cliente, y para comenzar satisfactoriamente este recorrido se invita a explorar el recurso que se muestra a continuación: 
    
    figure.mb-5
      .video.mb-2
        iframe(width="560" height="315" src="https://www.youtube.com/embed/WLN6L02kbUA" title="Protocolos de servicio al cliente: introducción" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
      figcaption #[strong Video]: protocolos de servicio al cliente: introducción

</template>

<script>
export default {
  name: 'Introduccion',
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

<style lang="sass"></style>
