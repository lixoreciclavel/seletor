const addBtn = document.getElementById("adicionarBtn");
const ordBtn = document.getElementById("ordenarBtn");
const text = document.getElementById("text");
let objetos = [];

addBtn.addEventListener("click", () => {
  if (text.value == "") {
    alert("Informe um valor válido");
  } else {
    if (objetos.includes(text.value)) {
      alert("valor já adicionado");
    } else {
      objetos.push(text.value);
      console.log(objetos);
    }
  }
  text.value = ''
});

ordBtn.addEventListener("click", () => {
    objetos.sort();
    console.log("objetos ordenados: ")
    console.log(objetos)
  });
