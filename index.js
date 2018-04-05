const form = document.getElementById('form');
const input = document.getElementById('inputName');
const show = document.getElementById('show');
const buttonClear = document.getElementById('clear');
const buttonAdd = document.getElementById('addButton');
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];


// save to localStorage

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

// add a list of content

const listContact = (text) => {
  const list = document.createElement('li');
  list.textContent = text;
  show.appendChild(list);
}

// push list

const createContact = function(e) {
  e.preventDefault();

  itemsArray.push(input.value);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  listContact(input.value);
  input.value = '';
};

// enter in input box to create list
form.addEventListener('submit', createContact);


// click add button to push to list
buttonAdd.addEventListener('click', createContact);


data.forEach(item => {
  listContact(item);
});



buttonClear.addEventListener('click', function() {
  localStorage.clear();
  while (show.firstChild) {
    show.removeChild(show.firstChild);
  }
});
// var arrayAddress = checkLocalStorage();
// var add_button = document.getElementById("addButton");
// var name = document.getElementById("inputName");
// // var show = document.getElementById("show");
// function showAddress() {
//   show.innerHTML = "";
//
//   for (var i = 0; i < arrayAddress.length; i++) {
//     let li = document.createElement('li');
//     let listAddress = document.createTextNode(arrayAddress[i].inputName);
//     li.setAttribute("id", "index_" + i);
//     li.setAttribute("onclick", `destroy(${i})`)
//     li.appendChild(listAddress);
//     show.appendChild(li);
//   }
// }
//
// function addAddress() {
//   if (name.value !== "") {
//     var objectAddress = {};
//     objectAddress.inputName = name.value;
//     arrayAddress.push(objectAddress);
//   } else {
//     alert("Please insert Your Name!")
//   }
//   name.value = "";
//   return arrayAddress;
// }
//
// function checkLocalStorage() {
//   if (localStorage.addressBook) {
//     const arrayContact = JSON.parse(localStorage.addressBook);
//     return arrayContact;
//   } else {
//     localStorage.addressBook = "[]";
//     return [];
//   }
// }
//
// function storeAddressToLocalStorage() {
//   localStorage.addressBook = JSON.stringify(addAddress());
// }
//
// function callAddThenShow() {
//   storeAddressToLocalStorage();
//   showAddress();
// }
//
// add_button.addEventListener("click", callAddThenShow);
// name.addEventListener("keyup", function(event){
//   event.preventDefault();
//   if (event.keyup === 13) {
//     add_button.click();
//   }
// });
// showAddress();
// var arr = [];
// function addBook() {
//   var objectAdd={};
//   var inputElement = document.getElementById('input');
//   arr.push(objectAdd);
//   console.log(arr);
//
//   return arr;
// }
//
// document.getElementById('addButton').addEventListener("click",function() {
//   localStorage.setItem("arr", JSON.stringify(arr)) // dari objek->string
//   for (var i = 0; i < arr.length; i++) {
//     var list = document.createElement("li");
//     var listArr = document.createTextNode(arr[i].input);
//   }
//
//   list.appendChild(listArr);
//   document.botruedy.appendChild(list);
//   localStorage.getItem("arr",JSON.parse(arr)); // parse dari string->objek
//   console.log(arr);
// })
// function addButton(){
//   var storage = document.getElementById('input-nama');
//   // localStorage.setItem("Text","storage");
//   console.log(storage);
// }
// function tampil(){
//   var tampilInput = localStorage.getItem('Text');
// }

// const add = document.getElementById("addButton");
//
// add.addEventListener("click", () =>{
//   addContact();
// })

// const add = document.getElementById("addButton");
//
// add.addEventListener("click", () => {
//   addContact();
//   showContacts();
// });
//
// let addres = [];
// const addContact = () => {
//   const name = document.getElementById("input-name").value;
//
//   if (name !== 0) {
//     addres.push({name : input-name});
//     console.log(input-name + " ");
//     document.getElementById("input-name").value="";
//     localStorage.addres = JSON.stringify(addres);
//   } else {
//     alert("Input can't be empty");
//   }
// }
//
// const contacts = document.getElementById("show");
//
// const showContacts = () => {
//   contacts.innerHTML = "";
//   addres.map(function(contact){
//     const li = document.createElement("li");
//     const contactNode = document.createTextNode(contact.input-name);
//     li.appendChild(contactNode);
//
//     contacts.append(li);
//   })
// };
//
// if (localStorage.addres) {
//   addres = JSON.parse(localStorage.add);
//   showContacts();
// }

// let addresBook = [];
//
// const addContact = () => {
//     const inputName = document.getElementById("input-name");
//     if (inputName !== 0) {
//       addresBook.push({inputname : inputName });
//       console.log(inputName + " ");
//       localStorage.addresBook = JSON.stringify(addresBook);
//     } else {
//       alert("Input can't be empty");
//     }
// }

// const add = document.getElementById("addButton");
//
// const callAddThenShow  = function() {
//   submitContact();
// }
//
// add.addEventListener("click", callAddThenShow);
//
// const submitContact = () => {
//   const inputName = document.getElementById("input-name").value;
//   if (inputName !== "") {
//     addContact({name : inputName});
//     document.getElementById("input-name").value="";
//   } else {
//     alert("Input can't be empty");
//   }
// }

// const inputName = document.getElementById('input-name');
// const show = document.getElementById('show');
//
// var tampung = [];
//
//
// const showList = function() {
//   show.innerHTML = "";
//   tampung.forEach((data, index) => {
//     var list = document.createElement('li');
//     list.id = index;
//     list.innerHTML = `${data}`;
//     show.appendChild(list);
//   })
// }
//
// if (localStorage.data) {
//   tampung = JSON.parse(localStorage.data)
//   showList()
// }
// const addButton = function(){
//   tampung.push(inputName.value);
//   localStorage.data = JSON.stringify(tampung);
//   showList()
// }
