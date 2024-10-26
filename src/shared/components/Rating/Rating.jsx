import stars from './../../assets/Звездочки.svg'
import './Rating.css'

function Rating() {
    return(
        <div className="rating">
            <div className="rating__points">
                4.8
            </div>

            <div className="rating__stars">
                <img src={stars} />
            </div>

            <div className="rating__label">
                4k RATINGS
            </div>
        </div>
    )
}

export default Rating;