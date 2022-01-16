import React, { Fragment } from 'react'
import { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'


const GifExpertApp = () => {
    //Estado con las categorias (con una categoria inicial)
    const [categorias, setCategorias] = useState(['Cats']);

    return (
        <Fragment>
            <div>
                <h1>GifExpertApp</h1>
                    <AddCategory setCategorias = { setCategorias }/>
                    {categorias.map((categoria) => {return <GifGrid key = {categoria}  categoria = {categoria} />})}
            </div>
        </Fragment>
    )
}

export default GifExpertApp





