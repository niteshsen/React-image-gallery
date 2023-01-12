import React from 'react'

const MenuItems = ({name}) => {
  return (
    <>
       <div className="meny-items contailer-fluid mt-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row my-5">
                  
 
                         { 
                            name.map((element)=>{
                               const {id, name, describe, price, image}=  element;
                               return(
                                <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4 my-5" key={id}>
                                <div className="row row Item-Inside">
                                
                                    <div className="col-12 col-md-12 col-lg-4 img-div">
                                        <img src={ image } alt="menuPic" className='img-fluid' />
                                    </div>


                                    {/* for items description */}
                                    <div className="col-12 col-md-12 col-lg-8">
                                        <div className="main-title pt-4 pb-3">
                                            <h1>{name}</h1>
                                            <p>{describe}</p>
                                        </div>
                                        <div className="menu-price-book">
                                            <div className="price-book-divide d-flex justify-content-between">
                                                <h2>price : {price}</h2>
                                                <a href= "/breakfast">
                                                    <button className='btn btn-primary'>Order Now</button>
                                                </a>
                                            </div>
                                            <p>*Prices may vary on selected date</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                               )
                            })
                         }


                            
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default MenuItems
