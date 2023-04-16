import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Link from "next/link";
const url = 'http://localhost:8000/api'
import { Space } from "antd";
import {
  TagOutlined,
  BookOutlined,
  DownOutlined,
} from "@ant-design/icons";
import Icon from '@mdi/react';
import {  mdiMedicationOutline, mdiBabyBottle  } from '@mdi/js';
export const loadItemsData = createAsyncThunk('data/itemsNav', async(state, actions)=>{
    const { data } = await axios.get(`${url}${state}`);
    data.map(i=> i.key = i.id)
    data.map(i=> i.label = <Link href={`/medicamentos/${i.name}?value=${i.key}`}>{i.name}</Link>)
    const filter = data.filter((i,index)=>index < 5)
    filter.push({key: 'verMas', label: <Link href={`/medicamentos/`}>Ver Mas</Link>})
    return filter
})
const initialState = [
    {
      label: 'Medicamentos',
      key: 1,
      icon: <Icon path={mdiMedicationOutline} color='#1472c9' size={0.65}/>,
    },
    {
      label: "Ofertas de la semana",
      key: 2,
      icon: <TagOutlined  style={{color: '#1472c9'}}/>,
    },
    {
      label: (
        <Space>
          Bebe <DownOutlined style={{ fontSize: "10px" }} />
        </Space>
      ),
      key: 3,
      icon: <Icon path={mdiBabyBottle} size={0.65} color='#1472c9' />,
    },
     {
      label: (
        <Space>
          Salud <DownOutlined style={{ fontSize: "10px" }} />
        </Space>
      ),
      key: 4,
      icon: <Icon path={mdiBabyBottle} size={0.65} color='#1472c9' />,
    },
    {
      label: "Informacion",
      key: 5,
      icon: <BookOutlined style={{color: '#1472c9'}} />,
    },
  ];
export const itemsNav = createSlice({
  name: "items",
  initialState,
  reducers: {
  },
  extraReducers: builder => {
    builder.addCase(loadItemsData.pending, (state, actions)=>{
    }).addCase(loadItemsData.fulfilled, (state,actions)=>{
        state[0].children = actions.payload
    })
    
  }
});
export const {loadItems} = itemsNav.actions
export default itemsNav.reducer;
