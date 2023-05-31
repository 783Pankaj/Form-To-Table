// import React from "react";
// import Form from "./Form";
// import Table from "./Table";

// const DisplayForm = () => {
//     const [tableData, setTableData] = useState([])
//     const [user, setUser] = useState("");
//     const [userErr, setUserErr] = useState(false);
//     const [emailError, setEmailError] = useState('')
//     const [contErr, setContErr] = useState('');
//     const [formInputData, setformInputData] = useState(
//         {
//             fullName: '',
//             emailAddress: '',
//             salary: ''
//         }
//     );

//     const handleChange = (evnt) => {
//         const newInput = (data) => ({ ...data, [evnt.target.name]: evnt.target.value })
//         setformInputData(newInput)
//     }

//     const handleSubmit = (evnt) => {
//         evnt.preventDefault();
//         const checkEmptyInput = !Object.values(formInputData).every(res => res === "")
//         if (checkEmptyInput) {
//             const newData = (data) => ([...data, formInputData])
//             setTableData(newData);
//             const emptyInput = { fullName: '', emailAddress: '', salary: '' }
//             setformInputData(emptyInput)
//         }
//     }

//     //......................

//     // function loginHandle(e) {
//     //     if (user.length < 3) {
//     //         alert("type correct values")
//     //     }
//     //     else {
//     //         alert("all good :)")
//     //     }

//     //     e.preventDefault()
//     // }

//     function userHandler(e) {
//         let item = e.target.value;
//         if (item.length < 5 || item.length > 15) {
//             setUserErr(true)
//         }
//         else {
//             setUserErr(false)
//         }
//         setUser(item)
//     }

//     const validateEmail = (e) => {
//         var email = e.target.value

//         if (validator.isEmail(email)) {
//             setEmailError('')
//         } else {
//             setEmailError('Enter valid Email!')
//         }
//     }
//     const validContact = (e) => {
//         let cont = e.target.value;
//         if (cont.length <= 9 || cont.length > 10) {
//             setContErr(true)
//         } else {
//             setContErr(false);
//         }
//         setUser(cont)
//     }
//     return (
//         <React.Fragment>
//             <div>
//                 <Form handleChange={handleChange}
//                     formInputData={formInputData}
//                     handleSubmit={handleSubmit} />
//                 <Table tableData={tableData} />
//             </div>
//         </React.Fragment>
//     );
// }
// export default DisplayForm;