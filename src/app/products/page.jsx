import React from 'react'
import Link from 'next/link'
import './page.scss'
import Gutter from '@/components/Gutter/Gutter'
import { productsInformation } from '../../constants/ProductsInformation'
import Title from '@/components/Title/Title'
const Products = () => {
  return (
    <div className='md:container mx-auto container'>
        <Gutter />
        <Title title="Products" color='blue' />
            {productsInformation.map((company, cidx)=>(
                <div key={cidx} className="grid md:grid-cols-2 lg:grid-cols-3 justify-center mt-4 startAnimationUp">
                    {company.products.map((product,pidx)=>(
                        // <div key={`${cidx}-${pidx}`} className="group border-gray-100/30 flex w-full max-w-xs flex-col self-center rounded-lg border shadow-md mt-4">
                        <Link href={`/product/${product.id}`} key={`${cidx}-${pidx}`} className="max-w-sm rounded overflow-hidden shadow-lg productCard entryAnimateUp">
                        {/* <div key={`${cidx}-${pidx}`} className="group border-gray-100/30 flex w-full max-w-xs flex-col self-center rounded-lg border bg-gray-700 shadow-md"> */}
                            <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-2xl">
                                <img className="peer absolute top-0 right-0 h-full w-full object-cover productCoverImg" src={product.images[0].item} alt={product.heading} />
                                <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">{company.company}</span>
                            </div>
                            <div className="mt-4 px-5 productHeadings">
                                    <h5 className="text-xl font-bold">{product.heading}</h5>
                                <div className="mt-2 mb-5 flex items-center justify-between">
                                    <h6 className="text-white">{product.subheading}</h6> 
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            ))}

    </div>
  )
}

export default Products