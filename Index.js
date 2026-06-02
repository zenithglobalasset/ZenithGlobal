ralCode: document.getElementById('refCode').value,
        password: document.getElementById('pass').value
    };

    if (userData.password !== document.getElementById('cPass').value) {
        alert("Passwords don't match!");
        return;
    }

    const res = await createNewUser(userData);
    if (res.success) {
        alert("Registration Successful!");
        window.location.href = 'login.html';
    } else {
        alert(res.message);
    }
});
