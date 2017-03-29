import * as types from "../mutation_types"

/* ① index仓库 数据入口 */
const state = {
  time: null
}

/* ② index仓库 数据操作入口 修改①*/
const mutations={
  [types.SET_VISIT_TIME](state,val){
    state.time = (new Date()).toGMTString();
    if(val){
      state.time = val;
    }
  }
}

/* ③ index仓库 动作入口 下一步②*/
const actions={
  setVisitTime({commit},val){
    commit(types.SET_VISIT_TIME,val);
  }
}

/* ④ index仓库 数据暴露给外部*/
const getters={
  tools: state => state
}

export default {
  state,
  mutations,
  getters,
  actions
}
