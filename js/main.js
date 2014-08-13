$(function() {

  // hide the story from view
  $("#story").hide();

  // ---- event handler ---- //
  $("#btn-click").click(function(e) {

    // grab the values from the input boxes, then append them to the DOM
    $(".adjective").empty().append($("input.adjective").val());
    $(".verb").empty().append($("input.verb").val());
    $(".noun").empty().append($("input.noun").val());
    $(".noun2").empty().append($("input.noun2").val());
    $(".noun3").empty().append($("input.noun3").val());
    $(".food").empty().append($("input.food").val());
    $(".thought").empty().append($("input.thought").val());

    // show the story
    $("#story").show();

    // empty the form's values
    $(':input').val('');

    // hide the questions
    $("#questions").hide();

  });

  $("#play-btn").click(function(e) {
    $("#questions").show();
    $("#story").hide();
  });


});
