$("#btadd").click(() => {
  let newValue = $("#addNewItem").val();
  if (!newValue == "") {
    $("#addNewItem").focus();
    $(`<li value="${newValue}" class="list-item"><button class="removeitem">-</button   >${newValue}</li>`).appendTo(".list_group");
    $(".text_danger").remove();
  } else {
    $("#addNewItem").focus();
    $(".text_danger").remove();
    $("#btadd").after('<span class="text_danger">no value</span>');
  }
  $("#addNewItem").val("");
});
$(document).on('click','.removeitem',function(){
    $(this).parent().remove();
    $(".text_danger").remove();
});






  


