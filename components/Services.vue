<template>
  <v-container class="section">
    <p class="text-center">Our Services</p>
    <h1 class="text-center services-title">
      We run all kinds of services in form of
      <span class="font-italic indigo--text" style="font-family: fangsong"
        >Information
        <span class="borderBottom">&</span>
        Technologies</span
      >
    </h1>

    <VueSlickCarousel v-bind="setting" class="my-10">
      <div class="services-card-col" v-for="(item, i) in dataServices" :key="i">
        <div class="services-card my-10">
          <div class="services-card-icon" style="position: relative">
            <v-card class="mx-auto mb-12 services-icon" height="73" width="73">
              <v-row class="fill-height" aling="center" justify="center">
              </v-row>
            </v-card>
            <v-icon
              style="position: absolute; top: 36%; left: 46%; z-index: 1"
              >{{ item.icon }}</v-icon
            >
          </div>
          <v-card
            elevation="4"
            class="text-center services-card-body"
            height="250"
            width="263"
          >
            <v-card-title
              style="height: 64px; display: block"
              class="services-card-title"
            >
              {{ item.title }}
            </v-card-title>
            <v-card-text style="height: 130px" class="services-card-text">
              {{ item.text }}
            </v-card-text>
            <v-card-actions class="services-card-action-div">
              <v-btn class="services-card-actions" icon>
                Read More
                <v-icon>mdi-chevron-double-right </v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </div>
    </VueSlickCarousel>
    <p class="text-center">
      Don't hesitate, contact us for better help and services.<strong
        ><a href="#">View more services</a></strong
      >
    </p>
  </v-container>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'carousel',
  components: { VueSlickCarousel },
  data() {
    return {
      dataServices: [
        {
          icon: 'mdi-database-clock ',
          title: 'Lorem ipsum',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem lectus, vehicula nec vehicula pellentesque, egestas id augue. Nulla et lobortis odio, vel fermentum sapien.',
          href: '#',
        },
        {
          icon: 'mdi-code-less-than ',
          title: 'Lorem ipsum',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem lectus, vehicula nec vehicula pellentesque, egestas id augue. Nulla et lobortis odio, vel fermentum sapien.',
          href: '#',
        },
        {
          icon: 'mdi-file-cog ',
          title: 'Lorem ipsum',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem lectus, vehicula nec vehicula pellentesque, egestas id augue. Nulla et lobortis odio, vel fermentum sapien.',
          href: '#',
        },
        {
          icon: 'mdi-file-cog ',
          title: 'Lorem ipsum',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem lectus, vehicula nec vehicula pellentesque, egestas id augue. Nulla et lobortis odio, vel fermentum sapien.',
          href: '#',
        },
        {
          icon: 'mdi-file-cog ',
          title: 'Lorem ipsum',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem lectus, vehicula nec vehicula pellentesque, egestas id augue. Nulla et lobortis odio, vel fermentum sapien.',
          href: '#',
        },
      ],
      setting: {
        slidesToShow: 3,
        centerPadding: '5px',
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 7000,
        centerMode: false,
        autoplaySpeed: 5000,
        pauseOnDotsHover: true,
        pauseOnHover: true,
        slidesToScroll: 1,
        touchThreshold: 5,
        responsive: [
          {
            breakpoint: 1324,
            settings: {
              slidesToShow: 2,
              centerPadding: '40px',
            },
          },
          {
            breakpoint: 770,
            settings: {
              slidesToShow: 1,
              centerPadding: '0px',
              centerMode: true,
            },
          },
        ],
      },
    }
  },
}
</script>
