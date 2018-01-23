
window.onload = function(){ 
    $("form[name=form]").submit(function () {
        var pokemon = $(this).find(':text[name="pokemon"]').val();
        console.log(pokemon);
        $.ajax({
            url: "pokemons.json",
            type: "get",
            dataType: "json",
            success: function (data) {
                for (var i in data) {
                    if (data[i].name===pokemon){  
                     ok = pokemon.toLowerCase();                   	
                    $( ".blackborder" ).replaceWith( "<img src='http://img.pokemondb.net/artwork/"+ok+".jpg' class='blackborder'>" );
                    }
                     else if(i===pokemon){
                        namel = data[i].name;
                        ok = namel.toLowerCase();
                        $( ".blackborder" ).replaceWith( "<img src='http://img.pokemondb.net/artwork/"+ok+".jpg'" );
                        $( ".blackborder" ).addClass("blackborder")
                    }
                    };
                
            },
            error: function () {
                alert('oops');
            }
        })
    return false;
    })
}