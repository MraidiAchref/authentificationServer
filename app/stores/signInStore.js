import { create } from "zustand";
import axios from "../api/axios";
const REGISTER_URL= '/users/signIn'

const useSignInStore = create((set,get) => ({
    email: '',
    password: '',
    loading: false,
    handleChangeEmail: (value) => {set({ email: value })} ,
    handleChangePassword: (value) => {set({password: value})} ,
    handleClickSignIn: async () => {
        try {
            set({loading: true});
            const response = await axios.post(REGISTER_URL,
            JSON.stringify({
                email:get().email ,
                password: get().password
            }),
            {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            });
            console.log(response.data);
            set({loading:false}) ;

        }catch(error) {
            console.error('Error signing in:',error);
            set({loading:false}) ;
        }
    }
}))

export default useSignInStore ;