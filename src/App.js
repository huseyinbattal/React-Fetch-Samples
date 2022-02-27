import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList';
import PostList from './components/PostList';

function App() {
  
  return (
    <div className="App">
      App.js For Fetching
      <UserList />
      <hr />
      <PostList/>
    </div>
  );
}

export default App;
