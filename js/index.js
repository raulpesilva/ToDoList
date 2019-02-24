const $menuLateral = document.querySelector('#menu-lateral');
const $botaoMenu = document.querySelector('.botao-menu');
const $iconeMenu = document.querySelector('.botao-menu-icone');


function sairMenu(botaoApertado){
  const $menuLateralAtivo =  document.querySelector('#menu-lateral');
  if ($menuLateralAtivo.classList.contains('menu-lateral-ativo') && botaoApertado !== $botaoMenu){
    $menuLateral.classList.remove('menu-lateral-ativo');
  }
}

window.addEventListener('click',function(event){
  sairMenu(event.target);
  if (event.target === $botaoMenu || event.target === $iconeMenu){
    $menuLateral.classList.toggle('menu-lateral-ativo');
  }
});