import React from 'react'
import { useState } from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import CatMenu from './CatMenu'
import './index.css'
import Menu from './Menu'
import MenuItems from './MenuItems'
const GalleryReact = () => {
    const date = [...new Set(Menu.map((elem)=>
        elem.category
    )),"all"]

    const [items, setItems] = useState(Menu);
    const [categItem, setcategItem] = useState(date);
     console.log(setcategItem);

     const filterItem = (cateItem) =>{
        if(cateItem === "all"){
            setItems(Menu)
            return;
        }
       const filteRation = Menu.filter((elem)=>{
         return elem.category === cateItem;
       })
          setItems(filteRation)
     }


   
     

    return (
        <>
            <h1 className='text-center mt-5 main-heading'>Order Your Favourite Dish</h1>
            <hr />
             <CatMenu filterItem = { filterItem }  categItem = { categItem }/>
             <MenuItems name={items}/>

        </>
    )
}

export default GalleryReact;
   