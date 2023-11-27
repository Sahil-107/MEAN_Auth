export const CreateSuccess = (successStatus, successMessage, data)=>{
    const successObj = {
        status: successStatus,
        message : successMessage,
        data : data
    }
    return successObj;
}