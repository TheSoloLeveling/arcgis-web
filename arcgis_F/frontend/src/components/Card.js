import React from 'react'

const Card = () => {
  return (
    
    <div class="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pr-2">
        <div class="bg-gris_cell border shadow p-2">
            <div class="flex flex-row items-center">
                <div class="flex-shrink pl-1 pr-4"><i class="fa fa-wallet fa-2x fa-fw fa-inverse"></i></div>
                <div class="flex-1 text-center">
                    <h5 class="text-white">Total Revenue</h5>
                    <h3 class="text-white text-3xl">3249&euro;<span class="text-green-400"><i class="fas fa-caret-down"></i></span></h3>
                </div>
            </div>
        </div>
    </div>
   
  )
}

export default Card