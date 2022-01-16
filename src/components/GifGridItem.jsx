import React from 'react'

//Cada una de las "tarjetas" con los Gifs
export const GifGridItem = ({ imagen }) => {
    return (
        
            <div className="card">
                <div className="card-header">{imagen.title}</div>
                    <div className="card-main">
                        <img className="card-img" src={imagen.url} alt={imagen.title}/>
                    </div>
            </div>
        
    )
}
