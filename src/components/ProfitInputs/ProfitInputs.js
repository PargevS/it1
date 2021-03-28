import React, {useState, useContext, useEffect} from 'react';
import PropTypes from 'prop-types';
//* import of components and developer packages
import './ProfitInputs.scss';
import Input from "../Input";
import {TradeContext} from "../../tradeContext";

const ProfitInputs = ({data, deleteHandler, changeTotalProfit}) => {
    const {availableFunds, action} = useContext(TradeContext);

    const [profitInputVal, setProfitInputVal] = useState(data.profit);
    const [amountInputVal, setAmountInputVal] = useState(data.amountToSell);
    const [tradePrice, setTradePrice] = useState(0);


    useEffect(() => {
        if(profitInputVal > 0 && availableFunds > 0 ){
            if(action === 'buy') setTradePrice(availableFunds * profitInputVal / 100 + availableFunds);
            else if(action === 'sell') setTradePrice(availableFunds - (availableFunds * profitInputVal / 100 ));

        }else setTradePrice(availableFunds);

        if(profitInputVal > 0 && availableFunds > 0 && amountInputVal > 0){
            const fp  = availableFunds * profitInputVal / 100 * amountInputVal / 100;
            if(action === 'buy') changeTotalProfit(data.id, fp);
            else if(action === 'sell')changeTotalProfit(data.id, -fp);
        }else changeTotalProfit(data.id, 0);
    }, [availableFunds, profitInputVal, amountInputVal, action])


    useEffect(() => setAmountInputVal(data.amountToSell), [data.amountToSell])

    return (
        <div className="take-profit__inputs">
            <Input id={1} type='number' elClassName='profit' placeholder='%' value={profitInputVal}
                   onInput={(e) => setProfitInputVal(e.target.value <= 100 ? e.target.value : 100)}/>
            <div className='trade-price'><span>{tradePrice}</span> <span>USD</span></div>
            <Input id={3} type='number'
                   elClassName='amount-to-sell'
                   placeholder='%'
                   value={amountInputVal}
                   onInput={(e) => setAmountInputVal(e.target.value <= 100 ? e.target.value : 100)} />
            <div className="take-profit__cancel">
                <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" onClick={deleteHandler}>
                    <path
                        d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path>
                </svg>
            </div>
        </div>
    );
};

ProfitInputs.propTypes = {
    data: PropTypes.object,
    deleteHandler: PropTypes.func,
    changeTotalProfit: PropTypes.func
};
ProfitInputs.defaultProps = {
    data: {},
    deleteHandler: () => {},
    changeTotalProfit: () => {}
};

export default ProfitInputs;