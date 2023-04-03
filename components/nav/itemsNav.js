import { Space } from "antd";
import {
  TagOutlined,
  BookOutlined,
  DownOutlined,
  RightOutlined,
} from "@ant-design/icons";
import Icon from '@mdi/react';
import {  mdiMedicationOutline, mdiBabyBottle  } from '@mdi/js';
import Link from "next/link";

export const items = [
  {
    label: (
      <Space>
        Medicamentos
        <DownOutlined style={{ fontSize: "10px" }}  />
      </Space>
    ),
    key: 1,
    icon: <Icon path={mdiMedicationOutline} color='#1677ff' size={0.65}/>,
    children: [
      {
        label: <Link href={'/medicamentos/Anticonceptivos'}>Anticonceptivos</Link>,
        key: "11",
      },
      {
        label: <Link href={'/medicamentos/Antiparasitarios'}>Antiparasitarios</Link>,
        key: "12",
      },
      {
        label: <Link href={'/medicamentos/Medicamentos Controlados'}>Medicamentos Controlados</Link>,
        key: "13",
      },
      {
        label: <Link href={'/medicamentos/Terapias Respiratorias'}>Terapias Respiratorias</Link>,
        key: "14",
      },
      {
        label: <Link href={'/medicamentos'}><Space style={{justifyContent: 'space-between', width: '100%'}}>Ver mas <RightOutlined /></Space></Link>,
        key: "15",

      },

    ],
  },
  {
    label: "Ofertas de la semana",
    key: 2,
    icon: <TagOutlined  style={{color: '#1677ff'}}/>,
  },
  {
    label: (
      <Space>
        Bebe <DownOutlined style={{ fontSize: "10px" }} />
      </Space>
    ),
    key: 3,
    icon: <Icon path={mdiBabyBottle} size={0.65} color='#1677ff' />,
    children: [
      {
        type: "group",
        label: "Alimentacion",
        children: [
          {
            label: "Cereales",
            key: '31',
          },
          {
            label: "Compotas",
            key: '32',
          },
          {
            label: "Formulas Infantiles",
            key: '33',
          },
        ],
      },
      {

        type: "group ",
        label: "Higiene",
        children: [
          {
            label: "Champú",
            key: "34",
          },
          {
            label: "Cremas",
            key: "35",
          },
          {
            label: "Lociones",
            key: "36",
          },
          {
            label: "Pañales",
            key: "37",
          },
          {
            label: "Talcos",
            key: "38",
          },
          {
            label: "Toallas Húmedas",
            key: "39",
          },
        ],
      },
    ],
  },
   {
    label: (
      <Space>
        Salud <DownOutlined style={{ fontSize: "10px" }} />
      </Space>
    ),
    key: 4,
    icon: <Icon path={mdiBabyBottle} size={0.65} color='#1677ff' />,
    children: [
      {
        type: "group",
        label: "Primeros Auxilios",
        children: [
          {
            label: "Adhesivos y Curitas",
            key: '41',
          },
          {
            label: "Algodón Gasas y Vendas",
            key: '42',
          },
          {
            label: "Analgésicos y Antinflamantorios",
            key: '43',
          },
          {
            label: "Antisépticos",
            key: '44',
          },
          {
            label: "Cicatrizantes",
            key: '45',
          },
          {
            label: "Material Descartable",
            key: '46',
          },
        ],
      },
      {
        type: "group",
        label: "Salud Geriátrica",
        children: [
          {
            label: "Higiene",
            key: "46",
          },
          {
            label: "Productos para la Incotinencia",
            key: "47",
          },
        ],
      },
    ],
  },
  {
    label: "Informacion",
    key: "5",
    icon: <BookOutlined style={{color: '#1677ff'}} />,
  },
];
