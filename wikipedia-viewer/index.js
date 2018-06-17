$(document).ready(function () {
    $("form").submit(function (event) {
        event.preventDefault();
        var searchTag = $("input").val();
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" + encodeURI(searchTag) + "&callback=?";
        var options = {
            action: "opensearch",
            format: "json",
            search: searchTag
        };
        function showArticle(data) {
            var title = data[1];
            var article = data[2];
            var link = data[3];
            var statusHTML = '<div id = "articles">';
            for (let i = 0; i < data[1].length; i++) {
                statusHTML += '<a target = "_blank" href = "' + link[i] + '">';
                statusHTML += '<h3>' + title[i] + '</h3><p>' + article[i] + '</p></a>';
                document.getElementById('output').innerHTML = statusHTML;
            }
            statusHTML += "</div>";
        }
        $.getJSON(url, options, showArticle);
    });


});