import ProductCard from './ProductCard'

const Product = () => {
  return (
    <div className='lg:mx-20 mx-4'>
         <div className="text-black md:mt-20 mt-10 mb-10">
        <div className="today flex items-center gap-2">
            <div className="bg-[#DB4444] w-[18px] rounded-md h-[40px]"></div>
            <h4 className="text-lg font-semibold text-[#DB4444]">This Month</h4>
        </div>
       <div className="flex justify-between items-end">
       <div className="sale flex gap-20 items-end mt-5">
           <h3 className="md:text-4xl text-3xl tracking-wider font-bold">Best Selling Product</h3>         
        </div>
        <div className="icon flex gap-3">
          <button className='text-white bg-[#DB4444] md:px-12 px-6 sm:text-sm text-xs md:py-4 py-2  rounded-lg hover:shadow-custom-corners'>View All</button>  
        </div>
       </div>
        </div>
        <ProductCard />
    </div>
  )
}

export default Product