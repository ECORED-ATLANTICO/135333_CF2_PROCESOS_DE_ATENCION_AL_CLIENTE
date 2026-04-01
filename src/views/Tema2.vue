<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Normatividad de seguridad de la información para contactar al cliente 
    
    .fullwidth-bg.fullwidth-bg--2
    .row.mb-5.z-2.justify-content-center         
      .col-12.col-md-8.col-lg-4(data-aos="fade-right")
        figure
          img.mb-4.mb-lg-0(src='@/assets/curso/tema2/1.png' alt='')
      .col-12.col-lg-8(data-aos="fade-left")
        p Ahora se verá más acerca de la normatividad en seguridad de la información. Según la norma ISO 27002, las empresas deben tomar medidas de seguridad para proteger los datos de los clientes, pues ellos son tan importantes como los productos y servicios que se estén ofertando; la protección de la información es el pilar fundamental de las empresas para brindar la confianza necesaria a sus clientes, a la marca y para captar nuevas oportunidades de negocios.
        .p-4.bg-primario-claro
          p.mb-0 En Colombia, la entidad que regula y vigila el tratamiento de los datos de los usuarios es el Ministerio de las TIC que aplica los estándares de la norma ISO 27002 para tal fin. La norma ISO 27002 (anteriormente denominada ISO 17799) es un estándar para la seguridad de la información que ha publicado la Organización Internacional de Normalización y la Comisión Electrotécnica Internacional; la versión más reciente de la norma es la ISO 27002:2013.
           
    p.mb-3 La norma ISO 27002 se debe implementar elaborando y manteniendo un inventario de activos de información, donde se muestren los propietarios de los activos con todos sus detalles, se debe utilizar un código de barras que facilite las tareas para la realización de los inventarios y vincular los equipos de tecnología de la información TI, que ingresan y salen de las instalaciones y los empleados responsables de ellos.
    p.mb-5 Para comprender más este tema, en el siguiente video se ofrecen los elementos generales de la seguridad de la información digital o ciberseguridad.

    figure.mb-5
      .video.mb-2
        iframe(width="560" height="315" src="https://www.youtube.com/embed/5M3bkF9qK5Y" title="Ciberseguridad" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
      figcaption #[strong Video]: ciberseguridad

    .row.justify-content-center.mb-4.mb-lg-5
      .col-xl-10
        p.mb-0 Existen cinco prácticas muy utilizadas por las empresas para garantizar la protección de datos de los clientes, a saber:

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 1.
          span Prácticas para la protección de datos
        img.mb-2.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema2/2-mob.svg", alt="alt")
        img.mb-2.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema2/2.svg", alt="alt")
        figcaption #[strong Nota.] SENA, 2026.

    p.mb-4.mb-lg-5 A continuación, se desarrolla cada una de las prácticas que garantizan la protección de los datos de los clientes:

    TabsB.color-secundario.mb-5(data-aos="fade-left")
      .p-3.p-lg-5(titulo="Medios electrónicos certificados")
        .row.align-items-center.justify-content-around
          .col-lg-8.col-xl-7
            h4 Medios electrónicos certificados
            p Para garantizar la protección de datos tanto del cliente como de la empresa se deben ejecutar acuerdos y aprobaciones usando una tecnología segura, en la actualidad puede realizarse desde un computador, un celular o una tableta.
            p.mb-4.mb-lg-0 Se recomienda la utilización de herramientas electrónicas rápidas y seguras, como por ejemplo la firma electrónica que permite cargar y enviar archivos protegidos evitando que otros los firmen, ya que es una tecnología vanguardista de criptografía de datos que ofrece una mayor protección y respeta las exigencias del mercado. De esta manera se estarán protegiendo los datos del cliente y de la empresa y brindando un excelente servicio en las transacciones electrónicas y dejar constancia de la veracidad del firmante.
          .col-8.col-md-6.col-lg-4.col-xl-3
            figure
              img.img-180(src='@/assets/curso/tema2/3.svg', alt='Texto que describa la imagen')
      .p-3.p-lg-5(titulo="Copia de seguridad")
        .row.align-items-center.justify-content-around
          .col-lg-8.col-xl-7
            h4 Copia de seguridad
            p Se crea una copia <em>"backup"</em>, que es una copia de seguridad de los datos que se elijan desde el lugar donde se esté, ya sea desde el computador, celular, tableta o cualquier otro dispositivo del que se disponga.
            p.mb-4.mb-lg-0 Lo importante es contar con una mayor seguridad de toda la información para luego disponer de ella a cualquier hora del día durante todo el año y poder recuperarla en caso de que sea necesario.
          .col-8.col-md-6.col-lg-4.col-xl-3
            figure
              img.img-180(src='@/assets/curso/tema2/4.svg', alt='Texto que describa la imagen')
      .p-3.p-lg-5(titulo="Carpetas con contraseñas")
        .row.align-items-center.justify-content-around
          .col-lg-8.col-xl-7
            h4 Carpetas con contraseñas
            p.mb-4.mb-lg-0 Para mejorar la seguridad de los datos del cliente se puede personalizar a cada uno, organizándolos en carpetas individuales con claves específicas a las que solo tengan acceso y las conozca el personal autorizado para esta función.
          .col-8.col-md-6.col-lg-4.col-xl-3
            figure
              img.img-180(src='@/assets/curso/tema2/5.svg', alt='Texto que describa la imagen')
      .p-3.p-lg-5(titulo="<em>Backup</em> en la nube")
        .row.align-items-center.justify-content-around
          .col-lg-8.col-xl-7
            h4 <em>Backup</em> en la nube
            p El <em>cloud storage</em> (almacenamiento en la nube) es un servicio tecnológico creado para obtener mayor espacio de almacenamiento, caracterizado por fácil acceso a la información y la protección de los datos del cliente.
            p.mb-4.mb-lg-0 Hace algunos años la información la guardábamos en dispositivos poco seguros, disquetes, discos ZIP, USB, DVD, CD o discos portátiles que, con el tiempo, algunos de estos se dañaban y se perdía la información o peor aún si se perdían podían caer en manos no deseadas.
          .col-8.col-md-6.col-lg-4.col-xl-3
            figure
              img.img-180(src='@/assets/curso/tema2/6.svg', alt='Texto que describa la imagen')
      .p-3.p-lg-5(titulo="Centralización de la información")
        .row.align-items-center.justify-content-around
          .col-lg-8.col-xl-7
            h4 Centralización de la información 
            p Gracias a que se pueden centralizar los datos en la nube, se evita que estén dispersos en varios programas con diferentes métodos de autenticación y de acceso.
            p.mb-4.mb-lg-0 Es muy importante preservar tanto los datos del cliente como también las claves de acceso, que permanezcan en un solo lugar hace más fácil y práctico el trabajo.
          .col-8.col-md-6.col-lg-4.col-xl-3
            figure
              img.img-180(src='@/assets/curso/tema2/7.svg', alt='Texto que describa la imagen')
    
    .row.justify-content-center.mb-4.mb-lg-5
      .col-xl-10
        p Según cifras del DANE, en el 2021 aumentaron en un 30 % los ciberataques en Colombia.

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 2.
          span Ciberataques en Colombia
        img.mb-2.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema2/8-mob.svg", alt="pendiente text alt")
        img.mb-2.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema2/8.svg", alt="pendiente text alt")
        figcaption #[strong Nota.] SENA, 2026.

    .row.justify-content-center
      .col-xl-10
        h4(data-aos='zoom-in-right').mb-4
          span.etiqueta-title Tecnología segura

    .row.justify-content-center.mb-4.mb-lg-5
      .col-xl-10
        p.mb-0 Toda empresa u organización debe tener herramientas de seguridad digital para proteger los datos del cliente, esto le ofrecerá la tranquilidad y seguridad ya que la tecnología segura no permite que #[em software] malicioso ingrese y robe los datos que tenga de su cliente interno y su cliente externo, algunas de estas herramientas son:

    .row.justify-content-center.mb-4.custom-tabs
      .col-xl-10
        TabsA.color-primario.mb-5(data-aos="fade-down")
          .tarjeta.bg-primario-claro.p-4(titulo="<em>Software</em> de monitoreo a distancia")
            .row.align-items-center.p-4
              .col-12.col-lg-3.align-items-center.mb-3.mb-lg-0
                figure.justify-center
                  img.img-140(src='@/assets/curso/tema2/9.svg', alt='Texto que describa la imagen')
              .col-12.col-lg-9
                p.mb-0 La herramienta de monitoreo remoto permite emitir diagnóstico y recopilar la información de los diferentes #[em software] y #[em hardware] que logren resolver cualquier eventualidad que pueda presentarse manteniendo la red en constante vigilancia para asegurar un correcto funcionamiento.
          .tarjeta.bg-primario-claro.p-4(titulo="Escáner de vulnerabilidades")
            .row.align-items-center.p-4
              .col-12.col-lg-3.align-items-center.mb-3.mb-lg-0
                figure.justify-center
                  img.img-140(src='@/assets/curso/tema2/10.svg', alt='Texto que describa la imagen')
              .col-12.col-lg-9    
                p.mb-0 Este sistema está hecho para detectar, evaluar y gestionar cualquier fragilidad que pueda existir en el sistema de forma que se puedan identificar y priorizar los puntos vulnerables de seguridad para disminuir y eliminar las probabilidades de engaño (#[em phishing]) y fraude de información confidencial.
          .tarjeta.bg-primario-claro.p-4(titulo="Servidor <em>proxy</em>")
            .row.align-items-center.p-4
              .col-12.col-lg-3.align-items-center.mb-3.mb-lg-0
                figure.justify-center
                  img.img-140(src='@/assets/curso/tema2/11.svg', alt='Texto que describa la imagen')
              .col-12.col-lg-9    
                p.mb-0 Es un instrumento o herramienta digital que sirve de intermediario entre el dispositivo y el ordenador que se tenga conectado al Internet o servidor al que se esté accediendo, se puede utilizar para bloquear sitios web que se consideren peligrosos o prohibidos para las empresas o instituciones educativas, pues evita que se filtre la información inadecuada.


    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-sm-8.col-md-6.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema2/15.png", alt="descripcion")
      .col-lg-6
        p Las empresas tuvieron que cambiar su estructura e invertir en seguridad digital para la protección de sus datos y los de sus clientes ante la enorme transformación digital que vive el mundo. Como las empresas deben tener seguros sus procesos para captar potenciales clientes, esto no solo debe hacerse en términos digitales, sino también jurídicos lo que le generará confianza al cliente.
        p.mb-0 La utilización de medidas jurídicas para la protección de la información es una de las técnicas más antiguas y efectivas dentro del ámbito laboral, y funcionan de la siguiente manera:


    .row.justify-content-center.mb-4.mb-lg-5
      .col-xl-10
        h4(data-aos='zoom-in-right').mb-4
          span.etiqueta-title Medidas jurídicas
    
    .row.justify-content-center.align-items-stretch.mb-4.mb-lg-5
      .col-md-8.col-lg-6.mb-4.mb-lg-0
        .rounded-4.overflow-hidden.h-100
          img(data-aos="fade-up", src="@/assets/curso/tema2/12.png", alt="imagen de acompañamiento")
          .bg-secundario-medio.p-4.custom-mh
            h5 Físicamente
            p.mb-0 Son documentos tipificados que describen responsabilidades y prohibiciones mediante un número no definido de cláusulas para la protección de información y violación de datos.
      .col-md-8.col-lg-6
        .rounded-4.overflow-hidden.h-100
          img(data-aos="fade-up", src="@/assets/curso/tema2/13.png", alt="imagen de acompañamiento")
          .bg-secundario-medio.p-4
            h5 Digitalmente
            p.mb-0 Son soluciones de cifrado de datos que bloquean el acceso a terceros, evitando que cualquier persona pueda consultar la información garantizando la confidencialidad de los datos del cliente.

    .row.justify-content-center.mb-4.mb-lg-5
      .col-xl-10
        .d-flex.flex-column.flex-lg-row.justify-content-center.align-items-center.z-2.bg-terciario-medio.p-4
          .col-8.col-lg-3
            figure
              img.img-250.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema2/14.svg", alt="descripcion")
          .col-lg-9
            .ps-lg-4
              h5 Recomendación
              p.mb-0 Se recomienda a todos los departamentos empresariales implementar todas las medidas de seguridad posibles, asimismo, hacer fluir la información de términos y condiciones organizacionales lo que afianzará las funciones de sus trabajadores para alcanzar un desempeño productivo y seguro de cara al cliente.










</template>

<script>
export default {
  name: 'Tema2',
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
