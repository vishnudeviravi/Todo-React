import React from 'react';

const filter = ({filterFunction}) =>{
   
        return (
            <>
                <div className="filter-all" onClick={()=>filterFunction(1)}>All</div>
                <div className="filter-completed" onClick={()=>filterFunction(0)}>Completed</div>
            </>
        );
};

export default filter;
