import React, { useState } from 'react';
import "./HomePageStyles.css"
import logo from "./exCurrency.png"
import SelectMenu, {currencyValues} from './SelectMenu';
import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';

function HomePage() {
    const [fromCurr, setFromCurr] = useState(currencyValues[4])
    const [toCurr, setToCurr] = useState(currencyValues[9])
  return <div>
    <div className='header'>
        <div style={{flex: "1"}} ><img src={logo} /> </div>
        <button className='btn'>EUR-USD Details</button>
        <button className='btn'>EUR-GBP Details</button>
    </div>
    <div className='currLabel'>Currency Exchanger</div>
    <div className='currExSection'>

        <div className='valueSection'>
            <div className='label'>Amount</div>
                <input type='text' />
            <div className='resultDiv'>result</div>
        </div>

        <div>
            <div className='convertSection'>
                <div>
                    <div className='label'>From</div>
                    <SelectMenu placeHolder={fromCurr} selectedValue={fromCurr} onSelect={(value) => setFromCurr(value)}/>
                </div>
                <div style={{paddingTop: "20px", textAlign: "center"}}>
                    <ArrowLeftIcon style={{width: 45, height: 45}} />
                    <ArrowRightIcon style={{width: 45, height: 45}} />
                </div>
                <div>
                    <div className='label'>to</div>
                    <SelectMenu placeHolder={toCurr} selectedValue={toCurr} onSelect={(value) => setToCurr(value)}/>
                </div>
            </div>
            <div>
                <button className='convertBtn'>Convert</button>
            </div>
            <div className='moreDet'>
                <div className='detDiv'>XX.XX USD</div>
                <button className='convertBtn'>More Details</button>
            </div>
        </div>
    </div>
    <div className='cardSec'>
            {Array.from({ length: 9 }).map((arr, index) => {
                return <div className='card'>dfdfd + {index}</div>
            })}
    </div>
    </div>
}

export default HomePage;
