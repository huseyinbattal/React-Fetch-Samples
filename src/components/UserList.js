import React, { Component } from "react";

export default class UserList extends Component {
  state = {
    users: [],
    isLoading: true,
  };
  constructor() {
    super();
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) =>  {setTimeout(() => {
        this.setState({ users: data,isLoading:false })
      }, 2000);});
  }

  render() {
    console.log("State:", this.state);
    const { users,isLoading } = this.state;
    return (
      <div>
        <h3>UserList</h3>
        {isLoading===true ? "Loading..." : users.map((item) => (
          <div key={item.id}>
            {item.id}. {item.name} {item.surname}
          </div>
        ))}
      </div>
    );
  }
}
