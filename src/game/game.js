import React from 'react';
import { useNavigate } from 'react-router-dom'
import './game.css';


// 函数组件  -- 无状态组件 纯UI   纯函数

function AgeShow(props) {
    return <h3> My age: {props.age} </h3>
}




// 类组件  -- 有状态组件 state
class Game extends React.Component {
    // 在 construtor 内部定义的方法，变量 在new 之后的实例上 会改变this 的指向问题
    constructor(props) {
        //  props 为关键字 代表组件的传参
        super(props)

        console.log(this.props.name,'组件传递进来的参数')

        //  state 为关键字 代表该组件state 中的数据可更新
        this.state = {
            date: new Date(),
            isOn: false,
            inputVal: '', // 数据内容
        };

        // 为了确保在时间函数中的 this 指向问题
        // this.changeOn = this.changeOn.bind(this);
        
        this.changeInput = this.changeInput.bind(this);
        this.handleChangeInput = this.handleChangeInput.bind(this);
        
        
    }

    changeInput(e) {
        this.setState({
            inputVal: e.target.value
        })
        console.log(this.state.inputVal)
    }

    handleChangeInput() {
        this.setState((preState)=>({
            inputVal: '我是手动更改的啊', // 数据内容
        }))
    }

    // 组件挂载的上时候
    componentDidMount() {
        
        this.timer = setInterval(() => {
            // 直接修改变量 仅仅会改变数据，视图层不会改变
            // this.state.date = new Date();

            // 使用 setState()

            this.setState({
                date: new Date()
            })
        
        }, 1000);
    }

    // 组件即将卸载的时候
    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render () {
        
        return (
            <div style={{'fontSize':'25px'}}>
                 { this.state.date.toLocaleTimeString() } 
                 <br />
                 <AgeShow age="25" />
                 <br />
                 <input type="text" value={this.state.inputVal} onChange={this.changeInput} />
                 <br />
                 <button onClick={this.handleChangeInput} >改变input</button>
                 <br />
                 {/* 条件渲染 */}
                 { 0 && <AgeShow age="29" /> }
                 <br />
                 <button onClick={this.goHome}>我要去home</button>
            </div>
            
        )
    }
    // 定义在constructor 上 及原型链 this 只想原型链
    
}


export default Game;