import React, { useState } from 'react'

function Cart() {
    let [products]=useState([
        
        {
            title:'Watch',
            category:'accessories',
            description:'belt watch, stylish',
            price:'7000',
            rating:'8',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTly9PywL6aEhF2U78iNAc_z1dZ01AwEdfuXg&s'
        },
        {
            title:'Handbag',
            category:'accessories',
            description:'leather handbag, stylish',
            price:'9000',
            rating:'8.9',
            image:'data:image/jpeg;base64,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'
        },
        {
            title:'Shirt',
            category:'clothing',
            description:'green shirt ,cotton',
            price:'1000',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaE_UILeK918HhTFmaYgDEnMD4eeIytbwqZQ&s'
        },
      
    ])
  return (
    <div className='container'>
        <h1 className='text-center mt-3'>Cart</h1>
            <div className="mt-4">
            <div className="row">
            {products.map((product)=><div className="col-sm-12 col-md-4 col-lg-4 mb-2">
                <div className='card'>
                    <div className='card-header'>
                        <img src={product.image} className='w-25 d-block m-auto' />
                        <h3 className='fs-5 text-center'>{product.title}</h3>
                        <h3 className='fs-5 text-center'>category: {product.category}</h3>
                    </div>
                    <div className='card-body'>

                        <p>{product.description}</p>
                        <h3 className='fs-5 '>Price: ${product.price}</h3>
                        <h3 className='fs-5 '>Rating: {product.rating}</h3>
                       
                    </div>
                </div>
            </div> )}
            <button type='submit' className='btn btn-success w-75 mt-5 d-block m-auto'>Buy</button>
            </div>

            </div>
    </div>
  )
}

export default Cart