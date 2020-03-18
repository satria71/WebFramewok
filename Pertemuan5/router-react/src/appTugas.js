import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation,
    useParams,
    useRouteMatch
} from "react-router-dom";
import {
    Button,
    Navbar,
    Card
} from 'react-bootstrap';
import './App.css';

export default function AuthExample() {
    return (
        <Router>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">MarketPlaceku</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/public">Public Page <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/products">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/private">Log in</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <AuthButton />

                <Switch>
                    {/* <Route path="/public">
                        <PublicPage />
                    </Route> */}
                    <Route path="/login">
                        <LoginPage />
                    </Route>
                    <Route path="/products">
                        <Products />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <PrivateRoute path="/private">
                        <Admin />
                    </PrivateRoute>
                </Switch>
            </div>
        </Router>
    );
}

function About(){
    return(
        <div>
            <h3>Created by : Satria Putra Sabana</h3>
            <h5>&copy;2020</h5>
            
        </div>
    );
}

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        fakeAuth.isAuthenticated = true;
        setTimeout(cb, 100);
    },
    signout(cb) {
        fakeAuth.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};

function AuthButton() {
    let history = useHistory();

    return fakeAuth.isAuthenticated ? (
        <p>
            Selamat Datang dihalaman admin!{""}
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

function PrivateRoute({ children, ...res }) {
    return (
        <Route
            {...res}
            render={({ location }) =>
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

function PublicPage() {
    return <h3>Public</h3>;
}

function Admin() {
    return <h3>Wellcome Admin</h3>;
}

function Products() {
    let { path, url } = useRouteMatch();
    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Products</h5>
                    <p className="card-text">
                        <ul>
                            <li>
                                <Link to={`${url}/BajuAnak`}>Baju Anak</Link>
                            </li>
                            <li>
                                <Link to={`${url}/CelanaAnak`}>Celana Anak</Link>
                            </li>
                        </ul>
                        <hr />
                        <Switch>
                            <Route exact path={path}>
                                <h3></h3>
                            </Route>
                            <Route path={`${path}/:productId`}>
                                <Product />
                            </Route>
                        </Switch>
                    </p>
                </div>
            </div>
        </div>
    );
}

function Product() {
    let { productId } = useParams();
    if (productId === 'BajuAnak') {
        return (
            <div>
                <h3>Baju Anak</h3>
                <div class="card lebar">
                    <img class="card-img-top" src="..." alt="Gambar Baju Anak" />
                    <div class="card-body">
                        <h5 class="card-title">Baju Loreng Anak</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Beli</a>
                    </div>
                </div>
                <div class="card lebar">
                    <img class="card-img-top" src="..." alt="Gambar Baju Anak" />
                    <div class="card-body">
                        <h5 class="card-title">Baju Lengan Panjang</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Beli</a>
                    </div>
                </div>
            </div>
        );
    } else if (productId === 'CelanaAnak') {
        return (
            <div>
                <h3>Celana Anak</h3>
                <div class="card lebar">
                    <img class="card-img-top" src="..." alt="Gambar Celana Anak" />
                    <div class="card-body">
                        <h5 class="card-title">Celana Anak Pendek</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Beli</a>
                    </div>
                </div>
                <div class="card lebar">
                    <img class="card-img-top" src="..." alt="Gambar Celana Anak" />
                    <div class="card-body">
                        <h5 class="card-title">Celana Anak Panjang</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Beli</a>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <h3>{productId}</h3>
            </div>
        );
    }
}

function LoginPage() {
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
    let login = () => {
        fakeAuth.authenticate(() => {
            history.replace(from);
        });
    };

    return (
        <div>
            <p>You must log in to view the page</p>
            <button class="btn btn-primary" onClick={login}>Log in</button>
        </div>
    )
}


