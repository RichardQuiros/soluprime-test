<template>
  <v-container class="section">
    <v-row>
      <v-col  cols="12" lg="5">
        <p>Aabout us</p>
        <h1 class="display-1 font-weight-bold">
          We are here to IT Solution with
          <span class="borderBottom">20</span>
          years of
          <span class="font-italic indigo--text" style="font-family: fangsong"
            >experience</span
          >
        </h1>
        <p class="my-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem
          lectus, vehicula nec vehicula pellentesque, egestas id augue. Nulla et
          lobortis odio, vel fermentum sapien. Mauris efficitur lacus pharetra
          blandit imperdiet. Praesent tincidunt id leo at hendrerit. Praesent
          quis augue ac odio porta gravida eget lacinia arcu. Nulla facilisi.
          Pellentesque semper lorem libero, non dignissim enim molestie at. Nam
          ultrices orci ut augue efficitur fringilla. Pellentesque maximus
          sapien sed nisl tincidunt fringilla. Phasellus fringilla, lorem congue
          ullamcorper pellentesque, orci turpis gravida est, vitae varius nisl
          nisl ut dui. Praesent feugiat molestie nisi a bibendum. Donec eget
          metus nec ex vehicula facilisis tempor ut purus. Nulla nec malesuada
          orci, ut rutrum ipsum. Etiam pharetra rhoncus volutpat. Nulla sed
          laoreet massa. Suspendisse tincidunt est et dictum fringilla.
          Phasellus semper mi eu augue tristique pretium.
        </p>
        <v-row>
          <v-col>
            <ul>
              <li>data</li>
              <li>data</li>
              <li>data</li>
            </ul>
          </v-col>
          <v-col>
            <ul>
              <li>data</li>
              <li>data</li>
              <li>data</li>
            </ul>
          </v-col>
        </v-row>
        <v-divider class="my-4"></v-divider>
        <p>
          Call to ask <a href="#">any question</a>:
          <strong>5555-5555</strong> or <strong>5555-5555-5555</strong>
        </p>
      </v-col>
      <v-col>
        <div class="abot-container-img centerAll">
          <v-img class="about-img"
            max-height="614"
            max-width="569"
            :src="require('~/assets/img/img3.png')"
          >
          </v-img>
          <div
            class="rounded-lg indigo pa-10 about-card"
            
          >
            America IT Solutin Association AIA
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
