function Basket(props) {
  return (
    <section className="Basket">
        <ul>
            {props.cart.map(item => 
                <li>{item.productdisplayname} x {item.amount}, {item.price*item.amount},-</li>)}
            </ul>
            <button>Buy now plz</button>
    </section>
  )
}

export default Basket