export default {
  global: {
    componenteFormativo:
      'Caracterización del servicio público domiciliario de aseo',
    descripcionCurso:
      'El presente componente tiene como propósito establecer los principios básicos para la prestación del servicio de aseo urbano, sus componentes y elementos funcionales, las definiciones y los procedimientos generales que se deben tener en cuenta para el diseño de los sistemas de aseo y los procedimientos particulares para el desarrollo de éstos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
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
        numero: '1',
        titulo: 'Barrido y lavado de vías',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Tipos de barrido y limpieza',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tipos de recolección',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Actores involucrados',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Programación de actividades',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Actividades para tener en cuenta',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Recursos',
            hash: 't_1_6',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Micro y macro rutas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Diseño de macro rutas',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Diseño de micro rutas',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Diseño de rutas de barrido',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Horarios de recolección',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Frecuencias de recolección',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Divulgación de las rutas y horarios',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: 'Cumplimiento de las rutas',
            hash: 't_2_7',
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA17.pdf',
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
  complementario: [
    {
      tema: 'Normatividad',
      referencia:
        'Decreto 1077. Presidente de la república de Colombia. Bogotá. Colombia. 26 mayo 2015.',
      tipo: 'Normatividad',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77216',
    },
    {
      tema: 'Desechos en recursos',
      referencia:
        'NotimexTV. (8 de octubre de 2019). Alerta ONU peligros por millones de toneladas de residuos urbanos. YouTube. [Video].',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=bw95wl8mJVo',
    },
    {
      tema: 'Recursos Educativos Digitales SENA',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA Elementos protección Personal - marzo 2023.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Oo-DlGcp3fY&t=3s',
    },
  ],
  glosario: [
    {
      termino: 'Área pública',
      significado:
        'es aquella destinada al uso, recreo o tránsito público, como parques, plazas, plazoletas y playas salvo aquellas con restricciones de acceso (Decreto 1077, 2015)',
    },
    {
      termino: 'Barrido y limpieza de vías y áreas públicas',
      significado:
        'es la actividad del servicio público de aseo que consiste en el conjunto de acciones tendientes a dejar las áreas y las vías públicas libres de todo residuo sólido, esparcido o acumulado, de manera que dichas áreas queden libres de papeles, hojas, arenilla y similares y de cualquier otro objeto o material susceptible de ser removido manualmente o mediante el uso de equipos mecánicos (Decreto 1077, 2015).',
    },
    {
      termino: 'Cuneta',
      significado:
        'zanja, revestida o no, ubicada a cada lado de las vías, destinadas a facilitar el drenaje superficial longitudinal de las mismas y que son objeto de barrido o limpieza por parte del prestador del servicio de aseo en su área de atención (Decreto 1077, 2015).',
    },
    {
      termino: 'Frecuencia del servicio',
      significado:
        'es el número de veces en un periodo definido que se presta el servicio público de aseo en sus actividades de barrido, limpieza, recolección y transporte, corte de césped y poda de árboles (Decreto 1077, 2015).',
    },
    {
      termino: 'Plan de gestión integral de residuos sólidos (PGIRS)',
      significado:
        'es el instrumento de planeación municipal o regional que contiene un conjunto ordenado de objetivos, metas, programas, proyectos, actividades y recursos definidos por uno o más entes territoriales para el manejo de los residuos sólidos, basado en la política de gestión integral de los mismos, el cual se ejecutará durante un período determinado, basándose en un diagnóstico inicial, en su proyección hacia el futuro y en un plan financiero viable que permita garantizar el mejoramiento continuo del manejo de residuos y la prestación del servicio de aseo a nivel municipal o regional, evaluado a través de la medición de resultados. Corresponde a la entidad territorial la formulación, implementación, evaluación, seguimiento y control y actualización del PGIRS (Decreto 1077, 2015).',
    },
    {
      termino: 'Recolección en acera',
      significado:
        'es la que se efectúa cuando los residuos sólidos son presentados por los usuarios para su recolección en el andén ubicado frente a su predio o domicilio (Ministerio de vivienda, ciudad y territorio, 2012).',
    },
    {
      termino: 'Recolección en unidades de almacenamiento',
      significado:
        'es la que se efectúa cuando los residuos sólidos generados por los usuarios se presentan para su recolección en forma conjunta en cajas de almacenamiento (Ministerio de vivienda, ciudad y territorio, 2012).',
    },
    {
      termino: 'Reglamento técnico',
      significado:
        'reglamento de carácter obligatorio expedido por la autoridad competente, con fundamento en la Ley, que suministra requisitos técnicos, bien sea directamente o mediante referencia o incorporación del contenido de una norma nacional, regional o internacional, una especificación técnica o un código de buen procedimiento (Ministerio de vivienda, ciudad y territorio, 2012).',
    },
  ],
  referencias: [
    {
      referencia:
        'Decreto 1077 de 2015. [Presidencia de la República de Colombia]. Por medio del cual se expide el Decreto Único Reglamentario del Sector Vivienda, Ciudad y Territorio. Bogotá. Colombia. 26 mayo 2015.',
    },
    {
      referencia:
        'Decreto 1077 de 2015. [Presidencia de la República de Colombia]. Por medio del cual se expide el Decreto Único Reglamentario del Sector Vivienda, Ciudad y Territorio. Bogotá. Colombia. 26 mayo 2015.',
    },
    {
      referencia:
        'Decreto 596 de 2016. [Presidencia de la República de Colombia].  Bogotá. Por el cual se modifica y adiciona el Decreto 1077de 2015 en lo relativo con el esquema de la actividad de aprovechamiento del servicio público de aseo y el régimen transitorio para la formalización de los recicladores de oficio, y se dictan otras disposiciones. Colombia. 11 abril 2016.',
    },
    {
      referencia:
        'Ministerio de Vivienda, Ciudad y Territorio. (2012). Reglamento Técnico del Sector Agua Potable y Saneamiento Básico (RAS). Título F de sistemas de aseo urbano. Bogotá, D.C. Colombia.',
    },
    {
      referencia:
        'NotimexTV. (8 de octubre de 2019). Alerta ONU peligros por millones de toneladas de residuos urbanos. YouTube.',
      link: 'https://www.youtube.com/watch?v=bw95wl8mJVo',
    },
    {
      referencia:
        'Resolución 709 de 2015. [Comisión de Regulación de Agua Potable y Saneamiento Básico (CRA)]. “Por la cual se regulan las condiciones generales de los acuerdos de barrido y limpieza, que los prestadores suscriban y se establece una metodología que permita calcular y asignar geográficamente los kilómetros de barrido y limpieza que corresponden a cada prestador en los casos en que se deben resolver controversias suscitadas entre los prestadores del servicio público de aseo que realicen la actividad de barrido y limpieza de vías y áreas públicas en un área de confluencia.  Bogotá. Colombia. 26 febrero 2015.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Xiomara Becerra Aldana',
          cargo: 'Instructora Ambiental',
          centro: 'Regional Distrito Capital - Centro de gestión industrial',
        },
        {
          nombre: 'Jesús Ricardo Arias Munevar',
          cargo: 'Instructor Ambiental',
          centro: 'Regional Distrito Capital - Centro de gestión industrial',
        },
        {
          nombre: 'Silvia Milena Sequeda Cárdenas',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Distrito Capital - Centro de diseño y metrología',
        },
        {
          nombre: 'Sergio Arturo Medina Castillo',
          cargo: 'Diseñador Instruccional',
          centro:
            'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Revisora Metodológica y Pedagógica',
          centro:
            'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Revisión y corrección de estilo',
          centro:
            'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor pedagógico',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Nelly Parra Guarín',
          cargo: 'Adecuación instruccional - 2023',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Metodología para la formación virtual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmín Rocío Figueroa Pacheco',
          cargo: 'Diseñador web-2023',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador Fullstack-2023',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lady Adriana Ariza Luque',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Leyson Fabian Castaño Pérez',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
