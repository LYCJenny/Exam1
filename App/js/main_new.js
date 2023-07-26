'use strict';

/** 姓氏條件 */
function firstNameFunc(index) {
    const firstName = document.getElementById(`firstName${index}`);
    const firstCond = document.getElementById(`firstCond${index}`);
    if (firstName.value === '') {
        firstName.classList.add('is-invalid');
        firstName.classList.remove('is-valid');
        firstCond.innerHTML = "請輸入文字";
        firstCond.style.color = "red";
    } else {
        firstName.classList.remove('is-invalid');
        firstName.classList.add('is-valid');
        firstCond.innerHTML = "";
    }
}

/** 名字條件 */
function lastNameFunc(index) {
    const lastName = document.getElementById(`lastName${index}`);
    const lastCond = document.getElementById(`lastCond${index}`);
    if (lastName.value === '') {
        lastName.classList.add('is-invalid');
        lastName.classList.remove('is-valid');
        lastCond.innerHTML = "請輸入文字";
        lastCond.style.color = "red";
    } else {
        lastName.classList.remove('is-invalid');
        lastName.classList.add('is-valid');
        lastCond.innerHTML = "";
    }
}

/* 區域號碼 (new methods 1) - html在 main_new_0707_0713.html中 */
// let selectedAreaCode = "";

// function reg(areaCode) {
//     selectedAreaCode = areaCode;
//     document.getElementById("region-num").innerText = '區域號碼: ' + areaCode;
//     // console.log(selectedAreaCode);
// }

/* 區域號碼 (new methods 2) (用dropdown menu才需要以下這段，可行在 main.html) */
const region_number = document.getElementById('region-num');
function reg2() { document.querySelector('.region-temp').value = "02"; }
function reg3() { document.querySelector('.region-temp').value = "03"; }
function reg4() { document.querySelector('.region-temp').value = "037"; }
function reg5() { document.querySelector('.region-temp').value = "04"; }
function reg6() { document.querySelector('.region-temp').value = "049"; }
function reg7() { document.querySelector('.region-temp').value = "05"; }
function reg8() { document.querySelector('.region-temp').value = "06"; }
function reg9() { document.querySelector('.region-temp').value = "07"; }
function reg10() { document.querySelector('.region-temp').value = "08"; }
function reg11() { document.querySelector('.region-temp').value = "082"; }
function reg12() { document.querySelector('.region-temp').value = "089"; }
function reg13() { document.querySelector('.region-temp').value = "0836"; }

/** 電話條件 */
const phoneLen = document.getElementById('phone-number');
const phoneMsg = document.getElementById('phoneMsg');
function phoneFunc() {
    if (phoneLen.value.length < 7) {
        phoneMsg.innerHTML = "長度不足";
        phoneMsg.style.color = "red";
        phoneLen.classList.add('is-invalid');
        phoneLen.classList.remove('is-valid');
    } else {
        phoneMsg.innerHTML = "";
        // phoneMsg.style.color = "green";
        phoneLen.classList.remove('is-invalid');
        phoneLen.classList.add('is-valid');
    }
}

/** 手機條件 */
function telFunc(index) {
    const telLen = document.getElementById(`mobile${index}`);
    const telMsg = document.getElementById(`message${index}`);
    if (telLen.value.length < 9) {
        telLen.classList.add('is-invalid');
        telLen.classList.remove('is-valid');
        telMsg.innerHTML = "長度不足";
        telMsg.style.color = "red";
    } else if (telLen.value.length <= 10) {
        telLen.classList.remove('is-invalid');
        telLen.classList.add('is-valid');
        telMsg.innerHTML = "";  //Ok
        // telMsg.style.color = "green";
    } else {
        telLen.classList.remove('is-valid');
        telLen.classList.add('is-invalid');
        telMsg.innerHTML = "長度過長";
        telMsg.style.color = "orange";
    }
}

function mobileCond(index) {
    let mobileCondOld = document.getElementById(`mobile${index}`).value; //使用 let 設定變數是因為 mobile
    let mobileCondNew;
    // 檢查第一個數字是否為0
    if (mobileCondOld.charAt(0) === "0") {  // charAt(0): 第一個字
        // 刪除第一個數字；substr: 從 index = 1 的位置開始提取，在JS中index從0開始算
        return mobileCondNew = "+886" + mobileCondOld.substr(1);
    }
}


/** 信箱條件 */
//Regular expression Testing
const emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]{2,4}$/; // /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/; // /^[^\s]+@[^\s]+\.[^\s]{2,3}$/;  

function emailFunc(index) {
    const emailArea = document.getElementById(`emailID${index}`);
    const strEmail = emailArea.value;
    const emailCond = document.getElementById(`emailCond${index}`);
    if (strEmail.search(emailRule) != -1) {
        emailArea.classList.remove('is-invalid');
        emailArea.classList.add('is-valid');
        emailCond.innerHTML = "";
    } else {
        emailArea.classList.add('is-invalid');
        emailArea.classList.remove('is-valid');
        emailCond.innerHTML = "尚未符合Email格式";
        emailCond.style.color = "red";
    }
}

/** 主要參加者性別條件 */
// function gender0Func() {
//     const genderRadios = document.getElementsByName('gender');

//     for (let i = 0; i < genderRadios.length; i++) {
//         const genderRadio = genderRadios[i];
//         const genderContainer = genderRadio.parentElement;

//         if (genderRadio.checked) {
//             genderContainer.classList.remove('is-invalid');
//             genderContainer.classList.add('is-valid');
//         } else {
//             genderContainer.classList.add('is-invalid');
//             genderContainer.classList.remove('is-valid');
//         }
//     }
// }


/** 參加者性別條件 */
function genderFunc(index) {
    const genderArea = document.getElementById(`gender${index}`);
    if (genderArea.value !== "") {
        genderArea.classList.remove('is-invalid');
        genderArea.classList.add('is-valid');
    } else {
        genderArea.classList.add('is-invalid');
        genderArea.classList.remove('is-valid');
    }
}

/** 生日條件 */
//birth.max = new Date().toISOString().split("T")[0];  //日期能選擇的最大值是今天，toISOString: 取得時間，split
birth.max = new Date().toLocaleDateString('fr-ca');
function birthFunc() {
    const birthArea = document.getElementById("birth");
    if (birth === '') {
        birthArea.classList.remove('is-valid');
        birthArea.classList.add('is-invalid');
    } else {
        birthArea.classList.add('is-valid');
        birthArea.classList.remove('is-invalid');
    }
}

/** 活動項目 new method */
// document.addEventListener('DOMContentLoaded', function () {
//     const eventRadios = document.querySelectorAll('input[name="activities"]');
//     const eventDetails = document.querySelectorAll('.event-details');

//     eventRadios.forEach((radio, index) => {
//         radio.addEventListener('change', function () {
//             document.getElementById("eventDetails").classList.remove("d-none");
//             eventDetails.forEach((event, i) => {
//                 if (index === i) {
//                     event.style.display = 'block';
//                 } else {
//                     event.style.display = 'none';
//                 }
//             });
//         });
//     });
// });

/** 活動項目 */
/** old method */
const bbq = document.getElementById('event-1-all');
const Entrepreneur = document.getElementById('event-2-all');
const family_sport = document.getElementById('event-3-all');
const charity = document.getElementById('event-4-all');

function event1() {
    if (bbq.style.display === 'none') {
        bbq.style.display = 'block';
        Entrepreneur.style.display = 'none';
        family_sport.style.display = 'none';
        charity.style.display = 'none';
    }
}
function event2() {
    if (Entrepreneur.style.display === 'none') {
        bbq.style.display = 'none';
        Entrepreneur.style.display = 'block';
        family_sport.style.display = 'none';
        charity.style.display = 'none';
    }
}
function event3() {
    if (family_sport.style.display === 'none') {
        bbq.style.display = 'none';
        Entrepreneur.style.display = 'none';
        family_sport.style.display = 'block';
        charity.style.display = 'none';
    }
}
function event4() {
    if (charity.style.display === 'none') {
        bbq.style.display = 'none';
        Entrepreneur.style.display = 'none';
        family_sport.style.display = 'none';
        charity.style.display = 'block';
    }
}

// 增加活動項目的 hover
const eventHoverRadios = document.querySelectorAll('.event-hover');
eventHoverRadios.forEach(radio => {
    radio.addEventListener('click', () => {
        eventHoverRadios.forEach(r => {
            r.style.opacity = 0.8;
        });
        radio.style.opacity = 1;
    });
});

/** 手機跟信箱的 "同上" 按鈕，點選之後取主要參加者的手機跟email */
function copyTel(index) {
    const mainMobile = document.getElementById("mobile0").value;
    document.querySelector(`#mobile${index}`).value = mainMobile;
    telFunc(index);  // 點 "同上" 按鈕時同時判斷是否符合條件
}

function copyEmail(index) {
    const mainEmail = document.getElementById("emailID0").value;
    document.querySelector(`#emailID${index}`).value = mainEmail;
    emailFunc(index);  // 點 "同上" 按鈕時同時判斷是否符合條件
}

/** 根據參加者人數: 動態產生參加者資訊  */
function createParticipantFields(numParticipants) {
    let participantFields = document.getElementById("participantFields");
    participantFields.innerHTML = "";

    for (let i = 1; i <= numParticipants; i++) {
        participantFields.innerHTML += `
        <fieldset class="border p-3 mb-3 bg-light col-md-10">
            <legend class="fs-5">同伴 ${i}</legend>
            <div class="row mb-3">
                <div class="col-md-6">
                    <label>姓氏 <span class="required-mark me-2">* </span> </label>
                    <input type="text" class="form-control" name="firstName" id="firstName${i}" oninput="firstNameFunc(${i});">
                    <h6 id="firstCond${i}" class="ms-2 mt-1"></h6>
                </div>
                <div class="col-md-6">
                    <label>名字 <span class="required-mark me-2">* </span></label>
                    <input type="text" class="form-control" name="lastName" id="lastName${i}" oninput="lastNameFunc(${i});">
                    <h6 id="lastCond${i}" class="ms-2 mt-1"></h6>
                </div>
            </div>
            <div class="mb-3">
                <label>性別 <span class="required-mark me-2">* </span></label>
                <select class="form-select" name="gender" id="gender${i}" required oninput="genderFunc(${i});">
                    <option value="" disabled selected>選擇性別</option>
                    <option value="male">男性💁🏻‍♂️</option>
                    <option value="female">女性💁🏻‍♀️</option>
                </select>
            </div>
            <div class="mb-3" id="mobileField">
                <div class="input-group">
                    <label for="mobile${i}" class="form-label">
                    📱聯繫手機 (請輸入數字) <span class="required-mark me-2">* </span>
                    </label>
                    <span class="input-group-text">+886</span>
                    <input type="tel"
                        onkeydown="javascript: return ['Backspace','Delete','ArrowLeft','ArrowRight'].includes(event.code) ? true : !isNaN(Number(event.key)) && event.code!=='Space'"
                        id="mobile${i}" oninput="telFunc(${i});" name="contactTel" class="form-control border-0 border-bottom" placeholder="請填入手機號碼" size="10"
                        maxlength="10" > 
                    <!-- form-control-sm -->
                    <h6 id="message${i}" class="ms-2" style="display: inline;"></h6>
                    <button type="button" class="btn btn-secondary ms-2" onclick="copyTel(${i});">同上</button>
                </div>
            </div>
            <div class="mb-3">
                <div class="input-group">
                    <label>📮聯繫電子郵件 <span class="required-mark me-2">* </span></label>
                    <input type="email" class="form-control" name="contactEmail" placeholder="abc@gmail.com" id="emailID${i}"  oninput="emailFunc(${i});">
                    <div>
                    <h6 id="emailCond${i}" class="ms-2 mt-1"></h6>
                </div>
                    <button type="button" class="btn btn-secondary ms-2" onclick="copyEmail(${i});">同上</button>
                    
                </div>
                
            </div>
        </fieldset>
      `;
    }
}


let participantsInfo, numParticipants  // 參加者的資訊，設定為全域變數

/** 輸入參加人數，呼叫動態生成的函數 */
document.getElementById("totalParticipants").addEventListener("input", function () {
    numParticipants = parseInt(this.value); //將字串轉成整數
    if (numParticipants > 10 || numParticipants < 1) {
        alert("請輸入 1~10 的數字");
    } else {
        createParticipantFields(numParticipants);
    }

});


/** 按下 "提交" 按鈕，儲存使者輸入的資料及參加總人數的詳細資訊 */
document.getElementById("participantForm").addEventListener("submit", function (event) {
    event.preventDefault();

    /** 以下為使用者輸入的資料，包含參加總人數，但不包含參加總人數的詳細資訊， 儲存在 userData 陣列中*/
    // 取得使用者輸入的資料
    const firstname = document.getElementById('firstName0');
    const lastname = document.getElementById('lastName0');
    //let regionNum = document.getElementById('region-select').value;  //區域號碼用select的方法時才需要這行
    let areaCode = document.getElementById('region-temp');
    let phoneNum = document.getElementById('phone-number');
    // let allPhoneNum;
    // if (phoneNum.value == "") {
    //     allPhoneNum = "";
    // } else {
    //     allPhoneNum = areaCode.value + phoneNum.value; // 區域號碼(regionNum)+電話號碼
    // }

    let allPhoneNum = phoneNum.value === "" ? "" : areaCode.value + phoneNum.value;


    /** 手機號碼檢查: 第一個數字有輸入0的話要自動刪除 */
    let mobileOld = document.getElementById('mobile0').value; //使用 let 設定變數是因為 mobile
    let mobileNew;
    // 檢查第一個數字是否為0
    if (mobileOld.charAt(0) === "0") {  // charAt(0): 第一個字
        // 刪除第一個數字；substr: 從 index = 1 的位置開始提取，在JS中index從0開始算
        mobileNew = "+886" + mobileOld.substr(1);
    } else {
        mobileNew = "+886" + mobileOld;
    }
    // 將新的電話號碼輸出到console
    // console.log("處理後的手機號碼：" + mobileNew);

    const email = document.getElementById('emailID0');
    const gender = document.querySelector('input[name = gender]:checked').value;
    const birthdate = document.getElementById('birth').value; //
    const activities = document.querySelector('input[name = activities]:checked').value;
    const totalparticipants = document.getElementById('totalParticipants').value;
    const otherQuest = document.getElementById('quest').value;

    /** 檢查資料是否都有輸入，沒有的話要顯示 in-valid */
    for (let i = 0; i < (Number(totalparticipants) + 1); i++) {
        firstNameFunc(i);
        lastNameFunc(i);
        //genderFunc(i);
        telFunc(i);
        emailFunc(i);
    }
    phoneFunc();
    birthFunc();


    /** 以下為參加總人數的詳細資訊，儲存在 participantsInfo 陣列中 */
    participantsInfo = []; //全域變數
    document.getElementById("table-part").innerHTML = ""; //每點一次 "提交"，就先把跳出視窗裡的table清空 

    const participantFieldsets = document.querySelectorAll("#participantFields fieldset");
    // 抓取每個 fieldset 的資料
    participantFieldsets.forEach(function (fieldset) {
        let participant = {};  //為 objects，需要有屬性跟值

        participant.firstName = fieldset.querySelector("input[name='firstName']").value;
        participant.lastName = fieldset.querySelector("input[name='lastName']").value;
        participant.gender = fieldset.querySelector("select[name='gender']").value;
        participant.contactPhone = fieldset.querySelector("input[name='contactTel']").value;
        participant.contactEmail = fieldset.querySelector("input[name='contactEmail']").value;

        participantsInfo.push(participant);  // 新增資料進 participantsInfo
    });

    console.log(participantsInfo);
    console.log(participantsInfo.length);

    /** 判斷輸入的條件是否都符合條件 */
    let isInvalid = false;
    let j = 1;
    while (j <= participantsInfo.length) {
        const firstN = document.getElementById(`firstName${j}`);
        const lastN = document.getElementById(`lastName${j}`);
        const gen = document.getElementById(`gender${j}`);
        const tel = document.getElementById(`mobile${j}`);
        const mail = document.getElementById(`emailID${j}`);

        if (firstN.classList.contains('is-invalid') || lastN.classList.contains('is-invalid') || gen.classList.contains('is-invalid') || tel.classList.contains('is-invalid') || mail.classList.contains('is-invalid')) {
            //alert('您輸入的資料不符合條件，請輸入完整！');
            isInvalid = true;
            console.log(isInvalid);
            break;
        } else {
            isInvalid = false;
            j++;
        }

    }

    /** 按下提交後跳出輸入的資訊確認(popup) */
    let totalAmount = 0;
    // 計算總金額
    if (activities === "Summer BBQ Party") {
        totalAmount = 0;
    } else if (activities === "Entrepreneur Lecture Series") {
        totalAmount = 50 + 100 * (Number(totalparticipants));
    } else if (activities === "Family Sports Day") {
        totalAmount = 50 * (Number(totalparticipants));
    } else if (activities === "Charity run") {
        totalAmount = 100 + 300 * (Number(totalparticipants));
    }

    // 判斷主參加者輸入的資料是否符合條件
    let userData = []; //new Array(); //紀錄輸入者輸入的資料
    let mainInvalid = false;
    const mobileOrigin = document.getElementById("mobile0");
    const emailValue = document.getElementById("emailID0").value;
    // const birthValue = document.getElementById("birth").value;
    if (firstname.classList.contains('is-invalid') || lastname.classList.contains('is-invalid') || phoneNum.classList.contains('is-invalid') || mobileOrigin.classList.contains('is-invalid') ||
        email.classList.contains('is-invalid') || (gender === '') || (birthdate === '') || (activities === '') || (totalparticipants === '')) {
        //alert('您輸入的資料不符合條件，請輸入完整！');
        mainInvalid = true;
    } else {
        userData.push(firstname.value, lastname.value, allPhoneNum, mobileNew, emailValue, gender, birthdate, activities, totalparticipants, otherQuest, totalAmount);   // 將取得的資料存到陣列中
        mainInvalid = false;
    }

    //檢查是否有完整輸入資料，沒有的話就跳出alert
    if (mainInvalid === true || isInvalid === true) {
        alert("您輸入的資料不符合條件，請輸入完整！");
        document.getElementById("table-part").innerHTML = ""; // 清除彈跳視窗中建立的table
    } else {
        //按下提交後，在確認資料全都有填寫，再顯示跳出視窗 (目前還有bug: 要點第二次 "提交" 按鈕，才會跳出)
        const submitBtn = document.getElementById('subBtn');
        submitBtn.setAttribute('data-bs-toggle', 'modal');  //加入跳出視窗的屬性(data-bs-target="#staticBackdrop")
        submitBtn.setAttribute('data-bs-target', '#staticBackdrop');  //加入跳出視窗的屬性(data-bs-target="#staticBackdrop")

        document.getElementById("popup-content").innerHTML = `
            <table class="table table-striped">
                <tr>
                    <td>姓名</td>
                    <td>${userData[0] + userData[1]}</td>
                </tr>
                <tr>
                    <td>電話</td>
                    <td>${allPhoneNum}</td>
                </tr>
                <tr>
                    <td>手機</td>
                    <td> ${mobileNew} </td>  <!-- 確認資料的時候用使用者輸入的資訊，送出時再用處理後的手機號碼(去除0) -->
                </tr>
                <tr>
                    <td>信箱</td>
                    <td>${emailValue}</td>
                </tr>
                <tr>
                    <td>性別</td>
                    <td>${gender}</td>
                </tr>
                <tr>
                    <td>生日</td>
                    <td>${birthdate}</td>
                </tr>
                <tr>
                    <td>活動項目</td>
                    <td>${activities}</td>
                </tr>
                <tr>
                    <td>總參與人數</td>
                    <td>${Number(totalparticipants) + 1}</td>
                </tr>
                <tr>
                    <td>總金額</td>
                    <td> $ ${totalAmount}</td>
                </tr>
                <tr>
                    <td>其他問題</td>
                    <td>${otherQuest}</td>
                </tr>
            </table>
        `;

        /** method 2: 在跳出視窗中，根據參加者人數加入輸入後的參加者資訊的 Table，陪同者的table合併 */
        function createTable() {
            const tableInfo = document.createElement("table");
            tableInfo.classList.add("table", "table-striped", "table-bordered");
            tableInfo.name = "tableInfo";

            // 表頭
            let tableHTML = `
                <tr>
                    <th>陪同者</th>
                    <th>姓名</th>
                    <th>性別</th>
                    <th>手機</th>
                    <th>信箱</th>
                </tr>
            `;

            // Loop through participantsInfo to create table rows with participant data
            for (let i = 0; i < participantsInfo.length; i++) {
                const partAllData = Object.values(participantsInfo[i]);

                let partmobileOld = document.getElementById(`mobile${i + 1}`).value;
                let partmobileNew;
                if (partmobileOld.charAt(0) === "0") {
                    partmobileNew = "+886" + partmobileOld.substr(1);
                } else {
                    partmobileNew = "+886" + partmobileOld;
                }

                tableHTML += `
                    <tr>
                        <td>${i + 1}</td>
                        <td>${partAllData[0] + partAllData[1]}</td>
                        <td>${partAllData[2]}</td>
                        <td>${partmobileNew}</td>
                        <td>${partAllData[4]}</td>
                    </tr>
                `;
            }
            tableInfo.innerHTML = tableHTML;
            return tableInfo;
        }
        // Call the function to create the combined table
        const combinedTable = createTable();
        // Append the combined table to the HTML element with id "table-part"
        document.getElementById("table-part").appendChild(combinedTable);

        // 跳出視窗，把 d-none 移除
        document.getElementById("popup").classList.remove("d-none");

        // 在機器人驗證成功前，讓"確認"按鈕不能點選
        document.getElementById("confirmBtn").disabled = true;

        // 機器人驗證成功後，"確認"按鈕可以點選
        function enableBtn() {
            document.getElementById("confirmBtn").disabled = false;
        }

        function loadRecaptchaScript() {
            var script = document.createElement('script');
            script.src = 'https://www.google.com/recaptcha/api.js?render=explicit';
            script.async = true;
            script.defer = true;
            script.onload = initializeRecaptcha;
            document.body.appendChild(script);
        }
        // 增加 recaptcha 驗證
        function initializeRecaptcha() {
            grecaptcha.render('recaptcha1', {
                'sitekey': '6LcFSDcnAAAAAGxNXAZ7qdW4r4VCIabi57UGTn7i',
                'theme': 'light',
                'size': 'normal',
                'callback': enableBtn
            });
        }

        // 呼叫 loadRecaptchaScript function
        loadRecaptchaScript();

        document.addEventListener("DOMContentLoaded", function () {
            // Load the reCAPTCHA script as soon as the page is ready
            loadRecaptchaScript();
            // Fetch the daily quote as soon as the page is ready
            getres();
        });
        // 點選"確認"按鈕
        document.getElementById("confirmBtn").addEventListener("click", function () {
            document.getElementById("recaptcha1").classList.remove("d-none");
            document.getElementById("successMessage").textContent = `您已成功報名 ${activities} 活動`;
            document.getElementById("successMessage").classList.remove("d-none");
            //直接清除所有頁面，用 "" 取代
            document.getElementById("participantForm").innerHTML = "";
            getres();

            /** pdf檔 */
            const printWindow = window.open('', 'HTML to PDF', 'height=400,width=800');

            let userDataPDF = `
                <style>
                    /* 增加表框 */
                    table {
                        border-collapse: collapse;
                        width: 100%;
                    }
                    th, td {
                        border: 1px solid black;
                        padding: 8px;
                        text-align: left;
                    }
                </style>
                <table class="table table-striped">
                    <tr><td>姓名:</td><td>${userData[0]} ${userData[1]}</td></tr>
                    <tr><td>電話:</td><td>${allPhoneNum}</td></tr>
                    <tr><td>手機:</td><td>${mobileNew}</td></tr>
                    <tr><td>信箱:</td><td>${emailValue}</td></tr>
                    <tr><td>性別:</td><td>${gender}</td></tr>
                    <tr><td>生日:</td><td>${birthdate}</td></tr>
                    <tr><td>活動項目:</td><td>${activities}</td></tr>
                    <tr><td>總參加人數:</td><td>${Number(totalparticipants) + 1}</td></tr>
                    <tr><td>總金額:</td><td>$${totalAmount}</td></tr>
                    <tr><td>其他問題:</td><td>${otherQuest}</td></tr>
                </table>
            `;

            // Combining participant information into a single table
            userDataPDF += `
                <h3>陪同者資訊</h3>
                <table class="table table-striped">
                    <tr>
                        <th>陪同者姓名</th>
                        <th>性別</th>
                        <th>手機</th>
                        <th>信箱</th>
                    </tr>
            `;

            for (let i = 0; i < participantsInfo.length; i++) {
                const partAllData = Object.values(participantsInfo[i]);
                let partmobileOld = partAllData[3];
                let partmobileNew;
                if (partmobileOld.charAt(0) === "0") {
                    partmobileNew = "+886" + partmobileOld.substr(1);
                } else {
                    partmobileNew = partmobileOld;
                }

                userDataPDF += `
                    <tr>
                        <td>${partAllData[0] + partAllData[1]}</td>
                        <td>${partAllData[2]}</td>
                        <td>${partmobileNew}</td>
                        <td>${partAllData[4]}</td>
                    </tr>
                `;
            }

            userDataPDF += `</table>`;

            printWindow.document.write('<html><head><title>活動報名留存</title>');
            printWindow.document.write('</head><body >');
            printWindow.document.write(userDataPDF);
            printWindow.document.write('</body></html>');
            printWindow.document.close();
            printWindow.print();

        });

        //點選"取消"按鈕，回到表單
        document.getElementById("returnBtn").addEventListener("click", function () {
            //點選取消後，清空原本跳出視窗中參加者詳細資訊的 table
            //const element = document.getElementById("table-part");
            document.getElementById("table-part").innerHTML = "";
            //隱藏跳出視窗 Clear form and hide popup
            document.getElementById("popup").classList.add("d-none");
        });
    }

});

//按下確認按鈕後，連接 API，傳送名言佳句
function getres() {
    // Get daily inspirational quote
    fetch('https://cors-anywhere.herokuapp.com/https://favqs.com/api/qotd?apikey=49c9c00cdb9d820e9a76de5bf24d8ce4')
        .then(response => response.json())
        .then(data => {
            const quote = data.quote.body;
            const author = data.quote.author;
            const quoteAuthor = `${quote} - ${author}`;
            displayQuote(quoteAuthor);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

let quoteDisplayed = false; // 看quote是否已經顯示了
function displayQuote(quote) {
    // 如果 quote 還沒顯示，就顯示，顯示後 quoteDisplayed 設為 true 就不會再顯示了
    if (!quoteDisplayed) {
        document.getElementById("quoteMessage").classList.remove("d-none");
        const quoteContainer = document.createElement('div');
        quoteContainer.classList.add('bg-success-subtle');
        quoteContainer.innerHTML = `<h5 class="mb-2 px-2">每日勵志名言：</h5>
                                    <blockquote class="blockquote">
                                    <p class="mb-1 px-2">${quote}</p>
                                    </blockquote>`;

        document.getElementById("quoteMessage").appendChild(quoteContainer);

        quoteDisplayed = true;
    }
}

