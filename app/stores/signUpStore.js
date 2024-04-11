import { create } from "zustand";
import axios from "../api/axios";
const REGISTER_URL = "/users/signUp";
import {ERROR_CODES} from "../../src/lib/error/errorCodes"

const useSignUpStore = create((set, get) => ({
  email: "",
  password: "",
  name: "",
  lastName: "",
  age: 0,
  invalidInput: false,
  errorType: "",
  loading: false,
  handleChangeEmail: (value) => {
    set({ email: value });
  },
  handleChangePassword: (value) => {
    set({ password: value });
  },
  handleChangeName: (value) => {
    set({ name: value });
  },
  handleChangeLastName: (value) => {
    set({ lastName: value });
  },
  handleChangeAge: (value) => {
    set({ age: value });
  },
  handleClickSignUp: async () => {
    try {
      const emailInput = get().email;
      const passwordInput = get().password;
      const nameInput = get().name;
      const lastNameInput = get().lastName;
      const ageInput = get().age;
      if (
        emailInput == "" ||
        passwordInput == "" ||
        nameInput == "" ||
        lastNameInput == "" ||
        ageInput == 0
      ) {
       throw new Error(ERROR_CODES.EMPTY_FIELD);
      }
      if (isNaN(ageInput)) {
        throw new Error(ERROR_CODES.INVALID_AGE);
      }

      set({ loading: true });

       const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({
          email: get().email,
          password: get().password,
          name: get().name,
          lastName: get().lastName,
          age: get().age,
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(response);
      set({ invalidInput: false });
      set({ loading: false });
      window.location.href = "http://127.0.0.1:8000/sign-in";
    } catch (error) {
      set({ errorType: error.message });
      set({ invalidInput: true });
      set({ loading: false });
    }
  },
}));

export default useSignUpStore;
