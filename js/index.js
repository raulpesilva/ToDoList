const $menuLateral = document.querySelector('#menu-lateral');
const $botaoMenu = document.querySelector('.botao-menu');
const $fecharMenu = document.querySelector('.fechar-menu');
const $botaoAdicionarTarefa = document.querySelector('.botao-adicionar-tarefa');
const $conteinerTarefa = document.querySelector('.container-tarefa');
const $fecharTarefa = document.querySelector('.menu-hide-dicionar-tarefa');


// function sairMenu(botaoApertado){
//   const $menuLateralAtivo =  document.querySelector('#menu-lateral');
//   if ($menuLateralAtivo.classList.contains('menu-lateral-ativo') && botaoApertado !== $botaoMenu){
//     $menuLateral.classList.remove('menu-lateral-ativo');
//   }
// }

$botaoMenu.addEventListener('click',function(event){
  // sairMenu(event.target);
  $menuLateral.classList.toggle('menu-lateral-ativo');
  // if (event.target === $botaoMenu || event.target === $iconeMenu){
  // }
});
$fecharMenu.addEventListener('click', event => {
  $menuLateral.classList.remove('menu-lateral-ativo');

});

$botaoAdicionarTarefa.addEventListener('click',event=>{
  $conteinerTarefa.classList.add('mostra-tarefa');
});

$fecharTarefa.addEventListener('click',event=>{
  $conteinerTarefa.classList.remove('mostra-tarefa');

})