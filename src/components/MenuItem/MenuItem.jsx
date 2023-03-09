const MenuItem = ({menuName, menuItem}) => {
    
  return (
    <>
      <h3 className="menu-title">{menuName}</h3>
      <div className="menu-content">
        {menuItem.map((bottle) => (
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
    </>
  );
}

export default MenuItem