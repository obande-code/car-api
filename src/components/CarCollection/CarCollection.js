import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class CarCollection extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             carModel: [],
             imageUrl : 'https://media.ed.edmunds-media.com/acura/nsx/2020/oem/2020_acura_nsx_coupe_base_fq_oem_2_1600.jpg'
        }
    }

    componentDidMount (){
        fetch('https://app.autocitienterprise.com/vehicle_make?column_name=model_name&model_year=1999&model_make_id=acura')
        .then(response => response.json())
        .then(data =>{
            this.setState({
                carModel : data
            })
        })
    }
    
    render() {
        const {carModel, imageUrl} = this.state
        return (
            <div>
            <Link style={{margin:'50px'}} to='/'>Back to Home</Link>
            <div className = "home-cars">
               {
                   carModel.map(car =>(
                    <div className="card" style={{width: '18rem'}}>
                    <img src={imageUrl} class="card-img-top" alt="cars" />
                    <div class="card-body">
                        <h5 class="card-title">{car.model_name}</h5>
                    </div>
                    </div>
                   ))
               } 
            </div>
            </div>
        )
    }
}

export default CarCollection

