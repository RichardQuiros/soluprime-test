<template>
  <div>
    <div id="header">
      <Banner
        v-if="data != null"
        :title="data.title"
        icon="mdi-home"
        :image="require('~/assets/img/img16.jpg')"
        link="/"
        link_title="Home"
        :text="data.title"
      />
    </div>
    <v-container>
      <Document
        v-if="data != null"
        :submenu="$store.state.data.services"
        :document="data.document"
      />
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: null,
    }
  },
  async created() {
    try {
      let param = this.$route.params.id.replace(/ |%20/gi,"").toLowerCase()
      let query = await this.$store.state.data.services.filter((obj) => {
        return obj.title.replace(/ |%20/gi,"").toLowerCase() === param
      })
      if (query.lenght != 0) {
        this.data = query[0]
      } else {
        this.$router.push('no-found')
      }
    } catch (error) {
      console.log(error)
      this.$router.push('error')
    }
  },
}
</script>
