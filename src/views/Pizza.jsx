import { useContext } from "react";
import { useParams} from "react-router-dom";
import { ListGroup } from 'react-bootstrap';
import Context from "../Context";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const PizzaDetail = () => {
    const { id } = useParams();
    const { pizzas, handleClick } = useContext(Context);

    const pizzaInfo = pizzas.find(pizza => pizza.id.toString() === id);

    return (
        <div className= " d-flex flex-wrap justify-content-center">
            <Card className="d-flex flex-row border-black shadow mt-5" style={{width: '80rem'}}>
                <Card.Img  src={pizzaInfo.img} alt={pizzaInfo.name} />
                <Card.Body className="mx-4">
                    <Card.Title className='bg-danger text-white text-uppercase fs-3 text-center'>{(pizzaInfo.name)}</Card.Title>
                    <Card.Text>
                        {pizzaInfo.desc}
                    </Card.Text>
                    <p className='fw-bold bg-black text-center text-light m-2 rounded'>Ingredientes:</p>
                    <ListGroup key={pizzaInfo.id} variant='flush'>
                        {pizzaInfo.ingredients.map((ingredients,) => (
                            <ListGroup.Item key={ingredients}>
                                🍕{ingredients}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                    <hr/>
                    <span className="fw-bold fs-3">
                        Precio: ${pizzaInfo.price}.-
                    </span>
                    <div className='d-flex flex-row justify-content-around'>
                        <Button className='fw-bold bg-danger border-black m-3' onClick={() => handleClick(pizzaInfo)}>Añadir al carro</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default PizzaDetail;