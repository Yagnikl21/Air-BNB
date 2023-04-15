import React from 'react';
import Navbar from './Component/Navbar';
import Body from './Component/Body-1';
import Star from './Component/star';
import Data from './Data';


export default function App(){
    const d = Data.map((data)=>{
        return(
            <div>
                <Star 
                    key={data.id}
                    data={data}
                />
            </div>
        )
    })
    return(
        <div className='container'>
            <Navbar/>
            <Body />
            <section className="cards-list">
                {d}
            </section>
        </div>
    )
}