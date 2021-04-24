<template>
  <nav data-app style="nav">
    <div class="top-bar">
      <div class="top-bar-container">
        <div class="top-bar-title">Bienvenidos a Soluprime</div>
        <div class="top-bar-right">
          <div class="topbar-btn-wrapper">
            <div >
              <v-icon dark small>mdi-email-outline</v-icon>
              <span class="topbar-icon">ventas@soluprime.io</span>
            </div>
            <div class="ml-3">
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
          <a class="topbar-contact-btn white--text"> Contactanos </a>
        </div>
      </div>
    </div>
    <v-container :fluid="true" id="menu">
      <v-toolbar flat>
        <v-app-bar-nav-icon
          v-if="mobile"
          @click="drawer = !drawer"
        ></v-app-bar-nav-icon>
        <v-toolbar-title>
	<nuxt-link to="/">
          <img
            class="logo"
            src="https://soluprime.io/web/image/2935/logo_horizontal.svg"
          />
	  </nuxt-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>

        <v-menu open-on-hover offset-y>
          <template v-slot:activator="{ on, attrs }">
            <nuxt-link to="/services">
              <v-btn
                text
                color="grey"
                class="itemMenu"
                v-bind="attrs"
                v-on="on"
              >
                <span>Servicios</span>
              </v-btn>
            </nuxt-link>
          </template>
          <v-list>
            <v-list-item
                v-for="(item, i) in $store.state.data.services"
                :key="i"
                link
                :href="item.link"
                active-class="indigo--text text--accent-4"
              >
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
          </v-list>
        </v-menu>

        <nuxt-link :to="{ path: '/', hash: '#soluciones' }">
          <v-btn class="itemMenu" text color="grey">
            <span>Soluciones</span>
          </v-btn>
        </nuxt-link>

        <nuxt-link to="/sistemaDeFirmasDigitales">
          <v-btn class="itemMenu" text color="grey">
            <span>Sistema de Firma Digital</span>
          </v-btn>
        </nuxt-link>
        <nuxt-link to="/nosotros">
          <v-btn class="itemMenu" text color="grey">
            <span>Nosotros</span>
          </v-btn>
        </nuxt-link>
        <a href="tel:555-555">
          <v-btn class="itemMenu" text color="grey">
            <span>Contáctenos</span>
          </v-btn>
        </a>
        <v-app-bar-nav-icon
          class="btn-menu"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>
      </v-toolbar>
      <!-- MobilMenu -->
      <v-navigation-drawer class="menu-mobile" v-model="drawer" absolute temporary right>
        <v-list nav dense>
          <v-subheader>Bienvenidos a Soluprime</v-subheader>
          <v-list-item-group active-class="indigo--text text--accent-4">
            <v-list-group :value="true" no-action sub-group>
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>Servicios</v-list-item-title>
                </v-list-item-content>
              </template>
              <v-list-item
                v-for="(item, i) in $store.state.data.services"
                :key="i"
                link
                :href="item.link"
                active-class="indigo--text text--accent-4"
              >
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>

            <v-list-item>
              <v-list-item-title>Solucines</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>Sistema de fima digital</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>Nosotros</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </v-container>
    <div id="navbar"></div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      name: null,
      clipped: false,
      mobile: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
  mounted() {
    this.name = this.$route.name
    let navbar = document.getElementById('navbar')
    let header = document.getElementById('header')
    navbar.appendChild(header)
  },
  updated() {
    console.log(this.$route)
  },
  watch: {
    $route: function (name) {
      if (name.name != this.name) {
        this.name = name.name
        let navbar = document.getElementById('navbar')
        navbar.innerHTML = ''
        setTimeout(() => {
          let header = document.getElementById('header')
          navbar.appendChild(header)
        }, 1000)
      }
    },
  },
}
</script>
<style>
#menu {
  position: sticky;
  top: 0;
  background: white;
  z-index: 10;
}
.logo {
  position: relative;
  z-index: 10;
  height: 60px;
  width: 197px;
}
.top-bar {
  height: 60px;
  width: 100%;
  background: #1a5691;
  transition: 1s ease-in-out;
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
.btn-menu {
  display: none;
  transition: 1s ease-in-out;
}
.itemMenu {
  transition: 1s ease-in-out;
}

#menu a {
  text-decoration: none !important;
}

@media screen and (max-width: 1155px) {
  .top-bar {
    display: none;
  }
  .btn-menu {
    display: unset;
  }
  .itemMenu {
    display: none;
  }
}
</style>
