(function(){
    if (window.myBookmarklet !== undefined){
        myBookmarklet();
    }
    else {
        document.body.appendChild(document.createElement('script')).
        src='https://10.10.10.91:443/static/js/bookmarklet.js?r='+Math.floor(Math.random()*99999999999999999999);
    }
})();
