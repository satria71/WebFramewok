import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import HelloComponent from './component/HelloComponent';
import FormLogin from './component/FormLogin';
import * as serviceWorker from './serviceWorker';
import BlogPost from './container/BlogPost/BlogPost';
import BlogPostMahasiswa from './container/BlogPost/BlogPostMahasiswa';

class Statefullcomponent extends React.Component{
    render(){
        return <p>ini adalah statefull component</p>
    }
}

//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<FormLogin />, document.getElementById('root'));
ReactDOM.render(<BlogPostMahasiswa />, document.getElementById('content'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
