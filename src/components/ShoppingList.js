import { plantList } from "../datas/plantList"
import "../styles/Shopping.css"
import PlantItem from './PlantItem'
import '../styles/PlantItem.css'



const categories = plantList.reduce(
    (acc, plant) =>
        acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
)

const ShoppingList = () =>
    <div>
        <h2 className='lmj-title'>Catégories de plantes:</h2>
        <ul className='lmj-cat'>
            {categories.map((cat) => (
                <li key={cat}>{cat}</li>
            ))}
        </ul>
        <br />
        <h2 className='lmj-title'>Liste des plantes:</h2>
        <ul className='lmj-plant-list'>
            {plantList.map(({ id, cover, name, water, light }) => (
                <PlantItem
                    id={id}
                    cover={cover}
                    name={name}
                    water={water}
                    light={light}
                />
            ))}
        </ul>
    </div>



export default ShoppingList