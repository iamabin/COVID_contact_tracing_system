<template>
  <v-carousel
    height="85vh"
    hide-delimiter-background
    show-arrows-on-hover
    cycle
  >

    <v-carousel-item
      src="https://cdn.jsdelivr.net/gh/UAws/COVID_contact_tracing_system/frontend/src/assets/checkin.jpg"
      target="_blank"
      @click.stop
    >
      <v-row
        class="fill-height"
        align="center"
        justify="center"
      >
        <v-container style="background-color: rgba(24,36,74,0.3)">
          <div class="display-3 text-center font-weight-bold">
            COVID-19 Tracing Application
          </div>
          <div class="display-1 text-center font-weight-medium">For Your Safety and Health</div>
        </v-container>
      </v-row>
    </v-carousel-item>
    <v-carousel-item
      src="https://cdn.jsdelivr.net/gh/UAws/COVID_contact_tracing_system/frontend/src/assets/covid-19-vaccine.jpg"
      href="https://www.covid-19.sa.gov.au/vaccination?gclid=CjwKCAjw-e2EBhAhEiwAJI5jgwy0UFn5Pa4JvOFVTx1vCHC_ZJ2Xd43QInzKR9F4OUm-68cqaI0-3BoCCQoQAvD_BwE"
      target="_blank"
    />
    <v-carousel-item
      src="https://cdn.jsdelivr.net/gh/UAws/COVID_contact_tracing_system/frontend/src/assets/COVIDUN-2.png"
      href="https://www.sahealth.sa.gov.au/wps/wcm/connect/public+content/sa+health+internet/conditions/infectious+diseases/covid-19/testing+and+tracing/covid-19+clinics+and+testing+centres/covid-19+clinics+and+testing+centres"
      target="_blank"
    />
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>
