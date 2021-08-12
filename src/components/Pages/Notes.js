import React, {useEffect} from 'react'

export default function Notes(){

    const [notes, setNotes] = useState([])
     useEffect(() =>{
         fetch('')
         .then(res => res.json())
         .then(data => setNotes(data))
     }, [])
    return (
        <div>
            {notes.map(note =>(
                <p>key={notes.id}</p>
            ))}
        </div>
    )
}

