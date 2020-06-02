export const state = () => ({});

export const mutations = {};

export const actions = {
  nuxtServerInit({commit, dispatch, state}, {req}) {
    // 서버에서 전달받은 데이터를 초기화 단계에서 컨텍스트에 데이터를 저장한다.
    // 아래 예제는 로그인 된 사용자를 불러와서 dispatch시켜주는 부분으로 없으면 새로고침 시
    // 로그인이 풀린다.
    // return dispatch('users/loadUser');
  },
};
