import React, { Component } from 'react';
// eslint-disable-next-line
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'


// 重定向
function LoginInfo(props){
  if(props.loginState === 'success'){
    return <Redirect to='/admin'></Redirect>
  }else{
    return <Redirect to='/login'></Redirect>
  }
}

let FormCon = () => {
  let pathObj = {
    pathname:"/logininfo",
    state:{
      loginState:'success'
    }
  }
  return (
    <div>
      <h1>表单验证</h1>
      <Link to={pathObj}>登录验证后页面</Link>
    </div>
  )
}

class ChildCom extends Component{
  render(){
    return (
      <div>
        <button onClick={this.clickEvent}>跳转首页</button>
      </div>
    )
  }
  clickEvent=()=>{
    console.log(this.props)
    this.props.history.push('/',{msg:'ChildCom发送的数据'})
  }
}

class App extends Component{
  render(){
    return (
      <div>
        <Router>
          <Route path="/" exact component={(props)=>{console.log(props);return (<h1>首页</h1>)}}></Route>
          <Route path="/form" component={FormCon}></Route>
          <Route path="/login" component={()=>(<h1>登录</h1>)}></Route>
          <Route path="/logininfo" component={LoginInfo}></Route>
          <Route path="/child" component={ChildCom}></Route>
        </Router>
      </div>
    )
  }
}
export default App