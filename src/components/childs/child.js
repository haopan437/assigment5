
import React ,{ Component } from "react";
import './child.css';
export default class Child extends Component{

    constructor(props) {
        super(props);
        this.state = {background:"white",num:this.props.num}
    }

    changeColor(){
        let background = ""
        if(this.state.background ==="white"){
            this.state.num = this.props.num + 1
            this.setState({num:this.state.num })
            background = "black"
        }else{
            this.state.num = this.props.num - 1
            background = "white"
            this.setState({num:this.state.num })
        }
        this.setState({background:background})
    }

    render(){
        return (<div className="child" style={{background:this.state.background}} onClick={
            ()=>{
                this.changeColor();
                this.props.myfun(this.state.num);
            }}>

        </div>);
    }
}