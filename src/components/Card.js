import { StyledCard } from "./styles/Card.styled";


const Card = ({item}) => {

    const {id, image, title, body} = item

    return ( 
        // It is mean prop every even card wil be reverse with image/content content/image 
        <StyledCard layout={id % 2 === 0 && 'row-reverse' }>
            <div>
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
            <div key={id}>
            <img src={`./images/${image}`} alt="" />
            
            </div>
        </StyledCard>

     );
}
 
export default Card;