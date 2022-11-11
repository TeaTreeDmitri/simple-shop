function Basket(props) {
    function getTotal(){
        let total = 0;
        props.cart.forEach(item => {
            total += item.price * item.amount;
        });
        return total;
    }
  return (
    <section className="Basket">
        <ul>
            {props.cart.map(item => 
                <li>{item.productdisplayname} x {item.amount}, {item.price*item.amount},-</li>)}
            </ul>
            <h1>Total: {getTotal()},-</h1>
            <button>Buy now plz</button>
    </section>
  )
}

export default Basket