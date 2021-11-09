import React from "react";
import Header from './Header';
import Order from './Order';
import MenuAdmin from "./MenuAdmin";
import sampleBurgers from '../sample-burgers';

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


    loadSampleBurgers = () => {
        this.setState({ burgers: sampleBurgers });
    }
    render() {
        return (
            <div className='burger-paradise'>
                <div className='menu'>
                    <Header title="Very Hot Burger" amount={10} hot={true}/>
                </div>
                 <Order />
                <MenuAdmin
                    addBurger={this.addBurger}
                loadSampleBurgers={this.loadSampleBurgers}
                />
            </div>
        );
       
    }
}
export default App;