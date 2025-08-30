		
let checkbox = document.querySelector('.checkbox');
checkbox.addEventListener('click', darkMode);

function darkMode(){
    document.body.style.backgroundColor='black'
    document.querySelector('.about').style.backgroundColor='black'
    document.querySelector('.skills').style.backgroundColor='black'
    document.querySelector('.cards-section').style.background='black'
    document.querySelector('.services').style.backgroundColor='black'
    document.querySelector('.contact').style.backgroundColor='black'
    document.querySelector('footer').style.backgroundColor='black'
    document.querySelector('.last').style.backgroundColor='black'
    document.body.style.color='white'
}

document.getElementById("contactForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  const status = document.getElementById("formStatus");

  status.textContent = "⏳ Sending...";

  try {
    const response = await fetch("https://formspree.io/f/mgvlabow", {
      method: "POST",
      body: formData,
      headers: { "Accept": "application/json" }
    });

    if (response.ok) {
      status.textContent = "✅ Message sent successfully!";
      status.style.color = "green";
      form.reset();
    } else {
      status.textContent = "❌ Something went wrong. Try again.";
      status.style.color = "red";
    }
  } catch (error) {
    status.textContent = "⚠️ Network error. Please try again later.";
    status.style.color = "red";
  }
});
