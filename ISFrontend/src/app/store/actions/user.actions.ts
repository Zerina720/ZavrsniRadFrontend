import { createAction, props } from "@ngrx/store";

import { User } from "src/app/interfaces/User";

export const login = createAction(
  '[Login Component] LoginUser', props<User>()
);

export const logout = createAction('[Navigation Component LogoutUser]');
export const updateUser = createAction
( '[Update-user Component] UpdateUser', props<{ user: any}>()
);

export const dodajListu = createAction('[dodaj-listu]', props<{liste : any}>());