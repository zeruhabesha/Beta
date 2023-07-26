import { combineReducers } from 'redux';
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {getStuByClassReducer,getAllStuReducer,addReportReducer,getAllRepReducer} from "./admin/reducers/student_reducer"
import { userRegisterReducer, userLoginReducer,userProfileReducer } from "./admin/reducers/user_reducer"
import {addNoticeReducer,getAllNoticeReducer,addSubjectReducer,getAllSubReducer,getAllClubReducer,addClubReducer,getAllFacReducer,getAllIssueReducer} from "./admin/reducers/admin_reducers"


const  rootReducer = combineReducers({
    getStuByClassReducer,getAllStuReducer,addReportReducer,getAllRepReducer,
    userRegisterReducer, userLoginReducer,userProfileReducer,
    addNoticeReducer,getAllNoticeReducer,addSubjectReducer,getAllSubReducer,
    getAllClubReducer,addClubReducer,getAllFacReducer,getAllIssueReducer
})

const currentUser = sessionStorage.getItem('currentUser') ? JSON.parse(sessionStorage.getItem('currentUser')) : null

const initialState = {

    userLoginReducer: { currentUser }
}
const composedEnhancers = composeWithDevTools({})

const store = createStore(rootReducer, initialState, composedEnhancers(applyMiddleware(thunk)))

export default store;