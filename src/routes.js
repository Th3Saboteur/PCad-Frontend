import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from './pages/Main';
import Search from './pages/Search';
import CreateAd from './pages/Create Ad';
import Ad from './pages/Ad';
import ShoppingCart from './pages/Shopping Cart';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main}/> 
                <Route path="/search/:campo/:tag" component={Search}/>
                <Route path="/new/ad" component={CreateAd}/> 
                <Route path="/ad/:id" component={Ad}/> 
                <Route path="/shopping-cart" component={ShoppingCart}/> 
            </Switch>
        </BrowserRouter>
    );
}