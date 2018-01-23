$.ajax({
    url: "pokemons.json",
    type:"get",
    dataType:"json",
    success : function(data){
        console.log(data)
    },
    error : function(){
        alert('oops');
    }}
)