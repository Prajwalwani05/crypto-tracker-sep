import React from 'react';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import {motion} from "framer-motion";
import { Tooltip } from '@mui/material';
import { convertNumber } from '../../../functions/convertNumber';
import "./style.css";
import { Link } from 'react-router-dom';
const List = ({coin , key}) => {
  if (!coin || typeof coin.current_price !== 'number') {
    return null; // Return null or handle the error case as needed
  }

  return (
    <Link to={`/coinPage/${coin.id}`} > 
       <div className='mainList' >
        <motion.div initial={{y:1, opacity:0}} animate={{y:0 , opacity:1}} className= {`${coin.price_change_percentage_24h < 0 ? "  listContainer redList" : "listContainer greenList"}`}key={key} >
        
        <div className='coinLogo listLogo'>
        <Tooltip title="logo" placement="bottom" arrow><img src={coin.image} style={{width:"4.5rem"}} alt='coin-logo' /> </Tooltip>
         <div className='coinName'>
          <Tooltip title="symbol" placement="bottom" arrow><p>{coin.symbol}-USD</p></Tooltip>
          <Tooltip title="name" placement="bottom" arrow><p>{coin.name}</p></Tooltip>
        </div>
        </div>
       

        {/* {
            coin.price_change_percentage_24h > 0 ? (
            <div className='coinPercent listPercent green'>
               <Tooltip title="percent_change" placement="bottom" arrow><p>{coin.price_change_percentage_24h.toFixed(2)}%</p></Tooltip>
                <Tooltip title="current_state" placement="bottom" arrow><p className='symbolUpDown'><TrendingUpIcon /></p></Tooltip>
            </div>
            ) : (
            <div className='coinPercent listPercent red'>
                <Tooltip title="percent_change" placement="bottom" arrow><p>{coin.price_change_percentage_24h.toFixed(2)}%</p></Tooltip>
                <Tooltip title="current_state" placement="bottom" arrow><p className='symbolUpDown'><TrendingDownIcon /></p></Tooltip>
            </div>
            )
        } */}
        {
  coin.price_change_percentage_24h !== undefined ? (
    coin.price_change_percentage_24h > 0 ? (
      <div className='coinPercent listPercent green'>
        <Tooltip title="percent_change" placement="bottom" arrow>
          <p>{coin.price_change_percentage_24h.toFixed(2)}%</p>
        </Tooltip>
        <Tooltip title="current_state" placement="bottom" arrow>
          <p className='symbolUpDown'><TrendingUpIcon /></p>
        </Tooltip>
      </div>
    ) : (
      <div className='coinPercent listPercent red'>
        <Tooltip title="percent_change" placement="bottom" arrow>
          <p>{coin.price_change_percentage_24h.toFixed(2)}%</p>
        </Tooltip>
        <Tooltip title="current_state" placement="bottom" arrow>
          <p className='symbolUpDown'><TrendingDownIcon /></p>
        </Tooltip>
      </div>
    )
  ) : null
}
       
       {/* {
        coin.price_change_percentage_24h > 0 ? (
            <div className='coinPrice listPrice greenPrice'>
            <Tooltip title="price" placement="bottom" arrow><p>${coin.current_price.toLocaleString()}</p></Tooltip>  
        </div>
        ) : (
            <div className='coinPrice listPrice redPrice'>
            <Tooltip title="price" placement="bottom" arrow><p>${coin.current_price.toLocaleString()}</p></Tooltip>  
        </div>
        )
       } */}
       {
  coin.current_price !== undefined ? (
    coin.price_change_percentage_24h > 0 ? (
      <div className='coinPrice listPrice greenPrice'>
        <Tooltip title="price" placement="bottom" arrow>
          <p>${coin.current_price.toLocaleString()}</p>
        </Tooltip>
      </div>
    ) : (
      <div className='coinPrice listPrice redPrice'>
        <Tooltip title="price" placement="bottom" arrow>
          <p>${coin.current_price.toLocaleString()}</p>
        </Tooltip>
      </div>
    )
  ) : null
}

        <div className='desktop-view coinMarket listMarket'>
           <Tooltip title="total_volume" placement="bottom" arrow><p>${coin.total_volume.toLocaleString()}</p></Tooltip>
           <Tooltip title="market_cap" placement="bottom" arrow><p className='marketList'>${coin.market_cap.toLocaleString()}</p></Tooltip>
        </div>
        <div className=' mobile_view coinMarket listMarket'>
           <Tooltip title="total_volume" placement="bottom" arrow><p>${convertNumber(coin.total_volume)}</p></Tooltip>
        </div>
        </motion.div>
    </div>
    </Link>

  )
}

export default List