<template lang="pug">
.cards-container
  catalog-card(
    v-for="card in catalogData.products"
    :card="card"
    @pickTheCard="openCatalog(card.id)"
  )
</template>

<script>
import { mapGetters } from 'vuex'
import catalogCard from "~/components/CatalogCard.vue";
export default {
  name: 'IndexPage',
  comments: {
    catalogCard
  },
  computed: {
    ...mapGetters({
      catalogData: 'getCatalogData',
    }),
  },
  methods: {
    openCatalog(id){
      this.$router.push('catalog/' + id)
    }
  }
}
</script>
<style>
.cards-container{
  display: flex;
  justify-content: center;
}
</style>
