import React from 'react';
import './game.css';


class Game extends React.Component {
    constructor(props) {
        //  props 为关键字 代表组件的传参
        super(props)
        //  state 为关键字 代表该组件state 中的数据可更新
        this.state = {
            date: new Date(),
            isOn: false,
        };

        // 为了确保在时间函数中的 this 指向问题
        this.changeOn = this.changeOn.bind(this);
    }

    // 组件被挂载时候的 生命周期钩子
    componentDidMount() {
        this.timer = setInterval(() => {
            this.getTime();
        }, 1000);
    }

    // 组件即将被销毁的时候的 生命周期钩子
    componentWillUnmount() {
        clearInterval(this.timer);
    }

    getTime() {
        // setState 来更新 react 中 State 的数据
        this.setState({
            date: new Date()
        });
    }

    changeOn() {
        this.setState((state)=>{
            return {
                isOn: !state.isOn
            }
        })
    }

    render() {
        const isShow = this.state.isOn;
        let showDiv = <div className="redFont">开状态 我就展示了</div>;
        if(!isShow) {
            showDiv = <div style={{height:'21px'}}></div>;
        }
        return (
            <div>
                <h1>{this.props.name}</h1>
                <div>{this.state.date.toLocaleString()}</div>
                <br />
                {this.props.left}
                {showDiv}
                <button onClick={this.changeOn}>开关 {this.state.isOn?'ON':'OFF'}</button>
                {this.props.children}

            </div>
        )
    }
}


export default Game;