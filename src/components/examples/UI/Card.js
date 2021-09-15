import "./Card.css";

const Card = (props) =>{
    /* esta variable es necesaria para procesar
    todas las clases que vienen del children.
    Al final este es un componente wrapper reusable
    */
    const classes = 'card ' + props.className;
    return(
        <div className={classes}>
        {props.children}
        {/* favor ver el cherrytree */}
    </div>
    ); 
}

export default Card;