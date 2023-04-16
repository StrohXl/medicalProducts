import { Form, Input } from "antd";
import { useSelector,useDispatch } from "react-redux";
import { useState,useEffect } from "react";
import { changeformDateName } from "<negocio>/src/app/features/Data/formData";
const formCategorie = ({ }) => {
  const dispatch = useDispatch()
  const auxData = useSelector(state=>state.edit.value)
  const dataExtra = useSelector(state=>state.extra)
  const [data, setData] = useState([])
  const [form] = Form.useForm()
  const onChange=(e)=>{
    setData(e)
    dispatch(changeformDateName(e))
  }
  useEffect(()=>{
    dispatch(changeformDateName(auxData.name))
    if(dataExtra.openModal == true){
      if(dataExtra.modalType == 'put'){
        setData({...auxData})
        form.setFieldsValue({...auxData})
      }
      else{
        form.resetFields()
        setData('')
      }
    }
    else{
      form.resetFields()
      setData('')
    }
  },[auxData, dataExtra])
  return (
    <Form
      layout="vertical"
      form={form}
      initialValues={data}
      onValuesChange={onChange}
    >
      <Form.Item
        name="name"
        label="Nombre de la Categoria"
        rules={[{ message: "Escriba el nombre de la Categoria!!!", required: true }]}
      >
        <Input placeholder="Categoria" />
      </Form.Item>
    </Form>
  );
};

export default formCategorie;
