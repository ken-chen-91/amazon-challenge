import "./App.css";
import Header from "./Header/Header";
import Home from "./Home/Home";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from "./Checkout/Checkout";
import Login from "./Login/Login";
import {useEffect} from "react";
import {auth} from './firebase'
import {useStateValue} from "./function/StateProvider/StateProvider";


function App() {

    const [{}, dispatch] = useStateValue();

    useEffect(() => {
        auth.onAuthStateChanged(authUser => {
            if (authUser) {
                dispatch({
                    type:'SET_USER',
                    user:authUser
                })
            } else {
                dispatch({
                    type:'SET_USER',
                    user:null
                })
            }
        })
    }, [])

    return (
        <Router>
            <div className="App">
                <Header/>
                <Switch>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/checkout">
                        <Checkout/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
