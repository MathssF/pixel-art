/* 
1 Evento: Criar um Evento que ao clicar no quadro com classe de "color", mude a cor do ponteiro.
Obs: Mudando o "Selected"
2 Evento: Criar um Evento que mude o pixel, para a cor da caixa marcada como selecionada
3 Evento: Botão que resete o quadro
*/
let id_color = document.getElementById("color-palette").children;
let id_pixels = document.getElementById("pixel-board").children;
const board = document.getElementById('pixel-board');
const c_black = document.querySelectorAll('.color')[0];
const c_blue = document.querySelectorAll('.color')[1];
const c_red = document.querySelectorAll('.color')[2];
const c_green = document.querySelectorAll('.color')[3];
function apertabloco(){
}
let rodar = 0;
for(let au=0; au<id_color.length; au+=1){
    id_color[au].addEventListener("click", function alterar(evento1){
        const selecionado = document.querySelector('.selected');
        selecionado.classList.remove('selected');
        evento1.target.classList.add('selected');
    });
}
// Criando a Tabela
for (let i = 0; i < 5; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (let j = 0; j < 5; j++) {
      const cell = document.createElement('div');
      cell.classList.add('pixel', 'p_vazio');
      row.appendChild(cell);
    }
    board.appendChild(row);
  }
function pintar(){
    // Ela seleciona o pixel
    // tira toda a classe da div e adiciona pixel + i_cor
    // Ou então, ela tira somente o "p_vazio", ou o "i_cor" atual, e adiciona um novo "i_cor"
    let ponto_pixel = document.querySelectorAll('.pixel');
    for (let pontinho = 0; pontinho < ponto_pixel.length; pontinho += 1){
        ponto_pixel[pontinho].addEventListener("click", () => {
            const marcado = document.querySelector('.selected');
            let classe = marcado.classList[1];
            ponto_pixel[pontinho].className = `pixel ${classe}`;

        })
    }
}

pintar();

function Limpeza (){
    let ponto_pixel2 = document.querySelectorAll('.pixel');
    for (let pontinho2 = 0; pontinho2 < ponto_pixel2.length; pontinho2 += 1){
        ponto_pixel2[pontinho2].className = "pixel p_vazio";
    }
}
