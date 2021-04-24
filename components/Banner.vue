<template>
  <div
    class="banner-background text-center elevation-1"
    :style="`background-image:url(${image})`"
  >
    <div class="banner-body">
      <div>
        <h1 class="display-3 text-capitalize">{{ title }}</h1>
        <p>
          <nuxt-link
            :to="link"
            style="text-decoration: none; text-aling: center"
            ><v-icon style="position: relative; top: -2px" color="indigo">{{
              icon
            }}</v-icon>
            {{ link_title }}</nuxt-link
          >
          :: {{ text }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
    text: {
      type: String,
      required: false,
    },
    link: {
      type: String,
      required: false,
    },
    link_title: {
      type: String,
      required: false,
    },
    icon: {
      type: String,
      required: false,
    },
  },
}
</script>
