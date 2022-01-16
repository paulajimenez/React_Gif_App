import React, {useState}  from 'react'

//Componente que añade una categoría (desde el input) al state
export const AddCategory = ( { setCategorias } ) => {
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategorias(cats => [inputValue, ...cats]);
            setInputValue('');
        }
        
    }

    return (
        <div>
            <form onSubmit = { handleSubmit }>
                <input 
                    type="text"
                    value = { inputValue }
                    onChange = { handleInputChange }
                />
            <hr/>
            </form>
        </div>
    )
}


