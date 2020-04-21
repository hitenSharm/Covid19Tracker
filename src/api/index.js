import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    
    let changeableUrl=url;
    if(country)
        {
            changeableUrl=`${url}/countries/${country}`;
            console.log(changeableUrl);
        }
    
    try {
        const {
            data: {
                confirmed,
                recovered,
                deaths,
                lastUpdate
            }
        } = await axios.get(changeableUrl);
        return {
            confirmed,
            recovered,
            deaths,
            lastUpdate
        };
    } catch (error) {

    }
}

export const fetchDailyData= async ()=>{
    try{
        const { data }= await axios.get('https://covid19.mathdro.id/api/daily');
//        console.log(data);
        const modifiedData = data.map((dailyData) =>({
            confirmed:dailyData.confirmed.total,
            deaths:dailyData.deaths.total,
            date:dailyData.reportDate,
        }));
//        console.log(modifiedData);
    return modifiedData;    
    }catch(error){

}
        
}
export const findCountries= async ()=>{
    try{
        const {data:{ countries }}= await axios.get('https://covid19.mathdro.id/api/countries');
        return countries.map((country)=>country.name);
        
    }catch(error){
        console.log(error);
}
}

