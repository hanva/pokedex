var data =$.ajax({
    url: "pokemons.json",
    type: "get",
    dataType: "json",
    data: "data",
    success: function(data){
        data = data
        return data
    }
})
function Premiere(chaine){
    return chaine.substr(0,1).toUpperCase()+	chaine.substr(1,chaine.length).toLowerCase()
}
function replaceWith(name, type) {
    $(".blackborder").replaceWith("<img src='http://www.pokestadium.com/sprites/xy/" + name + ".gif'>");
    $("img").addClass("blackborder");
    $("img").addClass("bigradius");
    $(".pokename").html("Name : "+name);
    $(".poketype").html( "Type : "+type);
}
function replaceErrors(errornumb,errorname) {
    $(".errornumb").html(errornumb)
    $(".errorname").html(errorname)
}
$("form[name=form]").submit(function () {
    var pokemon = $(this).find(':text[name="pokemon"]').val();
    if (pokemon < 1 || pokemon > 151) {
        replaceErrors(pokemon + ' is not a valid number',"")
        return false
    }
    pokemon = pokemon.substr(0, 1).toUpperCase() + pokemon.substr(1, pokemon.length);
    $.getJSON("pokemons.json", function (data) {
        for (var i in data) {
            if (data[i].name === pokemon) {
                lowercasepokemon = pokemon.toLowerCase();
                type = data[i].type;
                replaceWith(lowercasepokemon, type)
                replaceErrors("","")
                return false
            } else if (i === pokemon) {
                namel = data[i].name;
                type = data[i].type;
                lowercasepokemon = namel.toLowerCase();
                replaceWith(lowercasepokemon, type)
                replaceErrors("","")
                return false
            }
            else{
                replaceErrors("",pokemon+" is not a valid name")
            }
        };
    })
    return false;
})