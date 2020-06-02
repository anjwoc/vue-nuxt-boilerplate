/**
 * Sample Code
 */

export const state = () => ({
  id: '',
  userInfo: [{name: 'test', age: 21}],
});

export const mutations = {
  add(state, payload) {
    state.userInfo.push(payload);
  },
};

export const getters = {
  userInfo(state) {
    return state.userInfo;
  },
};

export const actions = {
  async setUserInfo({commit, state}, payload) {
    /**
     * 비동기 처리는 모두 actions에서 해야 함
     */
    //await this.$axios.get('http://localhost:3000');
  },
};
