import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from "./router/AppRouter"
import {Provider} from "react-redux"
import configtureStore from "./store"
import "./static/css/reset.css"
import "./static/css/iconfont.css"

const store = configtureStore()

// 2. 使用Provider组件的好处是,只需要给Provider组件设置属性,那么其子组件和其子组件中的子组件都可以直接使用其对应的属性
// 3. 避免了组件嵌套之后一个一个传递的复杂操作
ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
)