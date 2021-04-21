<template>
  <v-container fluid="true" class="section my-12">
    <v-row >
      <v-col>
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
    <v-row>
      <v-col align="center" v-for="(item, i) in dataTeam" :key="i">
        <div>
          <div
            :style="`
              height: 357px;
              width: 386px;
              background: url(${item.img})
                no-repeat center center;
              -webkit-background-size: cover;
              -moz-background-size: cover;
              -o-background-size: cover;
              background-size: cover;
	      position:relative;
            `"
          >
            <div
              class="indigo ourTeam-social"
            >
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
          <div
            class="elevation-4 text-center ourTeam-title"
          >
            <h1 style="font-size: 19px">{{ item.name }}</h1>
            <p>{{ item.title }}</p>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      dataTeam: [
        {
          name: 'Jennifer Garcia',
          title: 'It service officer',
          img:
            'http://anomica.themetechmount.net/wp-content/uploads/2019/10/team-one-480x520.jpg',
        },
        {
          name: 'Robert Liam',
          title: 'Web designer',
          img:
            'http://anomica.themetechmount.net/wp-content/uploads/2019/10/team-two-480x520.jpg',
        },
        {
          name: 'Jessica Ethan',
          title: 'Project manager',
          img:
            'http://anomica.themetechmount.net/wp-content/uploads/2019/08/team-three-480x520.jpg',
        },
      ],
    }
  },
}
</script>
