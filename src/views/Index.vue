<template>
  <main>
    <h1 class="heading">Homepage</h1>

    <List :list="listData"/>
  </main>
</template>

<script>
import List from "@/components/List";

export default { 
  components: {
    List,
  },
  data() {
    return {
      listData: [
        {
            title: "Peanutbutter",
            checked: true
        },
        {
            title: "Trident",
            checked: false
        },
        {
            title: "Milk",
            checked: false
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.heading {
  color: $color-title;
}
</style>