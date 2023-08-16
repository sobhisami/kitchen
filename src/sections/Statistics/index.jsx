import React, { Component } from 'react';
import './statistics.css';
import ContainerLarge from '../../components/ContainerLarge';
import StatisticBox from '../../components/ModelFixed';
import data from '../../Mocks/stati';


class Statistics extends Component {
    render() {
        return (
            <section className='statistics'>
                <ContainerLarge>
                    <div className="content">
                        {
                            data.map((item, index) => (
                                <StatisticBox
                                    key={index}
                                    icon={item.icon}
                                    number={item.number}
                                    text={item.text}
                                    index={index}
                                />
                            ))
                        }                   
                    </div>
                </ContainerLarge>
            </section>
        );
    }
}

export default Statistics;