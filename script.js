 jQuery(function($){
    $('.corp').append('<div class="overlay">').append('<div class="info">');

    var parties =  ['epaule','coude','poignet','hanche','genou','cheville'];

    //div info qui suit la sourie
    $(document).mousemove(function(e){

        $('.corp .info').css({
            top:e.pageY-$('.corp .info').height()-5,
            left:e.pageX-$('.corp .info').width()/2-10
        });
    });

    // Detection de l'image à afficher et affichage
    $('.corp area').mouseover(function(){
        var index = $(this).index();
        var left = -index * 158 -158;

        //je charge l'info de la partie a afficher dans la div info
        $('.corp .info').html(parties[index]);
        $('#'+parties[index]).css({
            display: "inline-block"
        });
        $('.corp .overlay').css({
            backgroundPosition : left+"px 0px"
        });
    });
    //remplacement de l'image par la normal si pas de souris sur un repère
    $('.corp').mouseout(function(){
        //suppression bulle info 
        $('.corp .info').html('');
        $('.over').css({
            display: "none"
        });
        $('.corp .overlay').css({
            backgroundPosition : "158px 0px"
        });
    });
});