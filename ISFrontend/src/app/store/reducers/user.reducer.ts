import { createReducer, on } from "@ngrx/store";

import { User } from "src/app/interfaces/User";
import {  dodajListu, login, logout, updateUser } from "../actions/user.actions";

export const initialState : User = {
  expires: '',
  token: '',
  role: [],
  user: null,
  liste : null
};

export const userReducer = createReducer(
  initialState,
  on(login, (state, user) => Object.assign({}, state, user)),
  on(logout, () => Object.assign({}, initialState)),
  on(updateUser, (state, {user}) => ({...state, user:{...state.user, ...user}})),
 // on(dodajListu, (state, {liste}) => ({...state, liste: state.liste.concat(liste)}))
 on(dodajListu, (state, {liste}) => ({
  ...state,
  liste: state.liste ? state.liste.concat(liste) : [liste]
}))

)