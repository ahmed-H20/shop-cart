import { Button, Card} from 'react-bootstrap';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import { useCart } from 'react-use-cart';
import { BsCartPlus } from 'react-icons/bs'

const ProductCard = (props) => {
    let {image, price, title} = props.data;
    const { addItem } = useCart();
    const { theme } = useThemeHook;
    const addToCart = () =>{
        addItem(props.data);
    }

    return (
        <Card style={{ width: '18rem', height: 'auto'}}
            className={`${theme? 'bg-light-black text-light':'bg-light text-black'} text-center p-0 overflow-hidden shadow mx-auto mb-4`}
        >
            <div style={{background:'black', hight: '15rem',overflow:'hidden', display:'flex',
            justifyContent:'center', alignItems:'center', marginBottom:'inherit'}}>
                <div style={{ width:'9rem'}}>
                    <Card.Img variant="top" src={image} />
                </div>
            </div>
            
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Title><span className='h3'>{price}</span> LE</Card.Title>
                <Button
                    onClick={()=>addToCart()}
                    className='d-flex align-item-center m-auto border-0'
                >
                    Add to cart
                    <BsCartPlus size="1.8rem"/>
                </Button>
            </Card.Body>
        </Card>
    )
  }


export default ProductCard;
