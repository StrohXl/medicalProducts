import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Menu } from "antd";
import { loadItemsData, loadItems } from "<negocio>/src/app/features/Data/itemsNav";
const menu = ({mode,CloseDrawer}) => {
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    setCurrent(e.key);
    CloseDrawer()
  };

  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();
  const LoadItems = () => {
    dispatch(loadItemsData('/categories/'));
  };
  useEffect(() => {
    LoadItems();
  }, []);

  return (
    <Menu
      className="menu"
      onClick={onClick}
      selectedKeys={[current]}
      mode={mode}
      items={items}
    />
  );
};

export default menu;
