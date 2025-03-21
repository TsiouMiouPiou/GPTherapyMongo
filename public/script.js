function display(){
    const sideBar = document.querySelector(".sidebar");
    sideBar.style.display = 'flex'
    sideBar.style.transition =  "all .5s ease";
}

function hide(){
    const sideBar = document.querySelector(".sidebar");
    sideBar.style.display = "none"
    
}

async function mongo() { // async always returns a promise and await pauses the execution until a promise resolves
    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    try {
        const response = await fetch("http://localhost:5000/api/patients", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error("Failed to save data to MongoDB");
        }

        const result = await response.json();
        console.log("MongoDB Success:", result);
        alert("Patient Saved in MongoDB");

    } catch (error) {
        console.error("MongoDB Error:", error);
        alert("Failed to save data to MongoDB.");
    }
}

