import { Upload } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeUploadImg, changeFormImg } from "<negocio>/src/app/features/Data/dataExtra";
const UploadImg = () => {
  // VARIABLES DE ESTADO
  const img = useSelector(state=> state.extra.uploadImg)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false);
  // FUNCIONES
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
    dispatch(changeFormImg(info.file))
    getBase64(info.fileList[0].originFileObj, (url) => {
      setLoading(false)
      dispatch(changeUploadImg(url))
    });
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
  };

  return (
    <Upload
      listType="picture-card"
      className="avatar-uploader"
      showUploadList={false}
      name="avatar"
      maxCount={1}
      beforeUpload={beforeUpload}
      onChange={handleChangeImg}
    >
      <div>
        {img != '' ? (
          <img
            src={img}
            alt="avatar"
            style={{  height: "100px", width: '100px' }}
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
