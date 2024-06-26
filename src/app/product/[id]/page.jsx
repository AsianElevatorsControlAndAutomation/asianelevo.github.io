import React from 'react'
import Link from 'next/link'
import Gutter from '@/components/Gutter/Gutter.jsx'
import { productsInformation } from '@/constants/ProductsInformation.jsx'
import ProductImage from './productImage'
const Product = (props) => {
    let product = {}
    productsInformation.forEach(company=>{
        company.products.forEach(element=>{
            if(element.id===props.params.id){
                product = {...element, company: company.company}
            }
        })
    })
    return (
    <div>
        <Gutter />
        <div className='md:container mx-auto container min-h-[100vh]'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row -mx-4">
                    <ProductImage images={JSON.stringify(product.images)||[]} resources={JSON.stringify(product.resources)||JSON.stringify([])} product={product.heading}/>
                    <div className="md:flex-1 px-4">
                        <h1 className="mb-2 leading-tight tracking-tight font-bold text-gray-200 text-2xl md:text-3xl startAnimationRight">{product.heading}</h1>
                        <h2 className="text-gray-500 text-sm">By <Link href="#" className="text-indigo-600 hover:underline startAnimationRight">{product.company}</Link></h2>

                        {/* <div className="flex items-center space-x-4 my-4">
                        <div>
                            <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                            <span className="text-indigo-400 mr-1 mt-1">$</span>
                            <span className="font-bold text-indigo-600 text-3xl">25</span>
                            </div>
                        </div>
                        <div className="flex-1">
                            <p className="text-green-500 text-xl font-semibold">Save 12%</p>
                            <p className="text-gray-400 text-sm">Inclusive of all Taxes.</p>
                        </div>
                        </div> */}

                        <div className='grid grid-cols-1 my-4 gap-6 startAnimationDown'>
                            <div className='grid grid-cols-1'>
                                {product.features.length>0&&<h2 className="text-2xl font-extrabold dark:text-white mb-2 revue">Features</h2>}
                                {product.features.map((feature, idx)=>(
                                    <div key={idx} className='flex items-start'>
                                        <img src='/star.svg' alt='bullet-point' className='w-6'/>
                                        <p className="text-gray-500 ml-4">{feature}</p>
                                    </div>
                                ))}
                            </div>
                            <div className='grid grid-cols-1'>
                                {product.specifications.length>0&&<h2 className="text-2xl font-extrabold dark:text-white mb-2 revue">Specifications</h2>}
                                {product.specifications.map((specification, idx)=>
                                    <div key={idx} className='flex items-start'>
                                        <img src='/arrow.svg' alt='bullet-point' className='w-10'/>
                                        <p className="text-gray-500 pt-2">{specification}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className='startAnimationDown'>
                            {product.description.length>0&&<h2 className="text-2xl font-extrabold dark:text-white mb-2 revue entryAnimateDown">Description</h2>}
                            {product.description.map((desc, idx)=><p key={idx} className="text-gray-500 my-4 entryAnimateUp">{desc}</p>)}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export async function getStaticPaths() {
    let temp = []
    productsInformation.forEach(company=>{
        company.products.forEach(element=>{
            temp.push({params: {id: element.id}})
        })
    })
    return {
        paths: [...temp],
        fallback: false
    }
}

export default Product