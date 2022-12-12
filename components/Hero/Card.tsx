import React from 'react'

const Card = (props:{data:any}) => {
    return (
      <div>
          {props.data[1].map((item:any, index :any) => {
              return (
                  <div key={index} className='h-70 tran h-max-70 h-min-70'>
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

export default Card