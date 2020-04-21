import React from 'react';

import {Cards,Chart,CountryPicker} from './components';
import {fetchData} from './api'; 
import styles from './App.module.css';

class App extends React.Component {

state= {
    data:{},
    country:'',
}    

    async componentDidMount() {
        const fetchedData=await fetchData();
        this.setState({data: fetchedData})
    }

handleCountryChange=async(country)=>{
    console.log(country);
    const fetchedData= await fetchData(country);
    console.log(fetchedData);
    this.setState({data: fetchedData , country: country});
    
}
    
    render(){
        const {data,country}=this.state;
        return(
           
            <div className={styles.container}>
                 <img className={styles.image} src='https://www.leaders-in-law.com/wp-content/uploads/2020/03/COVID-19.png'/>
            <Cards data={data}/>
            <Chart data={data} country={country}/>
            <CountryPicker handleCountryChange={this.handleCountryChange}/>
            </div>    
        );
    }
}

export default App; 