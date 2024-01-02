const TabButton = ({ children, onClick, isSelected }) => {
  // isSelectd is a boolean
  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onClick}>
        {children}
      </button>
    </li>
  );
};

export default TabButton;
