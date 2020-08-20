import React from 'react';
import classes from './Paginator.module.css'

const Paginator = ({totalUsersCount, pageSize, currentPage, changePage}) => {
    let pageCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    return (       
            <div className={classes.pagination}>
                {pages.map((p) => {
                    return (
                        <button
                            key={p}
                            onClick={() => { changePage(p) }}
                            className={currentPage === p ? classes.selected : ''}
                        >{p}</button>
                    )
                })}
            </div>
    )
};

export default Paginator;
