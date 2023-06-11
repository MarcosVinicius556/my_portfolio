import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

export const EmailReducer = (state, action) => {
    switch(action.type){
        case 'alteraNome':
            return{
                ...state, from_name: action.payload
            };
        case 'alteraEmail':
            return{
                ...state, email: action.payload
            };
        case 'alteraMensagem':
            return {
                ...state, message: action.payload
            };
        case 'enviaMensagem':
                handleSendEmail(action);
            return{
                ...state
            }
        default: 
            console.log('Ação não catalogada: ' + action.type)

    }
}

const toastOptions = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };
  
  const handleSendEmail = async (action, state) => {
    action.payload.preventDefault();
    const loadingToast = toast.loading('Enviando sua mensagem...', toastOptions);

    await emailjs.send('service_9hj7w6s', 'template_w1oc63k', state, 'ZpLtGDshY18YZOXAE')
                 .then((response) => {
                    console.log(response.text);
                     toast.dismiss(loadingToast);
                     toast.success('Mensagem enviada com sucesso!', toastOptions);
                }).catch((error) => {
                    console.log(error.text);
                    toast.dismiss(loadingToast);
                    toast.error('Falha no envio!', toastOptions);
                });
}