import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import { findCountries } from '../../api';

import styles from './CountryPicker.module.css';

const CountryPicker=({handleCountryChange})=>{
    
    const [fetchedCountries,setFetchedCountries]=useState([]);
    
    useEffect(()=> {
        const fetchCountries= async()=>{
            setFetchedCountries(await findCountries());
        }
        fetchCountries();
    },[setFetchedCountries]);
    
    
    
    return(
        <FormControl className={styles.formControl}>
        <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
            <option calue="global">Global</option>  
            {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
        </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;