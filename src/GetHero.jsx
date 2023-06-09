import { useState } from 'react'
import Hero from './Hero'
import axios from 'axios'





export default function GetHero() {
    const [hero, setHero] = useState([])

    // const fetchHeroes = async (e) => {
    //     const res = await fetch(`https://superheroapi.com/api/910406413624867/${e}`);
    //     const data = await res.json();
    //     setHero(data)
    // }


    const fetchHeroes = async (name) => {
        try {
            const response = await axios.get(`/api/test?name=${name}`);
            const heroes = response.data;
            console.log(heroes)
            setHero(heroes.data);
        } catch (error) {
            console.error(error);
        }
    };



    const handleGenerate = (e) => {
        setHero('')
        e = Math.floor(Math.random() * 731)
        fetchHeroes(e)
    }


    return (
        <div>

            {hero != '' ? <Hero heroName={hero.name} heroImg={hero.image.url} publisher={hero.biography.publisher} /> : ''}

            <button onClick={handleGenerate} className='btn btn-light my-3'>Generate</button>
        </div>
    )

}


