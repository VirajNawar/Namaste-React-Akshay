
import { Component } from "react";
import UserContext from '../utils/userContext';




class About extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor");
    
  }

  componentDidMount() {
    // this.timer = setInterval(()=>{
    //     console.log("About Interval");
    // },1000)
    console.log("Component Did Mount");
  }

  componentWillUnmount(){
    // clearInterval(this.timer)
    console.log("Will Unmount");
  }

  render() {
    console.log("Render");
    return (
      <div>
        <h1>This is the About Us Page </h1>
       <UserContext.Consumer>
          {({user})=>(
            <span>{user.name}</span>
          )}
       </UserContext.Consumer>
      </div>
    );
  }
}

export default About;
