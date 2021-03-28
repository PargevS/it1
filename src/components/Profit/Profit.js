import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import uuid from 'uuid-random';
//* import of components and developer packages
import './Profit.scss';
import ProfitInputs from "../ProfitInputs";

const addNewProfit = (arr, arrayChangeHandler) => () => {
    const id = uuid();
    const profit = arr.length + 2 <= 100 && arr.length + 2;
    let amountToSell = 20;

    let newList = [...arr];

    if (newList.length && newList[0].amountToSell > 30) newList[0].amountToSell = newList[0].amountToSell - 20;
    if (!newList.length) amountToSell = 100;

    newList[newList.length || 0] = {id, profit, tradePrice: 0, amountToSell, finalProfit: 0};
    arrayChangeHandler([...newList]);
}

const deleteProfit = (arr, arrayChangeHandler, id) => () => {
    let newList = [...arr];
    const idx = newList.findIndex(item => item.id === id);

    if(idx > -1) {
        if(idx === 0) newList = [...newList.slice(1)];
        else newList = [...newList.slice(0, idx), ...newList.slice(idx + 1)];
    }

    arrayChangeHandler([...newList])
}

const changeItemFinalProfit = (arr, arrayChangeHandler) => (id, finalProfit) => {
    const newList = [...arr];
    newList.find(item => {
        if(item.id === id) item.finalProfit = finalProfit;
    } )

    arrayChangeHandler([...newList]);
}


const Profit = ({ totalItems}) => {
    const [isActive, setIsActive] = useState(false);
    const [profitsList, setProfitsList] = useState([]);
    const [finalProfit, setFinalProfit] = useState(0);

    const classes = classNames('form__take-profit');

    const switcher = () => () => setIsActive(pr => !pr);

    useEffect(() => {
        if(isActive && !profitsList.length) addNewProfit(profitsList, setProfitsList)();
        else setProfitsList([]);
    }, [isActive])

    useEffect(() => !profitsList.length &&  setIsActive(false), [profitsList.length]);

    useEffect(() => {
        if(profitsList.length){
            let total = 0;
            for(let i = 0; i < profitsList.length; i++)total += profitsList[i].finalProfit;
            setFinalProfit(total)
        }
    }, [profitsList])

    return (
        <div className={classes}>
            <div className="take-profit__switch">
                <span>Take profit</span>
                <label className='switch'>
                    <input type='checkbox' defaultValue={false}/>
                    <div className={`switch__toggle ${isActive && profitsList.length ? 'enable' : 'disable'}`} onClick={switcher()}/>
                </label>
            </div>

            <div className="take-profit__content" style={{display:  !profitsList.length ? 'none': null}}>
                <div className="take-profit__titles">
                    <span>Profit</span>
                    <span>Trade price</span>
                    <span>Amount to sell</span>
                </div>


                {(profitsList && profitsList.length) ? profitsList.map((item) => (
                    <ProfitInputs data={item}
                                  changeTotalProfit={changeItemFinalProfit(profitsList, setProfitsList)}
                                  deleteHandler={deleteProfit(profitsList, setProfitsList, item.id)}
                                  key={item.id}/>
                )) : ''}

                {profitsList.length < totalItems && (
                    <div className="add-item">
                        <button onClick={addNewProfit(profitsList, setProfitsList)}>
                            <svg className="MuiSvgIcon-root take-profit__add-icon" focusable="false" viewBox="0 0 24 24"
                                 aria-hidden="true">
                                <path
                                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path>
                            </svg>
                            <span>Add profit target {profitsList.length}/{totalItems}</span>
                        </button>
                    </div>
                )}


                <div className="take-profit__projected-profit">
                    <span>Projected profit</span>
                    <span className='take-profit__projected-profit-value'>
                        <span>{finalProfit} </span>
                        <span>USD</span>
                    </span>
                </div>

            </div>

        </div>
    );
};

Profit.propTypes = {totalItems: PropTypes.number,};
Profit.defaultProps = {totalItems: 5,};

export default Profit;