$(document).ready(() => {
  showFirstPage();
  $('#btn-first').click(showFirstPage);
  $('#btn-second').click(showSecondPage);
  $('#btn-third').click(showThirdPage);
  $('#btn-fourth').click(showFourthPage);
});
// Primer llamado ajax
function showFirstPage() {
  $('#contenido').empty();
  $.ajax({
    url: window.location.href + 'assets/js/demo.json',
    type: 'GET',
    datatype: 'json'
  })
    .done(function(response) {
      showFirstInfo(response);
    })
    .fail(function(err) {
      console.log('error al cargar primera página');
    });
}
// Primera página
function showFirstInfo(info) {
  let data = info.contenido[0];
  $('#contenido').append(`<div><h4>${data.title}</h4><p>${data.text}</p><img src="${data.img}" class="nyan"/><p>${data.section}</p></div>`);
}
//  segundo llamado ajax
function showSecondPage() {
  $('#contenido').empty();
  $.ajax({
    url: window.location.href + 'assets/js/demo.json',
    type: 'GET',
    datatype: 'json'
  })
    .done(function(response) {
      showSecondInfo(response);
    })
    .fail(function(err) {
      console.log('error al cargar segunda página');
    });
}
// Segunda página
function showSecondInfo(info) {
  let data = info.contenido[1];
  $('#contenido').append(`<div><h4>${data.title}</h4><img src="${data.img}" class="nyan"/><h3>${data.second}</h3><p>${data.section}</p></div>`);
}

//  tercer llamado ajax
function showThirdPage() {
  $('#contenido').empty();
  $.ajax({
    url: window.location.href + 'assets/js/demo.json',
    type: 'GET',
    datatype: 'json'
  })
    .done(function(response) {
      showThirdInfo(response);
    })
    .fail(function(err) {
      console.log('error al cargar tercera página');
    });
}
// Tercera página
function showThirdInfo(info) {
  let data = info.contenido[2];
  $('#contenido').append(`<div><h4>${data.title}</h4><p>${data.text}</p><img src="${data.img}" class="nyan"/><p>${data.section}</p></div>`);
}

//  cuarto llamado ajax
function showFourthPage() {
  $('#contenido').empty();
  $.ajax({
    url: window.location.href + 'assets/js/demo.json',
    type: 'GET',
    datatype: 'json'
  })
    .done(function(response) {
      showFourthInfo(response);
    })
    .fail(function(err) {
      console.log('error al cargar cuarta página');
    });
}
// Cuarta página
function showFourthInfo(info) {
  let data = info.contenido[3];
  $('#contenido').append(`<div><h4>${data.title}</h4><p>${data.text}</p><img src="${data.img}" class="nyan"/><p>${data.section}</p></div>`);
}
