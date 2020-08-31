<template>
  <v-row align="center" justify="center">
    <v-col cols="12">
      <h2 class="text-center">Search MDI Quickly</h2>
    </v-col>
    <v-col cols="12" md="6">
      <Search ref="search" @loading="loadingState" />
    </v-col>
    <v-col cols="12">
      <div v-if="loading">Loading..</div>
      <IconGrid v-else v-model="iconsArr" />
    </v-col>
  </v-row>
</template>

<script>
import Search from '@/components/Search'
import IconGrid from '@/components/IconGrid'

export default {
  components: {
    Search,
    IconGrid,
  },
  fetch() {
    return fetch('https://cdn.materialdesignicons.com/5.5.55/meta.json')
      .then((x) => x.json())
      .then((jsonData) => {
        this.$store.commit('search/addIcons', jsonData)
      })
  },
  data() {
    return {
      searchLoading: false,
    }
  },
  computed: {
    iconsArr() {
      return this.$fetchState.pending ? null : this.$refs.search.iconsArr
    },
    loading() {
      return this.$fetchState.pending || this.searchLoading
    },
  },
  methods: {
    loadingState(e) {
      this.searchLoading = e
    },
  },
}
</script>
