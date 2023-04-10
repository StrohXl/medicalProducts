import React from "react";
import { useRouter } from "next/router";
import { Menu } from "antd";
import Icon from "@mdi/react";
import { mdiMicrosoft, mdiHome } from "@mdi/js";
const menuSiderAdmin = () => {
  const router = useRouter();

  const items = [
    {
      label: 'Inicio',
      key: '/admin',
      icon: <Icon size={1}  path={mdiHome}  />
    },
    {
      label: 'Categorias',
      key: '/admin/categories',
      icon: <Icon size={1}  path={mdiMicrosoft}  />
    },
    {
      label: 'Sub Categorias',
      key: '/admin/subCategorias',
      icon: <Icon size={1}  path={mdiMicrosoft}  />
    },
    {
      label: 'Productos',
      key: '/admin/products',
      icon: <Icon size={1}  path={mdiMicrosoft}  />
    }
  ]
  return (
    <Menu
      mode="inline"
      style={{
        height: "100%",
        borderRight: 0,
      }}
      items={items}
      onClick={({ key }) => router.push(key)}
    />
  );
};

export default menuSiderAdmin;
