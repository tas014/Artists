import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from '../Card';

const MainCategory = props =>{
    const {id}=props;
    const [artists, setArtists] = useState([]);
        useEffect(()=>{
            const fetchData = async () => {
                try {
                    const response = await axios.get('https://artists-api.vercel.app/artists'); //axios te devuelve la promesa jsoneada
                    const filteredResponse=response.data.filter(el=>el.genre===id);
                    setArtists(filteredResponse);
                  } catch (error) {
                    console.error(error);
                  }
            }
            fetchData();
            console.log('se ejecuto mi effect')
        },[props]) // useEffect ejecuta la funcion cada vez que se actualiza uno de los valores que se pasan como parametro en el array (ejemplo useEffect(()=>{console.log('se actualizo mi variable')},[variable]))

        return (
            <section className='cardSection'>
                <h1>Listado de artistas</h1>
                {artists.map(artist=><Card key={artist.id} data={artist} />)}
            </section>
        )
}

export default MainCategory