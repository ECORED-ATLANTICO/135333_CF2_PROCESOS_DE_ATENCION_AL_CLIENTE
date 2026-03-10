export default {
  global: {
    Name: 'Protocolos de servicio al cliente',
    Description:
      'Se debe planificar de forma integral lo que se va a ofrecer durante el proceso de venta y una herramienta eficaz para garantizarlo es la aplicación del protocolo con visión incluyente. Todos los funcionarios de atención al cliente deben estar en constante capacitación para garantizar que la experiencia que él viva certifique la calidad del producto o servicio recibido.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        desarrolloContenidos: true,
        numero: '1',
        titulo: 'Recursos tecnológicos para atender al cliente ',
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Tipos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Características',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Manejo',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Normatividad de seguridad de la información para contactar al cliente',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Portafolio de servicios',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Elementos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Características',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'La comunicación con el cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Características, tipos y elementos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Jerarquización',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Técnicas de comunicación oral, escrita y corporal',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Técnicas de comunicación efectiva y asertiva',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo:
          'Etiqueta y protocolo en la atención al cliente, reglas y normas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Relaciones interpersonales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Tipos',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Factores',
            hash: 't_6_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA2_135333__DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Canal de comunicación',
      significado:
        'medio físico a través del cual se puede comunicar, sirve para el intercambio de información entre el emisor y el receptor ya sea oral, escrito, lenguaje de señas, etc.',
    },
    {
      termino: 'Comunicación',
      significado:
        'acción consciente de intercambio entre dos o más personas para recibir o trasmitir información.',
    },
    {
      termino: 'Etiqueta',
      significado:
        'norma de conducta que cumple expectativas en el comportamiento social, gana importancia en los eventos públicos y privados que requieran de ceremonia.',
    },
    {
      termino: 'Jerarquización',
      significado:
        'estructura que establece orden, refiere ordenar algo según la jerarquía de niveles, grados, importancia, etc.',
    },
    {
      termino: 'Normatividad',
      significado:
        'conjunto de leyes o reglamentos que contienen las conductas y procedimientos que deben cumplir las personas en instituciones, empresas, países, etc. ',
    },
    {
      termino: 'Portafolio de productos y servicios',
      significado:
        'recopilación de productos y servicios ofrecidos por las empresas, es una herramienta fundamental para las ventas.',
    },
    {
      termino: 'Protocolo',
      significado:
        'sistema de reglas que establecen la estandarización tanto de la comunicación como de procesos que se llevan a cabo en una empresa.',
    },
    {
      termino: 'Recursos tecnológicos',
      significado:
        'medio que se vale de la tecnología para cumplir el propósito para el cual se hizo, puede ser una computadora, un teléfono móvil, una máquina, etc.',
    },
    {
      termino: 'Relaciones interpersonales',
      significado:
        'interacción entre dos o más personas, se trata de relaciones sociales donde se dan sentimientos, emociones como por ejemplo el amor, los gustos, los intereses, etc.',
    },
  ],
  referencias: [
    {
      referencia:
        'Arismendy, A. (2013). <i>¿Cómo vender?, manual de ventas y atención al cliente.</i> A. Arismendy.',
      link: '',
    },
    {
      referencia: 'Barbera, G. E. (2013). <i>El estilo e-portafolio.</i> UOC.',
      link: '',
    },
    {
      referencia:
        'Cajal, F., A. (2020). <i>Portafolio de servicios: tipos, partes y ejemplos.</i> Lifeder.',
      link: '',
    },
    {
      referencia:
        'Cámara de Comercio de Medellín. (s. f.). <i>Protocolo de atención a personas en situación de discapacidad.</i>',
      link:
        'https://www.camaramedellin.com.co/Portals/0/Documentos/Transparencia/accesibilidad/Protocolo_atencion_personas_discapacidad_movilidad_reducida_y_orden_preferencial.pdf',
    },
    {
      referencia:
        'Carrera, F., Jiménez, G., A., y Viera, L., L. (2019). <i>Técnicas de comunicación.</i> IC Editorial.',
      link: '',
    },
    {
      referencia:
        'Fernández, A. M. (2021). <i>Definición de relaciones interpersonales. Tipos, instancias y rasgos.</i> Definicion.com.',
      link: 'Https://definicion.com/relaciones-interpersonales/',
    },
    {
      referencia:
        'Funiber.org. (2017). <i>Beneficios, tecnología y empresas.</i>',
      link: 'https://blogs.funiber.org/direccion-empresarial',
    },
    {
      referencia:
        'IMF-formación.com. (2019). <i>Atención al cliente medios tecnológicos. Blog marketing.</i>',
      link:
        'https://blogs.imf-formacion.com/blog/marketing/atencion-al-cliente-medios-tecnologicos/',
    },
    {
      referencia:
        'Instituto Nacional de Ciberseguridad. (2020). <i>Cómo proteger la información de los clientes.</i>',
      link:
        'https://www.incibe.es/protege-tu-empresa/blog/proteger-informacion-personal-los-clientes-empresa',
    },
    {
      referencia:
        'Julia, M. U. (2020). <i>Características de la comunicación.</i>',
      link: 'https://www.caracteristicas.co/comunicacion',
    },
    {
      referencia:
        'Mateos, M. Á. (2012). <i>Atención básica al cliente.</i> IC Editorial.',
      link: '',
    },
    {
      referencia:
        'Models, Inc., & Communication. (2011). <i>Shannon and weaver model of communication.</i> Communication theory.',
      link:
        'https://www.communicationtheory.org/shannon-and-weaver-model-of-communication/',
    },
    {
      referencia:
        'Novella, R., Repetto, A., Robino, C., & Rucci, G. (2018). <i>Millennials en América Latina y el Caribe: ¿trabajar o estudiar? (resumen ejecutivo).</i> Interamerican Development Bank.',
      link: 'https://doi.org/10.18235/0001411',
    },
    {
      referencia:
        'Oliveras, R., I. (2009). <i>El cliente y la calidad en el servicio.</i> Editorial Trillas.',
      link: '',
    },
    {
      referencia:
        'Pérez, R., W. (2021). <i>El protocolo en la atención al cliente.</i>',
      link:
        'https://www.protocolo.org/social/etiqueta-social/el-protocolo-en-la-atencion-al-cliente.html',
    },
    {
      referencia:
        'Tiposde.com. (2017). <i>Tipos de relaciones interpersonales.</i>',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre ',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional - Santander',
        },
        {
          nombre: 'Esperanza Cardona Grisales',
          cargo: 'Experta temática',
          centro: 'Centro de Comercio y Servicios Regional - Cauca',
        },
        {
          nombre: 'Nelly Parra Guarín',
          cargo: 'Experta temática',
          centro:
            'Centro de la Industria, la empresa y los Servicios Regional - Huila',
        },
        {
          nombre: 'Alex García',
          cargo: 'Diseñador instruccional',
          centro:
            'Centro de la Industria, la Empresa y los Servicios Regional - Norte de Santander ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martínez Torres ',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico ',
        },
        {
          nombre: 'Fabio Fonseca Arguelles',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico ',
        },

        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual ',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Zuleidy María Ruíz Torres',
          cargo: 'Producción audiovisual',
          centro: 'Centro de Comercio y Servicios Regional - Tolima',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional - Santander',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional - Santander',
        },
        {
          nombre: 'Camilo Andrés Bolaño Rey',
          cargo: 'Locución',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional - Santander',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional - Santander',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional - Santander',
        },
        {
          nombre: 'Yicelly Estefania Mesa Silva',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional - Santander',
        },
        {
          nombre: 'Ludwyng Corzo García',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional - Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
