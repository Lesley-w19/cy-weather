import React from 'react';
import { UilSun, UilTemperatureEmpty, UilTear ,UilWind} from '@iconscout/react-unicons'

const TopDetails = (props) =>{
    const {data} = props;
    console.log(data)
    return(
        <React.Fragment>
            <div className="temp-about mt-3">
                <p className='text-primary'>Cloudy</p>
            </div>
            <div className="details mx-auto text-light ">
                <div className="">
                   <h2><UilSun size={28} className="icon text-warning"/> </h2>    
                </div>
            <div className="">
                <h2>34&deg;</h2>
            </div>
            <div className="  more" >
                <div >
< UilTemperatureEmpty/>
<p className='my-auto'>Real temp: <span className="mx-2">34&deg;</span></p>
                </div>
                <div>
< UilWind/>
<p className='my-auto'>Wind: <span className="mx-2">34km/h</span></p>
                </div>
                <div>
<  UilTear/>
<p className='my-auto'>Humidity: <span className="mx-2">34%</span></p>
                </div>
            </div>
            </div>
        </React.Fragment>
    )
}
export default TopDetails;