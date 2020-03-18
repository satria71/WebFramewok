import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import './App.css';

export default function AuthExample(){
    return(
        <Router>
            <div>
                <AuthButton/>
                    <ul>
                        <li>
                            <Link to="/public">Public Page</Link>
                        </li>
                        <li>
                            <Link to="/private">Private Page</Link>
                        </li>
                    </ul>

                    <Switch>
                        <Route path="/public">
                            <PublicPage/>
                        </Route>
                        <Route path="/login">
                            <LoginPage/>
                        </Route>
                        <PrivateRoute path="/private">
                            <ProtectedPage/>
                        </PrivateRoute>
                    </Switch>
            </div>
        </Router>
    );
}

    const fakeAuth = {
        isAuthenticated: false,
        authenticate(cb){
            fakeAuth.isAuthenticated = true;
            setTimeout(cb, 100);
        },
        signout(cb){
            fakeAuth.isAuthenticated = false;
            setTimeout(cb, 100);
        }
    };

    function AuthButton(){
        let history = useHistory();

        return fakeAuth.isAuthenticated ? (
            <p>
                Wellcome!{""}
                <button
                    onClick={() => {
                        fakeAuth.signout(() => history.push("/"));
                    }}>
                    Sign out
                </button>
            </p>
        ) : (
            <p>You are no logged in.</p>
        );
    }

    function PrivateRoute({ children, ...res}){
        return(
            <Route
                {...res}
                render={({location}) =>
                    fakeAuth.isAuthenticated ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
                }
               />
        );
    }

    function PublicPage(){
        return <h3>Public</h3>;
    }

    function ProtectedPage(){
        return <h3>Private</h3>
    }

    function LoginPage(){
        let history = useHistory();
        let location = useLocation();

        let {from} = location.state || {from: {pathname: "/"}};
        let login = () => {
            fakeAuth.authenticate(() => {
                history.replace(from);
            });
        };

        return(
            <div>
                <p>You must log in to view the page at {from.pathname}</p>
                <button onClick={login}>Log in</button>
            </div>
        )
    }