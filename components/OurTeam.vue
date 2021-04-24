<template>
  <v-container :fluid="false" class="section my-12">
    <v-row>
      <v-col cols="12" md="6">
        <div>
          <p>we Make Connetions</p>
          <h1>Meet Our <span class="indigo--text italic">Leadership</span></h1>
        </div>
      </v-col>
      <v-col>
        <div class="flex-center">
          <p>
            The positive distinction within the World Inspiring of Success and
            Connections of People and Organizations.
          </p>
          <v-btn color="white" outlined>Read More</v-btn>
        </div>
      </v-col>
    </v-row>
    <VueSlickCarousel v-bind="setting" class="my-10">
      <div  class="ourTeam-card" v-for="(item, i) in dataTeam" :key="i">
      <div>
        <div
          :style="`
              height: 357px;
              width: 386px;
              background: url(${getImage(item.img)})
                no-repeat center center;
              -webkit-background-size: cover;
              -moz-background-size: cover;
              -o-background-size: cover;
              background-size: cover;
	      position:relative;
            `"
        >
          <div class="indigo ourTeam-social">
            <v-btn icon>
              <v-icon color="white">mdi-facebook </v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon color="white">mdi-twitter </v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon color="white">mdi-heart </v-icon>
            </v-btn>
          </div>
        </div>
        <div class="elevation-4 text-center ourTeam-title">
          <h1 style="font-size: 19px">{{ item.name }}</h1>
          <p>{{ item.title }}</p>
        </div>
          </div>
      </div>
    </VueSlickCarousel>
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
      dataTeam: [
        {
          name: 'Jennifer Garcia',
          title: 'It service officer',
          img: 'img5',
        },
        {
          name: 'Robert Liam',
          title: 'Web designer',
          img: 'img6',
        },
        {
          name: 'Jessica Ethan',
          title: 'Project manager',
          img: 'img7',
        },
        {
          name: 'Jennifer Garcia',
          title: 'It service officer',
          img: 'img5',
        },
        {
          name: 'Robert Liam',
          title: 'Web designer',
          img: 'img6',
        },
        {
          name: 'Jessica Ethan',
          title: 'Project manager',
          img: 'img7',
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
  methods: {
    getImage(item) {
      return require(`~/assets/img/${item}.jpg`)
    },
  },
}
</script>
