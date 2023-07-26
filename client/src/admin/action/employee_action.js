import axios from 'axios';
import {useState} from 'react';
import Toastr from 'toastr';
export const UploadTask = (obj)=> async dispatch =>{
  const config = {
      headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
  };
  try {
      
      const response = await axios.post('http://localhost:8005/EmpTask',obj);

      console.log("response",response);
    
       const response1 = await axios.post('http://localhost:5000/getStuByClass',);
      console.log(response1);
      // console.log("oksklsllsls")
      dispatch({
         type:'GET_STUDENTS_SUCCESS',
         payload:response1.data
     })
  } catch (error) {
     dispatch({
         type:'GET_STUDENTS_FAILED',
         payload:error
     })
  }   
}


export const UploadTask1 = (obj)=> async dispatch =>{
  const config = {
      headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
  };
  try {
      
      const response = await axios.post('http://localhost:8005/checktask',obj);

      // console.log("response",response);
    
      //  const response1 = await axios.post('http://localhost:8005/check',);
      // console.log(response1);
      // console.log("oksklsllsls")
      dispatch({
         type:'GET_STUDENTS_SUCCESS',
         payload:response.data
     })
  } catch (error) {
     dispatch({
         type:'GET_STUDENTS_FAILED',
         payload:error
     })
  }   
}



export const registerUser = (user) => async dispatch => {
    dispatch({
        type: 'USER_REGISTER_REQUEST'
    })
   

    try {
        const res = await axios.post("http://localhost:8005/empAdd", user).then(res => {
            if(res.status ===200){

              Toastr.options = {
                positionClass: 'toast-top-right',
                closeButton: true,
                progressBar: true,
                preventDuplicates: true,
                timeOut: 3000, // milliseconds
              };
              Toastr.success('This is a success message', 'Success');
       const [message, setMessage] = useState('');
          setMessage('');
              // Push to /
              window.location.href = "/employee";
            }else{
              Promise.reject()
            }
          })
        console.log(res);
        dispatch({
            type: 'USER_REGISTER_SUCCESS'

        })
    } catch (error) {
        dispatch({
            type: 'USER_REGISTER_FAILED',
            payload: error
        })
    }
}

export const registerUpload = (user) => async dispatch => {
  dispatch({
      type: 'USER_REGISTER_REQUEST'
  })

  try {
      const res = await axios.post("http://localhost:8005/api/addupload", user).then(res => {
          if(res.status ===200){
            alert('The data is add successfully')
            // Push to /
            window.location.href = "/tender";
          }else{
            Promise.reject()
          }
        })
      // console.log(res);
      dispatch({
          type: 'USER_REGISTER_SUCCESS'

      })
  } catch (error) {
      dispatch({
          type: 'USER_REGISTER_FAILED',
          payload: error
      })
  }
}


export const registerTender = (tender) => async dispatch => {
  dispatch({
      type: 'USER_REGISTER_REQUEST'
  })

  try {
      const res = await axios.post("http://localhost:8005/tenAdd", tender).then(res => {
          if(res.status ===200){
            alert('The data is add successfully')
            // Push to /
            window.location.href = "/tender";
          }else{
            alert('Succes')
          }
        })
      console.log(res);
      dispatch({
          type: 'USER_REGISTER_SUCCESS'

      })
  } catch (error) {
      dispatch({
          type: 'USER_REGISTER_FAILED',
          payload: error
      })
  }
}
export const getRequest = ()=> async dispatch =>{
  dispatch({
      type:'GET_All_STUDENTS_REQUEST'
  })
  try {
      const response = await axios.get('http://localhost:5000/getAllStuClass');
      console.log("reas",response)
      dispatch({
         type:'GET_All_STUDENTS_SUCCESS',
         payload:response.data
     })
  } catch (error) {
     dispatch({
         type:'GET_All_STUDENTS_FAILED',
         payload:error
     })
  }
}


export const getEmployee = ()=> async dispatch =>{
  dispatch({
      type:'GET_All_STUDENTS_REQUEST'
  })
  try {
      const response = await axios.get('http://localhost:8005/find');
      console.log("reas",response)
      dispatch({
         type:'GET_All_STUDENTS_SUCCESS',
         payload:response.data
     })
  } catch (error) {
     dispatch({
         type:'GET_All_STUDENTS_FAILED',
         payload:error
     })
  }
}
export const requestUser = (request) => async dispatch => {
  dispatch({
      type: 'USER_REGISTER_REQUEST'
  })

  try {
      const res = await axios.post("http://localhost:8005/reqAdd", request).then(res => {
          if(res.status ===200){
            alert('The data is add successfully')
            // Push to /
            window.location.href = "/request";
          }else{
            Promise.reject()
          }
        })
      console.log(res);
      dispatch({
          type: 'USER_REGISTER_SUCCESS'

      })
  } catch (error) {
      dispatch({
          type: 'USER_REGISTER_FAILED',
          payload: error
      })
  }
}


// export const loginUser = (user) => async dispatch => {
//     dispatch({
//         type: 'USER_LOGIN_REQUEST'
//     })

//     try {
//         const res = await axios.post("http://localhost:5000/accLogin", user);
//         console.log(res)
//         dispatch({
//             type: 'USER_LOGIN_SUCCESS',
//             payload: res.data
//         })
//         localStorage.setItem("jwt", res.data.token);
//         localStorage.setItem('currentUser', JSON.stringify(res.data));
//         window.location.href = "/adminhome";
//     } catch (error) {
//         dispatch({
//             type: 'USER_LOGIN_FAILED',
//             payload: error
//         })
//     }
// }
export const loginUser = (user) => async dispatch => {
  dispatch({
      type: 'USER_LOGIN_REQUEST'
  })

  try {
      const res = await axios.post("http://localhost:5000/accLogin", user);
      console.log(res)
      dispatch({
          type: 'USER_LOGIN_SUCCESS',
          payload: res.data
      })
      sessionStorage.setItem("jwt", res.data.token);
      sessionStorage.setItem('currentUser', JSON.stringify(res.data));
      window.location.href = "/adminhome";
  } catch (error) {
      dispatch({
          type: 'USER_LOGIN_FAILED',
          payload: error
      })
  }
}

export const loginUser1 = (user) => async dispatch => {
  dispatch({
    type: 'USER_LOGIN_REQUEST'
  })

  try {
    const res = await axios.post("http://localhost:5000/accLogin1", user);
    console.log(res)
    dispatch({
      type: 'USER_LOGIN_SUCCESS',
      payload: res.data
    })
    // const session = req.session;
    // session.user = res.data;
    // session.save();
    window.location.href = "/adminhome";
  } catch (error) {
    dispatch({
      type: 'USER_LOGIN_FAILED',
      payload: error
    })
  }
}





export const UpdateProfile = (pic)=> async dispatch =>{

   
  const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    };


  console.log(pic)
  try {
      //  await axios.post('/api/users/removeStudent',{postId});
      // const response2 = await axios.get(`/api/users/allStudent`);
     const res = await axios.put(`http://localhost:/updatepic`, { pic }, config);
     console.log(res)
      //   console.log(response)
      dispatch({
          type:'GET_STUDENTS_SUCCEssllslSS', 
        
      })
      window.location.href = "/student/dashboard";
    } catch (error) {
      console.log(error);
    }

  
}

export const updateProfileAction = (user) => async dispatch => {
  dispatch({
      type: 'UPDATE_PROFILE_REQUEST'
  })

  try {
      const res = await axios.post("http://localhost:8005/stuUpd", user).then(res => {
          if(res.status ===200){
            alert('The data is add successfully')
            // Push to /
            window.location.href = "/admin/dashboard";
          }else{
            Promise.reject()
          }
        })
     
      dispatch({
          type: 'UPDATE_PROFILE_SUCCESS',
          payload:res.data
      })

      window.location.href = "/Emp/dashboard";

  } catch (error) {
      dispatch({
          type: 'UPDATE_PROFILE_FAILED',
          payload: error
      })
  }
}
export const logoutUser = () => async dispatch => {

  localStorage.removeItem('currentUser');
  window.location.href = "/login";

}