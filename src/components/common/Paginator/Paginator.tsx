import React, { useState } from 'react';
import classes from './Paginator.module.css'

type Props = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    changePage: (p: number, portionNumber: number) => void
    portionSize: number
    currentPortion: number
}

const Paginator: React.FC<Props> = ({totalItemsCount, pageSize, currentPage, changePage, portionSize, currentPortion}) => {
    let pageCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) { 
        pages.push(i);
    }

    const portionCount = Math.ceil(pageCount/portionSize);
    let [portionNumber, setPortionNumber] = useState(currentPortion);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;
    return (       
            <div className={classes.pagination}>
                { portionNumber > 1 &&
                <button onClick={() => {setPortionNumber(portionNumber-1)}}>{"<<"}</button>
                }
                { pages
                    .filter(p => p>= leftPortionPageNumber && p<=rightPortionPageNumber)
                    .map(p => {
                        return (
                            <button
                                key={p}
                                onClick={() => { changePage(p, portionNumber) }}
                                className={currentPage === p ? classes.selected : ''}
                            >{p}</button>
                        )
                    })
                }
                {portionCount > portionNumber &&
                <button onClick={() => {setPortionNumber(portionNumber + 1)}}>{">>"}</button>
                }
            </div>
            
    )
};

export default Paginator;
