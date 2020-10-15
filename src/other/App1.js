import React,{Component} from 'react'
// hash模式
// import {HashRouter as Router,Link,Route} from 'react-router-dom'

// history模式
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'

// 无状态组件，只有props
function Home(){
  return(
    <div>
      <h1>admin 首页</h1>
    </div>
  )
}
function My(props){
  console.log(props)
  return(
    <div>
      {/* 动态路由 */}
      <h1>admin 个人中心 id:{props.match.params.id}</h1>
    </div>
  )
}
function Product(){
  return(
    <div>
      <h1>admin 产品页</h1>
    </div>
  )
}
class App extends Component{
  render(){
    // link可以设置的四个参数
    let myObj = {
      pathname:"/my/123",
      search:"?username=admin",
      hash:"#abc",
      state:{msg:"hello word"}
    }
    return (
      <div id="app">
        <Router>
          <Route path="/" exact component={()=>(<div>首页</div>)}></Route>
          <Route path="/my" component={()=>(<div>my</div>)}></Route>
          <Route path="/product" component={()=>(<div>product</div>)}></Route>
        </Router>

        <Router basename="/admin">
          <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/product">Product</Link>
            <Link to={myObj} replace>My</Link>
          </div>
          <Route path="/" exact component={Home}></Route>
          <Route path="/product" component={Product}></Route>
          <Route path="/my/:id" component={My}></Route>
        </Router>
      </div>
    )
  }
}

export default App