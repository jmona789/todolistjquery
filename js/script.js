$(document).ready(function() {
  $(document).on("click", ".btn-danger", function(){
    $(this).parent().parent().remove();
  });
  $(".btn-primary").on("click", function(e){
    e.preventDefault();
    var newItem = $("#newItem").val().trim();
    var newRow = $("<tr>");
    var checkbox = $("<input>").attr("type", "checkbox").attr("class", "checkboxes").attr("data-state", "not-checked");
    var deleteBtn = $("<button>").addClass("btn btn-danger btn-xs").append("Delete");
    var itemTd = $("<td>").addClass("word-td").append(newItem).append(deleteBtn).prepend(checkbox);
    newRow.append(itemTd);
    $("#listTable").append(newRow);
    $("#newItem").val("").focus();
  });
  $(document).on("click", ".checkboxes", function(){
    var dataState = $(this).attr("data-state");
    if(dataState === "not-checked"){
    $(this).hide(500);
    $(this).parent().attr("class", "str");
    $(this).attr("data-state", "checked");
    }
  });
});