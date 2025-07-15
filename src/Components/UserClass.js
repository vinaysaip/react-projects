import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visitorCount: 0,
    };
  }
  render() {
    const { name, location } = this.props;
    return (
      <div className="pt-4">
        <h4 className="text-lg font-bold">Developer Details</h4>
        <h4>Name: {name}</h4>
        <h5>Location: {location}</h5>
        <h5>Contact: Vinaysai4545@gmail.com</h5>
        <h5>Visitor Count : {this.state.visitorCount}</h5>
        <button
          className="rounded-lg p-2 mt-2 bg-blue-600 text-white"
          onClick={() => {
            this.setState({
              visitorCount: this.state.visitorCount + 1,
            });
          }}
        >
          I have seen you...
        </button>
      </div>
    );
  }
}
export default UserClass;
