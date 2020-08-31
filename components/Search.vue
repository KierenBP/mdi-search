<template>
  <div>
    <v-text-field
      v-model="search"
      label="Search Icons"
      type="search"
      prepend-inner-icon="mdi-magnify"
      solo-inverted
      @input="searchInput"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      searchTimeout: null,
    }
  },
  computed: {
    searchIconsArr() {
      return this.$store.state.search.iconsArr
    },
    iconsArr() {
      return this.searchIconsArr
        .filter((x) => x.searchString.includes(this.search))
        .map((x) => x.name)
    },
  },
  methods: {
    searchInput() {
      this.$emit('loading', true)
      if (this.search.length > 0) {
        this.searchTimeout = setTimeout(() => {
          this.$emit('loading', false)
        }, 300)
      } else {
        clearTimeout(this.searchTimeout)
        this.$emit('loading', false)
      }
    },
  },
}
</script>

<style></style>
