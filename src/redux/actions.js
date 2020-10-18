export const addToDo = (payload) => {
  return {
    type: "ADD_TODO",
    payload
  }
}

export const removeToDo = (payload) => {
  return {
    type: "REMOVE_TODO",
    payload
  }
}

export const updateToDo = (payload) => {
  return {
    type: "UPDATE_TODO",
    payload
  }
}

export const editToDo = (payload, content) => {
  return {
    type: "EDIT_TODO",
    payload,
    content
  }
}

export const setActiveId = (payload) => {
  return {
    type: "SET_ACTIVEID",
    payload
  }
}

