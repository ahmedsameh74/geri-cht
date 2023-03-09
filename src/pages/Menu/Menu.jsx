import MenuItem from '../../components/MenuItem/MenuItem'
import './Menu.css'

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
    <div className="section grid Menu">
      <div>
        <MenuItem menuItem={wine} menuName="softDrinks" />
      </div>
      <div>
        <MenuItem menuItem={cocktail} menuName="cocktail" />
      </div>
      <div>
        <MenuItem menuItem={wine} menuName="wine" />
      </div>
      <div>
        <MenuItem menuItem={wine} menuName="wine" />
      </div>
      <div>
        <MenuItem menuItem={wine} menuName="wine" />
      </div>
    </div>
  );
}

export default Menu