$(document).ready(function() {
	$.ajax({
    'url' : 'https://flynn.boolean.careers/exercises/api/array/music',
    'method' : 'GET',
    'success' : function(data) {
      getData(data.response);
			$(document).on('click', '.genre-selection option', function(){
	      var selection = $('option:selected').val();
	      console.log(selection);
				getDataGenre(data.response, selection);
	    });
    },
    'error' : function(request, state, errors) {
      alert('Errore ' + errors);
    }
  });

	// function per stampare tutti i cd

  function getData (cds) {
    for (var i = 0; i < cds.length; i++) {
      var singleCd = cds[i];
      var source = $("#entry-template").html();
      var template = Handlebars.compile(source);
      var html = template(singleCd);

      $('.cds-container').append(html);
    }
  }

	// function per stampare solo cd con determinato genere

	function getDataGenre (cds, genre) {
		$('.cd').hide();
    for (var i = 0; i < cds.length; i++) {
      var singleCd = cds[i];
			if (genre == singleCd.genre){
				var source = $("#entry-template").html();
				var template = Handlebars.compile(source);
				var html = template(singleCd);
				$('.cds-container').append(html);
			}
    }
  }
});
