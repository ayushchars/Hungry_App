import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import "./style.css"
import { useParams } from 'react-router-dom';
function ProductDetail() {

    const { id } = useParams()


    const [data, setdata] = useState([])


    const carts = useSelector(state => state.seleced.cart)


    const compair = () => {
        let compairData = carts.filter((e) => {
            return e.id == id
        });
        setdata(compairData)
    }

    useEffect(() => {
        compair()
    }, [id])





    return (
        <>
            <div className='detail_contaienr'>
                {data.map(e => {
                    return (

                        <>
                            <div className='detail_img'>
                                <img src={e.imgdata} alt="" />
                            </div>
                            <div className='detail_content'>
                                <h1>{e.rname}</h1>
                                <h2>{e.address}</h2>
                                <p>{e.somedata}</p>
                                <p>Rating- {e.rating}</p>
                                <h2>Price - {e.price}</h2>
                                <h2>Quantity - {e.qnty}</h2>

                            </div>
                            /</>
                    )
                })}
            </div>
        </>

    )
}

export default ProductDetail
