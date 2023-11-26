export const CreateSuccess = (successStatus, successMessage)=>{
    const successObj = {
        status: successStatus,
        message : successMessage,
    }
    return successObj;
}