<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Barrido y lavado de vías
    
    .BG04.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-1.col-2(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img01.svg' alt="Imagen decorativa")
        .col(data-aos="fade-left")
          p.mb-0 Para iniciar un proceso de supervisión de sistemas de saneamiento es necesario el seguimiento de actividades de barrido y lavado de vías. Sin embargo, para comprender mejor sus características es necesario especificar algunas definiciones que otorga el Ministerio de vivienda, ciudad y territorio (2012). En el Reglamento Técnico del Sector Agua Potable y Saneamiento Básico (RAS), en su título F de sistemas de aseo urbano, como se relacionan a continuación:

    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img02.png' alt="Imagen decorativa")
      .col-lg-8(data-aos="fade-left")
        TabsA.color-acento-contenido
          .BGR03.p-4(titulo="Barrido de vías")
            .h4 Barrido de vías y limpieza de áreas públicas
            p.mb-0 Es el conjunto de actividades que se ejecutan de forma manual o mecánica, tendientes a dejar las áreas públicas libres de todo residuo sólido esparcido, acumulado o fijado en muros. Por sus características los residuos sólidos generados por el proceso de barrido y recolección de los residuos, así como los provenientes de la limpieza de áreas públicas se vinculan con la actividad principal de recolección del servicio público de aseo (p.14).
          .BGR03.p-4(titulo="Aseo público")
            .h4 Servicio público de aseo
            p.mb-0 Es el servicio de recolección municipal de residuos, principalmente sólidos. También se aplicará a las actividades complementarias de transporte, tratamiento, aprovechamiento y disposición final de tales residuos (p. 24).
          .BGR03.p-4(titulo="Aseo urbano")
            .h4 Sistema de aseo urbano
            p.mb-0 Es el conjunto ordenado y sistemático de equipos, elementos y maquinaria, que se utilizan para el desarrollo de los diferentes componentes que hacen parte del servicio público de aseo y que proporciona información sobre el estado, calidad y comportamiento de las actividades en la gestión de los residuos sólidos (p.25).

    separador
    #t_1_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.1 Tipos de barrido y limpieza

    p.mb-5 Para realizar el proceso de barrido y limpieza existen dos formas de realizar dicha actividad de acuerdo con el Decreto 1077 (2015), como se muestra a continuación:

    .row.justify-content-center.mb-5
      .col-lg-6.col-md-8.col-sm-10.mb-xl-0.mb-4(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/tema1/img03.png' alt="Imagen decorativa")
          .tarjetas-up_card.BG05.p-xl-4.p-lg-3.p-4
            .title.d-flex.align-items-center.justify-content-center.text-white.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h4 Barrido y limpieza manual
            p.text-white.text-center.mb-0 Es la labor realizada manualmente para retirar de las vías y áreas públicas papeles, hojas, arenilla acumulada y cualquier otro objeto o material.
      .col-lg-6.col-md-8.col-sm-10.mb-xl-0.mb-4(data-aos="fade-left")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/tema1/img04.png' alt="Imagen decorativa")
          .tarjetas-up_card.BG06.p-xl-4.p-lg-3.p-4
            .title.d-flex.align-items-center.justify-content-center.text-white.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h4.mb-0 Barrido y limpieza mecánica
            p.text-white.text-center.mb-0 Es la labor realizada mediante el uso de equipos mecánicos para retirar de las vías y áreas públicas, papeles, hojas, arenilla acumulada y cualquier otro objeto o material.

    .BGR03.p-4.mb-4(data-aos="flip-up")
      .row.justify-content-center.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/img01.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1 Decreto 1077 de 2015 Sector Vivienda, Ciudad y Territorio
              p.mb-0 Para ampliar la información sobre la normatividad aplicable debe consultar el Decreto 1077 (2015) sector vivienda, ciudad y territorio, título 2  servicio público de aseo, que se encuentra en el material complementario.
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77216" target="_blank")
                span Ir a página
                i.fas.fa-link
    
    separador
    #t_1_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.2 Tipos de recolección
    
    p.mb-5 Dentro de las acciones de recolección se podría diferenciar las siguientes según el Decreto 1077 (2015).

    .tarjeta--container.row.mb-5
      .col-lg.tarjeta.BG07.p-5(data-aos="fade-right")
        .row.justify-content-center.mb-4
          .col-6
            img(src='@/assets/curso/tema1/img05.svg' alt="Imagen decorativa")
        h3.text-center Recolección y transporte de residuos aprovechables
        p.text-center.mb-0 Son las actividades que realiza la persona prestadora del servicio público de aseo consistente en recoger y transportar los residuos aprovechables hasta las estaciones de clasificación y aprovechamiento.
      .col-lg.tarjeta.BG08.p-5(data-aos="flip-úp")
        .row.justify-content-center.mb-4
          .col-6
            img(src='@/assets/curso/tema1/img06.svg' alt="Imagen decorativa")
        h3.text-center Recolección y transporte de residuos no aprovechables
        p.text-center.mb-0 Son las actividades que realiza la persona prestadora del servicio público de aseo consistente en recoger y transportar los residuos no aprovechables hasta su disposición en rellenos sanitarios o en las medidas dispuestas para el residuo.
      .col-lg.tarjeta.color-primario.p-5(data-aos="fade-left")
        .row.justify-content-center.mb-4
          .col-6
            img(src='@/assets/curso/tema1/img07.svg' alt="Imagen decorativa")
        h3.text-center Recolección puerta a puerta
        p.text-center.mb-0 Es el servicio de recolección de los residuos sólidos en el andén de la vía pública frente al predio del usuario.

    separador
    #t_1_3.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.3 Actores involucrados en las actividades de servicio público
    
    p.mb-5 Dentro de las personas involucradas en las actividades de servicio público de aseo es importante referenciar los principales a través del siguiente video:

    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/p826KvNbbn4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    separador
    #t_1_4.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.4 Programación de actividades
    
    .BGM02.px-md-5.px-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img08.svg' alt="Imagen decorativa")
        .col-lg-6(data-aos="fade-left")
          p.mb-0 Teniendo en cuenta que en un mismo sector pueden existir diferentes prestadores del servicio de aseo, la programación de actividades debe ser conforme a la normatividad legal vigente, buscando que no se generen actividades de recolección, barrido o limpieza duplicadas en un mismo sector y así garantizar la buena competencia entre las empresas.

    p Partiendo del Decreto 2981 (2013) el cual fue compilado por el Decreto 1077 (2015), se especificó en el artículo 52, lo siguiente:

    .BGM02.px-md-5.px-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
          ul.lista-ul--color.lista-ul--separador
            li.d-flex(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              | La responsabilidad en barrido y limpieza de vías y áreas públicas es de la persona prestadora del servicio público de aseo en el área de prestación donde realice las actividades de recolección y transporte. La prestación de este componente en todo caso deberá realizarse de acuerdo con la frecuencia y horarios establecidos en el programa para la prestación del servicio público de aseo, y cumpliendo con las exigencias establecidas en el Plan de Gestión Integral de Residuos Sólidos (Pgirs) del respectivo municipio o distrito.
            li.d-flex(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              | La determinación de los kilómetros a barrer deberá tener en cuenta las frecuencias de barrido y en calles no pavimentadas y en áreas donde no sea posible realizar el barrido por sus características físicas, se desarrollarán labores de limpieza manual.
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/tema1/img09.svg' alt="Imagen decorativa")
    
    p.mb-5 Además de esto, se indica que la Comisión de Regulación de Agua Potable y Saneamiento Básico (CRA), determinará la metodología de cálculo de los kilómetros a barrer por cada prestador en función del número de usuarios que cada uno atienda en el área de confluencia.

    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="flip-up")
        .cajon.color-acento-botones.p-4
          p.mb-0 Bajo esa premisa siempre se debe verificar la base normativa que brinde la CRA respecto a la metodología, ya que esta también determina actividades que serán necesarias llevar a cabo por las empresas prestadores de servicios de aseo y limpieza.

    .row.justify-content-start.mb-4
      .col-auto.BGRS09.px-5.py-3(data-aos="fade-right")
        .h4.text-white.mb-0 Determinación del área de prestación del servicio
      
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2
        p Dentro de las primeras actividades que deben quedar definidas se encuentra la determinación del área de prestación de servicio, la cual corresponde a la zona geográfica del municipio o distrito debidamente delimitada donde la persona prestadora ofrece y presta el servicio de aseo (Decreto 1077, 2015).
        p De acuerdo con la CRA, en la resolución 709 (2015), estas áreas deben estar delimitadas bajo los denominados acuerdos de barrido y limpieza que son descritos en el artículo 53 del decreto 2981 (2013).
        .cajon.color-acento-botones.p-4(data-aos="fade-right")
          p.mb-0 Las personas prestadoras deberán suscribir acuerdos, de barrido y limpieza, en los que se determinen las vías y áreas públicas que cada persona prestadora vaya a atender en el respectivo municipio, sin perjuicio de que en el mismo acuerdo se convenga que solo uno de ellos sea quien atiende la totalidad del área. En los mismos acuerdos se podrá establecer la forma de remunerarse entre los prestadores de las mencionadas actividades.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img10.png' alt="Imagen decorativa")
      
    .row.justify-content-start.mb-4
      .col-auto.BGRS09.px-5.py-3(data-aos="fade-right")
        .h4.text-white.mb-0 Componentes de barrido y limpieza

    .BGM02.px-md-5.px-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-8.order-lg-1.order-2
          p Dentro de los elementos que se hace necesario tener en cuenta para programar las actividades de barrido y limpieza se encuentran según la resolución 709 (2015) encontramos:
          ul.lista-ul--color.lista-ul--separador
            li.d-flex(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              | Área urbana con servicio de barrido en Ha (AUB).
            li.d-flex(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              | Longitud de vías barridas manualmente al mes, expresada en kms/mes (LBMa).
            li.d-flex(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              | Longitud de vías barridas mecánicamente al mes, expresada en kms/mes (LBMe).
            li.d-flex(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              | Longitud total de vías barridas, expresada en Km/mes, equivale a la suma de la longitud de vías barridas manual y mecánicamente, expresada en Km/mes (LB).
            li.d-flex(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              | Longitud total de vías en el área urbana, expresada en Km (LTV).
            li.d-flex(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              | Número de operarios de barrido empleados al mes (OB).
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/tema1/img11.svg' alt="Imagen decorativa")
    
    .row.justify-content-start.mb-4
      .col-auto.BGRS09.px-5.py-3(data-aos="fade-right")
        .h4.text-white.mb-0 Condiciones generales de los acuerdos de barrido y limpieza
    
    p Teniendo claro que estos acuerdos son para las personas y organizaciones prestadoras del servicio de aseo que confluyen en la misma área de servicio dentro de las acciones que deben ser tenidas en cuenta y son objeto de supervisión, se encuentran:

    .BG10.p-4.mb-4(data-aos="zoom-in")
      LineaTiempoC.color-primario(text-small)
        .row.justify-content-around(titulo="1")
          .col-lg-5
            p.mb-0 La responsabilidad de la actividad de barrido y limpieza estará dada en función del número de suscriptores del área de confluencia, de conformidad con lo señalado en el parágrafo 2 del artículo 52 del decreto 2981 de 2013.
          .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/img12.svg' alt="Imagen decorativa")
        .row.justify-content-around(titulo="2")
          .col-lg-5
            p.mb-0 Las partes deben estar inscritas en el Registro Único de Prestadores de Servicios Públicos (RUPS) de la Superintendencia de Servicios Públicos Domiciliarios (SSPD).
          .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/img13.svg' alt="Imagen decorativa")
        .row.justify-content-around(titulo="3")
          .col-lg-5
            p.mb-0 Un plano o mapa de localización en el que se delimite la(s) zona(s) geográfica(s) en donde se presta el servicio público de aseo en la actividad de recolección y transporte.
          .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/img14.svg' alt="Imagen decorativa")
        .row.justify-content-around(titulo="4")
          .col-lg-5
            p.mb-0 Descripción de macro y micro rutas de barrido en el área de confluencia.
          .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/img15.svg' alt="Imagen decorativa")
        .row.justify-content-around(titulo="5")
          .col-lg-5
            p.mb-0 Número total de suscriptores atendidos por cada persona prestadora del servicio público de aseo en la actividad de recolección y transporte en el área de confluencia en el periodo de producción de residuos sólidos inmediatamente anterior a la celebración del acuerdo, al cual se le deberá relacionar la dirección de todos los suscriptores del área de confluencia con los usuarios del maestro de facturación (Resolución 709, 2015, p.11).
          .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/img16.svg' alt="Imagen decorativa")

    separador
    #t_1_5.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.5 Actividades para tener en cuenta

    p.mb-5 En el desarrollo de actividades para el servicio público se hace necesario especificar algunas actividades que son elementales:

    ul.lista-ul--color.mb-5
      li.d-flex(style="margin-bottom: 2px")
        i.fas.fa-check-circle(style="color: #115089;")
        .h4.mb-0 Barrido y limpieza de vías objeto de circulación
    
    figure(data-aos="zoom-in")
      img(src='@/assets/curso/tema1/img17.png' alt="Imagen decorativa")
    .row.justify-content-center.img-01
      .col-lg-10(data-aos="flip-up")
        .BGR11.p-4
          p.mb-0 En lugares públicos como vías de circulación de vehículos o de peatones, siempre se debe considerar que estas vías usualmente se encuentran pavimentadas, lo que se conoce como la calzada y las aceras, estas aceras siempre se encontraran un poco elevadas y separadas de la calzada.

    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 1.
          span Estructura de la vía
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema1/img18.svg' alt="Describe la estructura de la vía, con el fin de tenerse en cuenta para el proceso de barrido. Muestra la cuneta, la calzada, el bode de la acera y la acera.")
    
    p.mb-5 La importancia de conocer esta estructura radica en el procedimiento para realizar el barrido:

    .row.justify-content-center.mb-4
      .col-lg-6.col-md-8.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/img19.svg' alt="Imagen decorativa")
          .tarjeta.BGR12.hg-01
            .p-4
              p.mb-0 Usualmente, no se requiere barrer la calzada completa, porque los residuos usualmente se acumulan, pero se transportan por el viento y el movimiento a las zonas laterales y se concentra en lo que se conoce como cunetas.
      .col-lg-6.col-md-8.col-10.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/img20.svg' alt="Imagen decorativa")
          .tarjeta.BGR12.hg-01
            .p-4
              p.mb-0 Se puede usar equipo mecanismo para agrupar residuos de partículas más pequeñas que puedan ser difícil de transportar a la cuneta por sí solas.
      .col-lg-6.col-md-8.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/img21.svg' alt="Imagen decorativa")
          .tarjeta.BGR12.hg-01
            .p-4
              p.mb-0 Con recolección manual, se puede barrer las zonas de la cuneta de las vías, agrupar y recoger, por lo general el barrido de las cunetas se hace en un ancho máximo de 0,60 m siempre usando conos de indicación, para salvaguardar la vida del trabajador.
      .col-lg-6.col-md-8.col-10(data-aos="fade-left")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/img22.svg' alt="Imagen decorativa")
          .tarjeta.BGR12.hg-01
            .p-4
              p.mb-0 Recolección de residuos en alcantarillado, cuando se requiera succionar lodos o elementos no sólidos, se debe contar el equipo adecuado.
    
    ul.lista-ul--color.mb-5
      li.d-flex(style="margin-bottom: 2px")
        i.fas.fa-check-circle(style="color: #115089;")
        .h4.mb-0 Limpieza de zonas comunes
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img23.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Le corresponde al prestador del servicio que fue asignado a una zona, realizar limpieza de playas, parques y ríos que encuentre y sean considerados de la ciudad o públicos siempre y cuando estos no estén nombrados a otras entidades para las acciones de limpieza. <br><br>Dentro de estas zonas cuando aplique, se debe velar por la recolección de residuos, poda y limpieza general.

    ul.lista-ul--color.mb-5
      li.d-flex(style="margin-bottom: 2px")
        i.fas.fa-check-circle(style="color: #115089;")
        .h4.mb-0 Recolección de residuos
    
    .BGM02.px-md-5.px-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
          p También se debe organizar y programar la recolección de residuos de los generadores de acuerdo con la normatividad vigente y a las indicaciones establecidas por la autoridad sobre la presentación y la gestión que se les debe realizar, dentro de esta recolección se debe garantizar que se realiza a los sectores de:
          .row.justify-content-center
            .col-lg-3.col-6.mb-lg-0.mb-4
              ul.lista-ul--color.lista-ul--separador
                li.d-flex(style="margin-bottom: 2px")
                  i.fas.fa-trash-restore(style="color: #115089;")
                  | Sector comercial. 
            .col-lg-3.col-6.mb-lg-0.mb-4
              ul.lista-ul--color.lista-ul--separador
                li.d-flex(style="margin-bottom: 2px")
                  i.fas.fa-trash-restore(style="color: #115089;")
                  | Sector residencial.
            .col-lg-3.col-6.mb-lg-0.mb-4
              ul.lista-ul--color.lista-ul--separador
                li.d-flex(style="margin-bottom: 2px")
                  i.fas.fa-trash-restore(style="color: #115089;")
                  | Sector industrial.
            .col-lg-3.col-6
              ul.lista-ul--color.lista-ul--separador
                li.d-flex(style="margin-bottom: 2px")
                  i.fas.fa-trash-restore(style="color: #115089;")
                  | Sector público.
        .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/tema1/img24.png' alt="Imagen decorativa")

    separador
    #t_1_6.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.6 Recursos

    p.mb-5 Para la ejecución correcta de las actividades se debe realizar una asignación de recursos dentro de los cuales se puede mencionar:

    ul.lista-ul--color.mb-5
      li.d-flex(style="margin-bottom: 2px")
        i.fas.fa-check-circle(style="color: #115089;")
        .h4.mb-0 Recurso humano
    
    .BGM02.px-md-5.px-4.mb-5
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img25.png' alt="Imagen decorativa")
        .col-lg-7(data-aos="fade-left")
          p.mb-0 Se debe contar con personal capacitado para la realización de las actividades puntuales, en este caso se puede mencionar barredores de calles, conductores y colectores en vehículos compactadores y de recolección, operario de la máquina barredora, operarios de separación o disposición de residuos, supervisiones de cuadrillas (equipos de trabajo por zona) entre otros.

    ul.lista-ul--color.mb-5
      li.d-flex(style="margin-bottom: 2px")
        i.fas.fa-check-circle(style="color: #115089;")
        .h4.mb-0 Recurso tecnológico
    
    .BGM02.px-md-5.px-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
          p.mb-0 En lo posible es importante dotar a los empleados o personas que realizan estas actividades de equipos tecnológicos como GPS o tabletas para que registren las rutas o reporten cualquier dificultad o novedad en el servicio en tiempo real a la empresa.
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/tema1/img26.svg' alt="Imagen decorativa")

    ul.lista-ul--color.mb-5
      li.d-flex(style="margin-bottom: 2px")
        i.fas.fa-check-circle(style="color: #115089;")
        .h4.mb-0 Materiales y equipo
    
    .BGM02.px-md-5.px-4.mb-5
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img27.svg' alt="Imagen decorativa")
        .col-lg-8
          p Dentro de los materiales y equipos a utilizar, se debe caracterizar la extensión de las zonas y el tipo de barrido a usar, con el fin de asignar a cada equipo de trabajo los elementos necesarios para la ejecución de la actividad, dentro de ellos se encuentra, balanzas de pesaje (preferiblemente digitales) bolsas según clasificación de la autoridad competente, escobas, recogedores, #[em practiwagones], recipientes o contenedores, cajas estacionarias, máquina barredora, palas, entre otros.
          .cajon.color-acento-botones.p-4(data-aos="fade-left")
            p.mb-0 Dentro de este ítem, también se encuentran los elementos especializados para la recolección como vehículos compactadores, vehículos con sistemas levantadores, compactadores de residuos estacionarios, maquinaria embaladora para reciclables, equipos de succión y cámaras para mantenimiento de alcantarillados, desintegradores y trituradores, entre otros.

    ul.lista-ul--color.mb-5
      li.d-flex(style="margin-bottom: 2px")
        i.fas.fa-check-circle(style="color: #115089;")
        .h4.mb-0 Elementos de protección personal
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p Siempre amparados en la normatividad legal vigente, se debe otorgar a los empleados o personas que realizarán las actividades los elementos de protección individual que sean necesarios, dependiendo de los residuos o actividades de limpieza y aseo que se vayan a ejecutar, dentro de los cuales se contempla, botas, guantes, gafas, casco, tapabocas, overoles entre otros.
        .cajon.color-acento-botones.p-4
          p.mb-0 Dentro de los elementos también se debe garantizar, la señalización requerida para salvaguardar a las personas, dentro de ellas se encuentra conos de señal de precaución, señales móviles de personal trabajando, chalecos reflectivos entre otros.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img28.png' alt="Imagen decorativa")
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    mostrarIndicador: true,
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
