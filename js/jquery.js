//input de materialize //Function expression function global las variables son las que puedes usar en cualquier lugar del código
var $input = $("#icon_search")

/*
$(document).ready(function(){
   // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
   $('.modal').modal();
 });
*/
function cargarPagina(){
//  $('.modal').modal();
  paintRestaurants(data);
//  $input.keyup(restaurantFilter);
}

function paintRestaurants(array){
  //Plantilla (template) html
  var template = '<div class="col s6 m4">' + '<img src="__src__" class="modal-trigger" data-name="__name__" data-food="__food__" data-adress="__adress__" href="#modal1" alt="Photo food">' +
  '</div>';
  var finalTemplate = ""; //juntar template y agregar lo que tiene el template se manda vacío para mandarle los datos.
  //Dando atributos a los elementos de la Plantilla
  array.forEach(function(data){ //forEach  Es un método de los array itera en todos los elementos del arreglo.
    var $imageFood = $("<img />"); // imagen a la que vamos a aplicar el modal
    $imageFood.attr("src", data["photo"]);

    finalTemplate += /*Se vayan agregando las cosas a reemplazar*/ template.replace('__name__', data.name)
                                                                           .replace('__food__', data.food)
                                                                           .replace('__adress__', data.adress)
                                                                           .replace('__src__', data.photo);
    //objeto por corchetes o dotnotation
  });

  $("#main_food_container").html(finalTemplate) //Agregar en contenedor el template el html es el innerHTML en jquery
  //Reemplazando los atributos
}



$(document).ready(cargarPagina);
