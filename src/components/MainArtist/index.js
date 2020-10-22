import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

const MainArtist = () => {
    const {id} = useParams();
    const [artist, setArtist] = useState([]);

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await axios.get('https://artists-api.vercel.app/artists'); //axios te devuelve la promesa jsoneada
                const artistFiltered=response.data.find(el => el._id===id);
                setArtist(artistFiltered);
                console.log(artist,artistFiltered);
              } catch (error) {
                console.error(error);
              }
        }
        fetchData();
        console.log(artist,id)
    },[]) // useEffect ejecuta la funcion cada vez que se actualiza uno de los valores que se pasan como parametro en el array (ejemplo useEffect(()=>{console.log('se actualizo mi variable')},[variable]))
    return (
        <section className='cardSection'>
            <div className='card'>
                <img className='hasMargin' src={artist.avatar} alt={artist.name} />
                <h1>{artist.name}</h1>
                <h2 className='hasMargin'>{artist.genre}</h2>
            </div>
        </section>
    )
}

export default MainArtist