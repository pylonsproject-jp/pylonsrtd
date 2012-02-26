$(document).ready(function() {
    var top = $('div.related li:last a').get(0).href;
    top = top.replace(/#.*/, '').replace(/\/index\.html$/, '/');

    var url = document.URL.replace(/#.*/, '');
    var rel = url.substring(top.length);

    var base = $('div.banner a:first').attr('href');

    $('a.headerlink').each(function() {
            var hash = $(this).attr('href');
            var a = $('<a />');
            a.attr('href', base + rel + hash);
            a.attr('class', 'headerlink');
            a.attr('title', '原文へのリンク');
            a.append('(原文)');
            $(this).after(a);
        })
});
