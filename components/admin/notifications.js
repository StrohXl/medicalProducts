import { notification } from "antd"
export const Completado=(modalType, message)=>{
    console.log(modalType)
    notification.success({
        message: `Se ha${modalType == 'post'? ' creado ': ' editado '}con exito ${message}`
    })
}
export const Error=(error)=>{
    notification.error({
        message: 'Error',
        description: `${error}`
    })
}
export const Delete =(delet)=>{
    notification.success({
        message: `Se ha elimindo con exito ${delet}`
    })
}
