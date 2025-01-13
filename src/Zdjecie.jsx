import './Zdjecie.css';
import like from './img/like.png';
import dislike from './img/dislike.png';

function Zdjecie(props)
{
    function procent()
    {
        console.log(props.z.like,props.z.dislike);
        if(props.z.like==0 || props.z.dislike==0)
            return 0;
        let x = 100 * props.z.dislike/(props.z.like+props.z.dislike);
        console.log(props.z.like,props.z.dislike,x);
        return x;
    }

    return(
        <div className='zdjecie'>
            zdjęcie
            <p><img src={props.z.grafika} alt={props.z.opis}/></p>
            <p>{props.z.opis}</p>
            <p>
                <img className="like" onClick={props.fd} src={dislike} alt="dislike" />
                <img className="like" onClick={props.fl} src={like} alt="like" />
            </p>           
            <div className='pasek'>
                <div className='pdlike' style={{width: procent()+"%"}}></div>
                
            </div>
            <p>{props.z.dislike} {props.z.like}</p>
        </div>
    );
};

export default Zdjecie;