import {createStore , applyMiddleware} from 'redux'
import {persistStore} from 'redux-persist'
import logger from 'redux-logger'
import rootReducer from './root-reducer'


const  middlewares = [];
if(process.env.NODE_ENV == 'development'){
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// export const persistor = persistStore(store);

// export default { store, persistStore };
export default { store};


//export const store = createStore(rootReducer , applyMiddleware(...middlewares));
//export const persistor = persistStore(store);
//const finalStore = {store , persistor};
//export default finalStore ; 
