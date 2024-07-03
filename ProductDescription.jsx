import React from 'react'

const ProductDescription = () => {
  return (
    <div className='mt-20'>
        <div className='flex gap-3 mb-4'>
            <button className='btn_dark_rounded !rounded-none !text-xs !py-[6px] w-36'>Description</button>
            <button className='btn_dark_outline !rounded-none !text-xs !py-[6px] w-36'>Care Guide</button>
            <button className='btn_dark_outline !rounded-none !text-xs !py-[6px] w-36'>Size Guide</button>
        </div>
        <div className='flex flex-col pb-16'>
        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore fuga libero sint, nostrum assumenda quisquam magni, eaque voluptatem id commodi eius minima. Id ducimus enim exercitationem sed commodi, amet pariatur.</p>
        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. At quo delectus porro sunt quod aliquid eaque ad tempora consequuntur illum voluptate aperiam ratione, ex, magnam maxime earum exercitationem et nihil.</p>
        </div>
    </div>
  )
}

export default ProductDescription