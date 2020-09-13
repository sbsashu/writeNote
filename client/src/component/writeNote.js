import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import axios from 'axios';

const WriteNote = ({}) => {
    const [value, onDate,] = new useState(new Date());
    const [formData, setFormData] = useState({
        message: '',
    });
    const {message} = formData;
    
    
    const onChange =  (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }
    
    const onSubmit = async (e)  => {
        e.preventDefault();
        let config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        let noteRecord =  await axios.post('api/create/note', {
            date: value,
            note: message
        },
        config
        )

    }

    return (
        <div>
            <h1>
                Write some notes about some App
            </h1>
            <DatePicker
                onChange={onDate}
                value={value}
                format='dd-MM-y'
            />
        <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Please write some note"
            name="message"
            value = {message}
            onChange = {e => onChange(e)}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Submit" />
      </form>
        
        </div>
    )
}
export default WriteNote;