import User from "./User";
import UserClass from "./UserClass";
import React from "react";


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
      <div>
        <h1>About </h1>
        <h2>Welcome</h2>

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
