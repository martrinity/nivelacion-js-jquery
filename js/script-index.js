$(document).ready( function(){
	$("#back").hide("index.html");
	$("#menu-hide").hide("recipe.html");

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);

	function printNews() {
		$(".parrafo-news").append("NUEVAS RECETAS");
	}

	printNews();
	renderActivities(activities);

});


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	recipesArray.forEach(function(el){
		if(el.highlighted == true){
			console.log(el.highlighted);
			renderRecipe(el);
		}

	});

	console.log('Recipes: ', recipesArray);

};


/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	$(".list-recipes").append('<a class="item-recipe" href="#">'+
  '<span class="attribution">'+
    '<span class="title-recipe">' + recipe.title + '</span>'+
    '<span class="metadata-recipe">'+
      '<span class="author-recipe">'+ recipe.source.name + '</span>'+
      '<span class="bookmarks-recipe">'+
        '<span class="icon-bookmark"></span>'+ 
      '</span>'+
    '</span>'+
  '</span>'+
'<img src="img/recipes/320x350/' + recipe.name + '.jpg"/>'+
'</a>');
	console.log('Voy a pintar la receta: ', recipe.title);
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activities) {
	activities.forEach(function(el){
		renderActivity(el);
	})

	if(activities.length > 0){
		$(".wrapper-message").hide();
	}
	console.log('Activities: ', activities);
};

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}


