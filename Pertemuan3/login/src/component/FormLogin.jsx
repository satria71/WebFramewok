import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FormLogin.css';

const FormLogin = () => {
    return (
        <div>
            <div className="container">
                <form method="get">
                    <b><h3>Form Login</h3></b>
                    <div class="card">
                        <div class="card-body">
                            <b><h1>Tugas Pertemuan Ketiga</h1></b>
                            <div className="form-inline text">
                                <p for="username" class="mr-sm-2 p1">Username:</p>
                                <input type="username" name="user" class="form-control mb-2 mr-sm-2" placeholder="Enter Username" id="username"></input>
                                <p for="username" class="mr-sm-2 p1">Password :  </p>
                                <input type="password" name="pass" class="form-control mb-2 mr-sm-2" placeholder="Enter Password" id="password"></input>
                            </div>
                            
                                <input className="btn" type="submit" value="Login"></input>
                            
                            <div className="check" >
                                <input type="checkbox" name="remember"></input>  Remember Me
                            </div>
                            <center>
                                <div className="btn-cancel">
                                    Cancel
                                </div>
                            </center>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormLogin;