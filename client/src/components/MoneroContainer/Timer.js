import { React, PureComponent } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'

class Timer extends PureComponent {
    tickTime = 30000;
    constructor(props) {
        super(props);
        this.tickInterval = null;

        this.state = {
            tick:this.tickTime,
        };
    }

    componentDidMount() {
        //start the overall timer
        this.tickInterval = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        // clear the interval timer
        clearInterval(this.tickInterval);
    }

    //refresh timer for display
    tick = () => {
        const next = this.state.tick - 1000;
        if(this.state.tick > 0) {
            this.setState({tick:next});
        } else {
            this.setState({tick:this.tickTime});
        }
    }

    render() {
        const tick = this.state.tick/1000;

        return (
            <ProgressBar animated className='progress' max={30} now={tick} label={`${tick} s`}/>
        );
    }
}

export default Timer;
