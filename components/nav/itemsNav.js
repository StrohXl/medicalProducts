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
        key: "setting:1",
      },
      {
        label: <Link href={'/medicamentos/Antiparasitarios'}>Antiparasitarios</Link>,
        key: "setting:2",
      },
      {
        label: <Link href={'/medicamentos/Medicamentos Controlados'}>Medicamentos Controlados</Link>,
        key: "setting:3",
      },
      {
        label: <Link href={'/medicamentos/Terapias Respiratorias'}>Terapias Respiratorias</Link>,
        key: "setting:4",
      },
      {
        label: <Link href={'/medicamentos'}><Space style={{justifyContent: 'space-between', width: '100%'}}>Ver mas <RightOutlined /></Space></Link>,
        key: "setting:5",

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
        label: "Item 1",
        children: [
          {
            label: "Anticonceptivos",
            key: '1sadf',
          },
          {
            label: "Antiparasitarios",
            key: 'label',
          },
        ],
      },
      {
        type: "group",
        label: "Item 2",
        children: [
          {
            label: "Option 3",
            key: "setting:3",
          },
          {
            label: "Option 4",
            key: "setting:4",
          },
        ],
      },
    ],
  },
  {
    label: "Informacion",
    key: "alipay",
    icon: <BookOutlined style={{color: '#1677ff'}} />,
  },
];
