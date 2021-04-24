<template>
  <v-container :fluid="true" class="section">
    <v-row>
      <v-col class="whySoluprime-background-col" cols="12" md="6">
        <div class="whySoluprime-background" :style="`background:url(${require('~/assets/img/img4.jpg')})`"></div>
      </v-col>
      <v-col class="indigo pa-10 whySoluprime-body">
        <p>why Soluprime</p>
        <h1>
          We deal with the asspects of
          <span
	   class="borderBottom-white"
            >prof</span
          >essional it service
        </h1>
        <p>
          Our IT services converge business and technology experts to help to
          manage business processes of all categories.
        </p>
        <div v-for="(item, i) in dataWhy" :key="i">
          <div class="whySoluprime-body-content">
            <div style="margin: auto">
              <v-icon
                color="white"
                style="
                  border: solid white 1px;
                  margin-right: 20px;
                  padding: 1rem;
                "
                >{{ item.icon }}</v-icon
              >
            </div>
            <div>
              <h1 class="subtitle-2">{{ item.title }}</h1>
              <p class="font-weight-light">{{ item.text }}</p>
            </div>
          </div>
          <v-divider></v-divider>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      dataWhy: [
        {
          icon: 'mdi-wan ',
          title: 'Lorem ipsum',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem lectus, vehicula nec vehicula pellentesque, egestas id augue. Nulla et lobortis odio, vel fermentum sapien.',
          href: '#',
        },
        {
          icon: 'mdi-source-branch-plus ',
          title: 'Lorem ipsum',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem lectus, vehicula nec vehicula pellentesque, egestas id augue. Nulla et lobortis odio, vel fermentum sapien.',
          href: '#',
        },
        {
          icon: 'mdi-rocket-launch ',
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
