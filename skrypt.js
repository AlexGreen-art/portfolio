/* Zastępniki brakujących zrzutów ekranu — do czasu wgrania plików do img/ */
document.querySelectorAll(".ph img").forEach(function (img) {
  var brak = function () { img.closest(".ph").classList.add("brak"); };
  img.addEventListener("error", brak);
  if (img.complete && img.naturalWidth === 0) brak();
});

(function(){
  var b=document.getElementById('burger'), m=document.getElementById('menu-tel');
  if(!b||!m) return;
  b.addEventListener('click',function(){
    var otw = b.getAttribute('aria-expanded')==='true';
    b.setAttribute('aria-expanded', otw?'false':'true');
    m.hidden = otw;
  });
  m.addEventListener('click',function(e){
    if(e.target.tagName==='A'){ b.setAttribute('aria-expanded','false'); m.hidden=true; }
  });
})();
