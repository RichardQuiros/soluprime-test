<template>
  <v-container class="section">
    <div class="news-background">
      <v-row
        align="center"
        class="px-10 news-backdrop"
      >
        <v-col cols="12" md="2">
          <p>We make connection</p>
          <h1>Explore Recent</h1>
        </v-col>
        <v-col cols="12" md="8">
          <p>
            A project is a temporary endeavor with a defined beginning and end,
            scope, and assigned resources.
          </p>
        </v-col>
        <v-col class="news-magnify">
          <v-btn icon  outlined color="white">Read More <v-icon>mdi-magnify </v-icon></v-btn>
        </v-col>
      </v-row>
    </div>
    <v-row class="mt-12">
      <v-col v-for="(item, i) in items" :key="i" cols="12" md="4">
        <v-hover v-slot="{ hover }">
          <v-card :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }">
            <v-img :src="require('~/assets/img/'+item.img+'.jpg')" height="400px">
              <v-card-title class="title white--text">
                <v-row class="fill-height flex-column" justify="space-between">
                  <p class="mt-4 subheading text-left">
                    {{ item.title }}
                  </p>

                  <div>
                    <p
                      class="ma-0 body-1 font-weight-bold font-italic text-left"
                    >
                      {{ item.text }}
                    </p>
                    <p class="caption font-weight-medium font-italic text-left">
                      {{ item.subtext }}
                    </p>
                  </div>

                  <div class="align-self-center">
                    <v-btn
                      v-for="(icon, index) in icons"
                      :key="index"
                      :class="{ 'show-btns': hover }"
                      :color="transparent"
                      icon
                    >
                      <v-icon
                        :class="{ 'show-btns': hover }"
                        :color="transparent"
                      >
                        {{ icon }}
                      </v-icon>
                    </v-btn>
                  </div>
                </v-row>
              </v-card-title>
            </v-img>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    img: '',
    icons: ['mdi-link-variant', 'mdi-play', 'mdi-heart'],
    items: [
      {
        title: 'Lorem Ipsum',
        text: `Lorem ipsum!`,
        subtext:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem lectus, vehicula nec vehicula pellentesque, egestas id augue. Nulla et lobortis odio, vel fermentum sapien.',
        img:
          'img8',
      },
      {
        title: 'Lorem Ipsum',
        text: `Lorem ipsum!`,
        subtext:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem lectus, vehicula nec vehicula pellentesque, egestas id augue. Nulla et lobortis odio, vel fermentum sapien.',
        img:
          'img9',
      },
      {
        title: 'Lorem Ipsum',
        text: `Lorem ipsum!`,
        subtext:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem lectus, vehicula nec vehicula pellentesque, egestas id augue. Nulla et lobortis odio, vel fermentum sapien.',
        img:
          'img10',
      },
    ],
    transparent: 'rgba(255, 255, 255, 0)',
  }),
}
</script>
<style scoped>
.v-card {
  transition: filter 0.4s ease-in-out;
}

.v-card:not(.on-hover) {
  filter:brightness(0.70);
}

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>
