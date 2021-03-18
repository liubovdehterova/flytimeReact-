import  { Dispatcher } from "flux";

import store from '../store'

const dispatcher = new Dispatcher();
dispatcher.register((action) => {
    switch (action.type) {
        case 'REMOVE_FORM': {
            store.removeForm();
            store.emitStore();
        }
    }
})
export default dispatcher