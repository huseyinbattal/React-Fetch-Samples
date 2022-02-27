import React, { Component } from 'react'
import axios from "axios"

export default class PostList extends Component {
    state = {
        post:null
    }
    componentDidMount() {  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => res.json())
    .then((data) => {
     
        this.setState({ users: data, isLoading: false });
   
    }); }
    render() {
        return (
            <div>PostList</div>
        )
    }
}
