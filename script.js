$(document).ready(function() {

    //Search Bar

    var $search = $("input[name='q']");

    $("span[name='yt']").click(function() {
        var curr = $search.val();
        $search.val(curr + " site:www.reddit.com ");
        $search.focus().setCursorPosition(curr.length);
    });

    $("span[name='sr']").click(function() {
        document.getElementById("searchbar").setAttribute("action", "https://youtube.com/results");
    });

    $("span[name='a']").click(function() {
        var curr = $search.val();
        $search.val(curr + " site:www.wikipedia.com");
        $search.focus().setCursorPosition(curr.length);
    });

    $("span[name='w']").click(function() {
        var curr = $search.val();
        $search.val(curr + " site:wiki.archlinux.org");
        $search.focus().setCursorPosition(curr.length);
    });

    $("span[name='f']").click(function() {
        var curr = $search.val();
        $search.val(curr + " site:www.stackoverflow.com");
        $search.focus().setCursorPosition(curr.length);
    });

    $("span[name='opend']").click(function() {
        var curr = $search.val();
        $search.val(curr + " intitle:\"index of\" -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml) -inurl:(hypem|unknownsecret|sirens|writeups|trimediacentral|articlescentral|listen77|mp3raid|mp3toss|mp3drug|theindexof|index_of|wallywashis|indexofmp3)");
        $search.focus().setCursorPosition(curr.length);
    });

    $("span[name='lostwoods']").click(function() {
        document.getElementById("stylesheet").setAttribute("href", "lostwoods.css");
    });
    $("span[name='anime']").click(function() {
        document.getElementById("stylesheet").setAttribute("href", "anime.css");
    });
    $("span[name='simple']").click(function() {
        document.getElementById("stylesheet").setAttribute("href", "simple.css");
    });
    $("span[name='cute']").click(function() {
        document.getElementById("stylesheet").setAttribute("href", "botw1.css");
    });
    $("span[name='botw']").click(function() {
        document.getElementById("stylesheet").setAttribute("href", "botw2.css");
    });

   //Tabs

    $(".stripe").mouseenter(function() {
        $(this).stop().animate({
            width: '100vw'
        });
        $(this).find(".content").stop().fadeIn().children().show();
    });

    $(".stripe").mouseleave(function() {
        $(this).stop().animate({
            width: '40px'
        });
        $(this).find(".content").stop().fadeOut();
    });

});

$.fn.setCursorPosition = function(pos) {
  this.each(function(index, elem) {
    if (elem.setSelectionRange) {
      elem.setSelectionRange(pos, pos);
    } else if (elem.createTextRange) {
      var range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  });
  return this;
};
