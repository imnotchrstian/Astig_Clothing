/*search*/
function toggleLoginPopup() {
    var popup = document.getElementById("loginPopup");
    var iconButton = document.querySelector(".fa-circle-user");

    if (popup.classList.contains("active")) {
        popup.classList.remove("active");
        setTimeout(() => {
            popup.style.visibility = "hidden";
            popup.style.opacity = "0";
        }, 300);
    } else {
        // Position the popup below the icon
        var iconRect = iconButton.getBoundingClientRect();
        popup.style.top = `${iconRect.bottom + window.scrollY + 10}px`; // 10px gap below icon

        popup.style.visibility = "visible";
        popup.style.opacity = "1";
        popup.classList.add("active");
    }
}

// Close popup when clicking outside
document.addEventListener("click", function(event) {
    var popup = document.getElementById("loginPopup");
    var iconButton = document.querySelector(".fa-circle-user");

    if (popup.classList.contains("active") && event.target !== iconButton && !popup.contains(event.target)) {
        popup.classList.remove("active");
        setTimeout(() => {
            popup.style.visibility = "hidden";
            popup.style.opacity = "0";
        }, 300);
    }
});

// Fade-out effect when logging in
function login() {
    document.body.classList.add("fade-out");
    setTimeout(() => {
        window.location.href = "homepage.html";
    }, 500);
}

/*scroll*/
