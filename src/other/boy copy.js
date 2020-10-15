import React,{Component} from 'react';
import './style.css'

class App extends Component{
  constructor(props){
    // 继承父级方法
    super(props)
    this.state={
      inputValue:'',
      list:[]
    }
  }
  render(){
    return (//使用括号可以换行
      <div>
        {/* 注释写法 */}
        <label htmlFor="input">技能</label>
        <input id="input" className="input" value={this.state.inputValue} onChange={this.inputChange.bind(this)}/>
        <button onClick={this.addList.bind(this)}>添加</button>
        <ul>
          {
            this.state.list.map((item,index) => {
              return (
              <li 
                key={index+item}
                onClick={this.deleteItem.bind(this,index)}
                dangerouslySetInnerHTML={{__html:item}}
              >
                {/* {item} */}
              </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
  inputChange(e){
    this.setState({
      inputValue: e.target.value
    })
  }
  addList(){
    // 不能用push？
    this.setState({
      list: [...this.state.list,this.state.inputValue],
      inputValue: ''
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