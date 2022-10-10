import React from 'react';

export default class Banner extends React.PureComponent{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                {`Welcome, ${this.props.userName}`}
            </div>
        )
    }
}