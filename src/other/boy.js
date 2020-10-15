import React,{Component} from 'react';
// 只在当前组件生效吗？全局的，样式表没有作用域
// import cssObj from './style.css'
import cssObj from './style.module.css'
import cssObj1 from './user.module.css'
import cssObj2 from './common.module.css'
import BItem from './bitem'
console.log(cssObj2)

class App extends Component{
  constructor(props){
    // 继承父级方法
    super(props)
    this.state={
      inputValue:'',
      list:['sing','dance']
    }
  }
  componentWillMount(){
    console.log('componentWillMount组件将要渲染')
  }
  componentDidMount(){
    console.log('componentDidMount组件渲染完毕')
  }
  componentWillReceiveProps(){
    console.log('componentWillReceiveProps组件将要接收新的state和props')
  }
  componentWillUpdate(){
    console.log('componentWillUpdate组件将要更新')
  }
  componentDidUpdate(){
    console.log('componentDidUpdate组件更新完毕')
  }
  componentWillUnmount(){
    console.log('componentWillUnmount组件移除')
  }
  render(){
    return (//使用括号可以换行
      <div>
        {/* 注释写法 */}
        <label htmlFor="input">技能</label>
        <input 
        id="input" 
        className={cssObj.title}
        value={this.state.inputValue} 
        onChange={this.inputChange.bind(this)}
        ref={input=>this.input=input}
        />
        <button className={cssObj1.title,cssObj2.input} onClick={this.addList.bind(this)}>添加</button>
        <ul ref={ul=>this.ul=ul}>
          {
            this.state.list.map((item,index) => {
              return (
                <div style={{color:'yellow',fontSize:'20px'}}>
                  <BItem 
                  content={item}
                  key={index+item}
                  index={index}
                  // 非箭头，需bind,this指调用的环境
                  // deleteItem={this.deleteItem.bind(this)}
                  // 箭头函数传参，this指定义时的环境
                  deleteItem={(e)=>{this.deleteItem(index,'msg',e)}}
                  />
                </div>
              )
            })
          }
        </ul>
      </div>
    );
  }
  inputChange(e){
    this.setState({
      // inputValue: e.target.value
      inputValue: this.input.value
    })
  }
  addList(){
    // setState异步操作，回调函数获取更新的DOM
    this.setState({
      list: [...this.state.list,this.state.inputValue],
      inputValue: ''
    },()=>{
      console.log(this.ul.querySelectorAll('li').length)
    })
  }
  deleteItem(index){
    console.log(index)
    let list = this.state.list
    list.splice(index,1)
    this.setState({
      list:list
    })
  }
}

export default App;