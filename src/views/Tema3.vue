<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Elementos
    
    .row.justify-content-center
      .col-xl-10
        p.mb-0 Las condiciones del mercado han cambiado, anteriormente un empresario solo tenía como herramienta para atender al cliente su mirada para verlo a los ojos y su mano para estrecharla; #[strong las condiciones del mercado y los avances tecnológicos ofrecen un mundo de posibilidades para contactar al cliente], no solo física, sino virtualmente lo cual les permite ampliar sus expectativas de negocios ampliando la oferta y optimizando recursos.
    
    Separador
    
    .row.justify-content-center
      .col-xl-10
        #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 3.1 Tipos

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-10.col-md-8.col-lg-6.col-xl-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema3/1.png", alt="imagen de acompañamiento")
      .col-lg-6
        p Un portafolio bien estructurado, de acuerdo con el experto Alberto Cajal, llega a convertirse en un aliado fiel si es utilizado como medio para llegar al cliente, con el propósito de demostrar un orden de lo que es la empresa y mostrar todo su interior para darse a conocer de forma externa. Un portafolio se utiliza a manera de interacción con el cliente, ya que el documento le permite resolver inquietudes que pueda tener del producto o servicio que ofrece la empresa (Cajal A., 2020).
        p.mb-0 Lo siguiente es lo que necesita un portafolio para cumplir con su objetivo:

    .row.justify-content-center(data-aos="fade-left")
      .col-12.col-xl-10
        .tabla-a.color-primario
          table
            thead
              tr
                th Elemento
                th Recomendación
                th Ítems
            tbody
              tr
                td #[strong Información muy detallada de la empresa.]
                td Debe aparecer no solo su historia, sino también sus principales clientes y proveedores, esto le ofrece confianza al cliente.
                td 
                  ul.lista-ul
                    li.d-flex 
                      i.fas.fa-check-circle.text-primario
                      | Historia de la empresa.
                    li.d-flex 
                      i.fas.fa-check-circle.text-primario
                      | Antecedentes.
                    li.d-flex 
                      i.fas.fa-check-circle.text-primario
                      | Antecedentes.
                    li.d-flex 
                      i.fas.fa-check-circle.text-primario
                      | Fecha de creación.
                    li.d-flex 
                      i.fas.fa-check-circle.text-primario
                      | Tiempo en el mercado.
                    li.d-flex 
                      i.fas.fa-check-circle.text-primario
                      | Socios.
                    li.d-flex 
                      i.fas.fa-check-circle.text-primario
                      | Clientes.
                    li.d-flex 
                      i.fas.fa-check-circle.text-primario
                      | Misión.
                    li.d-flex 
                      i.fas.fa-check-circle.text-primario
                      | Visión.
                    li.d-flex 
                      i.fas.fa-check-circle.text-primario
                      | Objetivos.
                    li.d-flex 
                      i.fas.fa-check-circle.text-primario
                      | Propuesta de valor.
                    li.d-flex 
                      i.fas.fa-check-circle.text-primario
                      | Valores organizacionales.
                    li.d-flex 
                      i.fas.fa-check-circle.text-primario
                      | Estructura de la empresa.
              tr
                td #[strong Información del producto.]
                td Debe especificar sus componentes y principales características, también los precios y ofertas por compra.
                td 
                  ul.lista-ul
                    li.d-flex 
                      i.fas.fa-check-circle.text-primario
                      | Clasificación de los productos o servicios.
                    li.d-flex 
                      i.fas.fa-check-circle.text-primario
                      | Producto o servicio específico.
                    li.d-flex 
                      i.fas.fa-check-circle.text-primario
                      | La marca de los productos o servicios.
                    li.d-flex 
                      i.fas.fa-check-circle.text-primario
                      | Nombre del producto o servicio.
                    li.d-flex 
                      i.fas.fa-check-circle.text-primario
                      | Características del producto o servicio: Tamaño, forma, color, etc.
                    li.d-flex 
                      i.fas.fa-check-circle.text-primario
                      | Empaque y etiquetado: fecha de vencimiento, recomendaciones de almacenamiento, etc.
                    li.d-flex 
                      i.fas.fa-check-circle.text-primario
                      | Funciones y usos del producto o servicio: para qué sirve, cuáles son sus usos, etc.
                    li.d-flex 
                      i.fas.fa-check-circle.text-primario
                      | Amplitud, extensión y presentación de la línea del producto: número de líneas, cantidad de productos que integran el portafolio, versiones del producto, etc.
              tr
                td #[strong Información de la negociación.]
                td Se debe especificar las formas de pago y los tiempos de pago en el evento que se venda a crédito y al por mayor.
                td 
                  ul.lista-ul
                    li.d-flex 
                      i.fas.fa-check-circle.text-primario
                      | Valor de los productos.
                    li.d-flex 
                      i.fas.fa-check-circle.text-primario
                      | Valor de los servicios.
                    li.d-flex 
                      i.fas.fa-check-circle.text-primario
                      | Valor por unidad.
                    li.d-flex 
                      i.fas.fa-check-circle.text-primario
                      | Valor al por mayor (docenas).
                    li.d-flex 
                      i.fas.fa-check-circle.text-primario
                      | Descuentos por pronto pago.
                    li.d-flex 
                      i.fas.fa-check-circle.text-primario
                      | Días de descuentos.
                    li.d-flex 
                      i.fas.fa-check-circle.text-primario
                      | Ofertas especiales.
                    li.d-flex 
                      i.fas.fa-check-circle.text-primario
                      | Formas de pago: efectivo, tarjetas débito o crédito
                    li.d-flex 
                      i.fas.fa-check-circle.text-primario
                      | Recaudo electrónico: diferentes canales como Efecty, Nequi, Daviplata, etc.
              tr
                td #[strong Información de contacto.]
                td Se Debe especificar todas las formas por las cuales se puedan comunicar los clientes
                td 
                  ul.lista-ul
                    li.d-flex 
                      i.fas.fa-check-circle.text-primario
                      span Página <em>web</em>.
                    li.d-flex 
                      i.fas.fa-check-circle.text-primario
                      | Correo electrónico.
                    li.d-flex 
                      i.fas.fa-check-circle.text-primario
                      | Blog.
                    li.d-flex 
                      i.fas.fa-check-circle.text-primario
                      | Teléfonos fijos.
                    li.d-flex 
                      i.fas.fa-check-circle.text-primario
                      | Teléfonos celulares.
                    li.d-flex 
                      i.fas.fa-check-circle.text-primario
                      | WhatsApp.
                    li.d-flex 
                      i.fas.fa-check-circle.text-primario
                      | Instagram
                    li.d-flex 
                      i.fas.fa-check-circle.text-primario
                      | Twitter.
                    li.d-flex 
                      i.fas.fa-check-circle.text-primario
                      span <em>Call Center</em> (centro de llamadas).
                    li.d-flex 
                      i.fas.fa-check-circle.text-primario
                      | Fax.
                    li.d-flex 
                      i.fas.fa-check-circle.text-primario
                      | Ubicación o dirección de la empresa y sucursales si las tiene. 
    
    Separador

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Características

    p.mb-3 Los portafolios de productos y servicios cuentan con algunas características tales como identificar las metas, plantear las estrategias de ventas, recopilar los productos y servicios ofertados, identificar las perspectivas de crecimiento y la planeación de objetivos.
    p.mb-5 Los portafolios de productos y servicios tienen unas características que se describen a continuación:

    SlyderF(columnas="col-lg-6 col-xl-4").mb-5.z-2
      .tarjeta.bg-slider-f.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.img-120(src='@/assets/curso/tema3/11.svg' alt='AvatarTop')
        h5.text-center Reseña histórica de la empresa
        p.text-center Cuándo fue fundada, nombre de los propietarios y logros a través de la historia.
      .tarjeta.bg-slider-f.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.img-120(src='@/assets/curso/tema3/2.svg' alt='AvatarTop')
        h5.text-center Visión
        p.text-center Se plantea en años lo que se desea lograr, hay que tener en cuenta la tecnología y la globalización para no quedar mal con nuestros clientes en caso de que no se logre cumplir.
      .tarjeta.bg-slider-f.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.img-120(src='@/assets/curso/tema3/3.svg' alt='AvatarTop')
        h5.text-center Misión
        p.text-center Es donde se desarrolla el objetivo general, es la razón de ser y el propósito de la empresa.
      .tarjeta.bg-slider-f.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.img-120(src='@/assets/curso/tema3/4.svg' alt='AvatarTop')
        h5.text-center Objetivos de nuestra empresa
        p.text-center Especifica lo que se quiere alcanzar durante el tiempo de la visión de la empresa.
      .tarjeta.bg-slider-f.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.img-120(src='@/assets/curso/tema3/5.svg' alt='AvatarTop')
        h5.text-center Productos
        p.text-center Debe tener la información necesaria para que el cliente conozca las características y bondades del producto.
      .tarjeta.bg-slider-f.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.img-120(src='@/assets/curso/tema3/6.svg' alt='AvatarTop')
        h5.text-center Servicios
        p.text-center Igual a los productos debe tener la información necesaria para dar claridad de lo que se está ofertando.
      .tarjeta.bg-slider-f.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.img-120(src='@/assets/curso/tema3/7.svg' alt='AvatarTop')
        h5.text-center Garantías
        p.text-center Es el tiempo o fecha hasta la cual la empresa responde por mal funcionamiento o daños que sufra el producto o servicio.
      .tarjeta.bg-slider-f.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.img-120(src='@/assets/curso/tema3/8.svg' alt='AvatarTop')
        h5.text-center Socios
        p.text-center Son las personas propietarias o inversionistas de la empresa.

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-4.col-lg-4.col-xl-3.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema3/9.png", alt="Imagen de acompañamiento")
      .col-lg-8.col-xl-7
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta custom-acordeon")
          .row(titulo="Proveedores")
            .col-md-12.px-5
              p.mb-0 Son las personas o empresas que surten la materia prima o productos terminados a la empresa.
          .row(titulo="Respaldos")
            .col-md-12.px-5
              p Este apartado se refiere a los respaldos tanto bancarios como de empresas que estarían dispuestas a responder por la empresa en algún evento adverso, o sea las alianzas que tiene.
          .row(titulo="Clientes de la empresa")
            .col-md-12.px-5
              p Son las personas o empresas con las que se tiene relación y que les brindan confianza a los clientes.
          .row(titulo="Datos de contacto")
            .col-md-12.px-5
              p Todas las formas de comunicación oral, visual o escrita que se puedan dar de la empresa.

    .row.justify-content-center
      .col-xl-10
        h4(data-aos='zoom-in-right').mb-4
          span.etiqueta-title Portafolio impreso y digital

    .row.justify-content-center.mb-4.mb-lg-5
      .col-xl-10
        p.mb-0 El portafolio puede presentarse impreso o digital, esto depende de la necesidad que tenga la empresa de llegar al cliente.

    .row.justify-content-center.mb-4.mb-lg-5
      .col-xl-10
        .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/10.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El mundo digital es utilizado cada vez con más frecuencia, por esto se recomienda que las empresas promuevan su portafolio de las dos formas para captar más clientes, en el caso de las microempresas como los restaurantes utilizan la carta impresa y una app (aplicación móvil que se puede escanear con un QR), facilitando al cliente la elección de los platos para hacer su pedido.
</template>

<script>
export default {
  name: 'Tema3',
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
