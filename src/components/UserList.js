import React, { Component } from "react";

export default class UserList extends Component {
  state = {
    users: [],
    isLoading: true,
    todoCount: 0,
  };
  constructor() {
    super();
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          this.setState({ users: data, isLoading: false });
        }, 2000);
      });
  }
  getTodoList = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((r) => r.json())
      .then((result) => console.log("Todo List:", result));
  };
  render() {
    console.log("State:", this.state);
    const { users, isLoading } = this.state;

    return (
      <div>
        <h3>UserList</h3>
        {isLoading === true
          ? "Loading..."
          : users.map((item) => (
              <div key={item.id}>
                {item.id}. {item.name} {item.surname}
              </div>
            ))}
        <hr />
        TODO LIST <br />
        <button onClick={this.getTodoList}>GET TODO LIST</button>
      </div>
    );
  }
}
