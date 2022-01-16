import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs'

//Custom Hook que llama a la función del API y que devuelve los datos obtenidos
export const useGetGifs = ( categoria ) => {

    const [state, setState] = useState(
        {
            data: [],
            loading: true
        }
    );

    //Esto sólo se ejecutará la primera vez que se renderiza el componente
    useEffect( () => {

        setTimeout(()=>{
            getGifs( categoria )
            .then( (imgs) => setState(
                {
                data: imgs, 
                loading: false
                }));
        } ,2000)
    }, [ categoria ]);

    return state;
}