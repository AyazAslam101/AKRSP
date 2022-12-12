import React from 'react'

const HeroCard = (props:{data:any}) => {
  return (
    <div>
        {props.data[0].map((item:any, index :any) => {
            return (
                <div key={index} className='transition ease-in-out'>
                <div className="flex items-center">
                  <p className="mb-4 font-medium text-xl text-white -mt-4">
                    {item.update} - <span>{item.created_at}</span>
                  </p>
                </div>
                <div>
                  <div>
                    <p className="font-bold text-3xl tracking-widest leading-relaxed text-white leading-10">
                      {item.description}
                    </p>
                  </div>
                </div>
                </div>
        );
    })}
    </div>
  )
}

export default HeroCard