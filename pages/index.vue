<template>
  <v-app>
    <Slider />
    <v-container >
      <v-row class="secondary mt-0 px-4">
        <v-col v-for="(item, i) in bannerItems" :key="i" class="pa-0">
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
              <v-icon dark class="pa-4"> mdi-heart </v-icon>
            </div>
            <div>
              <h1>{{ item.title }}</h1>
              <p>{{ item.text }}</p>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <About/>
    <Services/>
    <Whysoluprime/>
    <OurTeam/>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      bannerItems: [
        {
          color: 'indigo',
          color2: 'secondary',
          title: 'hello',
          text: 'world',
        },
        {
          color: 'secondary',
          color2: 'indigo',
          title: 'hello',
          text: 'world',
        },
        {
          color: 'indigo',
          color2: 'secondary',
          title: 'hello',
          text: 'worl',
        },
      ],
    }
  },
}
</script>
