function handleClick() {
    var password = document.getElementById('password');

    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
    console.dir(password);
}

