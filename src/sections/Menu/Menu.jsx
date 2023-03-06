import './Menu.css'
import vector from "../../assets/vectors/Vector.svg";
import Drink from '../../assets/drink.png'

const Menu = () => {
    const wine = [
      {
        id: 1,
        name: "Chapel Hill Shiraz",
        price: "$56",
        country: "AU | Bottle",
      },
      {
        id: 2,
        name: "Catena Malbec",
        price: "$59",
        country: "AR | Bottle",
      },
      {
        id: 3,
        name: "La Vieille Rosé",
        price: "$44",
        country: "FR | 750 ml",
      },
      {
        id: 4,
        name: "Rhino Pale Ale",
        price: "$31",
        country: "CA | 750 ml",
      },
      {
        id: 5,
        name: "Irish Guinness",
        price: "$26",
        country: "IE | 750 ml",
      },
    ];

    const cocktail = [
      {
        id: 1,
        name: "Aperol Spritz",
        price: "$20",
        country: "Aperol | Villa Marchesi prosecco | soda | 30ml",
      },
      {
        id: 2,
        name: "Dark 'N' Stormy",
        price: "$16",
        country: "Dark rum | Ginger beer | Slice of lime. ",
      },
      {
        id: 3,
        name: "Daiquiri",
        price: "$10",
        country: "Rum | Citrus juice | Sugar",
      },
      {
        id: 4,
        name: "Old Fashioned",
        price: "$31",
        country: "Bourbon | Brown sugar | Angostura Bitters",
      },
      {
        id: 5,
        name: "Negroni",
        price: "$26",
        country: "Gin | Sweet Vermouth | Campari | Orange garnish",
      },
    ];


  return (
    <div className="section" id="menu">
      <div className="top">
        <p>Menu that fits you palatte</p>
        <img src={vector} alt="" />
        <h2>Today’s Special</h2>
      </div>
      <div className="bottom">
        <div className="left">
          <h3 className="menu-title">Wine & Beer</h3>
          <div className="menu-content">
            {wine.map((bottle) => (
              <div className="menu-item" key={bottle.id}>
                <div className="men-item">
                  <h4>{bottle.name}</h4>
                  <div></div>
                  <p>{bottle.price}</p>
                </div>
                <p>{bottle.country}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="center">
          <img src={Drink} alt="" />
        </div>
        <div className="right">
          <h3 className="menu-title">Cocktails</h3>
          <div className="menu-content">
            {cocktail.map(bottle => (
            <div className="menu-item" key={bottle.id}>
              <div className="men-item">
                <h4>{bottle.name}</h4>
                <div></div>
                <p>{bottle.price}</p>
              </div>
              <p>{bottle.country}</p>
            </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bottoom">
        <button>View More</button>
      </div>
    </div>
  );
}

export default Menu