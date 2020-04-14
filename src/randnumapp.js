import React from 'react';
import ReactDOM from 'react-dom';


class RandNumApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { nums: [], numsused: [], totalnum: 0, number: 0, color: 'green' };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handlePress = this.handlePress.bind(this);
    }

    handleSubmit() {
        //e.preventDefault();
        // if (this.state.totalnum == 0) {
        //   return;
        // }
        
        var tempnums = []
        
        for (var i = 1; i <= this.state.totalnum ; i++) {
            var number = i;
            tempnums.push(number);
        }

        // const newItem = {
        //   text: this.state.totalNum,
        //   id: Date.now()
        // };
        this.setState(state => ({
          nums: tempnums,
          numsused: [],
          color: "green",
          totalnum: this.state.totalnum
        }));
    }

    handleChange(e) {
        this.setState({ totalnum: e.target.value });
    }

    handlePress() {
        if (this.state.nums.length != 0) {
            var randnum = Math.floor(Math.random() * this.state.nums.length);

            var newnum = this.state.nums[randnum];

            var temparray = this.state.numsused;
            temparray.push(newnum);

            var temparray2 = this.state.nums;
            temparray2.splice(randnum,1);

            this.setState(state => ({ 
                number: newnum,
                nums: temparray2,
                numsused: temparray
            }));
        } else {
            this.setState(state => ({ 
                number: 0,
                color: "red"
            }));
        }
    }

    render() {
        return (
            <React.Fragment>
            <div class="container">
            <h1>Movie Number:</h1>
            <h1 style={{color: this.state.color}}> {this.state.number} </h1>
            <button onClick={this.handlePress}>New Number</button>
            <p>Numbers to be used: {this.state.nums.map((n, index) => (
                <span>{n}, </span>
            ))} </p>
            <p>Numbers already used: {this.state.numsused.map((n, index) => (
                <span>{n}, </span>
            ))} </p>
            
            <label htmlFor="new-num">
                Enter # of Movies
            </label>
            <input
                id="new-num"
                onChange={this.handleChange}
                value={this.state.totalnum}
            />
            <button onClick={this.handleSubmit}>
                Reset Numbers
            </button>
            </div>
            </React.Fragment>
        )
    }
}

export default RandNumApp