$(document).ready(function (){
    ocultarCont(0);
    $("#tabs").click(function (e){
        var id = e.target.getAttribute("id")
        var i = parseInt(id.split("-")[1])
        ocultarCont(i)
        $(e.target).parent().siblings().removeClass("active")
        $(e.target).parent().addClass("active")
    })
})

function ocultarCont (j){
    var divs = $("#content").children()
    for (var i=0; i<divs.length; i++){
        if (i !== j){
            $(divs[i]).hide()
        }else{
            $(divs[i]).show()
        }
    }
}