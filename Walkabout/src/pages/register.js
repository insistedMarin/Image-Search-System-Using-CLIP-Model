// import './style.css'
// import React from 'react'
// import { 
//     SignUP 
//   } from '../ui-components';
  
// import { Auth } from 'aws-amplify';

// export default function Register(){
//     async function confirmSignUp(username,code) {
//         try {
//           await Auth.confirmSignUp(username, code);
//         } catch (error) {
//             console.log('error confirming sign up', error);
//         }
//     }
//     async function signUp(username,password) {
//         try {
//             const { user } = await Auth.signUp({
//                 username,
//                 password,
//                 autoSignIn: { // optional - enables auto sign in after user is confirmed
//                     enabled: true,
//                 }
//             });
//             console.log(user);
//             confirmSignUp(username,)
//         } catch (error) {
//             console.log('error signing up:', error);
//         }
//     }

//     return(<div>
//         <SignUP 
//     onSubmit={(fields) => {
//         // Example function to trim all string inputs
//         if(fields.Field1===fields.Field2){
//             signUp(fields.Field0,fields.Field1)
//         }
//         const updatedFields = {}
//         // Object.keys(fields).forEach(key => {
//         //     if (typeof fields[key] === 'string') {
//         //         updatedFields[key] = fields[key].trim()
//         //     } else {
//         //         updatedFields[key] = fields[key]
//         //     }
//         // })
      
//         return updatedFields
//     }}
// />
//         </div>)
//   }

