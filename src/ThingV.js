import { mapActions, mapGetters } from 'vuex'

export default {
  computed: mapGetters(['count']),
  methods: mapActions(['increment', 'decrement', 'reset']),
}
