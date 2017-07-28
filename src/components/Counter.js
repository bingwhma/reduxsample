import React, {Component} from 'react'

class Counter extends Component {
    render() {
        //从组件的props属性中导入四个方法和一个变量
        const {increment, decrement, cnt} = this.props;

        console.log("Counter==> render=======")
        //渲染组件，包括一个数字，四个按钮
        return (
            <p>
                Clicked: {cnt} times
                {' '}
                <button onClick={increment}>+</button>
                {' '}
                <button onClick={decrement}>-</button>
                {' '}
            </p>
        )
    }
}

export default Counter