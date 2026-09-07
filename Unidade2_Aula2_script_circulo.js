// 1. Obter o canvas e o contexto 2D
const canvas = document.getElementById("meuCanvas");
const ctx = canvas.getContext("2d");

// 2. Criar um objeto círculo com propriedades
let circulo = {
  x: 50,          // posição inicial no eixo X
  y: 200,         // posição inicial no eixo Y
  raio: 20,       // tamanho do círculo
  cor: "blue",    // cor inicial
  dx: 2           // velocidade horizontal
};

// 3. Função para desenhar o círculo
function desenharCirculo() {
  ctx.beginPath(); // inicia o desenho
  ctx.arc(circulo.x, circulo.y, circulo.raio, 0, Math.PI * 2);
  ctx.fillStyle = circulo.cor;
  ctx.fill();
  ctx.closePath(); // finaliza o desenho
}

// 4. Função de animação
function animar() {
  // Limpa o canvas a cada frame
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Desenha o círculo
  desenharCirculo();

  // Atualiza a posição
  circulo.x += circulo.dx;

  // Faz o círculo "rebater" nas bordas
  if (circulo.x > canvas.width - circulo.raio || circulo.x < circulo.raio) {
    circulo.dx *= -1; // inverte a direção
  }

  // Chama o próximo frame
  requestAnimationFrame(animar);
}

// 5. Iniciar a animação
animar();

// 6. Interatividade opcional: mudar cor ao clicar
canvas.addEventListener("click", () => {
  circulo.cor = circulo.cor === "blue" ? "red" : "blue";
});
