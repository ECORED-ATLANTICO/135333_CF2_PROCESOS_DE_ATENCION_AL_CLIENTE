<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 La comunicación con el cliente

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-7
        p Hablar de comunicación con el cliente es referirse al contacto que se tiene con él y la información que se comparte, gracias a los diferentes mecanismos y a los avances tecnológicos se abren diversos canales de comunicación con el cliente, que los podemos usar con diferentes propósitos aprovechando sus características.
        p.mb-4.mb-lg-0 La importancia de la comunicación con el cliente consiste en que se mantenga viva la relación entre la empresa y los consumidores, ya que si no existe dicha comunicación el cliente se puede sentir desprotegido cuando necesite información sobre el producto o servicio que se le haya ofrecido por cualquiera de los canales que tenga para comunicarse; lo mismo puede suceder con clientes potenciales o clientes en condición de discapacidad, los cuales necesitan sentirse escuchados por la empresa.
      .col-12.col-lg-3.mb-3
        figure
          img(src='@/assets/curso/tema4/1.png', alt='Imagen de acompoñamiento', data-aos="fade-right")

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema4/2.png", alt="descripcion")
      .col-lg-9
        p Frecuentemente, se comete el error de utilizar los conceptos de información y comunicación de forma indistinta, cuando en realidad se dirigen a realidades diferentes. Según el modelo de comunicación de Shannon and Weaver (Models y Communication, 2011) Las diferencias entre los dos conceptos son:
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta custom-acordeon")
          .row(titulo="Información")
            .col-md-12.px-5
              p.mb-0 Es unidireccional, ya que va en una sola dirección y la persona que la recibe no puede responder ante ella y no puede emitir un mensaje de respuesta, se limita únicamente a recibirla.
          .row(titulo="Comunicación")
            .col-md-12.px-5
              p Es bidireccional ya que una persona emite un mensaje y otra persona lo recibe, esto le permite reaccionar y dar respuesta inmediata sin importar lo que ocurra ante la situación que se presente, lo importante es que existe una retroalimentación al respecto.
    
    .row.justify-content-center.mb-4.mb-lg-5
      .col-xl-10
        p La comunicación con el cliente debe ser clara para no confundir al público, no importa lo que le tenga que decir, lo importante es evitar confusiones que puedan dejarle una mala experiencia y reputación de la empresa.
        p.mb-0 Tener una comunicación clara y adecuada don el cliente trae tres grandes beneficios.

    .row.justify-content-center.align-items-stretch.mb-4.mb-lg-5
      .col-md-6.col-lg-4
        .tarjeta.bg-slider-f.p-4.h-100
          .row.justify-content-center.mb-3
            .col-8
              img.img-120.mb-4(src='@/assets/curso/tema4/3.svg' alt='AvatarTop')
          h5.text-center.mb-4 Disposición
          p.text-center Los clientes están dispuestos a pagar más por los productos o servicios si tienen una buena experiencia donde la comunicación sea eficiente.
      .col-md-6.col-lg-4.mt-4.mt-sm-0
        .tarjeta.bg-slider-f.p-4.h-100
          .row.justify-content-center.mb-3
            .col-8
              img.img-120.mb-4(src='@/assets/curso/tema4/4.svg' alt='AvatarTop')
          h5.text-center.mb-4 Recompra
          p.text-center Cuando se logra tener una comunicación positiva se tiene más probabilidades de que el cliente vuelva a adquirir y recomendar los productos de la empresa, esto garantiza una relación duradera.
      .col-md-6.col-lg-4.mt-4.mt-lg-0
        .tarjeta.bg-slider-f.p-4.h-100
          .row.justify-content-center.mb-3
            .col-8
              img.img-120.mb-4(src='@/assets/curso/tema4/5.svg' alt='AvatarTop')
          h5.text-center.mb-4 Reputación
          p.text-center Una buena comunicación con los clientes genera una buena reputación de la empresa. Siempre hay que responder a sus dudas por todos los canales de comunicación, resolviendo las necesidades de los clientes.

    .row.justify-content-center.mb-4.mb-lg-5
      .col-xl-10
        p De acuerdo al Manual de protocolo para la atención a personas en situación de discapacidad de la Cámara de Comercio de Medellín y a la Convención Internacional sobre los Derechos de las Personas con Discapacidad, así como al Servicio Nacional de la Discapacidad, existen pautas de comunicación para la atención al cliente en condición de discapacidad. Si consigue aplicarlas estará ampliando su mercado, lo que será rentable para su empresa y justo para esta población, ya que son personas que merecen las mismas oportunidades.
        p.mb-0 Se deben tener en cuenta las siguientes recomendaciones:

    .row.justify-content-center
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 1.
          span Recomendaciones.
        .tabla-a.color-primario
          table
            caption <b>Nota.</b> Tomada de Cámara de Comercio de Medellín (s. f.).
            thead
              tr(style="background-color: #F6F8FE")
                th(colspan="2") Recomendaciones
            tbody
              tr
                td(data-aos="fade-right")
                  ul.lista-ul.mb-0
                    li.d-flex
                      i.fas.fa-check-circle.text-primario
                      | Dirigirse directamente a la persona discapacitada y no su acompañante.
                td(data-aos="fade-left")
                  ul.lista-ul.mb-0
                    li.d-flex
                      i.fas.fa-check-circle.text-primario
                      | Identificar las necesidades y dificultades de la persona con discapacidad.
              tr
                td(data-aos="fade-right")
                  ul.lista-ul.mb-0
                    li.d-flex
                      i.fas.fa-check-circle.text-primario
                      | Cuando el discapacitado es ciego se debe enseñar el nivel de accesibilidad del establecimiento haciendo una clara descripción de los ambientes por donde vaya a transitar, esto le dará precisión, claridad, confianza y seguridad.
                td(data-aos="fade-left")
                  ul.lista-ul.mb-0
                    li.d-flex
                      i.fas.fa-check-circle.text-primario
                      | Ofrecerle una información correcta es fundamental para su comprensión.
              tr
                td(data-aos="fade-right")
                  ul.lista-ul.mb-0
                    li.d-flex
                      i.fas.fa-check-circle.text-primario
                      | Evite sobreprotegerlo, no es una buena estrategia, ellos no lo necesitan y se sienten mal si el funcionario lo hace.
                td(data-aos="fade-left")
                  ul.lista-ul.mb-0
                    li.d-flex
                      i.fas.fa-check-circle.text-primario
                      | No está bien preguntar por el tipo de discapacidad del cliente, ellos, por lo general, lo comentan cuando consideran que es necesario que usted lo sepa.
              tr
                td(data-aos="fade-right")
                  ul.lista-ul.mb-0
                    li.d-flex
                      i.fas.fa-check-circle.text-primario
                      | Sea cuidadoso con el contacto físico, evite tocarlos como también a sus ayudas técnicas (sillas de ruedas, bastones, etc.) sin que ellos lo soliciten, recuerde que estas herramientas son parte de su espacio personal.
                td(data-aos="fade-left")
                  ul.lista-ul.mb-0
                    li.d-flex
                      i.fas.fa-check-circle.text-primario
                      | Los discapacitados adultos hay que tratarlos de acuerdo con su edad, no se deben tomar decisiones sin consultarles.
              tr
                td(data-aos="fade-right")
                  ul.lista-ul.mb-0
                    li.d-flex
                      i.fas.fa-check-circle.text-primario
                      | Evite referirse a ellos como inválido, minusválido o discapacitado.
                td(data-aos="fade-left")
                  ul.lista-ul.mb-0
                    li.d-flex
                      i.fas.fa-check-circle.text-primario
                      | Siempre debe preguntar si necesitan de su ayuda, ya que ellos la solicitan en el momento de necesitarla.
              tr
                td(data-aos="fade-right")
                  ul.lista-ul.mb-0
                    li.d-flex
                      i.fas.fa-check-circle.text-primario
                      | El establecimiento debe estar bien ordenado, no debe haber obstáculos que dificulten la movilidad del cliente en condición de discapacidad.
                td(data-aos="fade-left")
                  ul.lista-ul.mb-0
                    li.d-flex
                      i.fas.fa-check-circle.text-primario
                      | No demuestre impaciencia, ofrézcale el tiempo necesario para que se sienta bien atendido.

    Separador
    
    .row.justify-content-center
      .col-xl-10
        #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 4.1 Características, tipos y elementos

    p La comunicación en general debe entenderse como un intercambio. El propósito no es que la conversación suceda desde un solo lado, la intención es provocar reacciones para que exista un flujo de ideas, la comunicación con los clientes sirve como canal para conocerlos mejor y que ellos a su vez conozcan su empresa. También, la comunicación comercial cumple con la función de promocionar una oferta.
    p.mb-4.mb-lg-5 Con el cliente, sin importar el canal debe recibir una comunicación con las siguientes características.

    .row.justify-content-center.align-items-stretch.mb-4.mb-lg-5
      .col-md-6.col-lg-4
        .p-4.bg-terciario-medio.rounded-3.overflow-hidden.h-100
          figure
            img.mb-4(data-aos="fade-down-right", src="@/assets/curso/tema4/6.png", alt="imagen de acompañamiento")
          h5 Clara y sencilla
          p La comunicación con el cliente debe ser clara para no confundir al público, no importa lo que le tenga que decir, lo importante es evitar confusiones que puedan dejarle una mala experiencia y reputación de la empresa.
      .col-md-6.col-lg-4.mt-4.mt-sm-0
        .p-4.bg-secundario-medio.rounded-3.overflow-hidden.h-100
          figure
            img.mb-4(data-aos="fade-down-right", src="@/assets/curso/tema4/7.png", alt="imagen de acompañamiento")
          h5 Activa
          p La comunicación con el cliente no debe convertirse en un monólogo, se debe estar preparado para las preguntas, ellas ayudan a comprender la necesidad o deseo de los productos o servicios que éste tiene de la empresa.
      .col-md-6.col-lg-4.mt-4.mt-lg-0
        .p-4.bg-terciario-medio.rounded-3.overflow-hidden.h-100
          figure
            img.mb-4(data-aos="fade-down-right", src="@/assets/curso/tema4/8.png", alt="imagen de acompañamiento")
          h5 Abierta
          p La transparencia genera confianza, sea claro con el cliente con respecto al uso y características del producto o servicio, dele a conocer con claridad las políticas de garantía del producto o servicio y no espere que le toque buscar la letra pequeña en los documentos de garantía o manual de funcionamiento.
      
    .row.justify-content-center.mb-4.mb-lg-5
      .col-xl-10
        p.mb-0 En cuanto a los canales, en la actualidad existen muchos para comunicarse con los clientes, esto facilita la atención y servicio que se le debe prestar para que quede satisfecho con la empresa.

    //- TODO LISTAS CON BG

    .row.justify-content-center.mb-6
      .col-xl-10
        p.mb-0 Las empresas deben crear estrategias para tener una buena comunicación con sus clientes, sin importar el canal. Se deben evitar al máximo los errores ya que estos afectan la imagen de la empresa y hacen perder clientes. Ahora, se presentan los cuatro errores de comunicación más comunes en la interacción con los clientes.

    div.slider-wrapper.z-2.mb-6
      .bg-fullwidth
      .tarjeta.tarjeta--blanca.position-relative.p-4.pt-5.z-2.my-5
        SlyderA(tipo="b")
          .row.z-2.justify-content-center.align-items-center
            .col-lg-5
              h4.mb-4 No investigar al cliente
              p.mb-4.mb-lg-0 Muchos ejecutivos de ventas cometen el error de contactar al cliente sin saber quién es antes de ir a una cita, enviar un correo electrónico o hacer una llamada. Asegúrese de saber con quién se va a comunicar, debe conocer en qué empresa trabaja, el cargo que desempeña y la profesión del cliente.
            .col-lg-6
              figure
                img(src='@/assets/curso/tema4/10.png', alt='Imagen de acompañamiento')
          .row.z-2.justify-content-center.align-items-center
            .col-lg-5
              h4.mb-4 No escuchar al cliente
              p.mb-4.mb-lg-0 Debe poner mucha atención a lo que el cliente le diga, en las conversaciones telefónicas se comete este error ya que como no lo están viendo puede distraerse, lo que conlleva a la interrupción o la repetición de lo que el cliente le esté diciendo, antes de hacer una llamada se deben planificar los temas a tratar y disponer del tiempo necesario para no pausar la llamada.
            .col-lg-6
              figure
                img(src='@/assets/curso/tema4/11.png', alt='Imagen de acompañamiento')
          .row.z-2.justify-content-center.align-items-center
            .col-lg-5
              h4.mb-4 No hablar con naturalidad
              p.mb-4.mb-lg-0 Con sorprendente frecuencia las personas imitan las actitudes corporales de los demás, ya que dos personas que comparten un mismo punto de vista suelen tener también una misma postura.
            .col-lg-6
              figure
                img(src='@/assets/curso/tema4/13.png', alt='Imagen de acompañamiento')
          .row.z-2.justify-content-center.align-items-center
            .col-lg-5
              h4.mb-4 No contar con suficientes conocimientos o recursos
              p.mb-4.mb-lg-0 Los clientes se frustran cuando la persona que los atiende no cuenta con los recursos suficientes o información para colaborarle con sus problemas o inquietudes, en estos casos el asesor debe saber dirigirlo al software de quejas y reclamos (CRM) para que le resuelvan sus dudas, pero antes de esto debe procurar resolver por sí mismo la situación.
            .col-lg-6
              figure
                img(src='@/assets/curso/tema4/14.png', alt='Imagen de acompañamiento')



    //- READY

    .row.justify-content-center.mb-4.mb-lg-5
      .col-xl-10
        p.mb-0 En los siguientes dos videos se expone qué es la comunicación asertiva y algunos criterios para utilizarla.

    .row.justify-content-center
      .col-xl-10
        h4(data-aos='zoom-in-right').mb-4
          span.etiqueta-title Comunicación asertiva
    .video
      iframe(width="560" height="315" src="https://www.youtube.com/embed/VXQJ7DGmkio" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen) 

    .row.justify-content-center
      .col-xl-10
        h4(data-aos='zoom-in-right').mb-4
          span.etiqueta-title Criterios de comunicación asertiva

    .video
      iframe(width="560" height="315" src="https://www.youtube.com/embed/nfJPSfcl_tM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
   
</template>

<script>
export default {
  name: 'Tema4',
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
