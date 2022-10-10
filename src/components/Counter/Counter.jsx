import React from 'react';

export default class Counter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            current: 0
        }
        this.onDecreaseCounter = this.onDecreaseCounter.bind(this);
        this.onIncreaseCounter = this.onIncreaseCounter.bind(this);
    }

    onIncreaseCounter () {
        this.setState({
            current: this.state.current + 1
        })
    }

    onDecreaseCounter (){
        this.setState({
            current: this.state.current - 1
        })
    }

    render(){
        return (
            <div>
                <div>{this.state.current}</div>
                <button onClick={this.onIncreaseCounter}>Increase</button>
                <button onClick={this.onDecreaseCounter}>Decrease</button>
            </div>
        )
    }
    
}