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

    .row.justify-content-center.mb-4.mb-lg-5.align-items-stretch
      .col-lg-5.col-xl-4.mb-4.mb-lg-0
        .p-4.bg-primario-claro.h-100
          ol.lista-ol--cuadro
            li.d-flex 
              .lista-ol--cuadro__vineta.colr_3.text-bold
                span 1
              span Sitio <em>web</em>.
            li.d-flex 
              .lista-ol--cuadro__vineta.colr_3.text-bold
                span 2
              | Línea telefónica.
            li.d-flex 
              .lista-ol--cuadro__vineta.colr_3.text-bold
                span 3
              | SMS.
            li.d-flex 
              .lista-ol--cuadro__vineta.colr_3.text-bold
                span 4
              span <em>E-mail</em>  <em>marketing</em>  y boletines electrónicos.
            li.d-flex 
              .lista-ol--cuadro__vineta.colr_3.text-bold
                span 5
              | Redes sociales.
      .col-lg-7.col-xl-6
        .p-4.bg-primario-claro.h-100
          .d-flex.align-items-center.justify-content-center
            .col-md-7.col-lg-8
              ol.lista-ol--cuadro
                li.d-flex 
                  .lista-ol--cuadro__vineta.colr_3.text-bold
                    span 6
                  span Notificaciones  <em>push</em>  (mensajes que se envían de un servidor remoto hasta los dispositivos).
                li.d-flex 
                  .lista-ol--cuadro__vineta.colr_3.text-bold
                    span 7
                  | Encuestas.
                li.d-flex 
                  .lista-ol--cuadro__vineta.colr_3.text-bold
                    span 8
                  | Anuncios.
                li.d-flex 
                  .lista-ol--cuadro__vineta.colr_3.text-bold
                    span 9
                  | Atención presencial.
            .d-none.d-md-block.col-md-5.col-lg-4
              figure
                img.img-120(data-aos="fade-down-right", src="@/assets/curso/tema4/9.svg", alt="imagen de acompañamiento")
            


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

    .row.justify-content-center
      .col-xl-10
        h4(data-aos='zoom-in-right').mb-4
          span.etiqueta-title Barreras en la comunicación con el cliente

    .row.justify-content-center.mb-4.mb-lg-5
      .col-xl-10
        p En la comunicación, siendo una actividad básica del ser humano, se presentan obstáculos, sin embargo, hay que destacar la complejidad de elementos que intervienen en ella (culturales, sociales, personales, etc.), que hacen que existan diversas clases de obstáculos que interfieren y la hacen compleja y difícil de desarrollarse.
        p.mb-0 En todo proceso de comunicación se generan obstáculos que dificultan, e incluso, anulan el impacto del mensaje que se quiere transmitir.

    TabsB.color-secundario.mb-5(data-aos="fade-left")
      .p-3.p-lg-5(titulo="Barreras físicas")
        .row.align-items-center.justify-content-around
          .col-11.col-md-6.col-lg-4
            figure
              img.img-360.mb-4.mb-lg-0(src='@/assets/curso/tema4/15.svg', alt='Texto que describa la imagen')
          .col-lg-8.col-xl-7
            h4 Barreras físicas
            p.mb-0 Ubicadas en el canal utilizado para emitir el mensaje, pudiendo distorsionar o anular el mensaje, se refiere a ruidos, interferencias o elementos físicos.
      .p-3.p-lg-5(titulo="Barreras sociográficas")
        .row.align-items-center.justify-content-around
          .col-11.col-md-6.col-lg-4
            figure
              img.img-360.mb-4.mb-lg-0(src='@/assets/curso/tema4/16.svg', alt='Texto que describa la imagen')
          .col-lg-8.col-xl-7
            h4 Barreras sociográficas
            p.mb-0 Tienen que ver con las clases sociales, la religión, las edades, las ideologías, etc., estas barreras son difíciles de derrumbar para llegar a una solución ya que tienen que ver con las creencias de cada individuo.
      .p-3.p-lg-5(titulo="Barreras actitudinales")
        .row.align-items-center.justify-content-around
          .col-11.col-md-6.col-lg-4
            figure
              img.img-360.mb-4.mb-lg-0(src='@/assets/curso/tema4/17.svg', alt='Texto que describa la imagen')
          .col-lg-8.col-xl-7
            h4 Barreras actitudinales
            p.mb-0 Son los deseos, intereses y necesidades de las personas, estas barreras son infinitas teniendo en cuenta que cada persona tiene sus propias percepciones, en ese sentido hay que tener en cuenta que la mente de una persona es diferente a la de los demás, por lo que los intereses también son diferentes y es muy difícil que todos salgan satisfechos.
      .p-3.p-lg-5(titulo="Barreras psicológicas")
        .row.align-items-center.justify-content-around
          .col-11.col-md-6.col-lg-4
            figure
              img.img-360.mb-4.mb-lg-0(src='@/assets/curso/tema4/18.svg', alt='Texto que describa la imagen')
          .col-lg-8.col-xl-7
            h4 Barreras psicológicas
            p.mb-0 Tienen que ver con la personalidad y creencias de las personas, en ese sentido hay que tener en cuenta los pensamientos opuestos, los prejuicios, los valores, etc.
      .p-3.p-lg-5(titulo="Barreras semánticas")
        .row.align-items-center.justify-content-around
          .col-11.col-md-6.col-lg-4
            figure
              img.img-360.mb-4.mb-lg-0(src='@/assets/curso/tema4/19.svg', alt='Texto que describa la imagen')
          .col-lg-8.col-xl-7
            h4 Barreras semánticas
            p.mb-0 Se refiere al lenguaje, idiomas o lenguas que dominen el emisor y el receptor.

    .row.justify-content-center.mb-4.mb-lg-5
      .col-lg-10.col-xl-8
        p.mb-0 La comunicación cumple con una serie de funciones y depende de los objetivos propuestos:

    .row.align-items-stretch.justify-content-center.justify-content-xl-start
      .col-md-6.col-xl-4.offset-xl-2
        .tarjeta-container.mb-4.custom-mh
          .position-relative.bg-secundario-medio.p-3.rounded-4.tarjeta-label.custom-mh.ms-4.d-flex.align-items-center
            img.tarjeta-label__icon.position-absolute.img-85(src='@/assets/curso/tema4/20.svg' alt='AvatarTop')
            div.ms-5
              h5.mb-1 Informativa.
              p.mb-0 Comunicar información objetiva.
      .col-md-6.col-xl-4
        .tarjeta-container.mb-4.custom-mh
          .position-relative.bg-secundario-medio.p-3.rounded-4.tarjeta-label.custom-mh.ms-4.d-flex.align-items-center
            img.tarjeta-label__icon.position-absolute.img-85(src='@/assets/curso/tema4/21.svg' alt='AvatarTop')
            div.ms-5
              h5.mb-1 Expresiva.
              p.mb-0 Mostrar sentimientos o emociones.
      .col-md-6.col-xl-4.offset-xl-2
        .tarjeta-container.mb-4.custom-mh
          .position-relative.bg-secundario-medio.p-3.rounded-4.tarjeta-label.custom-mh.ms-4.d-flex.align-items-center
            img.tarjeta-label__icon.position-absolute.img-85(src='@/assets/curso/tema4/22.svg' alt='AvatarTop')
            div.ms-5
              h5.mb-1 Formativa.
              p.mb-0 Incidir en el otro y enseñarle cosas.
      .col-md-6.col-xl-4
        .tarjeta-container.mb-4.custom-mh
          .position-relative.bg-secundario-medio.p-3.rounded-4.tarjeta-label.custom-mh.ms-4.d-flex.align-items-center
            img.tarjeta-label__icon.position-absolute.img-85(src='@/assets/curso/tema4/23.svg' alt='AvatarTop')
            div.ms-5
              h5.mb-1 Persuasiva.
              p.mb-0 Convencer a otros de que hagan algo.
      .col-md-6.col-xl-4.offset-xl-4
        .tarjeta-container.mb-4.custom-mh
          .position-relative.bg-secundario-medio.p-3.rounded-4.tarjeta-label.custom-mh.ms-4.d-flex.align-items-center
            img.tarjeta-label__icon.position-absolute.img-85(src='@/assets/curso/tema4/24.svg' alt='AvatarTop')
            div.ms-5
              h5.mb-1 Entretenimiento.
              p.mb-0 Por el gusto de comunicarse.
        
    Separador
    
    .row.justify-content-center
      .col-xl-10
        #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 4.2 Jerarquización

    .row.justify-content-center.mb-4.mb-lg-5
      .col-xl-10
        .row.align-items-center.justify-content-center
          .col-10.col-md-6.col-lg-4
            figure
              img.mb-3.mb-lg-0(src='@/assets/curso/tema4/25.png', alt='Imagen de acompañamiento')
          .col-12.col-lg-8
            p Con el ánimo de conocer con quién hacer valer sus derechos, los clientes deben conocer la jerarquización que se da en la atención al cliente. Esto está relacionado directamente con los puestos o roles que desempeña el equipo de trabajo que tiene que ver con esta función.
            p En la jerarquización de la comunicación con los clientes juegan un papel fundamental los representantes de servicio al cliente, los agentes de los call center, los supervisores de servicio al cliente, los gerentes de servicio al cliente, los representantes de soporte técnico, los ingenieros de soporte técnico, etc.
            p.mb-0 Los representantes de servicio al cliente deben tener las siguientes cualidades:

    .row.justify-content-center.mb-4.mb-lg-5
      .col-md-4.col-lg-4.mb-4.mb-xl-0(data-aos="fade-up")
        .tarjeta-numerada.color-primario.ps-5.px-4.py-3.h-100.d-flex.align-items-center
          .tarjeta-numerada__numero
            .h2 1
          P.mb-0 Capacidad de escuchar atentamente las necesidades del cliente en poco tiempo.
      .col-md-4.col-lg-4.col-xl-3.mb-4.mb-xl-0(data-aos="fade-up")
        .tarjeta-numerada.color-primario.ps-5.px-4.py-3.h-100.d-flex.align-items-center
          .tarjeta-numerada__numero
            .h2 2
          P.mb-0 Empatizar con el cliente, ponerse en sus zapatos.
      .col-md-4.col-lg-4.col-xl-3.mb-4.mb-xl-0(data-aos="fade-up")
        .tarjeta-numerada.color-primario.ps-5.px-4.py-3.h-100.d-flex.align-items-center
          .tarjeta-numerada__numero
            .h2 3
          P.mb-0 Tener flexibilidad frente a los requerimientos del cliente.
    
    .row.justify-content-center.mb-6
      .col-xl-10
        p Los roles de servicio al cliente varían en su nombre, en algunas empresas les llaman agentes de servicio al cliente o representantes de servicio al cliente, agentes o representantes de atención al cliente. 
        p.mb-0 A continuación, se presentan los roles que cumplen los representantes de servicio al cliente y las funciones que cada uno desarrolla, es a ellos que los clientes deben acudir para resolver sus situaciones.

    div.slider-wrapper.z-2.mb-6
      .bg-fullwidth
      .tarjeta.tarjeta--blanca.position-relative.p-4.pt-5.z-2.my-5
        SlyderA(tipo="b")
          .row.z-2.justify-content-center.align-items-center
            .col-lg-5
              h4.mb-4 Representante de servicio al cliente
              p.mb-4.mb-lg-0 Estos funcionarios son los encargados de responder las preguntas del cliente referente a los productos o servicios, procedimientos y políticas de la empresa, también se encargan de resolver problemas, tomar pedidos, manejo de devoluciones de mercancía, responden quejas y facilitan información sobre las ofertas de la empresa, deben resolver diariamente correos electrónicos y llamadas telefónicas.
            .col-lg-6
              figure
                img(src='@/assets/curso/tema4/26.png', alt='Imagen de acompañamiento')
          .row.z-2.justify-content-center.align-items-center
            .col-lg-5
              h4.mb-4 Agente de centro de llamadas
              p.mb-4.mb-lg-0 Los funcionarios del centro de llamadas (call center) laboran internamente o en forma remota a través de  un centro de llamadas virtual, entre sus funciones está responder llamadas, solucionar quejas, despertar interés en el cliente y resolver transacciones, estos funcionarios reciben un gran número de llamadas al día.
            .col-lg-6
              figure
                img(src='@/assets/curso/tema4/27.png', alt='Imagen de acompañamiento')
          .row.z-2.justify-content-center.align-items-center
            .col-lg-5
              h4.mb-4 Supervisor de servicio al cliente
              p.mb-4.mb-lg-0 Estos funcionarios supervisan al equipo de agentes o representantes de servicio al cliente, participan en el proceso de contratación de los mismos, ayudando a entrevistar y preseleccionar a los candidatos al cargo de servicio al cliente, también participan en el entrenamiento y capacitación del nuevo equipo.
            .col-lg-6
              figure
                img(src='@/assets/curso/tema4/28.png', alt='Imagen de acompañamiento')
          .row.z-2.justify-content-center.align-items-center
            .col-lg-5
              h4.mb-4 Gerente de servicio al cliente
              p.mb-4.mb-lg-0 Son los responsables de supervisar a los equipos de atención al cliente, así como  de la contratación y la capacitación de los nuevos representantes de servicio al cliente, realizan seguimiento del rendimiento y progreso de los mismos, es el encargado de gestionar los conflictos que involucren a clientes y representantes del servicio al cliente.
            .col-lg-6
              figure
                img(src='@/assets/curso/tema4/29.png', alt='Imagen de acompañamiento')
          .row.z-2.justify-content-center.align-items-center
            .col-lg-5
              h4.mb-4 Defensor del cliente
              p.mb-4.mb-lg-0 Estos funcionarios se encargan de representar los intereses del cliente en las empresas, son responsables de impulsar cambios internos en la organización con el fin de satisfacer las expectativas del cliente.
            .col-lg-6
              figure
                img(src='@/assets/curso/tema4/30.png', alt='Imagen de acompañamiento')

    Separador
    
    .row.justify-content-center
      .col-xl-10
        #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 4.3 Técnicas de comunicación oral, escrita y corporal

    .row.justify-content-center.mb-4.mb-lg-5
      .col-xl-10
        p Se debe tener en cuenta que la comunicación es una habilidad muy importante para relacionarse con los demás, ella permite compartir sentimientos, emociones y pensamientos en los entornos familiar, laboral y social, como la comunicación se logra a través de trasmisión de mensajes verbales y no verbales, hay que tener en cuenta que a veces los mensajes pueden malinterpretarse entre las personas y esto sucede porque no se da una comunicación efectiva y no se tienen en cuenta las técnicas de comunicación.
        p.mb-0 A continuación, se muestran las técnicas de comunicación con sus objetivos y estrategias:

    .row.justify-content-center
      .col-12.col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 2.
          span Técnicas objetivos y estrategias de comunicación.
        .tabla-a.color-primario
          table
            caption <b>Nota.</b> Tomada de Cámara de Comercio de Medellín (s. f.).
            thead
              tr
                th Técnica
                th Objetivo
                th Estrategia
            tbody
              tr
                td Comunicación efectiva oral.
                td 
                  ul.lista-ul
                    li.d-flex 
                      i.far.fa-dot-circle.text-secundario-variante
                      | Cuidar las palabras.
                    li.d-flex 
                      i.far.fa-dot-circle.text-secundario-variante
                      | Cuidar el tono y volumen de voz.
                    li.d-flex 
                      i.far.fa-dot-circle.text-secundario-variante
                      | Ofrecer una comunicación constructiva.
                    li.d-flex 
                      i.far.fa-dot-circle.text-secundario-variante
                      | Manejar un nivel emocional adecuado.
                td 
                  ul.lista-ul
                    li.d-flex 
                      i.fas.fa-check-circle.text-primario
                      | Las ideas emitidas deben ser claras por medio de palabras entendibles y coherentes para evitar posibles interpretaciones.
                    li.d-flex 
                      i.fas.fa-check-circle.text-primario
                      | Se debe mantener un nivel de voz acorde a la situación en la que se encuentre el emisor
                    li.d-flex 
                      i.fas.fa-check-circle.text-primario
                      | Debe generarse el intercambio de ideas objetivas, ya que esto incrementa las posibilidades de obtener un diálogo positivo.
                    li.d-flex 
                      i.fas.fa-check-circle.text-primario
                      | Se deben controlar adecuadamente las emociones, sentimientos y pensamientos que se generen durante la conversación para no perder el objetivo principal del diálogo.
              tr
                td Comunicación efectiva no verbal.
                td 
                  ul.lista-ul
                    li.d-flex 
                      i.far.fa-dot-circle.text-secundario-variante
                      | Utilizar lenguaje corporal.
                    li.d-flex 
                      i.far.fa-dot-circle.text-secundario-variante
                      | Mantener contacto visual.
                    li.d-flex 
                      i.far.fa-dot-circle.text-secundario-variante
                      | Cuidar los gestos de la cara.
                td 
                  ul.lista-ul
                    li.d-flex 
                      i.fas.fa-check-circle.text-primario
                      | Este lenguaje se debe cuidar, ya que es el que tiene que ver con los movimientos del cuerpo y la postura, con ellos expresamos que aprobamos o desaprobamos la situación en la que nos encontramos.
                    li.d-flex 
                      i.fas.fa-check-circle.text-primario
                      | Con la mirada se expresan sentimientos de alegría, enojo o tristeza, se recomienda en esta técnica que se debe mantener un contacto visual con el cliente para darle confianza y seguridad a la hora de atenderlo. 
                    li.d-flex 
                      i.fas.fa-check-circle.text-primario
                      | La cara es la parte de nuestro cuerpo que presenta mayor gestualización, a la hora de atender al cliente se debe ser muy cuidadoso evitando hacer gestos negativos que puedan alterarlo.

    Separador

    .row.justify-content-center
      .col-xl-10
        #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.4 Técnicas de comunicación efectiva y asertiva

    .row.justify-content-center.mb-4.mb-lg-5
      .col-xl-10
        p.mb-0 Para tener una comunicación asertiva y efectiva, se pueden utilizar las siguientes sugerencias:

    .row.mb-5.bg-primario-claro.p-4.justify-content-center.align-items-center
      .col-12.col-lg-7
        ol.lista-ol--cuadro
          li.d-flex 
            .lista-ol--cuadro__vineta.text-bold.text-black
              span 1
            | Manejar las emociones y opiniones, así se aprenderá a comunicarlas.
          li.d-flex 
            .lista-ol--cuadro__vineta.text-bold.text-black
              span 2
            | Siempre atender al cliente mirando a sus ojos cuando le esté hablando.
          li.d-flex 
            .lista-ol--cuadro__vineta.text-bold.text-black
              span 3
            | Hacer preguntas que le demuestren al cliente que ha captado su interés.
          li.d-flex 
            .lista-ol--cuadro__vineta.text-bold.text-black
              span 4
            | Permitir que el cliente hable, no interrumpirlo y aprender a identificar el momento de intervenir. 
          li.d-flex 
            .lista-ol--cuadro__vineta.text-bold.text-black
              span 5
            | No cambiar el tema abruptamente, ser paciente. 
          li.d-flex 
            .lista-ol--cuadro__vineta.text-bold.text-black
              span 6
            | Ser empático con la persona que esté hablando, maneje su lenguaje no verbal. 
          li.d-flex 
            .lista-ol--cuadro__vineta.text-bold.text-black
              span 7
            | Permitir que el cliente hable, no hacer de la conversación un monólogo, así habrá una buena retroalimentación y los dos aportarán sus opiniones. 
          li.d-flex 
            .lista-ol--cuadro__vineta.text-bold.text-black
              span 8
            | Ser muy cuidadoso con las respuestas sean verbales o no verbales. 
          li.d-flex 
            .lista-ol--cuadro__vineta.text-bold.text-black
              span 9
            | No juzgar a las personas, centrarse en el contenido de la conversación.
      .col-12.col-lg-5.align-items-center
        figure
          img(src='@/assets/curso/tema4/31.svg', alt='Texto que describa la imagen')
    //- READY

    .row.justify-content-center.mb-4.mb-lg-5
      .col-xl-10
        p.mb-0 En los siguientes dos videos se expone qué es la comunicación asertiva y algunos criterios para utilizarla.

    .row.justify-content-center
      .col-xl-10
        h4(data-aos='zoom-in-right').mb-4
          span.etiqueta-title Comunicación asertiva
    .video.mb-4.mb-lg-5
      iframe(width="560" height="315" src="https://www.youtube.com/embed/VXQJ7DGmkio" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen) 

    .row.justify-content-center
      .col-xl-10
        h4(data-aos='zoom-in-right').mb-4
          span.etiqueta-title Criterios de comunicación asertiva

    .video.mb-4.mb-lg-5
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
