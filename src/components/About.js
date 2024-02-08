import UserClass from "./UserClass";
import React, { Consumer } from "react";
import UserContexts from "../utils/UserContexts";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent Constructor is called");
  }

  componentDidMount() {
    console.log(" Parent Componentdidmount is called");
  }

  render() {
    console.log("parent render is called");
    return (
      <div className="text-center m-4 p-4">
        {/* <UserContexts.Consumer>
          {(data) => console.log(data)}
        </UserContexts.Consumer> */}
        <h1 className="font-bold text-2xl p-5"> welcome to About </h1>

        <UserClass name="First" location="bengauluru" />
      </div>
    );
  }
}

/* 

# parent constructor is called
# parent render is called

*First child constructor is called
*First Child render is called

*second Child Constructor is called
*second Child render is called

+First Child ComponentDidMount is called
+Second Child ComponentDidMount is called

# Parent ComponentDidMount is called.


**/
export default About;
