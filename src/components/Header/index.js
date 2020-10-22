import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, withRouter} from 'react-router-dom';

const Header = (props) => {
    const name='Franco';
    const hola='Hola';

    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await axios.get('https://artists-api.vercel.app/artists'); //axios te devuelve la promesa jsoneada
                const cats=response.data.map(el => el.genre);

                //NO REPEATED GENRES
                const catsUnrep=new Set(cats);
                const catsArray=[...catsUnrep];

                setCategories(catsArray);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    },[])

    const handleCategorySelect = (event) =>{
        console.log(event.target.value);
        props.history.push(`/category/${event.target.value}`);
    }

    return (
        <header>
            <div>
                <h1>Musical</h1>
                <nav>
                    <Link to='/'>Home</Link>
                    <select name='' id='' onChange={handleCategorySelect}>
                        {categories.map(cat=><option key={cat} value={cat}>{cat}</option>)}
                    </select>
                </nav>
            </div>
        </header>
    )
}

export default withRouter(Header)