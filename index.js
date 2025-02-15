// Add your code here

function submitData(userName, userEmail) {
    const formData = {
        name: userName,
        email: userEmail,
    };

    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(formData),
    };

    return fetch("http://localhost:3000/users", configurationObject)
        .then(function (response) {
            return response.json();
        })
        .then(function (object) {
            document.body.innerHTML = object["id"]
        })
        .catch(function (error) {
            document.body.innerHTML = error.message
        });
        

}