import React from "react"

class UserClass extends React.Component{
    constructor(props)
    {
        super(props);
        this.state ={
            visitorCount:0
        }

    }
    render(){
        const {name, location} = this.props;
        return(
        <div className="user-card">
            <h4>Developer Details(class)</h4>
            <h4>Name: {name}</h4>
            <h5>Location: {location}</h5>
            <h5>Contact: Vinaysai4545@gmail.com</h5>
            <h5>Visitor Count : {this.state.visitorCount}</h5>
            <button className="visitor-btn" onClick={()=>{
                this.setState({
                    visitorCount: this.state.visitorCount + 1
                });
            }}>I have seen you...</button>
        </div>
    )
    }
}
export default UserClass;