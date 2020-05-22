function set_Province(no, id) {
    // Set the Province
    if (no == "0") {
        el_prov_id = "Province-" + id;
    } else {
        el_prov_id = no + "-Province-" + id;
    }
    let op = document.createElement("option");
    for (cntI = 0; cntI < AreaConstant['Province'].length; cntI++) {
        let op = document.createElement("option");
        op.value = AreaConstant['Province'][cntI]['ProvinceCode'];
        op.text = AreaConstant['Province'][cntI]['ProvinceName'];
        document.getElementById(el_prov_id).appendChild(op);
    }
}

function set_District(no, id, cmm) {
    // Clear District list
    if (no == "0") {
        el_prov_id = "Province-" + id;
        el_dist_id = "District-" + id;
        el_comm_id = "Commune-" + id;
    } else {
        el_prov_id = no + "-Province-" + id;
        el_dist_id = no + "-District-" + id;
        el_comm_id = no + "-Commune-" + id;
    }
    while (document.getElementById(el_dist_id).options.length > 0) {
        document.getElementById(el_dist_id).removeChild(document.getElementById(el_dist_id).firstChild);
    }
    document.getElementById(el_dist_id).options[0] = new Option('-- Select District --', '');
    // Clear Commune list
    if (cmm == "cmm") {
        while (document.getElementById(el_comm_id).options.length > 0) {
            document.getElementById(el_comm_id).removeChild(document.getElementById(el_comm_id).firstChild);
        }
        document.getElementById(el_comm_id).options[0] = new Option('-- Select Commune --', '');
    }
    // Set the District of the selected Province
    Sel_Index = document.getElementById(el_prov_id).selectedIndex;
    Wrk_Province_Index = Sel_Index - 1;
    if (Sel_Index != 0) {
        let op = document.createElement("option");
        for (cntI = 0; cntI < AreaConstant['Province'][Wrk_Province_Index]['District'].length; cntI++) {
            let op = document.createElement("option");
            op.value = AreaConstant['Province'][Wrk_Province_Index]['District'][cntI]['DistrictCode'];
            op.text = AreaConstant['Province'][Wrk_Province_Index]['District'][cntI]['DistrictName'];
            document.getElementById(el_dist_id).appendChild(op);
        }
    }
}

function set_Commune(no, id) {
    // Clear Commune list
    if (no == "0") {
        el_prov_id = "Province-" + id;
        el_dist_id = "District-" + id;
        el_comm_id = "Commune-" + id;
    } else {
        el_prov_id = no + "-Province-" + id;
        el_dist_id = no + "-District-" + id;
        el_comm_id = no + "-Commune-" + id;
    }
    while (document.getElementById(el_comm_id).options.length > 0) {
        document.getElementById(el_comm_id).removeChild(document.getElementById(el_comm_id).firstChild);
    }
    document.getElementById(el_comm_id).options[0] = new Option('-- Select Commune --', '');
    // Set the Commune of the selected District
    if (document.getElementById(el_dist_id).selectedIndex != 0) {
        let op = document.createElement("option");
        Wrk_Province_Index = document.getElementById(el_prov_id).selectedIndex - 1;
        Wrk_District_Index = document.getElementById(el_dist_id).selectedIndex - 1;
        for (cntI = 0; cntI < AreaConstant['Province'][Wrk_Province_Index]['District'][Wrk_District_Index]['Commune'].length; cntI++) {
            let op = document.createElement("option");
            op.value = AreaConstant['Province'][Wrk_Province_Index]['District'][Wrk_District_Index]['Commune'][cntI]['CommuneCode'];
            op.text = AreaConstant['Province'][Wrk_Province_Index]['District'][Wrk_District_Index]['Commune'][cntI]['CommuneName'];
            document.getElementById(el_comm_id).appendChild(op);
        }
    }
}