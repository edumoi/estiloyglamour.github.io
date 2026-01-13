let datos={},categoriaActual='aretes';
fetch('productos.json').then(r=>r.json()).then(j=>{datos=j;mostrarCategoria('aretes');});
function mostrarCategoria(c){categoriaActual=c;renderizar(datos[c]);}
function aplicarFiltro(){
 let min=parseFloat(precioMin.value)||0,max=parseFloat(precioMax.value)||Infinity;
 renderizar(datos[categoriaActual].filter(p=>p.precio>=min&&p.precio<=max));
}
function renderizar(lista){
 catalogo.innerHTML='';
 lista.forEach(p=>{
  catalogo.innerHTML+=`<div class="producto">
  <div style="position:relative">
  <img src="img/${p.imagen}">
  <div class="marca-agua">Estilo & Glamour</div></div>
  <h4>${p.nombre}</h4><b>S/ ${p.precio.toFixed(2)}</b>
  <a href="https://wa.me/51900008840?text=Hola,%20me%20interesa%20${p.codigo}" target="_blank">Consultar</a>
  </div>`;
 });
}
document.addEventListener('contextmenu',e=>e.preventDefault());