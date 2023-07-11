import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { product, Seleced_product } from "../redux/action"
import Cardsdata from './DataList';
import "./style.css"
function Products() {

    const disptach = useDispatch()

    disptach(product(Cardsdata))

    const state = useSelector(state => state.products.products)



    const send = (e) => {

        disptach(Seleced_product(e))
    }


    return (
        <div className='productlisting_component'>
            {state.map(item => {
                const { id, address, imgdata, price, rname } = item
                return (
                    <div key={id} className="product_container">
                        <div className='product_img'>
                            <img src={imgdata} alt="" />
                        </div>
                        <div className='product_content'>
                            <h2>{rname}</h2>
                            <h3>Category - {address}</h3>
                            <p>Price - ₹ {price}</p>
                        </div>
                        <div className='btn'>
                            <button onClick={() => send(item)}>Add to CART</button>
                        </div>

                    </div>
                )
            })}
        </div>
    )
}

export default Products
