import './Zdjecie.css';
import like from './img/like.png';
import dislike from './img/dislike.png';

function Zdjecie(props)
{
    let a=0, b=0;

    return(
        <div className='zdjecie'>
            zdjęcie
            <p><img src={props.z.grafika} alt={props.z.opis}/></p>
            <p>{props.z.opis}</p>
            <p>
                <img className="like" onClick={flike} src={like} alt="like" />
                <img className="like" onClick={fdlike} src={dislike} alt="dislike" />
            </p>
            <p>{props.z.like} {props.z.dislike}</p>
            <p>a: {a}, b: {b}</p>
        </div>
    );
};

export default Zdjecie;