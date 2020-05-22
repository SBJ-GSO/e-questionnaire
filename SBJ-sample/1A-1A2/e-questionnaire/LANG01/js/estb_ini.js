/*!
* Establishment add v1.0
*
* Nstac Sample
* Date: Jan 23 2020
*/

function estb_init(estb_max, estb_prev, prov) {
    estb_clear(estb_max);
    $("#estb_num_total_h").text(estb_max);
    $("#estb_num_total_f").text(estb_max);
    var data = $("#estb_temp");
    if (estb_max < estb_prev){
        var loop_cnt = estb_prev;
    }
    else {
        var loop_cnt = estb_max;
    }
    for (var i = 0; i < loop_cnt; i++) {
        var wk_cnt = i + 1;
        var data_wrk = $(data).clone().attr('id', wk_cnt + "-estb_view");
        append_quest(wk_cnt, data_wrk);
        if (prov !== "no") {
            set_Province(wk_cnt, prov);
        }
    }
}

function estb_clear(estb_cnt) {
    for (var key in strdata_array) {
        var est = key.split('-', 2);
        if (est[0] == "Es") {
            if (est[1] > estb_cnt) {
                delete strdata_array[key];
            }
        }
    }
}

function append_quest(wk_cnt, data_ins) {
    $(data_ins).find('label').each(function () {
        if ($(this).attr('for')) {
            var id_c = wk_cnt + '-' + $(this).attr('for');
            $(this).attr('for', id_c);
        }
    })
    $(data_ins).find('input').each(function () {
        var id_c = wk_cnt + '-' + $(this).attr('id');
        var name_c = "Es-" + wk_cnt + '-' + $(this).attr('name');
        if ($(this).attr('id') != "taxcode1") {
            $(this).attr('name', name_c);
        }
        $(this).attr('id', id_c);
    })
    $(data_ins).find('select').each(function () {
        var id_c = wk_cnt + '-' + $(this).attr('id');
        var name_c = "Es-" + wk_cnt + '-' + $(this).attr('name');
        $(this).attr('id', id_c);
        $(this).attr('name', name_c);
    })
    $(data_ins).find('button').each(function () {
        var id = $(this).attr('id');
        if (id == "vsic_btn") {
            var id_c = wk_cnt + '-' + id;
            var t_id = wk_cnt + '-' + $(this).attr('tag_id');
            $(this).attr('id', id_c);
            $(this).attr('tag_id', t_id);
        }
    })
    $("#estb-main").append(data_ins);
}

function estb_pager(act, chk, page) {
    if (chk) {
        if (!(checkController(document.forms[0]))) {
            return;
        }
    }
    switch (act) {
        case "first":
            $("#" + estb_page + "-estb_view").css("display", "none");
            $("#1-estb_view").css("display", "block");
            estb_page = 1;
            $("#estb_num_h").text(estb_page);
            $("#estb_num_f").text(estb_page);
            break;
        case "next":
            if (estb_page < estb_total) {
                $("#" + estb_page + "-estb_view").css("display", "none");
                estb_page = estb_page + 1;
                $("#" + estb_page + "-estb_view").css("display", "block");
                $("#estb_num_h").text(estb_page);
                $("#estb_num_f").text(estb_page);
            }
            break;
        case "prev":
            if (estb_page > 1) {
                $("#" + estb_page + "-estb_view").css("display", "none");
                estb_page = estb_page - 1;
                $("#" + estb_page + "-estb_view").css("display", "block");
                $("#estb_num_h").text(estb_page);
                $("#estb_num_f").text(estb_page);
            }
            break;
        case "last":
            $("#" + estb_page + "-estb_view").css("display", "none");
            $("#" + estb_total + "-estb_view").css("display", "block");
            estb_page = estb_total;
            $("#estb_num_h").text(estb_page);
            $("#estb_num_f").text(estb_page);
            break;
        case "Page":
            $("#" + estb_page + "-estb_view").css("display", "none");
            $("#" + page + "-estb_view").css("display", "block");
            estb_page = page;
            $("#estb_num_h").text(estb_page);
            $("#estb_num_f").text(estb_page);
            break;
    }
}