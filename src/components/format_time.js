import React, { Component } from 'react'

class FormatTime extends Component {
    constructor(props){
        super(props);

        this.timerContainerStyle = {
            display: 'flex',
            justifyContent: 'space-around',
        };

        this.timerStyle = {
            'boxShadow': '5px 5px 12px 3px grey inset',
            background: 'linear-gradient(to bottom right, limegreen, lavender)',
            // position: 'relative',
            // left: '50%',
            // transform: 'translate(-50%)',
            width: '383px'
        };

        this.state = {
            hour: 0,
            min: 0,
            sec: 0,
            ms: 0
        }
    }

    componentWillReceiveProps(nextProps) {
        const {elapsed} = nextProps;
        const sec = elapsed / 1000;
        const min = sec / 60;

        this.state = {
            hour: Math.floor(min / 60),
            min: Math.floor(min % 60),
            sec: Math.floor(sec % 60),
            ms: Math.floor(elapsed % 100)
        }
    }

    leadingZero(number) {
        if (number < 10) {
            return '0' + number;
        }
        return number;
    }

    trailingZero(number) {
        if (number < 10) {
            return number + '0';
        }
        return number;
    }

    render() {
        const { hour, min, sec, ms } = this.state;
        return (
            <div style={this.timerContainerStyle}>
                <div style={this.timerStyle} >{this.leadingZero(hour)}:{this.leadingZero(min)}:{this.leadingZero(sec)}.{this.trailingZero(ms)}</div>
            </div>
        )
    }
}

export default FormatTime;