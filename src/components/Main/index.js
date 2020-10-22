import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Card from '../Card'
import './index.css'

const Main = () => {
    /*const [contador, setContador] = useState(0) //Establece una funcion cuyo parametro sera asignado como valor a la variable en la posicion 0 de este array
    const [isText, textFlag] = useState(true);
    const switchType = () => {
        textFlag(!isText);
        isText ? setContador('Ahora soy un texto!') : setContador(0)
    }
    return (
        <main>
            <div>
                <h3>{`Main content = ${contador}`}</h3>
                <button onClick={()=>setContador(contador+1)}>Plus One</button>
                <button onClick={()=>setContador(contador-1)}>Minus One</button>
                <button onClick={switchType}>{isText ? 'Convertir en texto' : 'Convertir en numero'}</button>
            </div>
        </main>
    )*/

        const [artists, setArtists] = useState([]);
        useEffect(()=>{
            const fetchData = async () => {
                try {
                    const response = await axios.get('https://artists-api.vercel.app/artists'); //axios te devuelve la promesa jsoneada
                    setArtists(response.data)
                  } catch (error) {
                    console.error(error);
                  }
            }
            fetchData();
            console.log('se ejecuto mi effect')
        },[]) // useEffect ejecuta la funcion cada vez que se actualiza uno de los valores que se pasan como parametro en el array (ejemplo useEffect(()=>{console.log('se actualizo mi variable')},[variable]))

        return (
            <section className='cardSection'>
                <h1>Listado de artistas</h1>
                {artists.map(artist=><Card key={artist.id} data={artist} />)}
            </section>
        )
}

export default Main