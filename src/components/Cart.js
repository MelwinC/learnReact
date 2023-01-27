const monsteraP = 8
const lierreP = 10
const bouquetP = 15
const Monstera = () => <li>Prix du Monstera : {monsteraP}€</li>
const Lierre = () => <li>Prix du Lierre : {lierreP}€</li>
const Bouquet = () => <li>Prix du Bouquet de fleurs : {bouquetP}€</li>
const Total = () => <p>Prix total : {monsteraP + lierreP + bouquetP}€</p>

const Cart = () => <div><ul><Monstera /><Lierre /><Bouquet /></ul><Total /></div>

export default Cart