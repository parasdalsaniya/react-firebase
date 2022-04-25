import React from 'react';
import { db } from '../Firebase/firebase';
import {collection, addDoc, Timestamp} from 'firebase/firestore'

const Home = () => {
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            console.log("handleSubmit called");
            const result = await addDoc(collection(db, 'tasks'), {
                title: "title",
                description: "description",
                completed: false,
                created: Timestamp.now()
            })
            console.log('result', result)
        } catch (err) {
            console.log(err)
        }
    }

    return ( 
        <button onClick={handleSubmit}>
            SUBMIT
        </button>
    );
}
 
export default Home;