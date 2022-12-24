// signup();
function signup(e) {
    // e.preventDefault();
  console.log("click");
  let username = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirm = document.getElementById("confirm").value;

  let user = {
    name: username,
    email: email,
    password: password,
  };

  let json = JSON.stringify(user);

  localStorage.setItem(username, json);
  console.log("user.added");
  // localStorage.setItem("email1",email)s
  // localStorage.setItem("password1",password)
  // localStorage.setItem("confirm1",confirm)
}
