import EventEmitter from 'events';


let isShow = false;
const EVENT = 'click';

const store = Object.assign({}, EventEmitter.prototype, {
    getStore() {
        return isShow;
    },
    addEventListener(cb) {
        this.addListener(EVENT, cb);
    },
    removeEventListener(cb) {
        this.removeListener(EVENT, cb);
    },
    emitStore() {
        this.emit(EVENT);
    },
    removeForm() {
       isShow = isShow
    }
})
export default store;