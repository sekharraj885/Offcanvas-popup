const toggleButton = document.getElementById("toggleButton");
const startMigration = document.getElementById("startMigration")
const popupContainer = document.getElementById("popupContainer");
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
const alertContainer = document.getElementById("alertContainer");
const alertIcons = document.getElementById("success")


toggleButton.addEventListener("click", () => {
    if (popupContainer.style.bottom === "0px") {
        popupContainer.style.bottom = "-100%";
        toggleButton.style.bottom = "0%"

    } else {
        popupContainer.style.bottom = "0px"
        toggleButton.style.bottom = "10%"
    }
});

startMigration.addEventListener("click", () => {
    alertContainer.style.display = "none";
    toggleButton.style.display = "block"
    popupContainer.style.bottom = "0px"
    toggleButton.style.bottom = "10%"
    updateProgress();
})

alertIcons.addEventListener("click", () => {
    alertContainer.style.display = "none";
})

function updateProgress() {
    let width = 0;
    progressBar.style.width = "0%";
    progressText.textContent = "0%";
    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            popupContainer.style.bottom = "-100%"
            toggleButton.style.bottom = "0%"
            showAlert()
        } else {
            width++;
            progressBar.style.width = `${width}%`;
            progressText.textContent = `${width}%`;
        }
    }, 100);
}

function showAlert() {
    if (alertContainer.style.display === "none" || alertContainer.style.display === "") {
        toggleButton.style.display = "none"
        alertContainer.style.display = "flex";

    } else {
        alertContainer.style.display = "none";
    }
}




