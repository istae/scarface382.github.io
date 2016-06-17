$(document).ready(function(){
  var object = {};

  object['first'] = "firssdst";
  object['second'] = "seconsdsd";

  delete object['first'];

 for(item in object ) {
    $('#item').append('<p>' + object[item] + '</p>');
  }
});
