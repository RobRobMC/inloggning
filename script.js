const username = "Bella";
const password = "qwe123";

document.addEventListener('DOMContentLoaded', function(){
    function isLoggedIn(){
        const localStorageIsLoggedIn = localStorage.getItem("isLoggedIn");
        if(localStorageIsLoggedIn){
            const isLoggedInValue = JSON.parse(localStorageIsLoggedIn);
            if(isLoggedInValue){
                document.querySelector("#not-logged-in").classList.add("hide");
                document.querySelector("#is-logged-in").classList.remove("hide");
            }
            else{
                document.querySelector("#is-logged-in").classList.add("hide");
                document.querySelector("#not-logged-in").classList.remove("hide");
            }
            document.querySelector("#username").value=null;
            document.querySelector("#password").value=null;
        }
    }

    function logout(){
        localStorage.setItem("isLoggedIn", false);
        isLoggedIn();
    }

    const form = document.querySelector("#form");
    form.addEventListener("submit", function(ev){
        ev.preventDefault();

        const formData = new FormData(form);

        const values = Object.fromEntries(formData);

        if (values.username == username && values.password == password)
        {
            localStorage.setItem("isLoggedIn", true);
            isLoggedIn();
        }
        else 
        {
            alert("Fel Användernamn Eller Lösenord");
        }
    });
    
    const logoutButton = document.querySelector("#logout-button");
    logoutButton.addEventListener("click", function(){
        logout();
    });

    isLoggedIn();
});