<template>
  <div>
    <v-carousel
      cycle
      height="70vh"
      hide-delimiter-background
      show-arrows-on-hover
      hide-delimiters
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet
          :color="colors[i]"
          height="100%"
          class="slide-background"
          :style="`background: url(${getImage(slide.img)})
    no-repeat center center fixed;   -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;`"
        >
          <v-row class="fill-height slide" align="center" justify="center">
            <div style="width: 300px">
              <h1 class="slider-title">{{ slide.title }}</h1>
              <p class="slider-text">{{ slide.text }}</p>
              <v-btn color="indigo">Read more</v-btn>
              <v-btn color="second">Get service</v-btn>
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <v-container class="slide-banner">
      <v-row class="secondary mt-0 px-4">
        <v-col cols="12" sm="4" v-for="(item, i) in bannerItems" :key="i" class="pa-0">
          <div
            style="
              display: grid;
              width: 100%;
              height: 100%;
              align-items: center;
              color: white;
              grid-template-columns: auto 1fr;
              padding: 10px;
            "
            :class="item.color"
          >
            <div :class="`${item.color2} mr-4`">
              <v-icon dark class="pa-4"> {{ item.icon }} </v-icon>
            </div>
            <div>
              <h1 class="slider-banner-title">{{ item.title }}</h1>
              <p>{{ item.text }}</p>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
    colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
      slides: [
        {
          title: 'First',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integerlorem lectus, vehicula nec vehicula pellentesque, egestas augue. Nulla et lobortis odio, vel fermentum sapien.',
          img: 'img1',
        },
        {
          title: 'Second',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integerlorem lectus, vehicula nec vehicula pellentesque, egestas augue. Nulla et lobortis odio, vel fermentum sapien.',
          img: 'img2',
        },
      ],
      bannerItems: [
        {
          color: 'indigo',
          color2: 'secondary',
          title: 'Trusted services',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          icon: 'mdi-cloud-check ',
        },
        {
          color: 'secondary',
          color2: 'indigo',
          title: '24/7 Support',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          icon: 'mdi-alarm-check ',
        },
        {
          color: 'indigo',
          color2: 'secondary',
          title: 'Experts & Professional',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          icon: 'mdi-account-multiple-check ',
        },
      ],
    }
  },
  methods: {
    getImage(item) {
      return require(`~/assets/img/${item}.jpg`)
    },
  },
}
</script>

<style></style>
