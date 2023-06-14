<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .BGM02.px-md-5.px-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-4.col-8.mb-lg-0(data-aos="fade-right")
          img(src='@/assets/curso/intro/img01.svg')
        .col-lg-8(data-aos="fade-left")
          .row.justify-content-center.align-items-center
            .col-lg-1.col-2.p-0
              .arrow-left
            .col-lg.col-12.px-0
              .BGR01.p-4
                p.mx-5 Usualmente cada ciudad, municipio o región, en el desarrollo social y económico generan millones de residuos que son dispuestos en bolsas para que se realice la recolección de estos, por lo tanto, es importante abordar el estudio de las actividades relacionadas con el servicio de aseo.
                p.mx-5.mb-0 La gestión de la calidad de los servicios se considera una estrategia esencial para el éxito y la supervivencia de las organizaciones. El sector servicios desempeña un papel cada vez más importante en la economía de muchos países. Los organismos gubernamentales prestan cada vez más atención a cuestiones como el servicio, los clientes y la satisfacción del público; los servicios públicos domiciliarios, entre los que se incluyen los servicios de recogida de residuos sólidos, desempeñan actualmente un papel importante y participativo en la vida de los ciudadanos, ya que están destinados a satisfacer sus necesidades colectivas de forma general, permanente y continua, bajo la dirección, regulación y control del Estado.

    p Sin embargo, no existe una conciencia colectiva que dimensione la cantidad real de residuos que genera toda una población.

    .BGR03.p-4.mb-4(data-aos="flip-up")
      .row.justify-content-center.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/img01.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1 Alerta ONU peligros por millones de toneladas de residuos urbanos
              p.mb-0 Para ampliar esta información, lo invitamos a ver el video  
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(href="https://youtu.be/bw95wl8mJVo" target="_blank")
                span Ver video
                i.fas.fa-link
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
