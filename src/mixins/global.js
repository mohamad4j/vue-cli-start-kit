const myMixin =  {
  created () {
   // console.log('hello from global mixin')
  },
  methods: {
    hello () {
      console.log('hello from global mixin method')
    }
  }
}
export default myMixin