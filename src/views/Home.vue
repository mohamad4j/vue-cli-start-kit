<template>
  <div class="home bg-grey-1">
    <h1>Home</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions,mapGetters } from 'vuex'
export default {
  name: 'Home',
  components: {
  },
  mounted () {
    this.getCategories().then(() => {
      console.log(this.categories[0])
    })
    // this.getCategory({ id: 1})
   this.hello()
  },
  computed: {
    ...mapGetters('category', ['categories'])
  },
  methods: {
    ...mapActions('category', ['getCategories', 'getCategory'])
  }
}
</script>
