const loginBtn = document.querySelector(".signup-btn");
const loginBtnG = document.querySelector(".google");
const loginForm = document.querySelector("#loginForm");
class User {
  constructor(Name, Email, Password) {
    this.Name = Name;
    this.Email = Email;
    this.Password = Password;
  }
  // set bornDate(date) {
  //   // const date = date.split("/");
  //   this.Date = date;
  // }
}

const users = [];

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  getInfo(e); //getting inputs values from DOM
});

function getInfo(e) {
  const Name = e.target.name.value;
  const Email = e.target.email.value;
  const Password = e.target.password.value;
  //check entered values with existed values
  if (checkInfo(Name, Email, Password)) {
    makeUser(Name, Email, Password);
    clearForm(e);
  }
}

function makeUser(Name, Email, Password) {
  try {
    users.push(new User(Name, Email, Password));
    alert("Your registration was Successfull");
  } catch (e) {
    console.log(e);
  }
}

function clearForm(e) {
  e.target.name.value = "";
  e.target.email.value = "";
  e.target.password.value = "";
}

function checkInfo(Name, Email, Password) {
  const checkbox = document.querySelector("#checkbox");
  try {
    let flag = true;
    for (const user of users) {
      if (user.Email === Email) {
        alert("you already have an account with this email");
        return false;
      }
    }
    if (!Name || !Email || !Password) {
      alert("Compelete your information");
    } else if (Password.length < 8) {
      alert("Your password must be more than 8 character");
      document.querySelector("#passCont").classList.add("alert-pass");
    } else if (flag) {
      document.querySelector("#passCont").classList.remove("alert-pass");
      if (checkbox.checked) {
        return true;
      } else {
        alert("Please read and accept owr terms and conditions");
      }
    }
  } catch (e) {
    console.log(e);
  }
  return false;
}
