import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const Form = props => {
     const [values, setValues] = useState({
          artist: ''
     });

     const handleChange = event => {
          return setValues({ [event.target.name]: event.target.value });
     };

     const handleSubmit = event => {
          event.preventDefault();
          props.getEvents(event.target.artist.value);
     };
     return (
          <div>
               <form className="formControl" onSubmit={handleSubmit}>
                    <TextField
                         id="artist"
                         label="Artist"
                         value={values.artist}
                         onChange={handleChange}
                         className="artist"
                         name="artist"
                    />
                    <Button
                         type="submit"
                         variant="contained"
                         color="secondary"
                         className="btn">
                         Find EVENT
                    </Button>
               </form>
          </div>
     );
};

export default Form;
