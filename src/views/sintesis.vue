<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente Protocolos de servicio al cliente aborda los recursos tecnológicos utilizados en la atención, incluyendo sus tipos, características y manejo adecuado; desarrolla la normatividad relacionada con la seguridad de la información en el contacto con el cliente; estudia el portafolio de servicios desde sus elementos y características; profundiza en la comunicación con el cliente, abarcando características, tipos, elementos, jerarquización del mensaje, técnicas de comunicación oral, escrita y corporal, así como la comunicación efectiva y asertiva; incorpora las normas de etiqueta y protocolo en la atención, junto con sus reglas y lineamientos; y finaliza con el análisis de las relaciones interpersonales, sus tipos y factores, como base para una atención profesional, ética y orientada a la satisfacción del cliente.

    .row.justify-content-center
      .col-12.mb-5.p-4
        figure
          img(src="@/assets/curso/sintesis.svg", alt="La imagen presenta un esquema sobre los protocolos de servicio al cliente, en el cual se organizan los principales componentes que intervienen en la atención al cliente dentro de una empresa. Incluye aspectos como los recursos tecnológicos para atender al cliente (tipos, características y manejo), la normatividad de seguridad de la información al contactarlo, el portafolio de servicios con sus elementos y características, y la comunicación con el cliente, que abarca sus características, jerarquización, técnicas de comunicación oral, escrita y corporal, así como la comunicación efectiva y asertiva. Además, incorpora la etiqueta y el protocolo en la atención al cliente con sus reglas y normas, y las relaciones interpersonales, considerando sus tipos y factores.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
