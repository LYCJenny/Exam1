'use strict';

/** 姓氏條件 */
function firstNameFunc(index) {
    const firstName = document.getElementById(`firstName${index}`);
    if (firstName.value === '') {
        firstName.classList.add('is-invalid');
    } else {
        firstName.classList.remove('is-invalid');
        firstName.classList.add('is-valid');
    }
}

/** 名字條件 */
function lastNameFunc(index) {
    const lastName = document.getElementById(`lastName${index}`);
    if (lastName.value === '') {
        lastName.classList.add('is-invalid');
    } else {
        lastName.classList.remove('is-invalid');
        lastName.classList.add('is-valid');
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
        // phoneMsg.innerHTML = "長度不足";
        // phoneMsg.style.color = "red";
        phoneLen.classList.add('is-invalid');
    } else {
        // phoneMsg.innerHTML = "Ok";
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
        telMsg.innerHTML = "長度不足";
        telMsg.style.color = "red";
    } else if (telLen.value.length <= 10) {
        telLen.classList.remove('is-invalid');
        telLen.classList.add('is-valid');
        telMsg.innerHTML = "Ok";
        telMsg.style.color = "green";
    } else {
        telLen.classList.remove('is-valid');
        telLen.classList.add('is-invalid');
        telMsg.innerHTML = "長度過長";
        telMsg.style.color = "orange";
    }
}

/** 信箱條件 */
//Regular expression Testing
const emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]{2,4}$/; // /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/; // /^[^\s]+@[^\s]+\.[^\s]{2,3}$/;  

function emailFunc(index) {
    const emailArea = document.getElementById(`emailID${index}`);
    const strEmail = emailArea.value;

    if (strEmail.search(emailRule) != -1) {
        emailArea.classList.remove('is-invalid');
        emailArea.classList.add('is-valid');
    } else {
        emailArea.classList.add('is-invalid');
    }
}

/** 生日條件 */
//birth.max = new Date().toISOString().split("T")[0];  //日期能選擇的最大值是今天，toISOString: 取得時間，split
birth.max = new Date().toLocaleDateString('fr-ca');

/** 活動項目 */
/** old method */
// const bbq = document.getElementById('event-1-all');
// const Entrepreneur = document.getElementById('event-2-all');
// const family_sport = document.getElementById('event-3-all');
// const charity = document.getElementById('event-4-all');

// function event1() {
//     if (bbq.style.display === 'none') {
//         bbq.style.display = 'block';
//         Entrepreneur.style.display = 'none';
//         family_sport.style.display = 'none';
//         charity.style.display = 'none';
//     }
// }
// function event2() {
//     if (Entrepreneur.style.display === 'none') {
//         bbq.style.display = 'none';
//         Entrepreneur.style.display = 'block';
//         family_sport.style.display = 'none';
//         charity.style.display = 'none';
//     }
// }
// function event3() {
//     if (family_sport.style.display === 'none') {
//         bbq.style.display = 'none';
//         Entrepreneur.style.display = 'none';
//         family_sport.style.display = 'block';
//         charity.style.display = 'none';
//     }
// }
// function event4() {
//     if (charity.style.display === 'none') {
//         bbq.style.display = 'none';
//         Entrepreneur.style.display = 'none';
//         family_sport.style.display = 'none';
//         charity.style.display = 'block';
//     }
// }
/** 活動項目 new metho */
document.addEventListener('DOMContentLoaded', function () {
    const eventRadios = document.querySelectorAll('input[name="activities"]');
    const eventDetails = document.querySelectorAll('.event-details');

    eventRadios.forEach((radio, index) => {
        radio.addEventListener('change', function () {
            document.getElementById("eventDetails").classList.remove("d-none");
            eventDetails.forEach((event, i) => {
                if (index === i) {
                    event.style.display = 'block';
                } else {
                    event.style.display = 'none';
                }
            });
        });
    });
});

/** 手機跟信箱的 "同上" 按鈕，點選之後取主要參加者的手機跟email */
function copyTel(index) {
    const mainMobile = document.getElementById("mobile0").value;
    document.querySelector(`#mobile${index}`).value = mainMobile;
}

function copyEmail(index) {
    const mainEmail = document.getElementById("emailID0").value;
    document.querySelector(`#emailID${index}`).value = mainEmail;
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
                </div>
                <div class="col-md-6">
                    <label>名字 <span class="required-mark me-2">* </span></label>
                    <input type="text" class="form-control" name="lastName" id="lastName${i}" oninput="lastNameFunc(${i});">
                </div>
            </div>
            <div class="mb-3">
                <label>性別 <span class="required-mark me-2">* </span></label>
                <select class="form-select" name="gender" required>
                    <option value="" disabled selected>選擇性別</option>
                    <option value="male">男性</option>
                    <option value="female">女性</option>
                </select>
            </div>
            <div class="mb-3" id="mobileField">
                <div class="input-group">
                    <label for="mobile${i}" class="form-label">
                        聯繫手機 (請輸入數字) <span class="required-mark me-2">* </span>
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
                    <label>聯繫電子郵件 <span class="required-mark me-2">* </span></label>
                    <input type="email" class="form-control" name="contactEmail" placeholder="abc@gmail.com" id="emailID${i}"  oninput="emailFunc(${i});">
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
    const firstname = document.getElementById('firstName0').value;
    const lastname = document.getElementById('lastName0').value;
    //let regionNum = document.getElementById('region-select').value;  //區域號碼用select的方法時才需要這行
    let areaCode = document.getElementById('region-temp').value;
    let phoneNum = document.getElementById('phone-number').value;
    // if (areaCode !== "") {
    //     let allPhoneNum = areaCode + phoneNum;
    // } else {
    //     alert("請選擇區域號碼");
    // }
    let allPhoneNum;
    if (phoneNum == "") {
        allPhoneNum = "";
    } else {
        allPhoneNum = areaCode + phoneNum; // 區域號碼(regionNum)+電話號碼
    }


    /** 手機號碼檢查: 第一個數字有輸入0的話要自動刪除 */
    let telephone = document.getElementById('mobile0').value; //使用 let 設定變數是因為 telephone的值在後面會做更動
    // 檢查第一個數字是否為0
    if (telephone.charAt(0) === "0") {  // charAt(0): 第一個字
        // 刪除第一個數字；substr: 從 index = 1 的位置開始提取，在JS中index從0開始算
        telephone = telephone.substr(1);
    }
    // 將新的電話號碼輸出到console
    // console.log("處理後的手機號碼：" + telephone);

    const email = document.getElementById('emailID0').value;
    const gender = document.querySelector('input[name = gender]:checked').value;
    const birthdate = document.getElementById('birth').value;
    const activities = document.querySelector('input[name = activities]:checked').value;
    const totalparticipants = document.getElementById('totalParticipants').value;
    const otherQuest = document.getElementById('quest').value;

    /** 檢查資料是否都有輸入，沒有的話要顯示 in-valid */
    for (let i = 0; i < (Number(totalparticipants) + 1); i++) {
        firstNameFunc(i);
        lastNameFunc(i);
        telFunc(i);
        emailFunc(i);
    }
    phoneFunc();


    /** 以下為參加總人數的詳細資訊，儲存在 participantsInfo 陣列中 */
    //let participantsInfo = [];
    participantsInfo = []; //全域變數
    document.getElementById("table-part").innerHTML = ""; //每點一次 "提交"，就先把跳出視窗的table清空 

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

    //console.log(participantsInfo);
    console.log(participantsInfo.length);

    /** 判斷輸入的條件是否都符合 */
    let isInvalid = false;
    participantsInfo.forEach(function (participant) {
        if (participant.firstName.trim() === '' || participant.lastName.trim() === '' || participant.gender.trim() === '' || participant.contactPhone.trim() === '' || participant.contactEmail.trim() === '') {
            isInvalid = true;
        }
    });
    if (isInvalid) {
        alert('請填寫所有參與者訊息');
    } else {
        // 所有参与者信息都有效，可以进行下一步操作
        console.log(participantsInfo);
    }

    /** 按下提交後跳出輸入的資訊確認(popup) */
    // 將取得的資料存到陣列中
    let userData = [] //new Array(); //紀錄輸入者輸入的資料
    userData.push(firstname, lastname, allPhoneNum, telephone, email, gender, birthdate, activities, totalparticipants, otherQuest);
    //檢查是否有完整輸入資料，沒有的話就跳出alert
    // for (let i = 0; i < (userData.length - 1); i++) {
    let i = 0;
    while (i < (userData.length - 1)) {
        if (userData[i] == "" && isInvalid == true) {
            alert("請完整填寫表單");
            document.getElementById("table-part").innerHTML = ""; // 清除彈跳視窗中建立的table
            break;
        } else if (i == (userData.length - 2) && isInvalid == false) {

            //按下提交後，在確認資料全都有填寫，再顯示跳出視窗 (目前還有bug: 要點第二次 "提交" 按鈕，才會跳出)
            const submitBtn = document.getElementById('subBtn');
            submitBtn.setAttribute('data-bs-toggle', 'modal');  //加入跳出視窗的屬性(data-bs-target="#staticBackdrop")
            submitBtn.setAttribute('data-bs-target', '#staticBackdrop');  //加入跳出視窗的屬性(data-bs-target="#staticBackdrop")


            document.getElementById("popup-content").innerHTML = `姓名: ${userData[0] + userData[1]} <br>電話: ${allPhoneNum} <br>手機: ${telephone} <br>信箱: ${email}
            <br>性別: ${gender} <br>生日: ${birthdate} <br>活動項目: ${activities} <br>總參與人數: ${Number(totalparticipants) + 1} <br>其他問題: ${otherQuest}`;
            //document.getElementById("totalAmount").textContent = `Total Amount: ${totalparticipants}`;

            //以下為參加者詳細資訊
            //document.getElementById("popup-participants").innerHTML = `參加者人數：${participantsInfo.length} <br> 參加者 1 姓名：${Object.values(participantsInfo[0])}`;

            /** 在跳出視窗中，根據參加者人數加入輸入後的參加者資訊的 Table */
            for (let i = 0; i < participantsInfo.length; i++) {
                const tableInfo = createTable(i);
                //document.getElementById('participant-fields').appendChild(participantField);

                //最後把整個table append到html裡
                document.getElementById("table-part").appendChild(tableInfo);  //popup-participants / table-part
            }

            function createTable(index) {
                //const participantInfo = document.getElementById("popup-participants");
                //participantInfo.innerHTML = "";
                const partAllData = Object.values(participantsInfo[index]);
                const tableInfo1 = document.createElement("table");
                tableInfo1.classList.add("table", "table-info", "table-bordered"); //增加 class。 "p-3", "mb-3"
                tableInfo1.name = "tableInfo";

                //tr
                const tableRow1 = document.createElement("tr");
                tableInfo1.appendChild(tableRow1);
                //th-name
                const tableName = document.createElement("th");
                tableName.textContent = `陪同者 ${index + 1} 姓名`;
                tableRow1.appendChild(tableName);
                //th-gender
                const tableGender = document.createElement("th");
                tableGender.textContent = "性別";
                tableRow1.appendChild(tableGender);
                //th-tel
                const tableTel = document.createElement("th");
                tableTel.textContent = "手機";
                tableRow1.appendChild(tableTel);
                //th-email
                const tableEmail = document.createElement("th");
                tableEmail.textContent = "信箱";
                tableRow1.appendChild(tableEmail);

                //tr
                const tableRow2 = document.createElement("tr");
                tableInfo1.appendChild(tableRow2);
                //td-name
                const partName = document.createElement("td");
                partName.textContent = partAllData[0] + partAllData[1];
                tableRow2.appendChild(partName);
                //td-gender
                const partGender = document.createElement("td");
                partGender.textContent = partAllData[2];
                tableRow2.appendChild(partGender);
                //td-tel
                const partTel = document.createElement("td");
                partTel.textContent = partAllData[3];
                tableRow2.appendChild(partTel);
                //td-email
                const partEmail = document.createElement("td");
                partEmail.textContent = partAllData[4];
                tableRow2.appendChild(partEmail);

                return tableInfo1
            }

            // 跳出視窗，把 d-none 移除
            document.getElementById("popup").classList.remove("d-none");

            // 點選"確認"按鈕
            document.getElementById("confirmBtn").addEventListener("click", function () {
                // 把表單清空並顯示已成功註冊
                //document.getElementById("participantForm").reset();  // 清空欄位資訊
                //document.getElementById("popup").classList.add("d-none");
                //bbq.style.display = 'none';
                //Entrepreneur.style.display = 'none';
                //family_sport.style.display = 'none';
                //document.getElementById("firstName0").classList.remove("is-valid");
                //document.getElementById("lastName0").classList.remove("is-valid");
                //document.getElementById("participantFields").classList.add("d-none"); // 隱藏參加者詳細資訊的 field
                document.getElementById("successMessage").textContent = "您已成功報名";
                document.getElementById("successMessage").classList.remove("d-none");
                //document.getElementById("btnClose").classList.remove("d-none");  //加入關閉(X)按鈕
                //直接清除所有頁面，用 "" 取代
                document.getElementById("participantForm").innerHTML = "";

            });

            //點選"取消"按鈕，回到表單
            document.getElementById("returnBtn").addEventListener("click", function () {
                //點選取消後，清空原本跳出視窗中參加者詳細資訊的 table
                //const element = document.getElementById("table-part");
                document.getElementById("table-part").innerHTML = "";
                //隱藏跳出視窗 Clear form and hide popup
                document.getElementById("popup").classList.add("d-none");
            });
            break;
        }
        else {
            //continue;
            i++;
        }
    }


});

//按下確認按鈕後，連接 API，傳送名言佳句
function getres() {
    // Clean the page
    // document.getElementById('registration-message').innerHTML = "You have successfully registered!";

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

function displayQuote(quote) {
    document.getElementById("quoteMessage").classList.remove("d-none");
    const quoteContainer = document.createElement('div');
    quoteContainer.classList.add('bg-success-subtle');
    quoteContainer.innerHTML = `<h5 class="mb-2 px-2">每日勵志名言：</h5>
                                <blockquote class="blockquote">
                                <p class="mb-1 px-2">${quote}</p>
                                </blockquote>`;

    document.getElementById("quoteMessage").appendChild(quoteContainer);
}

