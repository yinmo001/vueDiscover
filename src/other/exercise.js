import React, { Component } from 'react';
import Child from './child'

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      inputValue:'',
      list:[]
    }
  }
  render(){
    return (
      <div>
        <input type="month"/>
        <label htmlFor="input">技能</label>
        <input id="input" value={this.state.inputValue} onChange={this.inputChange.bind(this)}/>
        <button onClick={this.addList.bind(this)}>添加</button>
        <ul>
          {
            this.state.list.map((item,index)=>{
              return (
                <Child 
                key={index+item}
                content={item}
                index={index}
                deleteItem={this.deleteItem.bind(this)}
                />
                // <li
                // key={index+item}
                // onClick={this.deleteItem.bind(this,index)}
                // >
                //   {item}
                // </li>
              )
            })
          }
        </ul>
        </div>
    )
  }
  inputChange(e){
    this.setState({
      inputValue:e.target.value
    })
  }
  addList(){
    this.setState({
      list:[...this.state.list,this.state.inputValue],
      inputValue:''
    })
  }
  deleteItem(index){
    let list = this.state.list
    list.splice(index,1)
    this.setState({
      list:list
    })
  }
}

export default App