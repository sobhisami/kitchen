import React, { Component } from 'react';
import './menu.css';
import MenuCard from '../../components/MenuCard';
import ContainerLarge from '../../components/ContainerLarge';
import menu1 from '../../Mocks/MenuOne';
import menu2 from '../../Mocks/MenuTow';

class Menu extends Component {
    render() {
        return (
            <section className='menu' id='Menu'>
                <ContainerLarge>
                    <h2>Straight From Kitchen</h2>
                    <p className="under_title">Our Menu</p>
                    <div className="menu_list">
                        <div className="column">
                            {menu1.map((item, index) => <MenuCard key={index} image={item.image} name={item.name} description={item.description} price={item.price} />)}            </div>
                        <div className="column">
                            {menu2.map((item, index) => <MenuCard key={index} image={item.image} name={item.name} description={item.description} price={item.price} />)}            </div>
                    </div>
                </ContainerLarge>
            </section>
        );
    }
}

export default Menu;