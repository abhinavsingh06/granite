import React, {useEffect, useState} from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import {setAuthHeaders} from "apis/axios";

const App = () => {
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setAuthHeaders(setLoading);
    }, []);

    if(loading){
        return <h1>Loading...</h1>
    };

    return(
        <Router>
            <Switch>
                <Route exact path="/" render = {()=><div>Home</div>}></Route>
                <Route exact path="/about" render ={()=><div>About</div>}></Route>
            </Switch>
        </Router>
    );
};

export default App;