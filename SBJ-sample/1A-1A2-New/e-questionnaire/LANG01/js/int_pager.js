function INT_pager(mode, page_no) {
  switch (mode) {
    case "first":
      $("#INT_page_" + internal_page).css("display", "none");
      $("#INT_page_1").css("display", "block");
      internal_page = 1;
      $("#INT_btn_1st").prop("disabled", true);
      $("#INT_btn_f_1st").prop("disabled", true);
      $("#INT_btn_prev").prop("disabled", true);
      $("#INT_btn_f_prev").prop("disabled", true);
      $("#INT_btn_next").prop("disabled", false);
      $("#INT_btn_f_next").prop("disabled", false);
      $("#INT_btn_last").prop("disabled", false);
      $("#INT_btn_f_last").prop("disabled", false);
      break;
    case "next":
      $("#INT_page_" + internal_page).css("display", "none");
      internal_page = internal_page + 1;
      $("#INT_page_" + internal_page).css("display", "block");
      $("#INT_btn_1st").prop("disabled", false);
      $("#INT_btn_f_1st").prop("disabled", false);
      $("#INT_btn_prev").prop("disabled", false);
      $("#INT_btn_f_prev").prop("disabled", false);
      if (internal_page == internal_page_max) {
        $("#INT_btn_next").prop("disabled", true);
        $("#INT_btn_f_next").prop("disabled", true);
        $("#INT_btn_last").prop("disabled", true);
        $("#INT_btn_f_last").prop("disabled", true);
      }
      break;
    case "prev":
      $("#INT_page_" + internal_page).css("display", "none");
      internal_page = internal_page - 1;
      $("#INT_page_" + internal_page).css("display", "block");
      $("#INT_btn_next").prop("disabled", false);
      $("#INT_btn_f_next").prop("disabled", false);
      $("#INT_btn_last").prop("disabled", false);
      $("#INT_btn_f_last").prop("disabled", false);
      if (internal_page == 1) {
        $("#INT_btn_1st").prop("disabled", true);
        $("#INT_btn_f_1st").prop("disabled", true);
        $("#INT_btn_prev").prop("disabled", true);
        $("#INT_btn_f_prev").prop("disabled", true);
      }
      break;
    case "last":
      $("#INT_page_" + internal_page).css("display", "none");
      internal_page = internal_page_max;
      $("#INT_page_" + internal_page).css("display", "block");
      $("#INT_btn_1st").prop("disabled", false);
      $("#INT_btn_f_1st").prop("disabled", false);
      $("#INT_btn_prev").prop("disabled", false);
      $("#INT_btn_f_prev").prop("disabled", false);
      $("#INT_btn_next").prop("disabled", true);
      $("#INT_btn_f_next").prop("disabled", true);
      $("#INT_btn_last").prop("disabled", true);
      $("#INT_btn_f_last").prop("disabled", true);
      break;
    case "Page":
      $("#INT_page_" + internal_page).css("display", "none");
      internal_page = page_no;
      $("#INT_page_" + internal_page).css("display", "block");
      if (internal_page == 1) {
        $("#INT_btn_next").prop("disabled", false);
        $("#INT_btn_f_next").prop("disabled", false);
        $("#INT_btn_last").prop("disabled", false);
        $("#INT_btn_f_last").prop("disabled", false);
        $("#INT_btn_1st").prop("disabled", true);
        $("#INT_btn_f_1st").prop("disabled", true);
        $("#INT_btn_prev").prop("disabled", true);
        $("#INT_btn_f_prev").prop("disabled", true);
      }
      else {
        if (internal_page == internal_page_max) {
          $("#INT_btn_next").prop("disabled", true);
          $("#INT_btn_f_next").prop("disabled", true);
          $("#INT_btn_last").prop("disabled", true);
          $("#INT_btn_f_last").prop("disabled", true);
          $("#INT_btn_1st").prop("disabled", false);
          $("#INT_btn_f_1st").prop("disabled", false);
          $("#INT_btn_prev").prop("disabled", false);
          $("#INT_btn_f_prev").prop("disabled", false);
        }
        else {
          $("#INT_btn_next").prop("disabled", false);
          $("#INT_btn_f_next").prop("disabled", false);
          $("#INT_btn_last").prop("disabled", false);
          $("#INT_btn_f_last").prop("disabled", false);
          $("#INT_btn_1st").prop("disabled", false);
          $("#INT_btn_f_1st").prop("disabled", false);
          $("#INT_btn_prev").prop("disabled", false);
          $("#INT_btn_f_prev").prop("disabled", false);
        }
      }
      break;

  }
}
