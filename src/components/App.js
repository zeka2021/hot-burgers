import React from "react";
import Header from './Header';
import Order from './Order';
import MenuAdmin from "./MenuAdmin";

class App extends React.Component {
    state = {
        burgers: {},
        order: {}
    }
    addBurger = burger => {
        console.log(burger);
        const burgers = { ...this.state.burgers };
        burgers[`burger${Date.now()}`] = burger;
        this.setState({ burgers });
        
    }
    render() {
        return (
            <div className='burger-paradise'>
                <div className='menu'>
                    <Header title="Very Hot Burger" amount={10} hot={true}/>
                </div>
                 <Order />
                    <MenuAdmin addBurger={this.addBurger} />
            </div>
        );
       
    }
}
export default App;