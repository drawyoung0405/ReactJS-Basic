import React from "react";
class MyComponent extends React.Component {
    state = {
        name: 'Hoa',
        address: 'DN',
        age: 20
    }
     handleClick(event) {
        console.log(event)
        console.log("My name is", this.state.name )
        this.setState({
            name: "Anh Ba"
        })    
    }
    handleOnMouseOver(event){
        console.log(event.pageX)
    }
    render() {
        return (
            <>
            <div> My Name is  {this.state.name} and I'm from {this.state.address}, now I'm {this.state.age} </div>
            <button onClick = {(event)=>{this.handleClick(event)}}>Click me</button>
            <button onMouseOver={this.handleOnMouseOver}>Click me</button>

            </>
        );
    }
}
export default MyComponent;