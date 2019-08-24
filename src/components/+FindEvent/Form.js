import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
     root: {
          display: 'flex',
          flexWrap: 'wrap'
     },
     formControl: {
          margin: theme.spacing(1),
          minWidth: 150
     },
     textField: {
          marginLeft: theme.spacing(1),
          marginRight: theme.spacing(1),
          minWidth: 150
     }
}));

const Form = props => {
     const classes = useStyles();
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
               <form className="form" onSubmit={handleSubmit}>
                    <FormControl className={classes.formControl}>
                         <TextField
                              id="artist"
                              label="Artist"
                              value={values.artist}
                              onChange={handleChange}
                              className={classes.textField}
                              name="artist"
                         />
                    </FormControl>

                    {/* <FormControl className={classes.formControl}>
                         <InputLabel htmlFor="country">Country</InputLabel>
                         <Select
                              value={values.country}
                              onChange={handleChange}
                              inputProps={{
                                   name: 'country',
                                   id: 'country'
                              }}>
                              <MenuItem value={10}>Ten</MenuItem>
                              <MenuItem value={20}>Twenty</MenuItem>
                              <MenuItem value={30}>Thirty</MenuItem>
                         </Select>
                    </FormControl> */}
                    <button>Find</button>
               </form>
          </div>
     );
};

export default Form;
