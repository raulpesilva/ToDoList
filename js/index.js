const $menuLateral = document.querySelector('#menu-lateral');
const $botaoMenu = document.querySelector('.botao-menu');
const $fecharMenu = document.querySelector('.fechar-menu');


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

})