import React, {useState, useEffect, useMemo} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
//* import of components and developer packages
import './FormOfTrade.scss';
import Input from "../Input";
import Button from "../Button";
import Profit from "../Profit";
import {TradeContext} from "../../tradeContext";


const FormOfTrade = ({elClassName}) => {
    const [actionType, setActionType] = useState('buy');
    const [price, setPrice] = useState(0);
    const [amount, setAmount] = useState(0);
    const [total, setTotal] = useState(0);
    const classes = classNames('form_trade', elClassName);

    const changePrice = () => (e) => setPrice(e.target.value);
    const changeAmount = () => (e) => setAmount(e.target.value);
    const totalChange = () => (e) => {
        if(price > 0 ) setAmount(e.target.value / price);
        else setTotal(0);
    }
    const changeAction = (actionName) => () => {
        if(actionName !== actionType) setActionType(actionName);
    }


    useEffect(() => {
        if(amount > 0 && price > 0) setTotal(amount * price);
        return 0;
    }, [price, amount])


    return (
        <TradeContext.Provider value={{availableFunds: total, action: actionType}}>
            <div className={classes}>
                <div className="form__title">Binance: BTC / USDT</div>

                <div className="form__type-switch">
                    <Button css={{backgroundColor: '#4CAF50', width: '50%', height: '2.3em'}}
                            onClick={changeAction('buy')}
                            hovered={actionType !== 'buy' && true}>Buy</Button>
                    <Button css={{backgroundColor: '#F44336', width: '50%', height: '2.3em'}}
                            onClick={changeAction('sell')}
                            hovered={actionType !== 'sell' && true}>Sell</Button>
                </div>

                <Input elClassName='form__price'
                       label='Price'
                       id='in-1'
                       placeholder='USD'
                       type='number'
                       required
                       value={price}
                       onInput={changePrice()}/>
                <Input elClassName='form__amount'
                       label='Amount'
                       id='in-2'
                       placeholder='USD'
                       type='number'
                       required
                       value={amount}
                       onInput={changeAmount()}/>
                <Input elClassName='form__total'
                       label='Total'
                       id='in-3'
                       placeholder='USD'
                       type='number'
                       onInput={totalChange()}
                       value={total}/>

                <Profit totalItems={5} />

                <div className="submit">
                    <Button css={{backgroundColor: '#4CAF50', width: '100%', height: '2.4em', fontSize: '1.1em'}}>By BTC</Button>
                </div>
            </div>
        </TradeContext.Provider>
    );
};

FormOfTrade.propTypes = {};
FormOfTrade.defaultProps = {};

export default FormOfTrade;