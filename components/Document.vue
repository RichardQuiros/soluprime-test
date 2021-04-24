<template>
  <v-row class="my-12">
    <v-col cols="12" md="3" v-if="submenu">
      <v-navigation-drawer
        floating
        permanent
        class="elevation-4 document-submenu py-3"
        style="height: 400px; position: sticky; top: 0"
      >
        <v-list-item-group active-class="indigo--text text--accent-4">
          <v-list-item v-for="item in submenu" :key="item.title" link :href="item.link">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-navigation-drawer>
    </v-col>
    <v-col class="document-body" v-html="$md.render(document ? document : $store.state.data.document_lorem[0].document)">
    </v-col>
  </v-row>
</template>
<script>
export default {
  props: {
    submenu: {
      type: Array,
      required: false,
    },
    document: {
      type: String,
      required: false,
    },
  },
}
</script>
