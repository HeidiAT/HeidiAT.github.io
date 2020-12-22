document.addEventListener('DOMContentLoaded', function() {
       var dateElems = document.querySelectorAll('.datepicker');
       M.Datepicker.init(dateElems, {format:'yyyy-mm-dd'});

       var elems = document.querySelectorAll('select');
       var instances = M.FormSelect.init(elems);
});

(function($) {
  $(document).ready(function() {
    $('input#input_text, textarea#deskripsi').characterCounter();
  });
})(jQuery);


(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space
