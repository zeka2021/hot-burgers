import React from "react";
import Header from './Header';
import Order from './Order';
import MenuAdmin from "./MenuAdmin";
import sampleBurgers from '../sample-burgers';
import Burger from "./Burger";
import base from '../base';
// import firebase from 'firebase/app';

class App extends React.Component {
    state = {
        burgers: {},
        order: {}
    };

    componentDidMount() {
        const { params } = this.props.match;

        const localStorageRef = localStorage.getItem(params.restaurantId);
        if (localStorage) {
            this.setState({ order: JSON.parse(localStorageRef) });
        }
        
        this.ref = base.syncState(`${params.restaurantId}/burgers`, {
            context: this,
            state: 'burgers'
        });
        // console.log('mount')
    }

    componentDidUpdate() {
        // console.log('update');
        const { params } = this.props.match;
        localStorage.setItem(params.restaurantId, JSON.stringify(this.state.order));
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    addBurger = burger => {
        // console.log(burger);
        const burgers = { ...this.state.burgers };
        burgers[`burger${Date.now()}`] = burger;
        this.setState({ burgers });
        
    };
    updateBurger = (key, updatedBurger) => {
    // 1. Делаем копию объекта state
    const burgers = { ...this.state.burgers };
    // 2. Обновляем нужный burger
    burgers[key] = updatedBurger;
    // 3. Записать наш новый объект burgers в state
    this.setState({ burgers });
  };

//   deleteBurger = key => {
//     // 1. Делаем копию объекта state
//     const burgers = { ...this.state.burgers };
//     // 2. Удаляем burger
//     burgers[key] = null;
//     // 3. Записать наш новый объект burgers в state
//     this.setState({ burgers });
//   };


    loadSampleBurgers = () => {
        this.setState({ burgers: sampleBurgers });        
    }

    addToOrder = (key) => {
        const order = { ...this.state.order }
        order[key] = order[key] + 1 || 1;
        this.setState({ order })
    };
    render() {
        return (
            <div className='burger-paradise'>
                <div className='menu'>
                    <Header title="Very Hot Burger" />
                    <ul className='burgers'>
                        {Object.keys(this.state.burgers).map(key => {
                            return <Burger
                                key={key}
                                index={key}
                                addToOrder={this.addToOrder}
                                details={this.state.burgers[key]}
                            />;
                        })}
                    </ul>
                </div>
                <Order burgers={this.state.burgers} order={this.state.order}/>
                <MenuAdmin
                 addBurger={this.addBurger}
                    loadSampleBurgers={this.loadSampleBurgers}
                    burgers={this.state.burgers}
                    updateBurger={this.updateBurger}
                />
            </div>
        );
       
    }
}
export default App;