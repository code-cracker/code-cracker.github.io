$(function(){
  $('#search').click(function(){
    var term = $("#searchTerm").val();
    window.open("https://www.google.com.br/search?q=" + term + "+site%3Acode-cracker.github.io");
  });
});
