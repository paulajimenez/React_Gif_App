
//Función que llama al API de Giphy
export const getGifs = async ( categoria ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=fHlof8q8UzMHoR7mmnnKF5D2HMTC9fxt&q=${ encodeURI(categoria)}&limit=10`;
        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifs = data.map((img) => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.fixed_width.url
            }
        })
    console.log(gifs);
    return gifs;
}
