import dispatcher from "../dispatcher";

export const removeForm = () => {
    dispatcher.dispatch({
        type: 'REMOVE_FORM'
    })
}