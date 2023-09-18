import MenuItem from "./MenuItem";

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((menuitem) => {
        return <MenuItem {...menuitem} key={menuitem.id} />;
      })}
    </div>
  );
};

export default Menu;
