<template>
  <v-content class="section">
    <v-row>
      <v-col>
        <div
          style="
            height: 90vh;
            width: 90vw;
            margin-top: 2rem;
            margin-bottom: 2rem;
            background: url(http://anomica.themetechmount.net/wp-content/uploads/2019/11/col-bg-one.jpg?id=1252)
              no-repeat center center;
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;
          "
        ></div>
      </v-col>
      <v-col
        class="indigo pa-10"
        style="
          height: 700px;
          color: white;
          position: absolute;
          top: 10%;
          right: 0;
          width: 720px;
        "
      >
        <p>why Soluprime</p>
        <h1>
          We deal with the asspects of
          <span
            style="
              border: solid white;
              border-radius: 10%;
              border-width: 0 0 4px 0;
              padding-bottom: 10px;
            "
            >prof</span
          >essional it service
        </h1>
        <p>
          Our IT services converge business and technology experts to help to
          manage business processes of all categories.
        </p>
        <div v-for="(item, i) in dataWhy" :key="i">
          <div style="display: grid; grid-template-columns: auto 1fr">
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
  </v-content>
</template>
<script>
export default {
  data() {
    return {
      dataWhy: [
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
