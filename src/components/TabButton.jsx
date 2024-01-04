const TabButton = ({ children, isSelected, ...props }) => {
  // isSelectd is a boolean
  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
};

export default TabButton;
