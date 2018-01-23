$.ajax({
    url: "pokemons.json",
    type: "get",
    dataType: "json",
    success: function (data) {
        console.log(data);
        for (var i in data) {
            console.log(i)
        }
    },
    error: function () {
        alert('oops');
    }
}
)
window.onload = function(){ 
    $("form[name=form]").submit(function () {
        var pokemon = $(this).find(':text[name="pokemon"]').val();
    console.log(pokemon);
    return false;
    })
}