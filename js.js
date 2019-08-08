function srh() {
    var string = document.getElementById("ipt").value;
    /*var url = "https://www.coolapk.com/search?q=" + string;*/
    var url = "https://www.baidu.com/#ie=utf-8&wd=" + string;
    window.location.href=url;
}

function key() {
    if (event.keyCode == 13){
        srh()
    }
}
