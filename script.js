document.addEventListener("DOMContentLoaded", function () {
  // Função para busca de produtos
  const searchForm = document.getElementById("searchForm");
  if (searchForm) {
    searchForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const searchInput = document
        .getElementById("searchInput")
        .value.toLowerCase();
      console.log("Busca:", searchInput);
      const products = document.querySelectorAll(".product");

      products.forEach((product) => {
        const productTitle = product
          .querySelector(".card-title")
          .textContent.toLowerCase();
        console.log("Produto:", productTitle);

        if (productTitle.includes(searchInput)) {
          product.style.display = "block";
          console.log("Exibindo:", productTitle);
        } else {
          product.style.display = "none";
          console.log("Ocultando:", productTitle);
        }
      });
    });
  } else {
    console.error('O elemento com o ID "searchForm" não foi encontrado.');
  }

  // Função para envio de contato
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const firstName = document.getElementById("firstName").value;
      const lastName = document.getElementById("lastName").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      console.log("Nome:", firstName);
      console.log("Sobrenome:", lastName);
      console.log("Email:", email);
      console.log("Mensagem:", message);

      alert("Formulário enviado com sucesso!\n");
    });
  } else {
    console.error('O elemento com o ID "contactForm" não foi encontrado.');
  }

  // Função para inscrição na newsletter
  const subscriptionForm = document.getElementById("subscriptionForm");
  if (subscriptionForm) {
    subscriptionForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const emailInput = document.getElementById("subscriptionEmail"); // Alterado o ID aqui
      const email = emailInput.value.trim();

      if (email && validateEmail(email)) {
        let emails = JSON.parse(localStorage.getItem("emails")) || [];
        emails.push(email);
        localStorage.setItem("emails", JSON.stringify(emails));

        emailInput.value = "";
        alert("E-mail salvo com sucesso!");
      } else {
        alert("Por favor, insira um e-mail válido.");
      }
    });
  } else {
    console.error('O elemento com o ID "subscriptionForm" não foi encontrado.');
  }

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
});
