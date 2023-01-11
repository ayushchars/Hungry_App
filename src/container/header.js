import React, { useState, useEffect } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import "./style.css"
import { Badge, Menu, Table } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
function Header() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const select = useSelector(state => state.seleced.cart)
    // console.log(select)

    // TO give TOTAL OF YOUR CART PRODUCT

    const [price, setprice] = useState(0)

    // console.log(price)
    const total = () => {
        let price = 0;
        select.map(ele => {
            price = ele.price * ele.qnty + price
        })
        setprice(price)
    }
    useEffect(() => {
        total()
    }, [total])

    const navigate = useNavigate()

    const click = () => {
        navigate(-1)
    }

    return (

        <div className='header'>
            <img src='https://i.pinimg.com/originals/68/7d/ed/687dedbb44330094705fe031b63b8efa.png'
                alt="" className='header_logo'
                onClick={() => click()}
            />
            <div className='location'>
                <LocationOnIcon style={{ color: "red", fontSize: "30px" }} />
                <h1>mumbai</h1>

            </div>

            <div className='shoping_cart'>

                <Badge badgeContent={select.length} color="primary"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <ShoppingCartIcon style={{ fontSize: "40px", cursor: "pointer" }} />
                </Badge>
                <Menu id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': "basic-button"
                    }}
                >
                    {
                        select.length ?
                            <div className='card_details' style={{ width: "24rem", padding: "10px " }}>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Photos</th>
                                            <th>Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {select.map(e => {
                                            return (
                                                <>
                                                    <tr>
                                                        <td>
                                                            <Link to={`/product/${e.id}`} onclick={handleClose}>
                                                                <img src={e.imgdata} style={{ width: "6rem", height: "6rem", marginLeft: "20px" }} alt="" />
                                                            </Link>
                                                        </td>
                                                        <td className='contents'>
                                                            <p>{e.rname}</p>
                                                            <p>Price : ₹ {e.price} </p>
                                                            <p>Quantity :  {e.qnty} </p>
                                                        </td>
                                                    </tr>

                                                </>
                                            )
                                        })}
                                        <h2 className='total'   >Total : {price}</h2>
                                    </tbody>
                                </Table>
                            </div> :
                            <h1 style={{ padding: "10px", borderRadius: "10px" }}>

                                Your Cart Empty
                            </h1>
                    }
                </Menu>
            </div>
        </div>
    )
}

export default Header

