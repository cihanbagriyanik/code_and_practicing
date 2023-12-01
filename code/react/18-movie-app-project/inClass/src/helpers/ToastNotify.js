 import {toast} from "react-toastify"
 //https://fkhadra.github.io/react-toastify/introduction

 export const toastSuccessNotifY=(msg)=>{

     toast.success(msg, {
      
       autoClose: 5000,
       hideProgressBar: false,
       closeOnClick: true,
       pauseOnHover: true,
       draggable: true,
       progress: undefined,
      
     });
 }

export const toastWarnNotifY=(msg)=>{

    toast.warn(msg, {
     
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
     
    });
}


export const toastErrorNotifY=(msg)=>{
    toast.error(msg, {
      
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    
    });
}
