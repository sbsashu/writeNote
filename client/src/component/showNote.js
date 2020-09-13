import React, { useState } from 'react';
import axios from 'axios';

const ShowNote = ({}) => {
    let [formData, setFormData] = useState({
        notes: [],
    })
    let { notes } = formData;
    const getNotes = async () => {
        let notes = await axios.get('/notes')
        setFormData()
    }
        return (
            <div>
                <span>{getNotes}</span>
            </div>
)

}
export default ShowNote