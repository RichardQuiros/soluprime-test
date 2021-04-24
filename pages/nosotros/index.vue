<template>
  <div>
    <div id="header">
      <Banner
        title="nosotros"
        icon="mdi-home"
        link="/"
        link_title="Home"
        text="nosotros"
        :image="require('~/assets/img/img16.jpg')"
      ></Banner>
    </div>
    <v-container>
      <Document :submenu="$store.state.data.services" />
      <v-row class="section my-10">
        <v-col cols="12" md="6" class="centerAll">
          <v-img
            class="page-services-img"
            width="426"
            height="467"
            :src="require('~/assets/img/img17.png')"
          >
          </v-img>
        </v-col>
        <v-col>
          <p>Our service</p>
          <h1>
            Would you like to take over
            <span class="borderBottom">our</span> web services
          </h1>
          <p>Lorem ipsum</p>

          <div v-for="(item, i) in dataWhy" :key="i">
            <div class="whySoluprime-body-content">
              <div style="margin: auto">
                <v-icon
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
      <Services class="py-12" />
    </v-container>
  </div>
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
  mounted() {},
}
</script>
