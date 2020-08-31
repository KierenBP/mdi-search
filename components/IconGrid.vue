<template>
  <v-card style="height: 100vh; overflow-y: scroll">
    <v-card-text>
      <v-row>
        <v-col v-for="icon in value" :key="icon" cols="12" md="2">
          <v-lazy>
            <v-card
              outlined
              class="icon-card"
              hover
              @click="copyIconName(icon)"
            >
              <v-card-text>
                <v-icon :size="50">mdi-{{ icon }}</v-icon>
              </v-card-text>
              <h4 v-text="icon" />
            </v-card>
          </v-lazy>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    value: {
      type: Array,
      required: true,
    },
  },
  methods: {
    copyIconName(iconName) {
      return navigator.clipboard.writeText(iconName)
    },
  },
}
</script>

<style lang="scss" scoped>
.icon-card {
  text-align: center;
}
</style>
