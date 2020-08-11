import React, { Component } from 'react'
import './Home.css'
import CollectionPreview from '../collectionpreview/CollectionPreview'

export class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            cars : [],
            imageUrl : 'https://www.acura.com/-/media/Acura-Platform/Non-Vehicle-Pages/homepage/hero-carousel/2020/MY21-TLX-Reveal/TLX_2021_homepage-hero_S.jpg'    
        }
    }

    componentDidMount(){
        fetch('https://app.autocitienterprise.com/vehicle_make?column_name=model_make_id')
        .then(response => response.json())
        .then(data => this.setState({
            cars:data
        }))
    }
    
    render() {
        const { cars } = this.state
        return (
            <div className="home-cars">
                {
                    cars.filter((car, idx) => idx <4).map( car =>(
                        <CollectionPreview key={car.model_make_id} {...car} />
                    ))
                }
                
            </div>
        )
    }
}

export default Home

