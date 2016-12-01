import axios from 'axios';
import request from 'superagent';

export function registrationRequest(userData){
//   return () => {
//     return request
//           .post('http://localhost:5000/api/user')
//           .end(function(err, res){
//               console.log(res);
//               console.log(err);
//               return {res, err};
//   });
// }


  return dispatch => {
    return axios.post('http://localhost:5000/api/user/create', userData, {headers: {
        'Content-Type': 'application/json'
    }})
      .then((response) => {
        console.log(response);
      });
  }
}

export function isEmailExists(email){
  return dispatch => {
    return axios.get(`http://localhost:5000/api/user/${email}`);
  }
}
