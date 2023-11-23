import ShoppingBasket from '@mui/icons-material/ShoppingBasket'
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import './Header.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider';
function Header() {
    const [{basket},dispatch] = useStateValue()
  return (
    <div className='header'>
        <Link to='/' style={{textDecoration:"none", margin:"10px"}}>
        <div className="header_Logo">
        <StorefrontIcon fontSize='large' className='header_LogoImg'/>
        <h2 className='header_Title'>eSHop</h2>
        </div>
        </Link>
        <div className="header_Search">
        <input type='text' className='search'/>
         <SearchIcon fontSize='medium' className='search_Icon'/>
        </div>
        <div className="header_Nav">
            <Link to ="/login" style={{textDecoration:"none"}}>
            <div className="nav_Item">
                <span className='navItem_LineOne'>Hello Guest</span>
                <span className='navItem_LineTwo'>Sign In</span>
            </div>
            </Link>
            <div className="nav_Item">
                <span className='navItem_LineOne'>Your</span>
                <span className='navItem_LineTwo'>Shop</span>
            </div>
            <Link to = '/checkout' style={{textDecoration:"none"}}>
            <div className="nav_Item ">
                <ShoppingBasket fontSize='large' className='basket'/>
                <span className='navItem_LineTwo nav_ItemBasket'>{basket.length}</span>
            </div>
            </Link>

        </div>
    </div>
  )
}

export default Header