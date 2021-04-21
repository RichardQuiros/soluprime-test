<template>
 <nav data-app>
    <div class="top-bar">
      <div class="top-bar-container">
        <div class="top-bar-title">Bienvenidos a Soluprime</div>
        <div class="top-bar-right">
          <div class="topbar-btn-wrapper">
            <div class="topbar-btn">
              <v-icon dark small>mdi-email-outline</v-icon>
              <span class="topbar-icon">ventas@soluprime.io</span>
            </div>
            <div class="topbar-btn">
              <v-icon dark small>mdi-phone</v-icon>
              <span class="topbar-icon">(507)302-3208 ext 3429</span>
            </div>
          </div>
          <div class="right-line"></div>
          <div>
            <v-btn icon dark>
              <v-icon class="topbar-icon" dark>mdi-facebook</v-icon>
            </v-btn>
            <v-btn icon dark>
              <v-icon class="topbar-icon">mdi-twitter</v-icon>
            </v-btn>
            <v-btn icon dark>
              <v-icon class="topbar-icon">mdi-linkedin</v-icon>
            </v-btn>
            <v-btn icon dark>
              <v-icon class="topbar-icon">mdi-instagram</v-icon>
            </v-btn>
          </div>
          <a class="topbar-contact-btn white--text">
            Contactanos
          </a>
        </div>
      </div>
    </div>
    <v-container>
      <v-toolbar flat>
        <v-app-bar-nav-icon
          v-if="mobile"
          @click="drawer = !drawer"
        ></v-app-bar-nav-icon>
        <v-toolbar-title>
          <img class="logo" src="https://soluprime.io/web/image/2935/logo_horizontal.svg" />
        </v-toolbar-title>
        <v-spacer></v-spacer>

        <v-menu open-on-hover offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn text color="grey" v-bind="attrs" v-on="on">
              <span>Servicios</span>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in items" :key="index">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-btn text color="grey">
          <span>Soluciones</span>
        </v-btn>
        <v-btn text color="grey">
          <span>Sistema de Firma Digital</span>
        </v-btn>
        <v-btn text color="grey">
          <span>Nosotros</span>
        </v-btn>
        <v-btn text color="grey">
          <span>Contáctenos</span>
        </v-btn>
      </v-toolbar>
    </v-container>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      clipped: false,
      mobile: false,
      drawer: false,
      fixed: false,
      items: [
        { title: 'Cloud' },
        { title: 'Infraestructura' },
        { title: 'Desarrollo de Software' },
        { title: 'Generacion de Marca' },
        { title: 'OutSourcing' },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
}
</script>
<style>
.logo {
  height: 60px;
  width: 197px;
}
.top-bar {
  height: 60px;
  width: 100%;
  background: #1a5691;
}

.top-bar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 0 auto;
}
.top-bar-right {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.top-bar-title {
  color: white;
}
.right-line {
  border-right-width: 1px;
  border-right-style: solid;
  border-right-color: white;
  margin-right: 15px;
  margin-left: 15px;
  height: 20px;
}
.topbar-btn-wrapper {
  display: flex;
  cursor: pointer;
  justify-content: flex-start;
  align-items: center;
}
.topbar-btn {
  display: flex;
  cursor: pointer;
  justify-content: flex-start;
  align-items: center;
  margin-right: 10px;
}
.topbar-btn :hover {
  background-color: antiquewhite;
}

.topbar-icon {
  color: #ffff;
}

.topbar-contact-btn {
  width: 100px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #238ddb;
  color: white;
  cursor: pointer;
  margin-left: 15px;
}

.topbar-contact-btn :hover {
  background-color: white;
  color: #238ddb;
  height: 100px;
}
</style>
