//  const save =()=>{
//     document.getElementById('save-btn').addEventListener('click', function(){
//         // localStorage.removeItem('name')
//         saveFunction()

//     })
// } 
//  const dlt =()=>{
//     document.getElementById('dlt-btn').addEventListener('click', function(){
//         // localStorage.removeItem('name')
//         saveFunction()

//     })
// } 

// const saveFunction =()=>{
//     const inputValue = document.getElementById("name-field")
//     const value = inputValue.value;
//     inputValue.value= " ";

//  if(save()){
//     localStorage.setItem('Name', value)

//  }
//  else if(dlt()){
//     localStorage.removeItem('Name')

//  }
// }

// // const deleteFunction =()=>{
// //     const inputValue = document.getElementById("name-field")
// //     const value = inputValue.value;
// //     inputValue.value= " "
// // }

// // deleteFunction()


const getInputValue = (id) => {
    const inputField = document.getElementById(id);
    const inputFieldValue = inputField.value;
    inputField.value = '';
    return inputFieldValue;
}

const sendName = () => {
    const nameField = getInputValue('name-field');
    localStorage.setItem('Name', nameField);
}

const deleteName = () => {
    localStorage.removeItem('Name')
}

const sendEmail = () => {
    const emailField = getInputValue('email-field');
    localStorage.setItem('Email', emailField);
}

const deleteEmail = () => {
    localStorage.removeItem('Email')
}

const sendMsg = () => {
    const msgField = getInputValue('msg-field');
    localStorage.setItem('Message', msgField);
}

const deleteMsg = () => {
    localStorage.removeItem('Message')
}

const clearAll = () => {
    localStorage.clear();
}

const SendAll = () => {
    let info = {
        Name: getInputValue('name-field'),
        Email: getInputValue('email-field'),
        Message: getInputValue('msg-field')
    }
    localStorage.setItem('info', JSON.stringify(info));
}