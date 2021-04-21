<template>
  <v-container class="section">
    <p class="text-center">Our Services</p>
    <h1 class="text-center display-3">
      We run all kinds of services in form of
      <span class="font-italic indigo--text" style="font-family: fangsong"
        >Information
        <span
          class="borderBottom"
          >&</span
        >
        Technologies</span
      >
    </h1>
    <v-row class="mt-16 mb-10">
      <v-col v-for="(item, i) in dataServices" :key="i">
        <div style="display:gird,place-items:center; width:263px;">
          <div style="position: relative">
            <v-card
              class="mx-auto mb-12 services-icon"
              elevation="4"
              height="73"
              width="73"
            >
              <v-row
                class="fill-height"
                aling="center"
                justify="center"
              >
              </v-row>
            </v-card>
            <v-icon
              style="position: absolute; top: 36%; left: 46%; z-index: 1"
              >{{ item.icon }}</v-icon
            >
          </div>
          <v-card elevation="4" class="text-center" height="250" width="263">
            <v-card-title
              style="height: 64px; display: block"
              class="text-center"
            >
              {{ item.title }}
            </v-card-title>
            <v-card-text style="height: 130px" class="services-card-text">
              {{ item.text }}
            </v-card-text>
            <v-card-actions style="display: block">
              <v-btn icon>
                Read More
                <v-icon>mdi-chevron-double-right </v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </v-col>
    </v-row>
    <p class="text-center ">Don't hesitate, contact us for better help and services.<strong><a href="#">View more services</a></strong></p>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      dataServices: [
        {
          icon: 'mdi-heart',
          title: 'Lorem ipsum',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem lectus, vehicula nec vehicula pellentesque, egestas id augue. Nulla et lobortis odio, vel fermentum sapien.',
          href: '#',
        },
        {
          icon: 'mdi-heart',
          title: 'Lorem ipsum',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem lectus, vehicula nec vehicula pellentesque, egestas id augue. Nulla et lobortis odio, vel fermentum sapien.',
          href: '#',
        },
        {
          icon: 'mdi-heart',
          title: 'Lorem ipsum',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem lectus, vehicula nec vehicula pellentesque, egestas id augue. Nulla et lobortis odio, vel fermentum sapien.',
          href: '#',
        },
      ],
    }
  },
}
</script>
