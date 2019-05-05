<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {
      heroes: [],
      selectedId: undefined,
    }
  },

  mounted() {
    this.selectedId = this.$route.id
    this.heroes = service.getHeroes()

    this.route.paramMap.subscribe(params => (this.selectedId = params.id))

    this.selectedId = this.$route.id
  },
}
</script>

<style lang="scss" scoped>
</style>