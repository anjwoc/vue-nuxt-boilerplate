<template>
  <div>
    <h1>Main Page</h1>
  </div>
</template>

<script>
  import {mapMutations, mapActions, mapGetters} from 'vuex';
  export default {
    computed: mapGetters({
      // like this...
      // users: 'users/userInfos'
    }),
    data() {
      return {};
    },
    methods: {
      ...mapMutations({
        // add: 'users/add'
      }),
      ...mapActions({
        // login: 'users/login
      }),
    },
  };
</script>

<style scoped></style>
