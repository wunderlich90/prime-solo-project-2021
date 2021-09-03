import axios from "axios";
import { takeLatest, put } from "redux-saga/effects";

function* fetchShelfList() {
    try {
        console.log('fetching list');
        const config = { 
            headers: {'Content-Type': 'application/json'}, 
            withCredentials: true 
        };
        const response = yield axios.get(`/api/shelf`, config)
        yield put({
            type: 'SET_SHELF_LIST',
            payload: response.data
        });
    }catch(error) {
        console.error(error);
    }
} 


function* shelfSaga() {
    yield takeLatest('FETCH_SHELF_LIST', fetchShelfList);




}


export default shelfSaga;