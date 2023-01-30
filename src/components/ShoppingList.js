import { plantList } from "../datas/plantList"
import "../styles/Shopping.css"




const categories = plantList.reduce(
    (acc, plant) =>
        acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
)

const ShoppingList = () =>
    <div className="liste">
        <br />
        <h2 >Catégories de plantes:</h2>
        <ul>
            {categories.map((cat) => (
                <li key={cat}>{cat}</li>
            ))}
        </ul>
        <h2>Liste des plantes:</h2>
        <ul>
            {plantList.map((plant) => (
                <li key={plant.id}>
                    {plant.name}
                    {plant.isBestSale && <span> 🔥</span>}
                </li>
            ))}
        </ul>
    </div>


export default ShoppingList