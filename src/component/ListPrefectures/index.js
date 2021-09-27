import React from 'react'

export default function ListPrefectures({list,value,handleonChange}) {

    return (
    <div className='city'>
        <div className='list-province'>     
                都道府県
        </div>
        <div className="choose-city">
            
            {
                list.map((item) => {

                    return <div key={item.prefCode} className="city-name"><input type='checkbox' id='city' name='' value={item.prefCode} onChange={handleonChange}/> <p>{item.prefName}</p></div>
                })
            }
        </div>
    </div>
    )
}

