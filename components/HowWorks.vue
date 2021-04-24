<template>
  <v-container class="section centerAll">
    <div class="text-center">
      <p>How it works</p>
      <h1 class="mb-12">
        Check Out O<span class="borderBottom">ur W</span>ork Process
      </h1>
      <v-row class="howWork-steps">
        <v-col cols="12" sm="3" class="howWork-col">
          <div class="howWork-step">
            <div
              :style="`
              border-radius: 49%;
              background: url(${require('~/assets/img/img12.jpg')})
                no-repeat center center fixed;
              -webkit-background-size: cover;
              -moz-background-size: cover;
              -o-background-size: cover;
              background-size: cover;
              pdding: 0 !important;
              width: 100%;
              height: 100%;
	      `"
            >
              <div class="rounded-circle indigo howWork-number">1</div>
            </div>
            <h1 class="text-center mt-12">hdsfl</h1>
            <p class="text-center">Lorem ipsum</p>
          </div>
        </v-col>
        <v-col cols="12" sm="1" class="howWork-icons">
          <v-icon x-large>mdi-chevron-triple-right </v-icon>
        </v-col>
        <v-col cols="12" sm="3" class="howWork-col">
          <div class="howWork-step">
            <div
              :style="`
              border-radius: 50%;
              background: url(${require('~/assets/img/img13.jpg')})
                no-repeat center center fixed;
              -webkit-background-size: cover;
              -moz-background-size: cover;
              -o-background-size: cover;
              background-size: cover;
              pdding: 0 !important;
              width: 100%;
              height: 100%;
	      `"
            >
              <div class="rounded-circle indigo howWork-number">2</div>
            </div>
            <h1 class="text-center mt-12">hdsfl</h1>
            <p class="text-center">Lorem ipsum</p>
          </div>
        </v-col>

        <v-col cols="12" sm="1" class="howWork-icons">
          <v-icon x-large>mdi-chevron-triple-right </v-icon>
        </v-col>
        <v-col class="howWork-col">
          <div class="howWork-step">
            <div
              :style="`
              border-radius: 50%;
              background: url(${require('~/assets/img/img14.jpg')})
                no-repeat center center fixed;
              -webkit-background-size: cover;
              -moz-background-size: cover;
              -o-background-size: cover;
              background-size: cover;
              pdding: 0 !important;
              width: 100%;
              height: 100%;
	      `"
            >
              <div class="rounded-circle indigo howWork-number">3</div>
            </div>
            <h1 class="text-center mt-12">hdsfl</h1>
            <p class="text-center">Lorem ipsum</p>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>
