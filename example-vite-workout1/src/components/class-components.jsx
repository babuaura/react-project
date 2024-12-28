import { Component } from "react"

export default class ClassComponents extends Component{

    //state
    state = {
        showText : false,
        changeColor : false,
        count : 0,
        countStyle : false
    };

    //     constructor (props){
    //         super(props);
    //         this.state = state;
    //    }

    ToogleText = () => {
        const {showText, changeColor} = this.state;
        // console.log("button clicked");
        // console.log(this.state);
        // this.state.showText = !this.state.showText;
        this.setState({
            showText : !showText,
            changeColor : !changeColor
        })
    };

    handleCount = () => {
        this.setState({
            ...this.state,
            count : this.state.count + 1
        })
        

    }

    //componentDidMount()
    //componentDidUpdate()
    //componentWillUpdate()

    componentDidMount(){
        console.log("Component Did Mounting, this is called on First time we reload Page");
        const {showText, changeColor} = this.state;
        // this.state.showText = !this.state.showText;
        this.setState({
            showText : !showText,
            changeColor : !changeColor
        })
    }

    componentDidUpdate(prevProps, prevState){
        console.log("prevProps",prevProps);
        console.log("prevState",prevState, this.state);

        if(this.state && this.state.count && prevState && prevState.count && prevState.count !== this.state.count && this.state.count ===10){
            this.setState({
                ...this.state,
                countStyle : !this.state.countStyle
            })
        }
    }

    componentWillUnmount(){
        console.log("component will be unmounted");
        
    }

    
    render(){
        const {showText, changeColor, count, countStyle} = this.state;
        // console.log(this.state);
        return (
            <>
            <h2 style ={{ color : changeColor ? "red" : "black" }}> Color Checking</h2>
            {
                showText ? <h2 style ={{ color : changeColor ? "red" : "black" }}> Class Based Component</h2> :  null 

            }
                
                <button onClick = {this.ToogleText}>Toggle Text</button>
                <button onClick = {this.handleCount}> Incr Count</button>
                <h2 style = {{ color : countStyle ? "blue" : "red", fontSize : countStyle ? "30px" : "15px"}}> Count is {count}</h2>
            </>
        );
    }
}

// export default ClassComponents;