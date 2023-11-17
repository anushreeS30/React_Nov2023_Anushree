import React,{Component}from "react";
class Lifecycle extends Component
{
    constructor(props)
    {
        super(props);
        console.log("1.constructor called");
        this.state={data:null};
    }
    static getDerivedStateFromProps(nextProps,nextState)
    {
        console.log("2.getDerivedStsteFromProps called");
        return null;
    }
    componentDidMount()
    {
            console.log("3.componentDidMount called");
            this.setState({data:"Hello, World"});
    }
    shouldComponentUpdate(nextProps,nextState)
    {
        console.log("4.shouldComponentUpdate called");
        return true;
    }
    getSnapshotBeforeUpdate(prevProps,prevState)
    {
        console.log("5. getSnapshotBeforeUpate");
    }
    componentDidUpdate(prevProps,prevState,snapshot)
    {
        console.log("6. componentDidUpdate called");
    }
    componentsWillUnmount()
    {
        console.log("7. componentsWillUnmount");

    }

    render()
    {
        console.log("8. Render called");
        return(
            <div>
                <h1>Component Lifecycle Example</h1>
                <p>{this.state.data}</p>
            </div>
        );
    }
}
export default Lifecycle;