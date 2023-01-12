import React from 'react'

const CatMenu = ({ filterItem, categItem }) => {
    return (
       <>
             <div className=' menu-tabs container'>
                <div className=' menu-tab d-flex justify-content-around'>
                    {
                        categItem.map((elem, ind)=>{
                        return <button className='btn btn-outline-info px-3' key={ind} onClick={()=> filterItem(elem)}>{elem}</button>
                    })
                    }
                    {/* <button className='btn btn-outline-info px-3' onClick={()=> filterItem("breakfast")}>BreackFast</button>
                    <button className='btn btn-outline-info px-3' onClick={()=> filterItem("lunch")}>Lunch</button>
                    <button className='btn btn-outline-info px-3' onClick={()=> filterItem("evening")}>Evening</button>
                    <button className='btn btn-outline-info px-3' onClick={()=> filterItem("dinner")}>Dinner</button> */}
                    {/* <button className='btn btn-outline-info px-3' onClick={()=> setItems(Menu)}>All</button>; */}
                </div>
            </div>
       </>
    )
}
 
export default CatMenu;
