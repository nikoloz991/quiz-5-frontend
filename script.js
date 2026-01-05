const button = document.getElementById("showBtn");
const usersContainer = document.getElementById("users");

button.addEventListener("click", async () => {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();

        usersContainer.innerHTML = "";

        data.forEach(item => {
            const div = document.createElement("div");

            div.innerHTML =
                "<p><b>სახელი:</b> " + item.name + "</p>" +
                "<p><b>ელფოსტა:</b> " + item.email + "</p>" +
                "<p><b>ქალაქი:</b> " + item.address.city + "</p>" +
                "<hr>";

            usersContainer.appendChild(div);
        });
    } catch (e) {
        usersContainer.innerText = "შეცდომა მონაცემების მიღებისას";
    }
});
