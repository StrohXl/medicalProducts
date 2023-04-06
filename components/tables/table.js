import { Table } from "antd";

const Tabla = ({ data, columns }) => {
  return <Table columns={columns} dataSource={data} />;
};
export default Tabla;
