var indice=0;

    $(".paginacion li").eq(indice).css("background-color","green");

    $(".paginacion li").click(function(){
        indice=$(this).index();
        $(".paginacion li").css("background-color","#224870");
        $(this).css("background-color","green");
        $(".slide").hide();
        $(".slide").eq(indice).fadeIn();
    });

    setInterval(function(){
        indice++;
        if(indice>2){
            indice=0;
        }
        $(".slide").hide();
        $(".slide").eq(indice).fadeIn();
        $(".paginacion li").css("background-color","#224870");
        $(".paginacion li").eq(indice).css("background-color","green");
    },7000);

    $(".derecha").click(function(){
        indice++;
        if(indice>2){
            indice=0;
        }
        $(".slide").hide();
        $(".slide").eq(indice).fadeIn();
        $(".paginacion li").css("background-color","#224870");
        $(".paginacion li").eq(indice).css("background-color","green");
    });

    $(".izquierda").click(function(){
        indice--;
        if(indice<0){
            indice=2;
        }
        $(".slide").hide();
        $(".slide").eq(indice).fadeIn();
        $(".paginacion li").css("background-color","#224870");
        $(".paginacion li").eq(indice).css("background-color","green");
    });