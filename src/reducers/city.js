import * as cityActions from "../constants/city"

const initState = {}

// 定义reducer纯函数,根据action的type的值进行不同的操作,进行新的state的返回,从而达到UI组件(展示组件)的重新渲染
export default function city(state = initState,action){
  switch(action.type){
    case cityActions.INIT_CITY:
      return state = action.data
    case cityActions.UPDATE_CITY:
      return state = action.data
    default:
      return state
  }
}