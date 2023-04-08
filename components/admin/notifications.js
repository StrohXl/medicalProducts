import { notification } from "antd"

export const Create=(message)=>{
    notification.success({
        message: `Se ha creado con exito ${message}`
    })
}
export const Edit=(edit)=>{
    notification.success({
        message: `Se ha editado con exito ${edit}`
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
