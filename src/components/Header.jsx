import React from 'react'
import img1 from '../img/pizza1.jpg'
import '../App.css'


const Header = () => {
    return (
        <div>     
           <div className="col-12">
                <img className="w-100 img1" src={img1} alt="pizza" />
           </div>
           
        </div>
    )
}

export default Header


     
