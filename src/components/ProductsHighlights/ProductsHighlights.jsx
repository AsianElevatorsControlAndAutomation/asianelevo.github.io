import React from 'react';
import Link from 'next/link';
import { productsInformation, productsHighlightsInformation } from '@/constants/productsInformation';
import './ProductsHighlights.scss'
import Title from '../Title/Title';

const ProductsHighlights = () => {
  let products = []
  for(let k=0; k<productsHighlightsInformation.length; k++){
    for(let i=0; i<productsInformation.length; i++){
      for(let j=0; j<productsInformation[i]['products'].length; j++){
        if(productsInformation[i]['products'][j]['id']===productsHighlightsInformation[k]){
          products.push({...productsInformation[i]['products'][j], company: productsInformation[i]['company']})
        }
      }
    }
  }
  return (
    <div className='p-10'>
        <Title type={2} title="Products" subTitle="Our" color="green" />
        <div className='overflow-x-scroll flex flex-auto flex-no-wrap w-full mb-1 mt-3 entryAnimateRight'>
          {products.map((product, idx)=>
            <div key={idx} className='grow-0 shrink-0 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 pr-10'>
              <Link href={`/product/${product.id}`} className="max-w-sm rounded overflow-hidden shadow-lg productCard">
                {/* <img src={element.images[0].item} alt='' className=''/> */}
                <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-2xl">
                    <img src={product.images[0].item} alt={product.heading} className="peer absolute top-0 right-0 h-full w-full object-cover productCoverImg" />
                    <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">{product.company}</span>
                </div>
                <div className="mt-4 px-5 productHeadings">
                        <h5 className="text-xl font-bold">{product.heading}</h5>
                    <div className="mt-2 mb-5 flex items-center justify-between">
                        <span className="text-white">{product.subheading}</span>
                    </div>
                </div>
              </Link>
            </div>
          )}
        </div>
        <div className='w-full flex justify-center entryAnimateUp'>
          <Link href={'/products'} className='glass px-3 py-1 rounded-full hvr-float'>View More</Link>
        </div>
    </div>
  )
}

export default ProductsHighlights