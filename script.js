$.ajax({
    url: "pokemons.json",
    type: "get",
    dataType: "json",
    data: "data",
    success: "success"
})
function replaceWith(name, type) {
    $(".blackborder").replaceWith("<img src='http://img.pokemondb.net/artwork/" + name + ".jpg'>");
    $("img").addClass("blackborder");
    $("img").addClass("bigradius");
    $(".type").html(name + type);
}
function isValidPokemon(name) {
    $.getJSON("pokemons.json", function (data) {
        for (var i in data) {
            if (data[i].name === name) {
                return name
            } 
        }
    })
}
var noice = isValidPokemon("Pikachu");
console.log(noice)
$("form[name=form]").submit(function () {
    var pokemon = $(this).find(':text[name="pokemon"]').val();
    if (pokemon < 1 || pokemon > 151) {
        $(".error").html(pokemon + " is not a valid number");
    }
    $.getJSON("pokemons.json", function (data) {
        for (var i in data) {
            if (data[i].name === pokemon) {
                lowercasepokemon = pokemon.toLowerCase();
                type = data[i].type;
                replaceWith(lowercasepokemon, type)
                $(".error").html("");
            } else if (i === pokemon) {
                namel = data[i].name;
                type = data[i].type;
                lowercasepokemon = namel.toLowerCase();
                replaceWith(lowercasepokemon, type)
                $(".error").html("");
            }
        };
    })
    return false;
})