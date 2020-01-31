$(document).ready(function() {
	$.ajax({
    'url' : 'https://flynn.boolean.careers/exercises/api/array/music',
    'method' : 'GET',
    'success' : function(data) {
      getData(data.response);
    },
    'error' : function(request, state, errors) {
      alert('Errore ' + errors);
    }
  });

  function getData (cds) {
    for (var i = 0; i < cds.length; i++) {
      var singleCd = cds[i];
      var source = $("#entry-template").html();
      var template = Handlebars.compile(source);
      var html = template(singleCd);

      $('.cds-container').append(html);
    }
  }

});
