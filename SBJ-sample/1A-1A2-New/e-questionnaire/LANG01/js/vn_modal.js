function VSIC_open(id) {
    var t_id = $('#'+id).attr('tag_id');
    $('#vsic_ok').attr('tag_id', t_id);
    $('#overlay, #modalWindowVSIC').fadeIn();
    VSIC_set();
    locateCenter();
    $(window).resize(locateCenter);
}

function VSIC_close(status,no) {
    if (status == "ok") {
        var wk_id = $('#vsic_ok').attr('tag_id');
        $("#" + wk_id).val(SelectCode);
        if (no=="1A"){
            F1A_Prod_Copy(wk_id);
        }
    }
    $('#overlay, #modalWindowVSIC').fadeOut();
}

function locateCenter() {
    let w = $(window).width();
    let h = $(window).height();

    let cw = $('#modalWindowVSIC').outerWidth();
    let ch = $('#modalWindowVSIC').outerHeight();

    $('#modalWindowVSIC').css({
        'left': ((w - cw) / 2) + 'px',
        'top': ((h - ch) / 2) + 'px'
    });
}

function VSIC_set() {
    var Wrk_element = document.getElementById("SelLvl01");
    for (cntI = Wrk_element.length - 1; cntI >= 0; cntI--) {
        Wrk_element.remove(cntI);
    }

    let op = document.createElement("option");
    for (cntI = 0; cntI <= VSICConstant['VSIC'].length - 1; cntI++) {
        let op = document.createElement("option");
        op.value = VSICConstant['VSIC'][cntI]['Level01Code'];
        op.text = VSICConstant['VSIC'][cntI]['Level01Name'];
        document.getElementById("SelLvl01").appendChild(op);
    }
    document.getElementById("SelLvl01").options[0].selected = true;
    sel_Level01();
}
function sel_Level01() {
    document.getElementById("SelLvl02").disabled = false;
    // Clear list
    var Wrk_element = document.getElementById("SelLvl02");
    for (cntI = Wrk_element.length - 1; cntI >= 0; cntI--) {
        Wrk_element.remove(cntI);
    }
    //Set List
    let op = document.createElement("option");
    var Wrk_Level01_Index = document.getElementById("SelLvl01").selectedIndex;
    for (cntI = 0; cntI <= VSICConstant['VSIC'][Wrk_Level01_Index]['Level02'].length - 1; cntI++) {
        let op = document.createElement("option");
        op.value = VSICConstant['VSIC'][Wrk_Level01_Index]['Level02'][cntI]['Level02Code'];
        op.text = VSICConstant['VSIC'][Wrk_Level01_Index]['Level02'][cntI]['Level02Name'];
        document.getElementById("SelLvl02").appendChild(op);
    }
    document.getElementById("SelLvl02").options[0].selected = true;
    if (VSICConstant['VSIC'][Wrk_Level01_Index]['Level02'].length == 1) {
        document.getElementById("SelLvl02").disabled = true;
    }
    sel_Level02();
}

function sel_Level02() {
    document.getElementById("SelLvl03").disabled = false;
    // Clear list
    var Wrk_element = document.getElementById("SelLvl03");
    for (cntI = Wrk_element.length - 1; cntI >= 0; cntI--) {
        Wrk_element.remove(cntI);
    }
    //Set list
    let op = document.createElement("option");
    Wrk_Level01_Index = document.getElementById("SelLvl01").selectedIndex;
    Wrk_Level02_Index = document.getElementById("SelLvl02").selectedIndex;
    for (cntI = 0; cntI <= VSICConstant['VSIC'][Wrk_Level01_Index]['Level02'][Wrk_Level02_Index]['Level03'].length - 1; cntI++) {
        let op = document.createElement("option");
        op.value = VSICConstant['VSIC'][Wrk_Level01_Index]['Level02'][Wrk_Level02_Index]['Level03'][cntI]['Level03Code'];
        op.text = VSICConstant['VSIC'][Wrk_Level01_Index]['Level02'][Wrk_Level02_Index]['Level03'][cntI]['Level03Name'];
        document.getElementById("SelLvl03").appendChild(op);
    }
    document.getElementById("SelLvl03").options[0].selected = true;
    if (VSICConstant['VSIC'][Wrk_Level01_Index]['Level02'][Wrk_Level02_Index]['Level03'].length == 1) {
        document.getElementById("SelLvl03").disabled = true;
    }
    sel_Level03();
}

function sel_Level03() {
    document.getElementById("SelLvl04").disabled = false;
    //Clear list
    var Wrk_element = document.getElementById("SelLvl04");
    for (cntI = Wrk_element.length - 1; cntI >= 0; cntI--) {
        Wrk_element.remove(cntI);
    }
    //Set List
    let op = document.createElement("option");
    Wrk_Level01_Index = document.getElementById("SelLvl01").selectedIndex;
    Wrk_Level02_Index = document.getElementById("SelLvl02").selectedIndex;
    Wrk_Level03_Index = document.getElementById("SelLvl03").selectedIndex;
    for (cntI = 0; cntI <= VSICConstant['VSIC'][Wrk_Level01_Index]['Level02'][Wrk_Level02_Index]['Level03'][Wrk_Level03_Index]['Level04'].length - 1; cntI++) {
        let op = document.createElement("option");
        op.value = VSICConstant['VSIC'][Wrk_Level01_Index]['Level02'][Wrk_Level02_Index]['Level03'][Wrk_Level03_Index]['Level04'][cntI]['Level04Code'];
        op.text = VSICConstant['VSIC'][Wrk_Level01_Index]['Level02'][Wrk_Level02_Index]['Level03'][Wrk_Level03_Index]['Level04'][cntI]['Level04Name'];
        document.getElementById("SelLvl04").appendChild(op);
    }
    document.getElementById("SelLvl04").options[0].selected = true;
    if (VSICConstant['VSIC'][Wrk_Level01_Index]['Level02'][Wrk_Level02_Index]['Level03'][Wrk_Level03_Index]['Level04'].length == 1) {
        document.getElementById("SelLvl04").disabled = true;
    }
    sel_Level04();
}

function sel_Level04() {
    document.getElementById("SelLvl05").disabled = false;
    //Clear List
    var Wrk_element = document.getElementById("SelLvl05");
    for (cntI = Wrk_element.length - 1; cntI >= 0; cntI--) {
        Wrk_element.remove(cntI);
    }
    //Set Lisat
    let op = document.createElement("option");
    Wrk_Level01_Index = document.getElementById("SelLvl01").selectedIndex;
    Wrk_Level02_Index = document.getElementById("SelLvl02").selectedIndex;
    Wrk_Level03_Index = document.getElementById("SelLvl03").selectedIndex;
    Wrk_Level04_Index = document.getElementById("SelLvl04").selectedIndex;
    for (cntI = 0; cntI <= VSICConstant['VSIC'][Wrk_Level01_Index]['Level02'][Wrk_Level02_Index]['Level03'][Wrk_Level03_Index]['Level04'][Wrk_Level04_Index]['Level05'].length - 1; cntI++) {
        let op = document.createElement("option");
        op.value = VSICConstant['VSIC'][Wrk_Level01_Index]['Level02'][Wrk_Level02_Index]['Level03'][Wrk_Level03_Index]['Level04'][Wrk_Level04_Index]['Level05'][cntI]['Level05Code'];
        op.text = VSICConstant['VSIC'][Wrk_Level01_Index]['Level02'][Wrk_Level02_Index]['Level03'][Wrk_Level03_Index]['Level04'][Wrk_Level04_Index]['Level05'][cntI]['Level05Name'];
        document.getElementById("SelLvl05").appendChild(op);
    }
    document.getElementById("SelLvl05").options[0].selected = true;
    if (VSICConstant['VSIC'][Wrk_Level01_Index]['Level02'][Wrk_Level02_Index]['Level03'][Wrk_Level03_Index]['Level04'][Wrk_Level04_Index]['Level05'].length == 1) {
        document.getElementById("SelLvl05").disabled = true;
    }
    Set_VSIC();
}

function Set_VSIC() {
    var Wrk_Level05_Index = document.getElementById("SelLvl05").selectedIndex;
    //    SelectCode = VSICConstant['VSIC'][Wrk_Level01_Index]['Level01Code'];
    //    SelectCode = SelectCode + " " + VSICConstant['VSIC'][Wrk_Level01_Index]['Level02'][Wrk_Level02_Index]['Level02Code'];;
    //    SelectCode = SelectCode + " " + VSICConstant['VSIC'][Wrk_Level01_Index]['Level02'][Wrk_Level02_Index]['Level03'][Wrk_Level03_Index]['Level03Code'];;
    //    SelectCode = SelectCode + " " + VSICConstant['VSIC'][Wrk_Level01_Index]['Level02'][Wrk_Level02_Index]['Level03'][Wrk_Level03_Index]['Level04'][Wrk_Level04_Index]['Level04Code'];;
    SelectCode = VSICConstant['VSIC'][Wrk_Level01_Index]['Level02'][Wrk_Level02_Index]['Level03'][Wrk_Level03_Index]['Level04'][Wrk_Level04_Index]['Level05'][Wrk_Level05_Index]['Level05Code'];;
    $("#VSIC_code").text(SelectCode);
}