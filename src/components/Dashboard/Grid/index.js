import React from 'react'
import "./style.css";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import {motion} from "framer-motion";
import { Link } from 'react-router-dom';
// import StarIcon from '@mui/icons-material/Star';
const Grid = ({coin , key}) => {


   
  return (
    <Link to={`/coinPage/${coin.id}`}>
    <div className='mainGrid'  >
        <motion.div initial={{y:1, opacity:0}} animate={{y:0 , opacity:1}} className={`${coin.price_change_percentage_24h < 0 ? "gridContainer redBox" : "gridContainer greenBox"}`}  key={key} >
        <div className='coinLogo'>
        <img src={coin.image} style={{width:"4.5rem"}} alt='coin-logo' />
         <div className='coinName'>
          <p>{coin.symbol}-USD</p>
          <p>{coin.name}</p>
        </div>
        {/* <div title="Wishlist" className='wishListDiv' onClick={()=>handleWishList}><StarIcon id="wishList" className='wishList'/></div> */}
        </div>

        {
            coin.price_change_percentage_24h > 0 ? (
            <div className='coinPercent green'>
                <p>{coin.price_change_percentage_24h.toFixed(2)}%</p>
                <p><TrendingUpIcon /></p>
            </div>
            ) : (
            <div className='coinPercent red'>
                <p>{coin.price_change_percentage_24h.toFixed(2)}%</p>
                <p><TrendingDownIcon /></p>
            </div>
            )
        }
       
       {
        coin.price_change_percentage_24h > 0 ?(
            <div className='coinPrice greenPrice'>
            <p>${coin.current_price.toLocaleString()}</p>
        </div>
        ) : (
            <div className='coinPrice redPrice'>
            <p>${coin.current_price.toLocaleString()}</p>
        </div>
        )
       }     

        <div className='coinMarket'>
            <p>Total Volume : <span className='marketPrice'> ${coin.total_volume.toLocaleString()}</span></p>
            <p>Market Cap : <span className='marketPrice'>${coin.market_cap.toLocaleString()}</span></p>
        </div>
        </motion.div>
    </div>
    </Link>
  )
}

export default Grid;