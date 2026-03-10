<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Recursos tecnológicos para atender al cliente
    
    .row.justify-content-center.mb-4.mb-lg-5
      .col-xl-10
        p.mb-0 De acuerdo con el Instituto Nacional de Ciberseguridad de España, muchas empresas aún cuentan con métodos tradicionales que son poco efectivos para atender a los clientes; ellas continúan utilizando el teléfono e incluso personalmente, mientras que las nuevas generaciones cada día utilizan más las nuevas tecnologías.
    .row.justify-content-center.mb-4.mb-lg-5
      .col-xl-10
        .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Los millennials (personas nacidas entre 1980 y 1995, también llamados generación Y, son reconocidos por tener sentido de equipo, actitud positiva y espíritu racional) usan para comunicarse los chats y sus teléfonos móviles. Por eso, las empresas deben implementar sistemas de atención teniendo en cuenta las preferencias de estos consumidores, ya que existe una transformación digital para la atención al cliente (Novella et al., 2018).

    p.mb-4.mb-lg-5 Las tres características de un sistema eficaz de atención al cliente son las siguientes:

    .row.align-items-stretch.justify-content-center.justify-content-xl-start.mb-1
      .col-md-6.col-lg-3
        .tarjeta-container.mb-4.custom-mh
          .position-relative.bg-secundario-medio.p-3.rounded-4.tarjeta-label.custom-mh.ms-4.d-flex.align-items-center
            img.tarjeta-label__icon.position-absolute.img-85(src='@/assets/curso/tema1/2.svg' alt='AvatarTop')
            p.ms-5.mb-0 La rapidez.
      .col-md-6.col-xl-4
        .tarjeta-container.mb-4.custom-mh
          .position-relative.bg-secundario-medio.p-3.rounded-4.tarjeta-label.custom-mh.ms-4.d-flex.align-items-center
            img.tarjeta-label__icon.position-absolute.img-85(src='@/assets/curso/tema1/3.svg' alt='AvatarTop')
            p.ms-5.mb-0 Independizar las comunicaciones del canal.
      .col-md-6.col-xl-4
        .tarjeta-container.mb-4.custom-mh
          .position-relative.bg-secundario-medio.p-3.rounded-4.tarjeta-label.custom-mh.ms-4.d-flex.align-items-center
            img.tarjeta-label__icon.position-absolute.img-85(src='@/assets/curso/tema1/4.svg' alt='AvatarTop')
            p.ms-5.mb-0 Identificar el tipo de comunicación del cliente.

    p.mb-4.mb-lg-5 A continuación, se presenta el siguiente recurso, donde se amplían los detalles de cada una de estas características.

    .video
      iframe(width="560" height="315" src="https://www.youtube.com/embed/8gZTBdLt_IM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    Separador
    
    .row.justify-content-center
      .col-xl-10
        #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 1.1 Tipos
    .row.justify-content-center.mb-4.mb-lg-5
      .col-xl-10
        p Los canales de atención al cliente son los medios que ponen las empresas a disposición de los clientes para comunicarse con ellos, en estos canales el cliente puede solicitar soporte técnico, reclamaciones, etc.
        p.mb-0 Los tipos de canales de atención al cliente utilizados por las empresas en la actualidad son:

    .fullwidth-bg.fullwidth-bg--1
    SlyderF(columnas="col-lg-6 col-xl-4").mb-5.z-2
      .tarjeta.bg-slider-f.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.img-120(src='@/assets/curso/tema1/5.svg' alt='AvatarTop')
        h5.text-center Redes sociales
        p.text-center Página web o aplicación en la que los internautas intercambian información personal y contenidos multimedia de modo que crean una comunidad de amigos virtual e interactiva.
      .tarjeta.bg-slider-f.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.img-120(src='@/assets/curso/tema1/6.svg' alt='AvatarTop')
        h5.text-center WhatsApp
        p.text-center Aplicación que permite enviar y recibir mensajes instantáneos a través de un teléfono móvil (celular).
      .tarjeta.bg-slider-f.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.img-120(src='@/assets/curso/tema1/7.svg' alt='AvatarTop')
        h5.text-center Livechat y chatbot
        p.text-center Comunicación en tiempo real; los usuarios escriben mensajes en su teclado, y el texto aparece automáticamente y al instante en el monitor de todos los participantes.
      .tarjeta.bg-slider-f.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.img-120(src='@/assets/curso/tema1/8.svg' alt='AvatarTop')
        h5.text-center Móvil
        p.text-center Dispositivo inalámbrico electrónico que permite tener acceso a la red de telefonía celular o móvil.
      .tarjeta.bg-slider-f.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.img-120(src='@/assets/curso/tema1/9.svg' alt='AvatarTop')
        h5.text-center E-mail
        p.text-center Sistema que permite el intercambio de mensajes entre distintas computadoras interconectadas a través de una red.

    .row.justify-content-center.mb-4.mb-lg-5
      .col-xl-10
        p.mb-0 A continuación, se verán los tipos de canales utilizados por los clientes.

    .video
      iframe(width="560" height="315" src="https://www.youtube.com/embed/7fnr7D7cl7M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    Separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Características

    p.mb-6 Los recursos tecnológicos para atender al cliente cuentan con características tales como control y seguimiento, y permiten reclamaciones telefónicamente, por página web, correo electrónico o cualquier otro medio que utilice la empresa. Las características más importantes de los recursos tecnológicos son las siguientes:

    div.slider-wrapper.z-2.mb-6
      .bg-fullwidth
      .tarjeta.tarjeta--blanca.position-relative.p-4.pt-5.z-2.my-5
        SlyderA(tipo="b")
          .row.z-2.justify-content-center.align-items-center
            .col-lg-5
              h4.mb-4 Avance tecnológico
              p.mb-4.mb-lg-0 La tecnología es parte de nuestras vidas; facilita la comunicación interpersonal sin importar donde esté. La llegada de últimas tecnologías para la conectividad, como 5G, o la inteligencia artificial hace que cada vez se pueda contar con avances tecnológicos. Las TIC están presentes en todos los ámbitos de la sociedad. El ser humano no se detiene en la búsqueda de avances tecnológicos.
            .col-lg-6
              figure
                img(src='@/assets/curso/tema1/10.png', alt='Imagen de acompañamiento')
          .row.z-2.justify-content-center.align-items-center
            .col-lg-5
              h4.mb-4 Intercambio de productos y servicios
              p.mb-4.mb-lg-0 Las diferentes redes sociales se encuentran a disposición de todo tipo de público, y estas se han convertido en aliadas importantes para la oferta y la demanda de toda clase de productos y servicios que son ofertados sin importar el tamaño de la empresa que los ofrece. Se ha dinamizado la economía del país, ya que son muchos los negocios que se hacen a través de ellas.
            .col-lg-6
              figure
                img(src='@/assets/curso/tema1/11.png', alt='Imagen de acompañamiento')
          .row.z-2.justify-content-center.align-items-center
            .col-lg-5
              h4.mb-4 Software para optimizar
              p.mb-4.mb-lg-0 El software en las empresas agrega valor, ya que ayuda a alcanzar los objetivos, reduce costos y aumenta las ventas. También es una ventaja que la información de la empresa se comparta de manera clara, sencilla y rápida. El software especializado es una herramienta muy útil a la hora de comprobar datos como estados de resultados, balances, bases de datos de clientes etc. Cada vez más son indispensables para la gerencia de las empresas.
            .col-lg-6
              figure
                img(src='@/assets/curso/tema1/12.png', alt='Imagen de acompañamiento')
          .row.z-2.justify-content-center.align-items-center
            .col-lg-5
              h4.mb-4 Dar y conocer las oportunidades
              p El acceso a la tecnología les permite a las empresas adaptarse al mercado actual, así como a subsistir en un mercado cada vez más competitivo. Estos son  algunos beneficios que las empresas obtienen de la tecnología:
              ul.lista-ul
                li.d-flex
                  i.fas.fa-check-circle.text-primario
                  | Optimización de procesos.
                li.d-flex
                  i.fas.fa-check-circle.text-primario
                  | Resultados tangibles.
                li.d-flex
                  i.fas.fa-check-circle.text-primario
                  | Valor agregado.
                li.d-flex
                  i.fas.fa-check-circle.text-primario
                  | Información integrada.
            .col-lg-6
              figure
                img(src='@/assets/curso/tema1/13.png', alt='Imagen de acompañamiento')

    .row.justify-content-center
      .col-lg-8.col-xl-6
        .cajon.color-terciario.p-4(data-aos="fade-up")
          p.mb-0 Los recursos tecnológicos de las empresas NO son solo los computadores.
    
    Separador
    .row.justify-content-center
      .col-xl-10
        #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 1.3 Manejo

    .row.justify-content-center.mb-4.mb-lg-5
      .col-xl-10
        p El manejo de recursos tecnológicos para atender al cliente tiene que ver con la implementación de nuevos dispositivos, la automatización y la inteligencia artificial, con los cuales se puede conseguir que las necesidades de los clientes queden satisfechas.
        p En el manejo de los recursos tecnológicos para atender al cliente se debe tener en cuenta:

    .row.justify-content-center.mb-4.mb-lg-5.custom-tabs
      .col-xl-10
        TabsA.color-primario.mb-5(data-aos="fade-down")
          .tarjeta.bg-primario-claro.p-4(titulo="Estudiar y conocer a sus clientes")
            .row.align-items-center.p-4
              .col-12.col-lg-3.align-items-center.mb-3.mb-lg-0
                figure.justify-center
                  img.img-140(src='@/assets/curso/tema1/14.svg', alt='Texto que describa la imagen')
              .col-12.col-lg-9
                p.mb-0 Cada cliente es único. Debe atenderlos de forma personalizada. Es importante conocer su perfil. Percibir muy bien lo que su cliente busca para que le ofrezca productos y servicios con excelente atención. Mantener actualizados sus datos, esto ayudará a entender las necesidades de los clientes.
          .tarjeta.bg-primario-claro.p-4(titulo="Establecer lazos con el cliente")
            .row.align-items-center.p-4
              .col-12.col-lg-3.align-items-center.mb-3.mb-lg-0
                figure.justify-center
                  img.img-140(src='@/assets/curso/tema1/15.svg', alt='Texto que describa la imagen')
              .col-12.col-lg-9    
                p.mb-0 Una de las estrategias que ayuda a crear empatía con el cliente es el marketing relacional. Las empresas deben crear maneras para establecer lazos fuertes y asertivos con los clientes.
          .tarjeta.bg-primario-claro.p-4(titulo="Utilizar la tecnología a su favor")
            .row.align-items-center.p-4
              .col-12.col-lg-3.align-items-center.mb-3.mb-lg-0
                figure.justify-center
                  img.img-140(src='@/assets/curso/tema1/16.svg', alt='Texto que describa la imagen')
              .col-12.col-lg-9    
                p.mb-0 En la actualidad, las empresas deben llamar la atención del cliente, ya no es el cliente el que debe llamar la atención de la empresa. Los clientes usan cada la tecnología a través de los diferentes dispositivos que existen para conocer los productos y servicios que ofrece el mercado.

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
