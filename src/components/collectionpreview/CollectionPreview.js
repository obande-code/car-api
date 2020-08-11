import React from 'react'
import './CollectionPreview.css'
import { Link, withRouter} from 'react-router-dom'
import imageUrl from '../../assets/acura.jpg' 

const CollectionPreview = ({model_make_id,history,match}) => {
    return (
        <div>
        <div className="card" style={{width: '18rem'}}>
            <img src={imageUrl} class="card-img-top" alt="cars" />
            <div class="card-body">
                <h5 class="card-title">{model_make_id}</h5>
                <Link  to={`/cars/${model_make_id}`} class="btn btn-warning mx-auto">Know more</Link>
            </div>
        </div>
        </div>
    )
                    
}

export default withRouter(CollectionPreview);
