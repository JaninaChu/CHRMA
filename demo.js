window.onscroll = function(){
    var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    var a = $().getId('h_top');
    if(scrollTop >= 200){  
        a.css('display', 'block');
    }else{
        a.css('display', 'none');
    };

    // alert(scrollTop);
};