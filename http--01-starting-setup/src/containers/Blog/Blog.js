import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import "./Blog.css";
//import axios from "axios";
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";
import FullPost from "./FullPost/FullPost";

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/"
                  exact
                  activeClassName="active"
                  activeStyle={{
                    color: "#fa923f",
                    textDecoration: "underline"
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-submit=true"
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {/*<Route path="/" exact render={() => <h1>Hello</h1>} />
        <Route path="/"  render={() => <h1>Hello2</h1>} />*/}
        <Route path="/" exact component={Posts} /> {/* "/" route olunca posts componentini render et*/}
        <Route path="/new-post" component={NewPost} />
        <Route path="/:id" exact component={FullPost} />
      </div>
    );
  }
}

export default Blog;
