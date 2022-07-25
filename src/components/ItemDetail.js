import { useState } from "react";
import { Link } from 'react-router-dom'
import "../css/ItemDetail.css";
import ItemCount from "./ItemCount";
const ItemDetail = (props) => {
  const [btn, setBtn] = useState(true)
  const {thumbnail,price,title,description} = props.producto
  
  function cambiarbtn() {
    setBtn(<button class="btn btn-primary" onClick={cambiarbtn}>Agregar</button>)
  }
  return (
    <>
      <div className="contenedor ">
        <div class="hero min-h-screen bg-base-100 itemdetail justify-between">
          <div class="hero-content flex-col lg:flex-row ajuste">
            <img
              src={thumbnail}
              class="max-w-sm rounded-lg shadow-2xl img"
            />
            <div>
              <h1 class="text-4xl font-bold">{title}</h1>
              <p class="py-12">
                {description}
              </p>
              <h4 class="text-2xl font-bold text-center ">{price} $</h4>
              <div className="ajusteBtn">{btn}
                {btn ? (<ItemCount 
                stock={4}
                initial={1}
                onAdd={()=>{
                  alert('Este producto ha sido agregado al carrito')
                  setBtn(false)
                }}
                />) : (<Link to='/cart' className="btn btn-primary">Ver</Link>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ItemDetail;