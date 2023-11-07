import {useState, useEffect} from 'react'

import { Button } from 'react-native'
import Joke from './Joke'
import Punchline from './punchline'

export default function JokeList (){

    const [jokes, setJokes] = useState()
    const [currentJoke, setCurrentJoke] = useState(0)
useEffect(() => {
    fetch ('https://api.sampleapis.com/jokes/goodJokes')
    .then(res => res.json())
    .then(setJokes)
    .catch(alert)
}, [])

const nextJoke = () => {
     if (currentJoke < jokes.length - 1) {
    setCurrentJoke (currentJoke +1)
 } else {
    setCurrentJoke(0)

 }



 }
    return(

<>

        
        <Joke joke={!jokes ? 'Loading...' : jokes[currentJoke].setup}/>
        <Punchline punchline={ jokes && [currentJoke].punchline}/>
        <Button onPress={nextJoke} title= "Next Joke"/>



</>

    )

}