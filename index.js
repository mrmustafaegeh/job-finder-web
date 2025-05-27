// Mobile nav toggle
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

function showAlert() {
  document.getElementById("confirmation-message").innerHTML = alert(
    "The Form Has Been Submited"
  );
}

function jobInfo() {
  document.getElementById("job-des-page").innerHTML = alert(
    "The Job is Not Yet Avaliable "
  );
}
