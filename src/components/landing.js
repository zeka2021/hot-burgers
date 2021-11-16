import React, {useState} from 'react';
import PropTypes from 'prop-types';
import restaurants from '../sample-restaurants';

const Landing = props => {
    //  state = {
    //     display: false,
    //     title: '',
    //     url: ''
    // };
    const [display, toggleDisplay] = useState(false);
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');

    const displayList = () => {
        // const { display } = this.state;
        // this.setState({ display: !display });
        toggleDisplay(!display);
    };

    const getTitle = restaurant => {
        const { title, url } = restaurant;
        // this.setState({ title, url, display: false })
        setTitle(title);
        setUrl(url);
        toggleDisplay(false);
    };

    const gotToRestaurant = () => {
        // const { url } = this.state;
        props.history.push(`/restaurant/${url}`);
    };

    return (
           
        <div className='restaurant_select'>
            <div className='restaurant_select_top'>
                <div onClick={displayList} className='restaurant_select_top_header font-effect-outline'>
                    {title ? title : 'Выбери ресторан'}
                </div>
                <div className='arrow_picker'>
                    <div className='arrow_picker-up'></div>
                    <div className='arrow_picker-down'></div>
                </div>
            </div>

            {display ? (
                <div className='restaurant_select_bottom'>
                    <ul>
                        {restaurants.map(restaurant => {
                            return (
                                <li
                                onClick={() => getTitle(restaurant)}
                                key={restaurant.id}
                            >
                                {restaurant.title}
                                </li>
                            );
                        })}
                      
                    </ul>
                </div>
            ) : null}
            {title && !display ? (
                <button onClick={gotToRestaurant}>Перейти в ресторан</button>
            ) : null}
        </div>
                
                
    );
};

Landing.propTypes = {
    history: PropTypes.object
};
    
export default Landing;




// class Landing extends React.Component {
//     state = {
//         display: false,
//         title: '',
//         url: ''
//     };

    // displayList = () => {
    //     const { display } = this.state;
    //     this.setState({ display: !display });
    // };

    // getTitle = restaurant => {
    //     const { title, url } = restaurant;
    //     this.setState({ title, url, display: false })
    // };

    // gotToRestaurant = () => {       
    //     const { url } = this.state;        
    //     this.props.history.push(`/restaurant/${url}`);
    // };

    // render() {
       

//         return (
           
//             <div className='restaurant_select'>
//                 <div className='restaurant_select_top'>
//                     <div onClick={this.displayList} className='restaurant_select_top_header font-effect-outline'>
//                         {this.state.title ? this.state.title : 'Выбери ресторан'}
//                     </div>
//                     <div className='arrow_picker'>
//                         <div className='arrow_picker-up'></div>
//                         <div className='arrow_picker-down'></div>
//                     </div>
//                 </div>

//                 {this.state.display ? (
//                     <div className='restaurant_select_bottom'>
//                         <ul>
//                             {restaurants.map(restaurant => {
//                                 return <li
//                                     onClick={() => this.getTitle(restaurant)}
//                                     key={restaurant.id}
//                                 >
//                                     {restaurant.title}
//                                 </li>;
//                             })}
                      
//                         </ul>
//                     </div>
//                 ) :null}
//                 {this.state.title && !this.state.display ? (
//                     <button onClick={this.gotToRestaurant}>Перейти в ресторан</button>
//                 ) : null}
//             </div>
                
                
//         );
//     }
// }

// Landing.propTypes = {
//   history: PropTypes.object
// };

