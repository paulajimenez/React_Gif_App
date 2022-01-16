import React, {useState, Fragment} from 'react'
import { GifGridItem } from './GifGridItem'
import { useGetGifs } from '../hooks/useGetGifs'

//Punto inicial del Grid de los Gifs
export const GifGrid = ({ categoria }) => {

    //Llamamos a nuestro Custom Hook para obtener un array de imágenes y el estado de 
    //la carga
    const { data:imagenes, loading } = useGetGifs( categoria );

    return (
        <Fragment>
                <h3>{ categoria }</h3>
                {loading && <p>Cargando ...</p>}
                <div className="card-grid">
                    {imagenes.map((img) => {return <GifGridItem key={img.id} imagen = {img}/>})}
                </div>
        </Fragment>
    )
}
