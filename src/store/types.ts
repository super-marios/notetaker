export interface List {
  id: number;
  title: string;
  task: string;
  isDone : boolean
}

export interface ListState {
  lists: List[]
}

export const ADD_LIST = 'ADD_LIST'
export const DELETE_LIST = 'DELETE_LIST'

export interface AddAction {
  type: typeof ADD_LIST
  payload: List
}

export interface DeleteAction {
  type: typeof DELETE_LIST
  meta: {
    id: number
  }
}

export type ListActionTypes = AddAction | DeleteAction