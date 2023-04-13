export const store = createStore({
    state () {
      return {
        data: {}
      }
    },
    mutations: {
      increment (state) {
        state.count++
      }
    }
  })
