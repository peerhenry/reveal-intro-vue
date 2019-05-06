export default {
  mutations: {
    increment: state => (state.count += 1),
    decrement: state => (state.count += -1),
    reset: state => (state.count = 0),
  },
  getters: {
    count: state => state.count,
  },
}
