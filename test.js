var $ = function(_this){
    return new Base(_this);
}
function Base(_this){
    //創建一個數組，來保存獲取的節點和節點數組
    this.elements=[];
    if(_this != undefined) {
        this.elements[0] = _this;
    }
  }
Base.prototype.click = function(fn){
    for(var i=0;i<this.elements.length;i++){
        this.elements[i].onclick = fn;
    }
    return this;
}
Base.prototype.getClass = function(className ,idName){
    var node = null;
    if(arguments.length == 2){
        node = document.getElementById(idName);
    }else{
        node = document;
    }
    var all = node.getElementsByTagName('*');
    for(var i=0;i<all.length;i++){
        if(all[i].className == className){
            this.elements.push(all[i]);
        } 
    }
    return this;
}
Base.prototype.css = function(attr,value){
    for(var i=0;i<this.elements.length;i++){
        if(arguments.length == 1){
            return getStyle(this.elements[i], attr) + 'px';
        }
        this.elements[i].style[attr] = value;
    }
    return this
}
Base.prototype.getId = function(id){
    this.elements.push(document.getElementById(id));
    return this;
}



window.onload = function(){
    $().getClass('a').click(function() {
        $(this).css('background','#000000');
        $().getClass('b').css('background','#ffffff');
        $().getClass('c').css('background','#ffffff');
        $().getClass('d').css('background','#ffffff');
        $().getId('class_detail').css('display','block');
        $().getId('class_detail2').css('display','none');
        $().getId('class_detail3').css('display','none');
        $().getId('class_detail4').css('display','none');
    });
    $().getClass('b').click(function() {
        $(this).css('background','#000000');
        $().getClass('a').css('background','#ffffff');
        $().getClass('c').css('background','#ffffff');
        $().getClass('d').css('background','#ffffff');
        $().getId('class_detail2').css('display','block');
        $().getId('class_detail').css('display','none');
        $().getId('class_detail3').css('display','none');
        $().getId('class_detail4').css('display','none');
    });
    $().getClass('c').click(function() {
        $(this).css('background','#000000');
        $().getClass('b').css('background','#ffffff');
        $().getClass('a').css('background','#ffffff');
        $().getClass('d').css('background','#ffffff');
        $().getId('class_detail3').css('display','block');
        $().getId('class_detail').css('display','none');
        $().getId('class_detail2').css('display','none');
        $().getId('class_detail4').css('display','none');
    });
    $().getClass('d').click(function() {
        $(this).css('background','#000000');
        $().getClass('b').css('background','#ffffff');
        $().getClass('c').css('background','#ffffff');
        $().getClass('a').css('background','#ffffff');
        $().getId('class_detail4').css('display','block');
        $().getId('class_detail').css('display','none');
        $().getId('class_detail3').css('display','none');
        $().getId('class_detail2').css('display','none');
    });
}
