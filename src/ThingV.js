import { mapMutations, mapGetters } from 'vuex'

export default {
  computed: mapGetters(['count']),
  methods: mapMutations(['increment', 'decrement', 'reset']),
}
