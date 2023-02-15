<template lang="pug">
.card(@click="pickTheCard")
  h1 {{ card.name }}
  p card ID: {{ card.id }}
</template>
<script>
export default {
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  data: () => ({

  }),
  methods:{
    pickTheCard() {
      this.$emit('pickTheCard')
    }
  }
}
</script>
<style>
.card {
  border: 1px solid black;
  max-width: 300px;
  cursor: pointer;
  margin: 15px;
  padding: 15px;
}
</style>
