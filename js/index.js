const $menuLateral = document.querySelector('#menu-lateral');
const $botaoMenu = document.querySelector('.botao-menu');
const $fecharMenu = document.querySelector('.fechar-menu');
const $botaoAdicionarTarefa = document.querySelector('.botao-adicionar-tarefa');
const $conteinerTarefa = document.querySelector('.container-tarefa');
const $fecharTarefa = document.querySelector('.menu-hide-dicionar-tarefa');
const $overlayMenu = document.querySelector('.overlay-menu');


// function sairMenu(botaoApertado){
//   const $menuLateralAtivo =  document.querySelector('#menu-lateral');
//   if ($menuLateralAtivo.classList.contains('menu-lateral-ativo') && botaoApertado !== $botaoMenu){
//     $menuLateral.classList.remove('menu-lateral-ativo');
//   }
// }

$botaoMenu.addEventListener('click',function(event){
  // sairMenu(event.target);
  abreFechaMenu();
  // if (event.target === $botaoMenu || event.target === $iconeMenu){
  // }
});
$fecharMenu.addEventListener('click', event => {
  abreFechaMenu();

});

$botaoAdicionarTarefa.addEventListener('click', event =>{
  abreFechaTarefa();
});

$fecharTarefa.addEventListener('click', event =>{
  abreFechaTarefa();

});

$overlayMenu.addEventListener('click',event=>{
  fechaMenu();

});

function fechaMenu(){
  $conteinerTarefa.classList.remove('mostra-tarefa');
  $overlayMenu.classList.remove('overlay-menu-ativo');
  $menuLateral.classList.remove('menu-lateral-ativo');
}

function abreFechaTarefa(){
  $conteinerTarefa.classList.toggle('mostra-tarefa');
  $overlayMenu.classList.toggle('overlay-menu-ativo');
}

function abreFechaMenu(){
  $menuLateral.classList.toggle('menu-lateral-ativo');
  $overlayMenu.classList.toggle('overlay-menu-ativo');
}