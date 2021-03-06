﻿/*
 * Common Functions (HTML ver.) chosahyo.js
 *
 * Ver.2.00 2017/12/20
 *
 */

/**
 * Reserved words and statics
 */
var gl_type = {
	text: 'text',
	password: 'password',
	file: 'file',
	textarea: 'textarea',
	radio: 'radio',
	checkbox: 'checkbox',
	selone: 'select-one',
	selmulti: 'select-multiple',
	button: 'button',
	number: 'number',
	hidden: 'hidden'
};

/**
 * Calendar Table
 * Western Calendar:A.D.  : '4'
 */
var gengo_map_to_code = {
	'A.D.': '4'
};

/**
 * Calendar
 * '4'	:Western Calendar:A.D.
 */
var gengo_map_to_label = {
	'4': 'A.D.'
};

// Class for display error
var ERROR_CLASS = 'bgerr';
// Class for display (normal)
var NORMAL_CLASS = 'bgnml';
// Class for display warning
var WARN_CLASS = 'bgwar';

// default target page
var DefaultTarget = "";
// contact page
var InquireTarget = "WIN_D_OTOIAWASE";
// help page
var HelpTarget = "WIN_D_HELPE";


//Confirm message
var CNF_MSG_SAVE_TMP = "Are you sure you want to save your answer temporarily?";
var CNF_MSG_LOAD_TMP = "Are you sure you want to retrieve the temporarily saved answer?";
var CNF_MSG_RESET_FORM = "Are you sure you want to clear the input form?";
var CNF_MSG_PREV_PAGE = "Are you sure you want to move to the previous page?";
var CNF_MSG_NEXT_PAGE = "Are you sure you want to move to the next page?";
var CNF_MSG_SEND_KAITO = "Are you sure you want to send the answer?";
var CNF_MSG_DOWNLOAD_CHOSAHYO = "Are you sure you want to download the questionnaire?";
// Confirm message for logout
var CNF_MSG_LOGOUT = "Are you sure you want to log out? \r\n\r\n[Caution]\r\n When you leave the questionnaire input screen, the contents entered halfway will be lost.\r\n To save the entered contents, \r\n click the [Cancel] button to close the message and \r\n execute saving your answer temporarily.";
// Confirm message for displaying the survey list
var CNF_MSG_BACK_PAGE = "Are you sure you want to move to the survey list? \r\n\r\n[Caution]\r\n When you leave the questionnaire input screen, the contents entered halfway will be lost.\r\n To save the entered contents, \r\n click the [Cancel] button to close the message and \r\n execute saving your answer temporarily.";
// Error message if functions executed on other system
var ERR_MSG_ESURVEYONLY = "This function is effective only in the [government statistical online survey general overview window].";

// Error Messages(1A)
var inputCheckErrorMessage = {
	'F1A_1_1': '1. Name of enterprise is required',
	'F1A_1_2': '1. Tax code is required',
	'F1A_1_3': '1. Please enter Tax code1 in numerals.',
	'F1A_1_4': '1. Tax code1 is 10 digit',
	'F1A_1_5': '1. Please enter Tax code2 in numerals.',
	'F1A_1_6': '1. Tax code2 is 3 digit',
	'F1A_2_1': '2. Provice is not selected.',
	'F1A_2_2': '2. District is not selected.',
	'F1A_2_3': '2. Commune is not selected.',
	'F1A_2_4': '2. Telephone number cannot be blank.',
	'F1A_2_5': '2. Please enter Telephone number in numerals.',
	'F1A_2_6': '2. Invalid e-mail address.',
	'F1A_3_1': '3. economic ownership is not selected.',
	'F1A_3_2': '3. Please enter Joint stock Co;Ltd Co. with state capital > 50%Cty (Central) in the range of 1 to 100.',
	'F1A_3_3': '3. Please enter Joint stock Co;Ltd Co. with state capital > 50%Cty (Local) in the range of 1 to 100.',
	'F1A_3_4': '3. Please enter Private Ltd Co; Ltd Co. with state capital ≤ 50% in the range of 1 to 100.',
	'F1A_3_5': '3.03 Please enter % central state capital + % local state capital >50%',
	'F1A_3_6': '3.03 Please enter % central state capital + % local state capital >100%',
	'F1A_3_7': '3.08 Please enter % state capital <= 50%',
	'F1A_3_8': '3.10 controlled by state cannot be blank.',
	'F1A_3_9': '3.10 % state capital cannot be blank.',
	'F1A_3_10': '3. Please enter 10 Joint stock Co. with state capital ≤ 50% in the range of 1 to 100.',
	'F1A_4_1': '4.1. Key business production activity cannot be blank.',
	'F1A_4_2': '4.1. Key business production activity code cannot be blank.',
	'F1A_4_3': '4.2. Other business production activity cannot be blank.',
	'F1A_4_4': '4.2. Other business production activity code cannot be blank.',
	'F1A_5_1': '5. Did enterprise buy/sell merchandise and services is not selected.',
	'F1A_6_1': '6. Please enter Total money > 0.',
	'F1A_7_1': '7.2  Please enter female < total.',
	'F1A_7_2': '7.3  Please enter female labour < total.',
	'F1A_7_3': '7.3  Please enter Number of employees having social insurance < total.',
	'F1A_7_4': '7.3  Please enter Number of self-employees < total.',
	'F1A_7_5': '7.3  Please enter Number of foreign employees < total.',
	'F1A_7_6': '7.3  Please enter Q7.3.03 have to >0 and Q7.3.04=0.',
	'F1A_7_7': '7.3  Please enter business production activity person > 0.',
	'F1A_7_8': '7.3  Please enter Sum Labour (by business production Activity) < Q7.3 (total).',
	'F1A_10_1': '10  Please enter business production activity realized > 0.',
	'F1A_10_2': '10  Please enter Sum Realized (by business production Activity) < Q10 (total).',
	// Error Messages(1A2)
	'F1A2_0_1': 'Please enter Tax code2 in numerals.',
	'F1A2_0_2': 'Tax code2 is 3 digit',
	'F1A2_1_1': '1. Name is required',
	'F1A2_1_2': '1. Provice is not selected.',
	'F1A2_1_3': '1. District is not selected.',
	'F1A2_2_1': '2. Key business production activity cannot be blank.',
	'F1A2_2_2': '2. Key business production activity code cannot be blank.',
	'F1A2_3_1': '3.  Please enter female labour < total.',
};

//var inputCheckErrorMessage = Object.assign(inputCheckErrorMessage_1A,inputCheckErrorMessage_1A2);

// ==================================================================================================== >>>
// Methods for onclick events

// Pager
function pager(iForm, iAction, iPageNum) {
	if (checkController(iForm)) {
		CmnSendPage(iForm, iAction, iPageNum);
	}
}
// Send answer
function answer(iForm, iAction) {
	if (checkController(iForm)) {
		CmnSendKaito(iForm, iAction);
	}
}
// Save answers temporarily
function saveKaitoTmp(iForm, iAction) {
	if (checkController(iForm)) {
		CmnSaveKaitoTmp(iForm, iAction);
	}
}

//==================================================================================================== >>>
// Methods for blur events

//Delete character other than numbers
//for IE
$(function () {
	$(".numberonly").on("blur", function () {
		var str = $(this).val();
		var chk = $.isNumeric(str);
		// If the input string contains other than 0-9
		if (!chk) {
			// Delete characters other than 0-9
			$(this).val(str.replace(/[^0-9.,-]+/g, ""));
		}
	});
});

// ==================================================================================================== >>>
// The Part of System Use

// Save css to global variables(NORMAL_CLASS,ERROR_CLASS)
function setBeforeClassName(iForm, target) {
	var beforClass = document.getElementsByName(target)[0].className;
	NORMAL_CLASS = beforClass.replace(/common-error-color/g, '');
	ERROR_CLASS = beforClass + ' common-error-color';
}

// Check if errors exit or not
function isError(target) {
	var beforClass = document.getElementsByName(target)[0].className;
	if (beforClass.indexOf('common-error-color') != -1) {
		return true;
	}
	return false;
}

// Single item input check
function checkController(iForm) {
	// Error message
	var messages = new Array();

	// Single item input check(1A)
	if (questionnaire_id == "1A") {
		var err_status_1A = true;
		var err_page_1A = 1;
		if (document.getElementById("1449") != undefined) {
			var target = 'F1A_1_Name_Ent';
			setBeforeClassName(iForm, target);
			CmnModClass(iForm, NORMAL_CLASS, target);
			if (!CmnInputChk(iForm, 1, target)) {
				messages.push(commonError(iForm, {
					target: target,
					errmsg: inputCheckErrorMessage['F1A_1_1'],
					values: new Array()
				}));
				err_status_1A = false;
				err_page_1A = 1;
			}
		}

		if (document.getElementById("1453") != undefined) {
			var target = 'F1A_1_TaxCode_Ent';
			setBeforeClassName(iForm, target);
			CmnModClass(iForm, NORMAL_CLASS, target);
			if (!CmnInputChk(iForm, 1, target)) {
				messages.push(commonError(iForm, {
					target: target,
					errmsg: inputCheckErrorMessage['F1A_1_2'],
					values: new Array()
				}));
				err_status_1A = false;
				err_page_1A = 1;
			}
			else if (!CmnNumChk(iForm, target)) {
				messages.push(commonError(iForm, {
					target: target,
					errmsg: inputCheckErrorMessage['F1A_1_3'],
					values: new Array()
				}));
				err_status_1A = false;
				err_page_1A = 1;
			}
			else if (!CmnLenChk(iForm, 10, 10, target)) {
				messages.push(commonError(iForm, {
					target: target,
					errmsg: inputCheckErrorMessage['F1A_1_4'],
					values: new Array()
				}));
				err_status_1A = false;
				err_page_1A = 1;
			}
		}

		if (document.getElementById("1454") != undefined) {
			var target = 'F1A_1_TaxCode_Estb';
			setBeforeClassName(iForm, target);
			CmnModClass(iForm, NORMAL_CLASS, target);
			if (!CmnNumChk(iForm, target)) {
				messages.push(commonError(iForm, {
					target: target,
					errmsg: inputCheckErrorMessage['F1A_1_5'],
					values: new Array()
				}));
				err_status_1A = false;
				err_page_1A = 1;
			}
			else if (!CmnLenChk(iForm, 0, 3, target)) {
				messages.push(commonError(iForm, {
					target: target,
					errmsg: inputCheckErrorMessage['F1A_1_6'],
					values: new Array()
				}));
				err_status_1A = false;
				err_page_1A = 1;
			}
		}

		if (document.getElementById("Province-1A") != undefined) {
			var target = 'F1A_2_Province';
			setBeforeClassName(iForm, target);
			CmnModClass(iForm, NORMAL_CLASS, target);
			if (document.getElementById("Province-1A").selectedIndex <= 0) {
				messages.push(commonError(iForm, {
					target: target,
					errmsg: inputCheckErrorMessage['F1A_2_1'],
					values: new Array()
				}));
				err_status_1A = false;
				err_page_1A = 1;
			}
		}

		if (document.getElementById("District-1A") != undefined) {
			var target = 'F1A_2_District';
			setBeforeClassName(iForm, target);
			CmnModClass(iForm, NORMAL_CLASS, target);
			if (document.getElementById("District-1A").selectedIndex <= 0) {
				messages.push(commonError(iForm, {
					target: target,
					errmsg: inputCheckErrorMessage['F1A_2_2'],
					values: new Array()
				}));
				err_status_1A = false;
				err_page_1A = 1;
			}
		}

		if (document.getElementById("Commune-1A") != undefined) {
			var target = 'F1A_2_Commune';
			setBeforeClassName(iForm, target);
			CmnModClass(iForm, NORMAL_CLASS, target);
			if (document.getElementById("Commune-1A").selectedIndex <= 0) {
				messages.push(commonError(iForm, {
					target: target,
					errmsg: inputCheckErrorMessage['F1A_2_3'],
					values: new Array()
				}));
				err_status_1A = false;
				err_page_1A = 1;
			}
		}

		if (document.getElementById("4636") != undefined) {
			var target = 'F1A_2_TelNum_Area';
			setBeforeClassName(iForm, target);
			CmnModClass(iForm, NORMAL_CLASS, target);
			if (!CmnInputChk(iForm, 1, target)) {
				messages.push(commonError(iForm, {
					target: target,
					errmsg: inputCheckErrorMessage['F1A_2_4'],
					values: new Array()
				}));
				err_status_1A = false;
				err_page_1A = 1;
			}
			else if (!CmnNumChk(iForm, target)) {
				messages.push(commonError(iForm, {
					target: target,
					errmsg: inputCheckErrorMessage['F1A_2_5'],
					values: new Array()
				}));
				err_status_1A = false;
				err_page_1A = 1;
			}
		}

		if (document.getElementById("4637") != undefined) {
			var target = 'F1A_2_TelNum_Num';
			setBeforeClassName(iForm, target);
			CmnModClass(iForm, NORMAL_CLASS, target);
			if (!CmnInputChk(iForm, 1, target)) {
				messages.push(commonError(iForm, {
					target: target,
					errmsg: inputCheckErrorMessage['F1A_2_4'],
					values: new Array()
				}));
				err_status_1A = false;
				err_page_1A = 1;
			}
			else if (!CmnNumChk(iForm, target)) {
				messages.push(commonError(iForm, {
					target: target,
					errmsg: inputCheckErrorMessage['F1A_2_5'],
					values: new Array()
				}));
				err_status_1A = false;
				err_page_1A = 1;
			}
		}

		if (document.getElementById("4640") != undefined) {
			var target = 'F1A_2_Email';
			var reg = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
			setBeforeClassName(iForm, target);
			CmnModClass(iForm, NORMAL_CLASS, target);
			if (document.getElementById("4640").value != "") {
				if (!document.getElementById("4640").value.match(reg)) {
					messages.push(commonError(iForm, {
						target: target,
						errmsg: inputCheckErrorMessage['F1A_2_6'],
						values: new Array()
					}));
					err_status_1A = false;
					err_page_1A = 1;
				}
			}
		}
		if (document.getElementById("4645") != undefined) {
			var target = 'F1A_3_Eco_Owner';
			setBeforeClassName(iForm, target);
			CmnModClass(iForm, NORMAL_CLASS, target);
			$("#4645-div").removeClass("common-error-color");
			if (!CmnInputChk(iForm, 1, target)) {
				messages.push(commonError(iForm, {
					target: target,
					errmsg: inputCheckErrorMessage['F1A_3_1'],
					values: new Array()
				}));
				err_status_1A = false;
				err_page_1A = 1;
				$("#4645-div").addClass("common-error-color");
			}
		}

		if (document.getElementById("4646") != undefined) {
			var target = 'F1A_3_Eco_Owner_03_01';
			setBeforeClassName(iForm, target);
			CmnModClass(iForm, NORMAL_CLASS, target);
			if (!CmnRangeChk(iForm, 2, 1, 100, target)) {
				messages.push(commonError(iForm, {
					target: target,
					errmsg: inputCheckErrorMessage['F1A_3_2'],
					values: new Array()
				}));
				err_status_1A = false;
				err_page_1A = 1;
			}
		}

		if (document.getElementById("4646-1") != undefined) {
			var target = 'F1A_3_Eco_Owner_03_02';
			setBeforeClassName(iForm, target);
			CmnModClass(iForm, NORMAL_CLASS, target);
			if (!CmnRangeChk(iForm, 2, 1, 100, target)) {
				messages.push(commonError(iForm, {
					target: target,
					errmsg: inputCheckErrorMessage['F1A_3_3'],
					values: new Array()
				}));
				err_status_1A = false;
				err_page_1A = 1;
			}
		}

		if (document.getElementById("4647") != undefined) {
			var target = 'F1A_3_Eco_Owner_08_01';
			setBeforeClassName(iForm, target);
			CmnModClass(iForm, NORMAL_CLASS, target);
			if (!CmnRangeChk(iForm, 2, 1, 100, target)) {
				messages.push(commonError(iForm, {
					target: target,
					errmsg: inputCheckErrorMessage['F1A_3_4'],
					values: new Array()
				}));
				err_status_1A = false;
				err_page_1A = 1;
			}
		}

		if (document.getElementById("4687") != undefined) {
			var target = 'F1A_3_Eco_Owner_10_02';
			setBeforeClassName(iForm, target);
			CmnModClass(iForm, NORMAL_CLASS, target);
			if (!CmnRangeChk(iForm, 2, 1, 100, target)) {
				messages.push(commonError(iForm, {
					target: target,
					errmsg: inputCheckErrorMessage['F1A_3_10'],
					values: new Array()
				}));
				err_status_1A = false;
				err_page_1A = 1;
			}
		}

		if (document.getElementById("F1A_4-KeyProd") != undefined) {
			var target = 'F1A_4_KeyProdcut';
			setBeforeClassName(iForm, target);
			CmnModClass(iForm, NORMAL_CLASS, target);
			if (!CmnInputChk(iForm, 1, target)) {
				messages.push(commonError(iForm, {
					target: target,
					errmsg: inputCheckErrorMessage['F1A_4_1'],
					values: new Array()
				}));
				err_status_1A = false;
				err_page_1A = 1;
			}
		}

		if (document.getElementById("F1A_4-KeyProdCd") != undefined) {
			var target = 'F1A_4_KeyProdcutCode';
			setBeforeClassName(iForm, target);
			CmnModClass(iForm, NORMAL_CLASS, target);
			if (!CmnInputChk(iForm, 1, target)) {
				messages.push(commonError(iForm, {
					target: target,
					errmsg: inputCheckErrorMessage['F1A_4_2'],
					values: new Array()
				}));
				err_status_1A = false;
				err_page_1A = 1;
			}
		}

		if (document.getElementById("4705") != undefined) {
			var target = 'F1A_5_Buy';
			setBeforeClassName(iForm, target);
			CmnModClass(iForm, NORMAL_CLASS, target);
			$("#4705-0").removeClass("common-error-color");
			if (!CmnInputChk(iForm, 1, target)) {
				messages.push(commonError(iForm, {
					target: target,
					errmsg: inputCheckErrorMessage['F1A_5_1'],
					values: new Array()
				}));
				$("#4705-0").addClass("common-error-color");
				err_status_1A = false;
				err_page_1A = 1;
			}
		}
		// Correlation check
		//Q3. Enterprise's economic ownership
		var wk_F1A_3_Eco = getFormObject(iForm).elements["F1A_3_Eco_Owner"].value;
		switch (wk_F1A_3_Eco) {
			case "03":
				var wk_central = Number(document.getElementById("4646").value);
				var wk_local = Number(document.getElementById("4646-1").value);
				var wk_capital = wk_central + wk_local;
				var target = 'F1A_3_Eco_Owner_03_01';
				setBeforeClassName(iForm, target);
				CmnModClass(iForm, NORMAL_CLASS, target);
				if (wk_capital <= 50) {
					messages.push(commonError(iForm, {
						target: target,
						errmsg: inputCheckErrorMessage['F1A_3_5'],
						values: new Array()
					}));
					err_status_1A = false;
					err_page_1A = 1;
					$("#4646-1").addClass("common-error-color");
				}
				else {
					if (wk_capital > 100) {
						messages.push(commonError(iForm, {
							target: target,
							errmsg: inputCheckErrorMessage['F1A_3_6'],
							values: new Array()
						}));
						err_status_1A = false;
						err_page_1A = 1;
						$("#4646-1").addClass("common-error-color");
					}
				}
				break;
			case "08":
				var wk_capital = Number(document.getElementById("4647").value);
				var target = 'F1A_3_Eco_Owner_08_01';
				setBeforeClassName(iForm, target);
				CmnModClass(iForm, NORMAL_CLASS, target);
				if (wk_capital > 50) {
					messages.push(commonError(iForm, {
						target: target,
						errmsg: inputCheckErrorMessage['F1A_3_7'],
						values: new Array()
					}));
					err_status_1A = false;
					err_page_1A = 1;
				}
				break;
			case "10":
				var target = 'F1A_3_Eco_Owner_10_01';
				setBeforeClassName(iForm, target);
				CmnModClass(iForm, NORMAL_CLASS, target);
				$("#4688-0").removeClass("common-error-color");
				if (!CmnInputChk(iForm, 1, target)) {
					messages.push(commonError(iForm, {
						target: target,
						errmsg: inputCheckErrorMessage['F1A_3_8'],
						values: new Array()
					}));
					err_status_1A = false;
					err_page_1A = 1;
					$("#4688-0").addClass("common-error-color");

				}
				var target = 'F1A_3_Eco_Owner_10_02';
				setBeforeClassName(iForm, target);
				CmnModClass(iForm, NORMAL_CLASS, target);
				if (!CmnInputChk(iForm, 1, target)) {
					messages.push(commonError(iForm, {
						target: target,
						errmsg: inputCheckErrorMessage['F1A_3_9'],
						values: new Array()
					}));
					err_status_1A = false;
					err_page_1A = 1;
				}
				break;

		}
		//Q4.2. Other activity code.
		for (var i = 1; i <= F1A_otherDsp_cnt; i++) {
			let wk_F1A_4_Oth = getFormObject(iForm).elements["F1A_4-otherProd_" + i].value;
			let wk_F1A_4_OthCd = getFormObject(iForm).elements["F1A_4-otherProdCd_" + i].value;
			var target = 'F1A_4_OtherProdcutCd_' + i;
			setBeforeClassName(iForm, target);
			CmnModClass(iForm, NORMAL_CLASS, target);
			if (wk_F1A_4_Oth != "") {
				if (!CmnInputChk(iForm, 1, target)) {
					messages.push(commonError(iForm, {
						target: target,
						errmsg: inputCheckErrorMessage['F1A_4_4'],
						values: new Array()
					}));
					err_status_1A = false;
					err_page_1A = 1;
				}
			}
			var target = 'F1A_4_OtherProdcut_' + i;
			setBeforeClassName(iForm, target);
			CmnModClass(iForm, NORMAL_CLASS, target);
			if (wk_F1A_4_OthCd != "") {
				if (!CmnInputChk(iForm, 1, target)) {
					messages.push(commonError(iForm, {
						target: target,
						errmsg: inputCheckErrorMessage['F1A_4_3'],
						values: new Array()
					}));
					err_status_1A = false;
					err_page_1A = 1;
				}
			}

		}

		//Q6. Total money that enterprise received from...
		var wk_F1A_5_Buy = getFormObject(iForm).elements["F1A_5_Buy"].value;
		var target = 'F1A_6_received';
		setBeforeClassName(iForm, target);
		CmnModClass(iForm, NORMAL_CLASS, target);
		$("#4709").removeClass("common-error-color");
		if (wk_F1A_5_Buy == "1") {
			var wk_F1A_6_1 = Number(document.getElementById("4707").value);
			var wk_F1A_6_2 = Number(document.getElementById("4709").value);
			if (wk_F1A_6_1 > 0 || wk_F1A_6_2 > 0) {
			}
			else {
				messages.push(commonError(iForm, {
					target: target,
					errmsg: inputCheckErrorMessage['F1A_6_1'],
					values: new Array()
				}));
				err_status_1A = false;
				err_page_1A = 1;
				$("#4709").addClass("common-error-color");
			}
		}
		//Q7.2 Labour(female).
		var wk_F1A_7_2_t = Number(document.getElementById("4713").value);
		var wk_F1A_7_2_f = Number(document.getElementById("4714").value);
		var target = 'F1A_7_Labour_2';
		setBeforeClassName(iForm, target);
		CmnModClass(iForm, NORMAL_CLASS, target);
		$("#4714").removeClass("common-error-color");
		if (wk_F1A_7_2_t < wk_F1A_7_2_f) {
			messages.push(commonError(iForm, {
				target: target,
				errmsg: inputCheckErrorMessage['F1A_7_1'],
				values: new Array()
			}));
			err_status_1A = false;
			err_page_1A = 1;
			$("#4714").addClass("common-error-color");
		}
		//Q7.3 Labour as of .
		var wk_F1A_7_3_t = Number(document.getElementById("5557").value);
		var wk_F1A_7_3_2 = Number(document.getElementById("5558").value);
		var wk_F1A_7_3_3 = Number(document.getElementById("5559").value);
		var wk_F1A_7_3_4 = Number(document.getElementById("5560").value);
		var wk_F1A_7_3_5 = Number(document.getElementById("5561").value);
		var target = 'F1A_7_3_Total_1';
		setBeforeClassName(iForm, target);
		CmnModClass(iForm, NORMAL_CLASS, target);
		$("#5558").removeClass("common-error-color");
		$("#5559").removeClass("common-error-color");
		$("#5560").removeClass("common-error-color");
		$("#5561").removeClass("common-error-color");
		if (wk_F1A_7_3_t < wk_F1A_7_3_2) {
			messages.push(commonError(iForm, {
				target: target,
				errmsg: inputCheckErrorMessage['F1A_7_2'],
				values: new Array()
			}));
			err_status_1A = false;
			err_page_1A = 1;
			$("#5558").addClass("common-error-color");
		}
		if (wk_F1A_7_3_t < wk_F1A_7_3_3) {
			messages.push(commonError(iForm, {
				target: target,
				errmsg: inputCheckErrorMessage['F1A_7_3'],
				values: new Array()
			}));
			err_status_1A = false;
			err_page_1A = 1;
			$("#5559").addClass("common-error-color");
		}
		if (wk_F1A_7_3_t < wk_F1A_7_3_4) {
			messages.push(commonError(iForm, {
				target: target,
				errmsg: inputCheckErrorMessage['F1A_7_4'],
				values: new Array()
			}));
			err_status_1A = false;
			err_page_1A = 1;
			$("#5560").addClass("common-error-color");
		}
		if (wk_F1A_7_3_t < wk_F1A_7_3_5) {
			messages.push(commonError(iForm, {
				target: target,
				errmsg: inputCheckErrorMessage['F1A_7_5'],
				values: new Array()
			}));
			err_status_1A = false;
			err_page_1A = 1;
			$("#5561").addClass("common-error-color");
		}
		if (wk_F1A_3_Eco == "01" || wk_F1A_3_Eco == "02" || wk_F1A_3_Eco == "03" || wk_F1A_3_Eco == "04") {
			if (wk_F1A_7_3_3 > 0 && wk_F1A_7_3_4 == 0) {
			}
			else {
				target = "F1A_7_3_Total_3";
				messages.push(commonError(iForm, {
					target: target,
					errmsg: inputCheckErrorMessage['F1A_7_6'],
					values: new Array()
				}));
				err_status_1A = false;
				err_page_1A = 1;
				$("#5560").addClass("common-error-color");

			}

		}
		//Q7.3 By business production activity...
		var wk_F1A_7_3_p_num = 0;
		target = "F1A_7_3_keyActivity_total_1";
		setBeforeClassName(iForm, target);
		CmnModClass(iForm, NORMAL_CLASS, target);
		if (document.getElementById("F1A_4-KeyProdCd").value !== "") {
			var wk_F1A_7_3_key = Number(document.getElementById("F1A_7_3_keyActivity_total_1").value);
			if (wk_F1A_7_3_key > 0) {
				wk_F1A_7_3_p_num = wk_F1A_7_3_p_num + wk_F1A_7_3_key;
			}
			else {
				messages.push(commonError(iForm, {
					target: target,
					errmsg: inputCheckErrorMessage['F1A_7_7'],
					values: new Array()
				}));
				err_status_1A = false;
				err_page_1A = 1;
			}
		}
		for (var i = 1; i <= F1A_otherDsp_cnt; i++) {
			let wk_F1A_othcd_id = "F1A_4-otherProdCd_" + i;
			let wk_F1A_oth_id_na = "F1A_7_3_othAct_total_" + i;
			target = wk_F1A_oth_id_na;
			setBeforeClassName(iForm, target);
			CmnModClass(iForm, NORMAL_CLASS, target);
			if (document.getElementById(wk_F1A_othcd_id).value !== "") {
				let wk_F1A_7_3_oth = Number(document.getElementById(wk_F1A_oth_id_na).value);
				if (wk_F1A_7_3_oth > 0) {
					wk_F1A_7_3_p_num = wk_F1A_7_3_p_num + wk_F1A_7_3_oth;
				}
				else {
					messages.push(commonError(iForm, {
						target: target,
						errmsg: inputCheckErrorMessage['F1A_7_7'],
						values: new Array()
					}));
					err_status_1A = false;
					err_page_1A = 1;
				}
			}
		}
		if (wk_F1A_7_3_t < wk_F1A_7_3_p_num) {
			var target = 'F1A_7_3_Total_1';
			setBeforeClassName(iForm, target);
			CmnModClass(iForm, NORMAL_CLASS, target);
			messages.push(commonError(iForm, {
				target: target,
				errmsg: inputCheckErrorMessage['F1A_7_8'],
				values: new Array()
			}));
			err_status_1A = false;
			err_page_1A = 1;
			$("#F1A_7_3_keyActivity_total_1").addClass("common-error-color");
			for (var i = 1; i <= F1A_otherDsp_cnt; i++) {
				let wk_F1A7_oth_id = "#F1A_7_3_othAct_total_" + i;
				$(wk_F1A7_oth_id).addClass("common-error-color");
			}
		}
		//Q10. Results of business production...
		var wk_F1A_10_p_num = 0;
		target = "F1A_10_Results_KeyAct";
		setBeforeClassName(iForm, target);
		CmnModClass(iForm, NORMAL_CLASS, target);
		if (document.getElementById("F1A_4-KeyProdCd").value !== "") {
			var wk_F1A_10_key = Number(document.getElementById("F1A_10_Results_KeyAct").value);
			if (wk_F1A_10_key > 0) {
				wk_F1A_10_p_num = wk_F1A_10_p_num + wk_F1A_10_key;
			}
			else {
				messages.push(commonError(iForm, {
					target: target,
					errmsg: inputCheckErrorMessage['F1A_10_1'],
					values: new Array()
				}));
				err_status_1A = false;
				err_page_1A = 1;
			}
		}
		for (var i = 1; i <= F1A_otherDsp_cnt; i++) {
			let wk_F1A_othcd_id = "F1A_4-otherProdCd_" + i;
			let wk_F1A_oth_id_na = "F1A_10_Results_othAct_" + i;
			target = wk_F1A_oth_id_na;
			setBeforeClassName(iForm, target);
			CmnModClass(iForm, NORMAL_CLASS, target);
			if (document.getElementById(wk_F1A_othcd_id).value !== "") {
				let wk_F1A_10_oth = Number(document.getElementById(wk_F1A_oth_id_na).value);
				if (wk_F1A_10_oth > 0) {
					wk_F1A_10_p_num = wk_F1A_10_p_num + wk_F1A_10_oth;
				}
				else {
					messages.push(commonError(iForm, {
						target: target,
						errmsg: inputCheckErrorMessage['F1A_10_1'],
						values: new Array()
					}));
					err_status_1A = false;
					err_page_1A = 1;
				}
			}
		}
		let wk_F1A_10_t = Number(document.getElementById("F1A_10_Results_Total").value);
		if (wk_F1A_10_t < wk_F1A_10_p_num) {
			var target = 'F1A_10_Results_Total';
			setBeforeClassName(iForm, target);
			CmnModClass(iForm, NORMAL_CLASS, target);
			messages.push(commonError(iForm, {
				target: target,
				errmsg: inputCheckErrorMessage['F1A_10_2'],
				values: new Array()
			}));
			err_status_1A = false;
			err_page_1A = 1;
			$("#F1A_10_Results_KeyAct").addClass("common-error-color");
			for (var i = 1; i <= F1A_otherDsp_cnt; i++) {
				let wk_F1A10_oth_id = "#F1A_10_Results_othAct_" + i;
				$(wk_F1A10_oth_id).addClass("common-error-color");
			}
		}
		if (!(err_status_1A)) {
			INT_pager('Page',err_page_1A);
		}

	}
	// Single item input check(1A2)
	if (questionnaire_id == "1A2") {
		for (var wk_cnt = 1; wk_cnt <= estb_total; wk_cnt++) {
			var el_name = "Es-" + wk_cnt;
			var err_status_1A2 = true;

			if (document.getElementById(wk_cnt + "-1457") != null) {
				var target = el_name + '-F1A2_taxCode2';
				setBeforeClassName(iForm, target);
				CmnModClass(iForm, NORMAL_CLASS, target);
				if (!CmnNumChk(iForm, target)) {
					messages.push(commonError(iForm, {
						target: target,
						errmsg: inputCheckErrorMessage['F1A2_0_1'],
						values: new Array()
					}));
					err_status_1A2 = false;
				} else
					if (!CmnLenChk(iForm, 0, 3, target)) {
						messages.push(commonError(iForm, {
							target: target,
							errmsg: inputCheckErrorMessage['F1A2_0_2'],
							values: new Array()
						}));
						err_status_1A2 = false;
					}
			}

			if (document.getElementById(wk_cnt + "-1159") != null) {
				var target = el_name + '-F1A2_name';
				setBeforeClassName(iForm, target);
				CmnModClass(iForm, NORMAL_CLASS, target);
				if (!CmnInputChk(iForm, 1, target)) {
					messages.push(commonError(iForm, {
						target: target,
						errmsg: inputCheckErrorMessage['F1A2_1_1'],
						values: new Array()
					}));
					err_status_1A2 = false;
				}
			}

			if (document.getElementById(wk_cnt + "-Province-1A2") != null) {
				var target = el_name + '-F1A2_Province';
				setBeforeClassName(iForm, target);
				CmnModClass(iForm, NORMAL_CLASS, target);
				if (document.getElementById(wk_cnt + "-Province-1A2").selectedIndex <= 0) {
					messages.push(commonError(iForm, {
						target: target,
						errmsg: inputCheckErrorMessage['F1A2_1_2'],
						values: new Array()
					}));
					err_status_1A2 = false;
				}
			}

			if (document.getElementById(wk_cnt + "-District-1A2") != null) {
				var target = el_name + '-F1A2_District';
				setBeforeClassName(iForm, target);
				CmnModClass(iForm, NORMAL_CLASS, target);
				if (document.getElementById(wk_cnt + "-District-1A2").selectedIndex <= 0) {
					messages.push(commonError(iForm, {
						target: target,
						errmsg: inputCheckErrorMessage['F1A2_1_3'],
						values: new Array()
					}));
					err_status_1A2 = false;
				}
			}

			if (document.getElementById(wk_cnt + "-6367") != null) {
				var target = el_name + '-F1A2_KeyVISIC';
				setBeforeClassName(iForm, target);
				CmnModClass(iForm, NORMAL_CLASS, target);
				if (!CmnInputChk(iForm, 1, target)) {
					messages.push(commonError(iForm, {
						target: target,
						errmsg: inputCheckErrorMessage['F1A2_2_1'],
						values: new Array()
					}));
					err_status_1A2 = false;
				}
			}

			if (document.getElementById(wk_cnt + "-6368") != null) {
				var target = el_name + '-F1A2_KeyVISIC_Code';
				setBeforeClassName(iForm, target);
				CmnModClass(iForm, NORMAL_CLASS, target);
				if (!CmnInputChk(iForm, 1, target)) {
					messages.push(commonError(iForm, {
						target: target,
						errmsg: inputCheckErrorMessage['F1A2_2_2'],
						values: new Array()
					}));
					err_status_1A2 = false;
				}
			}

			// Correlation check(1A2)
			//Q3 Labour(female).
			var wk_F1A2_3_1_t = Number(document.getElementById(wk_cnt + "-6699").value);
			var wk_F1A2_3_1_f = Number(document.getElementById(wk_cnt + "-6701").value);
			var wk_F1A2_3_2_t = Number(document.getElementById(wk_cnt + "-6700").value);
			var wk_F1A2_3_2_f = Number(document.getElementById(wk_cnt + "-6702").value);
			var target = el_name + '-F1A2_lab_Col1_1';
			setBeforeClassName(iForm, target);
			CmnModClass(iForm, NORMAL_CLASS, target);
			$("#" + wk_cnt + "-6701").removeClass("common-error-color");
			if (wk_F1A2_3_1_t < wk_F1A2_3_1_f) {
				messages.push(commonError(iForm, {
					target: target,
					errmsg: inputCheckErrorMessage['F1A2_3_1'],
					values: new Array()
				}));
				$("#" + wk_cnt + "-6701").addClass("common-error-color");
				err_status_1A2 = false;
			}
			var target = el_name + '-F1A2_lab_Col2_1';
			setBeforeClassName(iForm, target);
			CmnModClass(iForm, NORMAL_CLASS, target);
			$("#" + wk_cnt + "-6702").removeClass("common-error-color");
			if (wk_F1A2_3_2_t < wk_F1A2_3_2_f) {
				messages.push(commonError(iForm, {
					target: target,
					errmsg: inputCheckErrorMessage['F1A2_3_1'],
					values: new Array()
				}));
				$("#" + wk_cnt + "-6702").addClass("common-error-color");
				err_status_1A2 = false;
			}


			if (!(err_status_1A2)) {
				estb_pager('Page', false, wk_cnt);
				break;
			}
		}
	}

	crossCheckController(iForm, messages);

	/** Output error message */
	if (messages.length > 0) {
		alert(messages.join(''));
		return false;
	}
	return true;

}

// Correlation check
function crossCheckController(iForm, messages) {
}


// Event


// ==================================================================================================== <<<

/**
 * Common function for error handling
 *
 * @param	object (control,error mesage)
 * @return	error message
 */
function commonError(iForm, object) {
	var KAIGYO_NUM = 1;
	CmnModClass(iForm, ERROR_CLASS, object.target);
	return CmnEditMessage(object.errmsg, object.values, KAIGYO_NUM);
};

/**
 * Common function for warning handling
 *
 * @param	object (control,error mesage)
 * @return	warning message
 */
function commonWarn(iForm, object) {
	var KAIGYO_NUM = 1;
	CmnModClass(iForm, WARN_CLASS, object.target);
	return CmnEditMessage(object.errmsg, object.values, KAIGYO_NUM);
};

/**
 * Common function to get a form object
 *
 * @param	iForm	(form name or object name)
 * @returns	Object	(form object)
 */
function getFormObject(iForm) {
	if ('object' == typeof (iForm)) {
		return iForm;
	} else if ('string' == typeof (iForm)) {
		return document.forms[iForm];
	} else {
		throw new Error('Form specification is valid only for form name and object. type of ' + typeof (iForm));
	}
}

/**
 * Start downloading E-questionnaire of Page number(iPageNum)
 *
 * @param	iForm		(form name or object name)
 * @param	iAction		(action name)
 * @param	iPageNum	(page number of a target page)
 */
function CmnSendPage(iForm, iAction, iPageNum) {
	// Check button double pressed
	if (buttonFlg) {
		return;
	}

	// Get confirm message
	var msg = getSendPageMsg(iForm, iPageNum);

	if (confirm(msg)) {
		// If you want to check ansewers in client side when page transition,
		// please call check functions here.
		checkSubmitParam();

		/***** CUSTOMIZE AREA START *****/

		/***** CUSTOMIZE AREA END *****/

		// Call submit function.Do not modify.
		submitForm(iForm, iAction, iPageNum);
	}
}

/**
 * Get confirm message of page transition
 *
 * @param	iForm		(form name or object name)
 * @param	iPageNum	(target page number)
 */
function getSendPageMsg(iForm, iPageNum) {
	var form = getFormObject(iForm);
	if (parseInt(iPageNum) < parseInt(form.currentPage.value)) {
		return CNF_MSG_PREV_PAGE;
	} else {
		return CNF_MSG_NEXT_PAGE;
	}
}

/**
 * Save answer temporarily
 *
 * @param	iForm	(form name or object name)
 * @param	iAction	(action name)
 */
function CmnSaveKaitoTmp(iForm, iAction) {
	// Check button double pressed
	if (buttonFlg) {
		return;
	}

	if (confirm(CNF_MSG_SAVE_TMP)) {
		checkSubmitParam();

		/***** CUSTOMIZE AREA START *****/

		/***** CUSTOMIZE AREA END *****/

		// Call submit function.Do not modify.
		submitForm(iForm, iAction);
	}
}

/**
 * Start CmnSaveKaitoTmp function
 *
 * @param	iForm	(form name or object name)
 * @param	iAction	(action name)
 */
function CmnLoadKaitoTmp(iForm, iAction) {
	// Check button double pressed
	if (buttonFlg) {
		return;
	}

	if (confirm(CNF_MSG_LOAD_TMP)) {
		checkSubmitParam();

		/***** CUSTOMIZE AREA START *****/

		/***** CUSTOMIZE AREA END *****/

		// Call submit function.Do not modify.
		submitForm(iForm, iAction);
	}
}

/**
 * Send answer function
 *
 * @param	iForm	(form name or object name)
 * @param	iAction	(action name)
 */
function CmnSendKaito(iForm, iAction) {
	// Check button double pressed
	if (buttonFlg) {
		return;
	}

	if (confirm(CNF_MSG_SEND_KAITO)) {
		// If you want to check ansewers in client side when sending answers,
		// please call check functions here.
		checkSubmitParam();

		/***** CUSTOMIZE AREA START *****/
		/***** CUSTOMIZE AREA END *****/

		// Call submit function.Do not modify.
		submitForm(iForm, iAction);
	}
}

/**
 * Reset input answers to default value
 *
 * @param	iForm	(form name or object name)
 */
function CmnResetKaito(iForm) {
	//var msg = '';
	if (confirm(CNF_MSG_RESET_FORM)) {
		var elements = getFormObject(iForm).elements;
		for (var i = 0; i < elements.length; i++) {
			if (elements[i].type == gl_type.text ||
				elements[i].type == gl_type.textarea ||
				elements[i].type == gl_type.number ||
				elements[i].type == gl_type.password) {
				var cssValue = elements[i].className;
				elements[i].className = cssValue.replace(/common-error-color/g, '');
				if (elements[i].value != elements[i].defaultValue) {
					elements[i].value = elements[i].defaultValue;
					chengeEventDo(elements[i]);
				}
			}
			else if (elements[i].type == gl_type.radio ||
				elements[i].type == gl_type.checkbox) {
				if (elements[i].checked != elements[i].defaultChecked) {
					elements[i].checked = elements[i].defaultChecked;
					chengeEventDo(elements[i]);
				}
			}
			else if (elements[i].type == gl_type.selone ||
				elements[i].type == gl_type.selmulti) {
				elements[i].selectedIndex = -1;
				for (var j = 0; j < elements[i].options.length; j++) {
					if (elements[i].options[j].selected != elements[i].options[j].defaultSelected) {
						elements[i].options[j].selected = elements[i].options[j].defaultSelected;
					}
				}
			}
		}
		//alert(msg);
	}
}

/**
 * To get submitting enabled, this function add hidden value:0 to Unchecked checkbox.
 * To get submitting enabled, this function add hidden to disabled control.
 *
 * Please modify this function, If you change value to send of unchecked checkbox.
 */
function checkSubmitParam() {
	var enableRadioList = new Array();
	var disableRadioList = new Array();
	var elements = document.getElementsByTagName("input");

	// Disable all buttons.
	disableAllButton();

	for (var i = 0; i < elements.length; i++) {

		if (elements[i].type == gl_type.checkbox) {

			if (elements[i].checked) {
				if (elements[i].disabled) {
					addHiddenParam(elements[i].name, elements[i].value);
				}
			} else {
				addHiddenParam(elements[i].name, '0');
			}
		} else if (elements[i].type == gl_type.radio) {

			if (elements[i].disabled) {
				if (!disableRadioList[elements[i].name] && disableRadioList[elements[i].name] != "") {
					disableRadioList[elements[i].name] = "";
				}
				if (elements[i].checked) {
					disableRadioList[elements[i].name] = elements[i].value;
				}
			} else {
				if (!enableRadioList[elements[i].name] && enableRadioList[elements[i].name] != "") {
					enableRadioList[elements[i].name] = "";
				}
				if (elements[i].checked) {
					enableRadioList[elements[i].name] = elements[i].value;
				}
			}
		}
	}

	for (key in enableRadioList) {
		// About enabled radio buttons, unselected values are submitted.
		if (enableRadioList[key] == "") {
			addHiddenParam(key, "");
		}
	}
	for (key in disableRadioList) {
		// About disabled radio buttons, all values are submitted.
		addHiddenParam(key, disableRadioList[key]);
	}

	elements = document.getElementsByTagName("select");

	for (var i = 0; i < elements.length; i++) {

		if (elements[i].disabled) {

			var isNotSelected = true;
			for (var j = 0; j < elements[i].options.length; j++) {
				if (elements[i].options[j].selected) {

					addHiddenParam(elements[i].name, elements[i].options[j].value);
					isNotSelected = false;
				}
			}
			if (isNotSelected) {

				// About unselected listboxes, "" are submitted.
				addHiddenParam(elements[i].name, "");
			}
		} else {

			var isNotSelected = true;
			for (var j = 0; j < elements[i].options.length; j++) {
				if (elements[i].options[j].selected) {
					isNotSelected = false;
					break;
				}
			}
			if (isNotSelected) {
				// About unselected listboxes, "" are submitted.
				addHiddenParam(elements[i].name, "");
			}
		}
	}

}

/**********************************************************/
/**********        Don't modify below here       **********/
/**********************************************************/

var buttonFlg = false;

/**
 * Get system date of client machine
 *
 * @param	iType	1: Western calender
 * @return	String	String of system date
 */
function CmnGetSysDate(iType) {

	var dt = new Date();
	var year = dt.getFullYear();
	var month = ('0' + (dt.getMonth() + 1)).slice(-2);
	var date = ('0' + (dt.getDate())).slice(-2);
	var type = iType - 0;

	switch (type) {
		case 1:
			return year + '/' + month + '/' + date;
		default:
			return '';
	}
}

/**
 * Clear input value
 */
var clearValue = function (iField) {

	if (iField.type == gl_type.text) {
		iField.value = '';
		chengeEventDo(iField);
	} else if (iField.type == gl_type.textarea) {
		iField.value = '';
		chengeEventDo(iField);
	} else if (iField.type == gl_type.password) {
		iField.value = '';
		chengeEventDo(iField);
	} else if (iField.type == gl_type.radio) {
		iField.checked = false;
	} else if (iField.type == gl_type.checkbox) {
		iField.checked = false;
		chengeEventDo(iField);
	} else if (iField.type == gl_type.selone) {
		iField.selectedIndex = -1;
	} else if (iField.type == gl_type.selmulti) {
		iField.selectedIndex = -1;
	} else if (iField.type == gl_type.number) {
		$(iField).val('').change();
	}
}

/**
 * Raise an event
 */
var chengeEventDo = function (iField) {
	var id = $(iField).attr('id');
	$('#' + id).change();
}

/**
 * Clear all input values in a form
 *
 * @param	iForm	(form name or object name)
 */
function CmnPageClear(iForm) {
	if (confirm(CNF_MSG_RESET_FORM)) {
		var form = getFormObject(iForm);
		for (var i = 0; i < form.elements.length; i++) {
			clearValue(form.elements[i]);
		}
		// set 1A-3(NSTAC Customize 2019-12)
		if (questionnaire_id == "1A") {
			F1A_12_estab_button("init");
		}

	}
}

/**
 * Add class
 *
 * @param	iForm	(form name or object name)
 * @param	iClass	(the class you want to add)
 * @param	iField	(name attribute value)
 */
function CmnAddClass(iForm, iClass, iField) {

	var element = getFormObject(iForm).elements[iField];

	if (element.className == null || element.className == undefined) {
		for (var i = 0; i < element.length; i++) {
			element[i].className = element[i].className + ' ' + iClass;
		}
	} else {
		element.className = element.className + ' ' + iClass;
	}
}

/**
 * Change class name
 *
 * @param	iForm	(form name or object name)
 * @param	iClass	(the class name you want to change)
 * @param	iField	(name attribute value)
 */
function CmnModClass(iForm, iClass, iField) {

	var element = getFormObject(iForm).elements[iField];

	if (element.className == null || element.className == undefined) {
		for (var i = 0; i < element.length; i++) {
			element[i].className = iClass;
		}
	} else {
		element.className = iClass;
	}
}

/**
 * Delete class
 *
 * @param	iForm	(form name or object name)
 * @param	iClass	(the class name you want to delete)
 * @param	iField	(name attribute value)
 */
function CmnDelClass(iForm, iClass, iField) {

	var element = getFormObject(iForm).elements[iField];
	var regexp = new RegExp(iClass, 'g');

	if (element.className == null || element.className == undefined) {
		for (var i = 0; i < element.length; i++) {
			element[i].className = element[i].className.replace(regexp, '');
		}
	} else {
		element.className = element.className.replace(regexp, '');
	}
}

/**
 * Change visible/inbisible of a object
 *
 * @param	iForm	(form name or object name)
 * @param	iType 	0: get invisible, 1: get visible
 * @param	iField 	(name attribute value)
 */
function CmnVisible(iForm, iType, iField) {

	var element = getFormObject(iForm).elements[iField];
	var type = iType - 0;
	var visible;

	switch (type) {
		case 0:
			visible = 'hidden';
			if (element.style == null || element.style == undefined) {
				for (var i = 0; i < element.length; i++) {
					element[i].style.visibility = visible;
					clearValue(element[i]);
				}
			} else {
				element.style.visibility = visible;
				clearValue(element);
			}
			break;

		case 1:
			visible = 'visible';
			if (element.style == null || element.style == undefined) {
				for (var i = 0; i < element.length; i++) {
					element[i].style.visibility = visible;
				}
				return;
			}
			element.style.visibility = visible;
			break;

		default:
			throw new Error(iType + 'is a undefined value. CmnVisible.iType propertie must be 0, 1 or a string.');
	}
}

/**
 * Change readOnly/readWrite of a object
 *
 * @param	iForm	(form name or object name)
 * @param	iType 	0: get readWrite, 1: get readOnly
 * @param	iField 	(name attribute value)
 */
function CmnEnable(iForm, iType, iField) {

	var element = getFormObject(iForm).elements[iField];
	var type = iType - 0;
	var enable;

	var elemType;

	if (element.type) {
		elemType = element.type;
	} else {
		elemType = element[0].type;
	}

	if (elemType == gl_type.checkbox || elemType == gl_type.radio || elemType == gl_type.selone || elemType == gl_type.selmulti) {
		CmnEnableDisable(element, type);
	} else {
		switch (type) {
			case 0:
				enable = false;
				break;
			case 1:
				enable = true;
				break;
			default:
				throw new Error(type + 'is a undefined value. CmnEnable.iType propertie must be 0, 1 or a string.');
		}

		if (element.readOnly == null || element.readOnly == undefined) {
			for (var i = 0; i < element.length; i++) {
				element[i].readOnly = enable;
			}
		} else {
			element.readOnly = enable;
		}
	}
}

/**
 * Change enable/disable of a object that readonly attribute is not effective
 *
 * @param	element	(target object)
 * @param	iType 	0: get enable, 1: get disable
 * @param	iField 	(name attribute value)
 */
function CmnEnableDisable(element, type) {

	var enable;

	switch (type) {
		case 0:
			enable = "";
			break;
		case 1:
			enable = "true";
			break;
		default:
			throw new Error(type + 'is a undefined value. CmnEnable.iType propertie must be 0, 1 or a string.');
	}

	if (element.disabled == null || element.disabled == undefined) {
		for (var i = 0; i < element.length; i++) {
			element[i].disabled = enable;
		}
	} else {
		element.disabled = enable;
	}
}


/**
 * Check input value
 *
 * @param	iForm	(target form name or object name)
 * @param	iType 	0: do not trim, 1: trim (It is effective to only text or textarea.)
 * @param	iField 	(name attribute value)
 * @return	Boolean
 */
function CmnInputChk(iForm, iTrim, iField) {

	var field = getFormObject(iForm).elements[iField];
	// text, textarea
	if (field.type == gl_type.text || field.type == gl_type.textarea) {

		var trim = iTrim - 0;

		switch (trim) {
			case 0:
				return field.value ? true : false;
			case 1:
				return field.value.replace(
					field.value.match(/^[\s　]+|[\s　]+$/g), '') ? true : false;
			default:
				throw new Error(iTrim + 'is a undefined value. CmnInputChk.iTrim propertie must be 0, 1 or a string.');
		}
	}
	// password, select-one
	else if (field.type == gl_type.password || field.type == gl_type.selone) {
		return field.value ? true : false;
	}
	// radio, checkbox (single)
	else if (field.type == gl_type.radio || field.type == gl_type.checkbox) {
		return field.checked ? true : false;
	}
	// radio, checkbox (multiple)
	else if (field.type == null || field.type == undefined) {

		for (var i = 0; i < field.length; i++) {

			if (field[i].type == gl_type.radio && !field[i].checked) {
				continue;
			}
			else if (field[i].type == gl_type.checkbox && !field[i].checked) {
				continue;
			}
			return true;
		}
		return false;
	}
	// number
	else if (field.type == gl_type.number) {
		return field.value ? true : false;
	}
	// select-multiple
	else {
		throw new Error('' + field.type + ' is not compatible to input check.');
	}

}

/**
 * Check date
 *
 * @param iForm		(target form name or object name)
 * @param iEra		4: Western calender
 * @param iYear
 * @param iMonth
 * @param iDate
 * @return Boolean
 */
function CmnDateChk(iForm, iEra, iYear, iMonth, iDate) {
	var form = getFormObject(iForm);

	var year = iYear - 0;
	var month = iMonth - 0;
	var date = iDate - 0;

	if (isNaN(year) || isNaN(month) || isNaN(date)) {
		throw new Error('iYear, iMonth and iDate of CmnDateChk must be convertible to numbers.');
	}
	var seireki = 0;
	var iEraCd = gengo_map_to_code[iEra];
	switch (iEraCd) {
		case '4':
			// Western calendar
			seireki = year;
			break;

		default:
			// undefined
			throw new Error('' + iEra + ' is undefined.');
	}
	if (month < 1 || month > 12 || date < 1) {
		return false;
	}

	switch (month) {
		case 2:
			if ((seireki % 4 == 0) && (seireki % 100 != 0) || (seireki % 400 == 0)) {
				// leap year
				if (date > 29) return false;
			} else {
				// not leap year
				if (date > 28) return false;
			}
			break;

		case 1:
		case 3:
		case 5:
		case 7:
		case 8:
		case 10:
		case 12:
			if (date > 31) return false;
			break;

		case 4:
		case 6:
		case 9:
		case 11:
			if (date > 30) return false;
			break;
	}
	return true;
}

/**
 * Digit check
 *
 * @param	iForm	(target form name or object name)
 * @param	iLenF	(Minimum number of digits)
 * @param	iLenT	(Max number of digits)
 * @param	iField	(name attribute value)
 * @return	Boolean
 */
function CmnLenChk(iForm, iLenF, iLenT, iField) {
	var element = getFormObject(iForm).elements[iField];

	var lf = iLenF - 0;
	var lt = iLenT - 0;

	if (isNaN(lf)) {
		throw new Error(iLenF + ' is invalid value. CmnLenChk.iLenF property must be a number.');
	}
	if (isNaN(lt)) {
		throw new Error(iLenT + ' is invalid value. CmnLenChk.iLenT property must be a number.');
	}
	return (element.value.length >= lf) && (element.value.length <= lt);
}

/**
 * Range check
 *
 * @param	iForm	(target form name or object name)
 * @param	iType	1: do not include boundary value, 2: include boundary value
 * @param	iRangeF	(start value)
 * @param	iRangeT	(end value)
 * @param	iField	(name attribute value)
 * @return	Boolean
 */
function CmnRangeChk(iForm, iType, iRangeF, iRangeT, iField) {
	if (!CmnInputChk(iForm, 0, iField)) {
		return true;
	}

	var element = getFormObject(iForm).elements[iField];
	var type = iType - 0;
	var rf = iRangeF - 0;
	var rt = iRangeT - 0;

	if (isNaN(rf)) {
		throw new Error(iRangeF + ' is invalid value. CmnRangeChk.iRangeF property must be a number.');
	}
	if (isNaN(rt)) {
		throw new Error(iRangeT + ' is invalid value. CmnRangeChk.iRangeT property must be a number.');
	}


	switch (type) {
		case 1:
			return (element.value > rf) && (element.value < rt);
		case 2:
			return (element.value >= rf) && (element.value <= rt);
		default:
			throw new Error(iType + ' is invalid value. CmnRangeChk.iType property must be a 1 ,2 or a string.');
	}

}

/**
 * Input check using regular expression
 */
function CmnRegExpChk(iForm, iField, iRegExp) {
	var element = getFormObject(iForm).elements[iField];
	var value = element.value;
	var match = value.match(iRegExp);
	return match == null ? false : value.length == match.length;
}

/**
 * Check including/not including characters other than number
 * This function uses regular expression
 *
 * @param	iForm	(target form name or object name)
 * @param	iField	(name attribute value)
 * @return	Boolean	true: only number true, false: including characters other than number
 */
function CmnNumChk(iForm, iField) {
	if (!CmnInputChk(iForm, 0, iField)) {
		return true;
	}
	return CmnRegExpChk(iForm, iField, new RegExp(/[0-9]/g));
}

/**
 * Check if ","(comma) is included or not
 *
 * @param	iForm	(target form name or object name)
 * @param	iField	(name attribute value)
 * @return	Boolean	true: comma is not included, false: comma is included
 */
function CmnCommaChk(iForm, iField) {
	if (!CmnInputChk(iForm, 0, iField)) {
		return true;
	}
	var element = getFormObject(iForm).elements[iField];
	var value = element.value;
	return value.indexOf(',') >= 0 ? false : true;
}

/**
 * Multibyte character check
 *
 * @param	iForm	(target form name or object name)
 * @param	iField	(name attribute value)
 * @return	Boolean	true: only mutibyte characters, false: the function found singlebyte character(s)
 */
function CmnZenChk(iForm, iField) {
	if (!CmnInputChk(iForm, 0, iField)) {
		return true;
	}

	var element = getFormObject(iForm).elements[iField];
	var replace = element.value.replace(/[\r|\n]/g, '');

	for (var i = 0; i < replace.length; i++) {
		if (escape(replace.charAt(i)).length < 4) {
			return false;
		}
	}
	return true;
}

/**
 * singlebyte character check
 *
 * @param	iForm	(target form name or object name)
 * @param	iField	(name attribute value)
 * @return	Boolean	true: only singlebyte characters, false: the function found nultibyte character(s)
 */
function CmnHanChk(iForm, iField) {
	if (!CmnInputChk(iForm, 0, iField)) {
		return true;
	}

	var element = getFormObject(iForm).elements[iField];
	var replace = element.value.replace(/[\r|\n]/g, '');

	for (var i = 0; i < replace.length; i++) {
		if (escape(replace.charAt(i)).length >= 4) {
			return false;
		}
	}
	return true;
}

/**
 * Edit message
 *
 * @param	message
 * @param	values	(a string you want to replace instead of "{n}")
 * @param	iType	0: do not insert a line feed code, 1: insert a line feed code, 2: insert a line feed HTML tag
 * @return	edited message
 */
function CmnEditMessage(message, values, iType) {
	for (var i = 0; i < values.length; i++) {
		var regexp = new RegExp('\\{' + i + '\\}', 'g');
		message = message.replace(regexp, values[i]);
	}

	var sLine = '';
	var type = iType - 0;

	switch (type) {
		case 0:
			sLine = '';
			break;
		case 1:
			sLine = '\r\n';
			break;
		case 2:
			sLine = '<br>';
			break;
		default:
			throw new Error(iType + 'is undefined value. CmnEditMessage.iType property must be 0, 1, 2 or a string');
	}
	return message + sLine;
}

/**
 * Add hidden attribute to a form
 *
 * @param	name	(name attribute)
 * @param	value	(value attribute)
 */
function addHiddenParam(name, value) {

	var newElem = document.createElement('input');
	newElem.type = 'hidden';
	newElem.name = name;
	newElem.value = value;

	document.forms[0].appendChild(newElem);
}

/**
 * Embed answer data
 */
function CmnEmbedData() {
	//Set initial data
	// Province data(NSTAC Customize 2019-12)
	if (questionnaire_id == "1A") {
		set_Province('0', '1A');
		let prov_1A = document.getElementById("Province-1A");
		for (var i = 0; i < prov_1A.options.length; i++) {
			if (prov_1A.options[i].value == strdata_array["F1A_2_Province"]) {
				prov_1A.options.selectedIndex = i;
			}
		}
		set_District('0', '1A', 'cmm');
		F1A_otherDsp_Upd();
	}
	if (questionnaire_id == "1A2") {
		estb_total = strdata_array["F1A_12_estab_01_1_2"];
		var estb_prev = strdata_array["F1A_12_estab_01_1_2_prev"];
		strdata_array["F1A_12_estab_01_1_2_prev"] = estb_total;
		estb_init(estb_total, estb_prev, '1A2');
		for (var wk_cnt = 1; wk_cnt <= estb_total; wk_cnt++) {
			var el_name = "Es-" + wk_cnt;
			$("#" + wk_cnt + "-taxcode1").val(strdata_array["F1A_1_TaxCode_Ent"]);
			let prov_1A = document.getElementById(wk_cnt + "-Province-1A2");
			for (var i = 0; i < prov_1A.options.length; i++) {
				if (prov_1A.options[i].value == strdata_array[el_name + "-F1A2_Province"]) {
					prov_1A.options.selectedIndex = i;
				}
			}
			set_District(wk_cnt, '1A2', 'no');
			$("#1-estb_view").css("display", "block");
		}
	}
	//
	if (strdata_array === undefined) return;

	for (var data_key in strdata_array) {
		var elements = document.getElementsByName(data_key);
		if (elements.length == 0) continue;

		// radio button
		if (elements[0].type == gl_type.radio) {
			for (var i = 0; i < elements.length; i++) {
				elements[i].checked = (elements[i].value == strdata_array[data_key]);
			}
			continue;
		} else if (elements[0].type == gl_type.checkbox && elements.length > 1) {
			for (var i = 0; i < elements.length; i++) {
				var splitData = strdata_array[data_key].split(",");
				for (var ii = 0; ii < splitData.length; ii++) {
					if (elements[i].value == splitData[ii]) {
						elements[i].checked = true;
						break;
					}
				}
			}
			continue;
		}
		// other than radio button
		var element = elements[0];
		switch (element.type) {
			// selectbox
			case gl_type.selone:
				element.options.selectedIndex = -1;
				for (var i = 0; i < element.options.length; i++) {
					if (element.options[i].value == strdata_array[data_key]) {
						element.options.selectedIndex = i;
					}
				}
				break;
			// checkbox
			case gl_type.checkbox:
				element.checked = (element.value == strdata_array[data_key]);
				break;
			// textbox
			case gl_type.text:
			case gl_type.password:
			case gl_type.hidden:
			case gl_type.number:
				if (strdata_array[data_key] !== undefined) {
					element.value = strdata_array[data_key];
				}
				break;
			// textarea
			case gl_type.textarea:
				if (strdata_array[data_key] !== undefined) {
					element.value = strdata_array[data_key];
				}
				break;
		}
	}
	//(NSTAC Customize 2019-12)
	// set 1A-1
	if (questionnaire_id == "1A") {
		set_Commune('0', '1A');
		// set save data for commune
		let comm_1A = document.getElementById("Commune-1A");
		for (var i = 0; i < comm_1A.options.length; i++) {
			if (comm_1A.options[i].value == strdata_array["F1A_2_Commune"]) {
				comm_1A.options.selectedIndex = i;
			}
		}


		let eco_act = document.getElementsByName("F1A_3_Eco_Owner");
		for (var i = 0; i < eco_act.length; i++) {
			if (eco_act[i].checked) {
				F1A_3_Eco_act(eco_act[i].value);
			}
		}
	}
	// set 1A-3
	if (questionnaire_id == "1A") {
		F1A_12_estab_button("init");
	}
	//

	// Output message
	if (typeof output_message !== "undefined" && output_message != '') {
		alert(output_message);
	}
	$('input').change();
}

/**
 * Submit form
 *
 * @param	iForm		(target form name or object name)
 * @param	iAction		(action name to start)
 * @param	iPageNum	(page number)
 */
function submitForm(iForm, iAction, iPageNum) {

	var form = getFormObject(iForm);
	form.action = iAction;
	if (iPageNum) {
		form.currentPage.value = iPageNum;
	}
	form.method = "post";
	form.submit();
}

/**
 * Disable button
 */
function disableAllButton() {
	buttonFlg = true;
	var elements = document.all;
	for (var i = 0; i < elements.length; i++) {
		if (elements[i].type == 'button' || elements[i].type == 'submit') {
			elements[i].disabled = true;
		}
	}
}

/**
 * Move to the survey form list page
 *
 * @param	none
 * @return	none
 */
function CmnChosahyoList() {
	if (confirm(CNF_MSG_BACK_PAGE)) {
		/*
				if (location.href.substring(0,5) != 'https') {
					alert(ERR_MSG_ESURVEYONLY);
					return;
				};
		*/
		document.forms[0].action = "GD04010102a";
		document.forms[0].target = DefaultTarget;
		document.forms[0].method = "post";
		document.forms[0].submit();
	}
}

/**
 * Move to the "contact us" page
 *
 * @param	none
 * @return	none
 */
function CmnToiawase() {
	if (location.href.substring(0, 5) != 'https') {
		alert(ERR_MSG_ESURVEYONLY);
		return;
	};
	var url = "GD04090201" + "?type=contact";

	try {
		var winObj = window.open(url, InquireTarget, "left=0,top=0,Width=960,Height=768,fullscreen=no,toolbar=no,menubar=no,directories=no,personalbar=no,scrollbars=yes,resizable=yes,status=no");
		winObj.focus();
	} catch (e) { }
}

/**
 * Move to the help page
 *
 * @param	none
 * @return	none
 */
function CmnHelp() {
	if (location.href.substring(0, 5) != 'https') {
		alert(ERR_MSG_ESURVEYONLY);
		return;
	};
	var url = "GD04090201" + "?type=help";
	try {
		var winObj = window.open(url, HelpTarget, "left=0,top=0,Width=960,Height=768,fullscreen=no,toolbar=no,menubar=no,directories=no,personalbar=no,scrollbars=yes,resizable=yes,status=no");
		winObj.focus();
	} catch (e) { }
}

/**
 * Logout
 *
 * @param	none
 * @return	none
 */
function CmnLogout() {
	if (confirm(CNF_MSG_LOGOUT)) {
		if (location.href.substring(0, 5) != 'https') {
			alert(ERR_MSG_ESURVEYONLY);
			return;
		};
		if (window.name == InquireTarget) {
			window.close();
		} else {
			document.forms[0].action = "SessionClear";
			document.forms[0].target = DefaultTarget;
			document.forms[0].method = "post";
			document.forms[0].submit();
		}
	}
}
