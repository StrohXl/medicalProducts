import { Upload } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeformDateProductImage } from "<negocio>/src/app/features/Data/formData";
const UploadImg = () => {

  // SELECTORES
   const editData = useSelector(state=>state.edit.value)
   const dataExtra = useSelector(state=>state.extra)

  // VARIABLES DE ESTADO
  const [urlImg, setUrlImg] = useState("");
  const [loading, setLoading] = useState(false);
  // FUNCIONES
  const dispatch = useDispatch();
  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };
  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return false;
  };
  const handleChangeImg = async (info) => {
    dispatch(changeformDateProductImage(info.file));
    getBase64(info.fileList[0].originFileObj, (url) => {
      setUrlImg(url);
      setLoading(false);
    });
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
  };
  useEffect(()=>{
    dataExtra.modalType == 'put'?
    (setUrlImg(editData.productImage),
    dispatch(changeformDateProductImage('nada'))):
    setUrlImg('')
  },[editData, dataExtra])
  return (
    <Upload
      listType="picture-card"
      className="avatar-uploader"
      showUploadList={false}
      name="avatar"
      maxCount={1}
      onChange={handleChangeImg}
      beforeUpload={beforeUpload}
    >
      <div>
        {urlImg != ''?(
          <img
            src={urlImg}
            alt="avatar"
            style={{ height: "100px", width: "100px" }}
          />
        ) : (
          <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div
              style={{
                marginTop: 8,
              }}
            >
              Upload
            </div>
          </div>
        )}
      </div>
    </Upload>
  );
};
export default UploadImg;
