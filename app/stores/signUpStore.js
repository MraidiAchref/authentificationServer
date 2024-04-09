import { create } from "zustand";
import axios from "../api/axios";
const REGISTER_URL = '/users/signUp'

const useSignUpStore = create ((set,get) => ({
    email:'',
    password:'',
    name:'',
    lastName:'',
    age:0,
    loading: false,
    handleChangeEmail: (value) => {set({ email:value })},
    handleChangePassword: (value) => {set({ password:value })},
    handleChangeName: (value) => {set({ name:value })},
    handleChangeLastName: (value) => {set({ lastName:value })},
    handleChangeAge: (value) => {set({ age:value })},
    handleClickSignUp: async  () => {
        try{
            set({loading: true});
            const response = await axios.post(REGISTER_URL,
            JSON.stringify({
                email:get().email ,
                password:get().password ,
                name:get().name ,
                lastName:get().lastName ,
                age:get().age ,
            }), 
            {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            });
            console.log(response.data);
            set({loading:false}) ;
        }catch(error){
            console.error('Error signing up:',error);
            set({loading:false});

        }
    }


}))

export default useSignUpStore ;