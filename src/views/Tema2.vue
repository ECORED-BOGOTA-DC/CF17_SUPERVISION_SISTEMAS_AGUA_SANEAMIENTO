<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Micro y macro rutas

    .BGM02.px-md-5.px-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema2/img01.png')
        .col-lg-8
          p Para hacer la recolección de los residuos sólidos desde las viviendas de los usuarios hasta los puntos de disposición o de aprovechamiento se deben diseñar rutas para hacer los recorridos de forma eficiente .
          p De acuerdo con el Decreto 2981 (2013), cuando se habla de la división geográfica de una ciudad, zona o área de prestación del servicio para la distribución de los recursos y equipos a fin de optimizar la actividad de recolección de residuos, barrido y limpieza de vías y áreas públicas y/o corte de césped y poda de árboles ubicados en las vías y áreas públicas, se habla de macro ruta. Por otro lado, la descripción detallada a nivel de las calles y manzanas del trayecto de un vehículo o cuadrilla, para la prestación del servicio público de recolección de residuos; de barrido y limpieza de vías y áreas públicas; y/o corte de césped y poda de árboles ubicados en las vías y áreas públicas, dentro de una frecuencia predeterminada, se conoce como micro ruta.
          .cajon.color-acento-botones.p-4(data-aos="fade-left")
            p.mb-0 Para tener una visión global del recorrido que se debe realizar para la recolección de los residuos es necesario que el prestador del servicio diseñe las rutas de acuerdo con los requisitos obligatorios establecidos en el artículo 31 del decreto 2981 (2013). Estas rutas deberán cumplir con la eficiencia en la asignación de recursos físicos y humanos para lograr la productividad propia de un servicio competitivo.

    separador
    #t_2_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 2.1 Diseño de macro rutas
    
    p.mb-5 De acuerdo con el ministerio de vivienda, ciudad y territorio en su documento Reglamento técnico del sector de Agua potable y Saneamiento básico (RAS), en su título F: sistemas de aseo urbano, el diseño de la ruta debe tener como principal objetivo cumplir con la prestación del servicio teniendo la máxima eficiencia, por ello se recomienda seguir la siguiente metodología:

    TabsB.color-acento-botones.mb-5(data-aos="zoom-in")
      .py-4.py-md-5(titulo="Espacialidad" :icono="require('@/assets/curso/tema2/img02.svg')")
        .row.justify-content-around
          .col-lg-6.order-lg-1.order-2
            p.mb-0  Se deben definir los espacios, empleando planos topográficos y de infraestructura vial, es importante conocer las redes de servicio público existente, y cualquier otro detalle que pueda influir en la prestación del servicio de la zona. A partir del desarrollo de la espacialidad se puede lograr una articulación del servicio de aseo teniendo en cuenta los planes de desarrollo de cada municipio.          
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema2/img06.png')
      .py-4.py-md-5(titulo="Cantidad" :icono="require('@/assets/curso/tema2/img03.svg')")
        .row.justify-content-around
          .col-lg-6.order-lg-1.order-2
            p.mb-0  Con el objetivo de determinar la cantidad de camiones de recolección o cuadrillas, se debe incluir en el plano las toneladas diarias de residuos sólidos por cada vivienda o contenedor, de acuerdo con el sistema de recolección previamente escogido.          
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema2/img07.png')
      .py-4.py-md-5(titulo="Subdivisión" :icono="require('@/assets/curso/tema2/img04.svg')")
        .row.justify-content-around
          .col-lg-6.order-lg-1.order-2
            p.mb-0  Se debe establecer el área por zonas que en lo posible tengan el mismo uso, por ejemplo: residencial, comercial, industrial, etc.          
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema2/img08.png')
      .py-4.py-md-5(titulo="Asignación de micro rutas" :icono="require('@/assets/curso/tema2/img05.svg')")
        .row.justify-content-around
          .col-lg-6.order-lg-1.order-2
            p.mb-0  Esta asignación debe en lo posible limitar el paso por cada calle a una vez.          
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema2/img09.png')
    
    separador
    #t_2_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 2.2 Diseño de micro rutas

    p Cuando se establecen las micro rutas se deben tener en cuenta diferentes condiciones geográficas y viales que se puedan presentar en el municipio donde se presta el servicio, por ello las recomendaciones que se hacen son:

    .row.justify-content-center.mb-4
      .col-lg-3.col-sm-6.col-10.mb-4
        .tarjeta--boton.color-primario.BGR13S1.hg-02.px-3.pb-3
          .row.justify-content-end.mb-2
            .col-auto.BG14.py-2.px-3.me-2
              .h2.text-white.text-center.mb-0 1
          p.mb-0 La micro ruta debe comenzar en el punto más cercano al garaje del vehículo y terminar en el punto más.
      .col-lg-3.col-sm-6.col-10.mb-4
        .tarjeta--boton.color-acento-contenido.BGR13S2.hg-02.px-3.pb-3
          .row.justify-content-end.mb-2
            .col-auto.BG15.py-2.px-3.me-2
              .h2.text-white.text-center.mb-0 2
          p.mb-0 Los residuos localizados en zonas de congestión vial se deben recoger a una hora del día tal que no haya tráfico que retrasen el recorrido.
      .col-lg-3.col-sm-6.col-10.mb-4
        .tarjeta--boton.color-secundario.BGR13S3.hg-02.px-3.pb-3
          .row.justify-content-end.mb-2
            .col-auto.BG16.py-2.px-3.me-2
              .h2.text-white.text-center.mb-0 3
          p.mb-0 El diseño de la micro ruta debe minimizar los giros en “U” y los giros a la izquierda.
      .col-lg-3.col-sm-6.col-10.mb-4
        .tarjeta--boton.color-primario.BGR13S1.hg-02.px-3.pb-3
          .row.justify-content-end.mb-2
            .col-auto.BG14.py-2.px-3.me-2
              .h2.text-white.text-center.mb-0 4
          p.mb-0 La micro ruta debe promover que el recorrido de las calles sea en el sentido de las manecillas del reloj.
      .col-lg-3.col-sm-6.col-10.mb-4
        .tarjeta--boton.color-acento-contenido.BGR13S2.hg-02.px-3.pb-3
          .row.justify-content-end.mb-2
            .col-auto.BG15.py-2.px-3.me-2
              .h2.text-white.text-center.mb-0 5
          p.mb-0 La micro ruta debe ser continua, es decir que contenga una serie de calles sin zonas muertas o traslapadas con calles correspondientes a otras rutas.
      .col-lg-3.col-sm-6.col-10.mb-4
        .tarjeta--boton.color-secundario.BGR13S3.hg-02.px-3.pb-3
          .row.justify-content-end.mb-2
            .col-auto.BG16.py-2.px-3.me-2
              .h2.text-white.text-center.mb-0 6
          p.mb-0 Las micro rutas de una misma zona de servicio deben recolectar un mismo número de cargas diarias, lo que le da flexibilidad al servicio.
      .col-lg-3.col-sm-6.col-10.mb-4
        .tarjeta--boton.color-primario.BGR13S1.hg-02.px-3.pb-3
          .row.justify-content-end.mb-2
            .col-auto.BG14.py-2.px-3.me-2
              .h2.text-white.text-center.mb-0 7
          p.mb-0 Las vías cerradas deben ser recolectadas así: desplazamiento en reversa y recolección en marcha adelante.
      .col-lg-3.col-sm-6.col-10.mb-4
        .tarjeta--boton.color-acento-contenido.BGR13S2.hg-02.px-3.pb-3
          .row.justify-content-end.mb-2
            .col-auto.BG15.py-2.px-3.me-2
              .h2.text-white.text-center.mb-0 8
          p.mb-0 Las micro rutas deben diseñarse para que empiecen y terminen cerca de calles de tráfico alto, utilizando las barreras topográficas.
      .col-lg-3.col-sm-6.col-10.mb-lg-0.mb-4
        .tarjeta--boton.color-secundario.BGR13S3.hg-02.px-3.pb-3
          .row.justify-content-end.mb-2
            .col-auto.BG16.py-2.px-3.me-2
              .h2.text-white.text-center.mb-0 9
          p.mb-0 En zonas de laderas y de alta pendiente del terreno, la recolección debe empezar en la parte más alta y continuar cuesta abajo mientras se cargan los vehículos.
      .col-lg-3.col-sm-6.col-10.mb-lg-0.mb-4
        .tarjeta--boton.color-primario.BGR13S1.hg-02.px-3.pb-3
          .row.justify-content-end.mb-2
            .col-auto.BG14.py-2.px-3.me-2
              .h2.text-white.text-center.mb-0 10
          p.mb-0 En calles de alta pendiente, la recolección empezará en lo más alto, el conductor viajará cuesta abajo mientras el personal carga el camión.
      .col-lg-3.col-sm-6.col-10.mb-sm-0.mb-4
        .tarjeta--boton.color-acento-contenido.BGR13S2.hg-02.px-3.pb-3
          .row.justify-content-end.mb-2
            .col-auto.BG15.py-2.px-3.me-2
              .h2.text-white.text-center.mb-0 11
          p.mb-0 En caso de recolección en ambas aceras, deben preferirse rutas derechas con pocos giros.
      .col-lg-3.col-sm-6.col-10
        .tarjeta--boton.color-secundario.BGR13S3.hg-02.px-3.pb-3
          .row.justify-content-end.mb-2
            .col-auto.BG16.py-2.px-3.me-2
              .h2.text-white.text-center.mb-0 12
          p.mb-0 El conductor debe contar con carta de recorrido al momento de iniciar; debe adaptarse para reducir tiempo y consumo de combustible.
    
    .row.justify-content-center.align-items-end.mb-5
      .col-lg-6.mb-lg-0.mb-4
        .row.justify-content-center
          .col-lg-6.col-sm-6.col-10.mb-4
            .tarjeta--boton.color-primario.BGR13S1.hg-02.px-3.pb-3
              .row.justify-content-end.mb-2
                .col-auto.BG14.py-2.px-3.me-2
                  .h2.text-white.text-center.mb-0 13
              p.mb-0 Deben minimizarse los tiempos muertos y recorridos improductivos.
          .col-lg-6.col-sm-6.col-10.mb-4
            .tarjeta--boton.color-acento-contenido.BGR13S2.hg-02.px-3.pb-3
              .row.justify-content-end.mb-2
                .col-auto.BG15.py-2.px-3.me-2
                  .h2.text-white.text-center.mb-0 14
              p.mb-0 Deben considerarse las condiciones de tránsito real y futuro.
          .col-lg-6.col-sm-6.col-10.mb-4
            .tarjeta--boton.color-secundario.BGR13S3.hg-02.px-3.pb-3
              .row.justify-content-end.mb-2
                .col-auto.BG16.py-2.px-3.me-2
                  .h2.text-white.text-center.mb-0 15
              p.mb-0 Debe considerarse la cantidad de residuos de los grandes generadores, teniendo en cuenta el censo.
          .col-lg-6.col-sm-6.col-10.mb-4
            .tarjeta--boton.color-primario.BGR13S1.hg-02.px-3.pb-3
              .row.justify-content-end.mb-2
                .col-auto.BG14.py-2.px-3.me-2
                  .h2.text-white.text-center.mb-0 16
              p.mb-0 Incluir en el análisis los usos del suelo y las características de los generadores específicos asentados en las diferentes áreas.
          .col-lg-6.col-sm-6.col-10.mb-4
            .tarjeta--boton.color-acento-contenido.BGR13S2.hg-02.px-3.pb-3
              .row.justify-content-end.mb-2
                .col-auto.BG15.py-2.px-3.me-2
                  .h2.text-white.text-center.mb-0 17
              p.mb-0 Evaluar las alturas máximas en puentes vehiculares y peatonales, así como infraestructura  eléctrica y alumbrado público.
          .col-lg-6.col-sm-6.col-10
            .tarjeta--boton.color-secundario.BGR13S3.hg-02.px-3.pb-3
              .row.justify-content-end.mb-2
                .col-auto.BG16.py-2.px-3.me-2
                  .h2.text-white.text-center.mb-0 18
              p.mb-0 La selección de los equipos de recolección deberá considerar el cálculo de las cantidades de residuos sólidos que se van a recoger.
      .col-lg-6
        .row.justify-content-end
          .col-10
            img(src='@/assets/curso/tema2/img10.svg')

    separador
    #t_2_3.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 2.3 Diseño de rutas de barrido

    p Al igual que las rutas de recolección, las rutas de barrido se pueden dividir en macro rutas y micro rutas que conservan el principio de cumplimiento del servicio con la máxima eficiencia, en este caso las macro rutas corresponden al área geográfica que la cuadrilla o el equipo mecánico barre en una semana, mientras que las micro rutas corresponden a los kilómetros de cuneta que la cuadrilla o el equipo mecánico barre en un día. 
    p.mb-5 Adicional a las recomendaciones que se hacen en las rutas de recolección cuando se realiza el barrido se debe considerar:
 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema2/img11.png')
      .col-lg-8(data-aos="fade-left")
        AcordionA.mb-5(tipo="a" clase-tarjeta="BGR17")
          div(titulo="Tipo de vía")
            p.mb-0 Con base en el tipo de vía y usos del suelo, se define el rendimiento de barrido y limpieza de la cuadrilla y del equipo mecánico en horas por kilómetro (h/km) y en kilogramos por kilómetro por día (kg/km - día).
          div(titulo="Micro rutas")
            p.mb-0 El total de micro rutas se dividirá en 6 días de barrido por semana, de esta manera se puede calcular el número de cuadrillas que deben realizar el barrido manual y mecánico de vías y la limpieza de áreas públicas.
          div(titulo="Cuadrillas")
            p.mb-0 Con base en el número de cuadrillas se identificará en el plano, el día que se prestará el servicio, los sitios de inicio y final del barrido en un día y, la identificación cada hora del sitio por donde pasará la cuadrilla.

    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="flip-up")
        .cajon.color-acento-botones.p-4
          p.mb-0 Todas las recomendaciones que se establecen para el barrido deben estar contempladas en el Plan de Gestión Integral de Residuos Sólidos (PGIRS) del municipio.

    separador
    #t_2_4.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 2.4 Horarios de recolección

    .bloque-texto-g.color-secundario.img-inv.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img12.jpg')})`}" data-aos="fade-left"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p.mb-0 De acuerdo con el RAS título F (2012), para mejorar la calidad del servicio se deben tener en cuenta las cantidades de residuos que se generan, las características de cada zona, la jornada de trabajo, el clima, la capacidad de los equipos, las dificultades generadas por el tráfico vehicular o peatonal y cualquier otro elemento que pueda tener influencia y teniendo eso en cuenta se establecen los horarios de recolección.

    p.mb-5 Establecer y cumplir los horarios de recolección y de barrido es una obligación por parte del prestador del servicio de aseo de acuerdo con lo establecido en el artículo 32 del decreto 2981 (2013).

    .BG18.p-2.mb-5(data-aos="flip-up")
      .row.justify-content-center.align-items-center
        .col-lg-3.col-6.mb-lg-0.mb-4
          img(src='@/assets/curso/tema2/img13.svg')
        .col-lg-9.p-3
          p.mb-0 Es importante resaltar que se debe tener especial cuidado cuando la recolección se efectúe entre las 21:00 horas y las 06:00 horas del día siguiente en zonas residenciales, hoteles, hospitales, clínicas y demás centros asistenciales ya que en estos casos deberán tomarse medidas especiales para mitigar el ruido en la recolección y la compactación.

    separador
    #t_2_5.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 2.5 Frecuencias de recolección

    .BG04.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-1.col-2(data-aos="fade-right")
          img(src='@/assets/curso/tema2/img14.svg')
        .col(data-aos="fade-left")
          p.mb-0 De acuerdo con la presidencia de la república en su decreto 2981 (2013) Por el cual se reglamenta la prestación del servicio público de aseo. La frecuencia de recolección es el número de veces en un periodo definido que se presta el servicio.

    p.mb-5 De acuerdo con el RAS título F (2012) la frecuencia de recolección depende del nivel de complejidad del sistema, así como ciertas restricciones que se presentan a continuación:

    .row.justify-content-center.mb-5
      .col-lg-6.col-md-8.col-sm-10.mb-xl-0.mb-4(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/tema2/img15.png')
          .tarjetas-up_card.BG05.p-xl-4.p-lg-3.p-4
            .title.d-flex.align-items-center.justify-content-center.text-white.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h4 Nivel de complejidad bajo y medio
            p.text-white.text-center.mb-0 La recolección de los residuos sólidos obtenidos en el proceso de barrido de vías y limpieza de áreas públicas, podrán realizarse simultáneamente con las frecuencias de recolección de los residuos presentados por los usuarios del servicio ordinario.
      .col-lg-6.col-md-8.col-sm-10.mb-xl-0.mb-4(data-aos="fade-left")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/tema2/img16.png')
          .tarjetas-up_card.BG06.p-xl-4.p-lg-3.p-4
            .title.d-flex.align-items-center.justify-content-center.text-white.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h4.mb-0 Nivel de complejidad medio alto y alto
            p.text-white.text-center.mb-0 Las frecuencias de recolección deben diseñarse separadamente, procurando que los residuos del barrido manual y mecánico de vías y limpieza de áreas públicas sean transportados al sitio de disposición final sin ser mezclados con los residuos presentados por los usuarios del servicio de aseo.

    p Adicional al nivel de complejidad, también se debe tener en cuenta la temperatura del municipio ya que esta se asocia con el ciclo reproductivo de la mosca y con la volatilización de compuestos generadores de olores ofensivos como se muestra en la Tabla 1.
    p.mb-5 De esta forma la frecuencia mínima es:

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-secundario(data-aos="fade-right")
          h5 Tabla 1
          span Frecuencia de recolección mínima
        table(data-aos="zoom-in")
          caption Nota. <a style="font-weight: 400">Tomado de Ministerio de Vivienda, Ciudad y Territorio. (2012) Reglamento técnico del sector de Agua potable y Saneamiento básico (RAS) título F. Sistemas de Aseo Urbano. [Tabla] (p. 68).</a>
          thead
            tr
              th(style="background-color: #00BCD4; width: 22%; font-size: 18px;" rowspan="2").text-center.text-white Nivel de complejidad
              th(style="background-color: #00BCD4; width: 22%; font-size: 18px;" rowspan="2").text-center.text-white Temperatura
              th(style="background-color: #00BCD4; width: 56%; font-size: 18px;" colspan="2").text-center.text-white Frecuencias de recolección mínimas (Veces/Semana)
            tr
              th(style="background-color: #80C7F4; font-size: 18px;").text-center De residuos presentados por los suscriptores
              th(style="background-color: #80C7F4; font-size: 18px;").text-center De residuos producto del barrido de vías y limpieza de áreas públicas
          tbody
            tr
              td(style="background-color: #F6F6F6;") Bajo
              td(style="background-color: #F6F6F6;") Indiferente
              td(style="background-color: #F6F6F6;" colspan="2").text-center 2 simultaneamente
            tr
              td(style="background-color: #FFF;") Medio
              td(style="background-color: #FFF;") Indiferente
              td(style="background-color: #FFF;" colspan="2").text-center 2 simultaneamente
            tr
              td(style="background-color: #F6F6F6;") Medio Alto
              td(style="background-color: #F6F6F6;") Mayor o igual a 22 °C
              td(style="background-color: #F6F6F6;").text-center 3
              td(style="background-color: #F6F6F6;").text-center 1
            tr
              td(style="background-color: #FFF;") 
              td(style="background-color: #FFF;") Menor de 22 °C
              td(style="background-color: #FFF;").text-center 2
              td(style="background-color: #FFF;").text-center 1
            tr
              td(style="background-color: #F6F6F6;") Alto *
              td(style="background-color: #F6F6F6;") Mayor o igual a 22 °C
              td(style="background-color: #F6F6F6;").text-center 3
              td(style="background-color: #F6F6F6;").text-center 1
            tr
              td(style="background-color: #FFF;") 
              td(style="background-color: #FFF;") Menor de 22 °C
              td(style="background-color: #FFF;").text-center 2
              td(style="background-color: #FFF;").text-center 1 *

    p Todo cambio en las rutas, frecuencias y horarios debe ser notificado con anterioridad de mínimo 5 días a los usuarios atendidos. Si el día propuesto de recolección es festivo y la empresa de recolección no labora en ese día, ésta deberá diseñar un plan de contingencia de modo que la recolección se normalice en los siguientes 2 días.

    separador
    #t_2_6.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 2.6 Divulgación de las rutas y horarios

    .BGM02.px-md-5.px-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema2/img17.svg')
        .col-lg-8(data-aos="fade-left")
          p Los usuarios como parte activan del sistema de aseo de cualquier municipio deben estar informados sobre las rutas y horarios que ejecutará el prestador del servicio, por esta razón en el artículo 34 del decreto 2981 (2013) se establece la responsabilidad del prestador del servicio en divulgar rutas, horarios y frecuencia de recolección y barrido las cuales deberán darse a conocer a los usuarios, utilizando medios masivos de difusión de amplia circulación local.
          p.mb-0 En las facturas de cobro del servicio público de aseo, deberá informarse las frecuencias de las diferentes actividades de recolección del servicio. El prestador del servicio deberá publicar en la página web las rutas y horarios de prestación de las diferentes actividades de recolección del servicio.

    separador
    #t_2_7.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 2.7 Cumplimiento de las rutas

    p En el cumplimiento de las rutas se deben tener presentes los siguientes aspectos:

    .BGM02.px-md-5.px-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
          ul.lista-ul--color.lista-ul--separador
            li.d-flex(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              | La calidad de la prestación del servicio depende de la continuidad y la cobertura, con el fin de mejorar la percepción que el usuario tiene sobre el prestador del servicio se deben cumplir a cabalidad las rutas y horarios pactados en los contratos.
            li.d-flex(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              | Es posible que se generen cambios en la ruta, el horario o la frecuencia debido a situaciones internas (avería mecánica en los camiones de recolección) o externas (mantenimiento en malla vial) Todo cambio en las rutas, horarios o frecuencias deberá ser comunicado con tres (3) días de anterioridad a los usuarios afectados, salvo caso fortuito o de fuerza mayor, utilizando medios masivos de difusión de amplia circulación local y página web cuando se disponga de ella.
            li.d-flex(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              | En caso de fallas internas dentro del prestador del servicio como el ejemplo de presentarse averías en un vehículo del servicio, deberá enviar el auxilio mecánico o reemplazarlo con el equipo de suplencia, el servicio se debe restablecer en un término máximo de tres (3) horas a partir del momento en que se presente la avería. Sólo podrá suspenderse el servicio por motivos de fuerza mayor o caso fortuito, debidamente comprobados.
            li.d-flex(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              | Incluso cuando se presente un caso de fuerza mayor la empresa prestadora del servicio público de aseo deberá implementar las medidas para restablecer el servicio en el menor tiempo posible.
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/tema2/img18.svg')

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
