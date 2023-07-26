$('.support-wrap .support-service a').hover( function () {
    var index = $('.support-service a').index(this);
    $('.support-service a').not($(this)).removeClass('open');
    $(this).addClass('open');
    $('.support-wrap .support-info .support-detail').removeClass('open');
    $( ".support-wrap .support-info .support-detail" ).eq( index ).addClass("open");
});

function editpage(){
    document.getElementById('changePasswordModal').classList.toggle('show')
}

let captcha;
let usernamep=document.getElementById("usernamep");
let passwordp=document.getElementById("passwordp");
let captchap=document.getElementById("captchap");

function generate() {
  document.getElementById("captcha").value = "";
  captcha = document.getElementById("image");
  const random = Math.floor(Math.random() * 9000 + 1000);
  captcha.innerHTML = random;
}

function printmsg() {
  const captcha_input = document.getElementById("captcha").value;
  if(captcha_input === ""){
		captchap.innerHTML = "* Captcha must be required !";
    return;
	}
  else if (captcha_input !== captcha.innerHTML) {
    captchap.innerHTML = "* Captcha not Matched !";
    generate();
  }
}

function login(){
  let username=document.getElementById("username").value;
	if(username === "" || username === "null"){
		usernamep.innerHTML="* Username must be required !";
	}
  let password=document.getElementById("password").value;
	if(password === "" || password === "null"){
		passwordp.innerHTML="* Password must be required !";
	}
  printmsg();
  authorizeToHome();
}

function checkUsername(){
    usernamep.innerHTML="";
}
function checkPassword(){
    passwordp.innerHTML="";
}
function checkCaptcha(){
    captchap.innerHTML="";
}

var encryptedBase64Key = "bXVzdGJlMTZieXRlc2tleQ==";
var parsedBase64Key = CryptoJS.enc.Base64.parse(encryptedBase64Key);

function encryptMessage (password){
  return CryptoJS.AES.encrypt(password, parsedBase64Key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
    });
}

function decryptMessage (encryptPassword){
  return CryptoJS.AES.decrypt( encryptPassword, parsedBase64Key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
    } );
}

function authorizeToHome(){
  let username=document.getElementById("username").value;
  let password=document.getElementById("password").value;
  const captcha = document.getElementById("captcha").value;
  const encryptedPassword = encryptMessage(password).toString();
  if(username !== "" && username !== "null" && password !== "" && password !== "null" && captcha !=="" && captcha !== "null"){
    const data = { "userid": `${username}`, "password": `${encryptedPassword}`};
    console.log(data);
    fetchLogin(data);
  }
}

async function fetchLogin(data) {
  try {
    const response = await fetch("http://170-187-238-58.ip.linodeusercontent.com:7074/exuser/managementHome", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    if(result.message === "Wrong UserId!!!"){
      usernamep.innerHTML = "* Invalid Username !";
    }
    else if(result.message === "Wrong password!!!"){
      passwordp.innerHTML = "* Invalid Password !";
    }
    else if(result.type === "success"){
      window.location.href = "/home";
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

function saveUser(){
  const website=document.getElementById("websites").value;
  const userName=document.getElementById("userName").value;
  const email=document.getElementById("email").value;
  const password=document.getElementById("userPassword").value;
  const firstName=document.getElementById("firstName").value;
  const lastName=document.getElementById("lastName").value;
  const repeatPassword=document.getElementById("repeatPassword").value;
  const mobileNumber=document.getElementById("phone").value;
  const timeZone=document.getElementById("timezone").value;
  if(password !== repeatPassword){
    document.getElementById("repeatPasswordErrorText").innerText="* Password doesn't match ! ";
    return;
  }
  else{
    const encryptedPassword = encryptMessage(password).toString();
    const data = { "username":`${website}`,
                  "userid": `${userName}`,
                  "email":`${email}`,
                  "password": `${encryptedPassword}`,
                  "firstName":`${firstName}`,
                  "lastName":`${lastName}`,
                  "mobileNumber":`${mobileNumber}`,
                  "exposureLimit":2000,
                  "timeZone":`${timeZone}`};
    saveUserInMongo(data);
  }
}

async function saveUserInMongo(data) {
  try {
    const response = await fetch("http://170-187-238-58.ip.linodeusercontent.com:7074/exuser/validateUserCreation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    if(result.type === "success"){
      alert("User created successfully!");
      location.reload();
    }
    else if(result.type === "error"){
      if(result.message === "Invalid Email Address"){
        document.getElementById("emailErrorText").innerHTML="Invalid Email Address";
      }
      else if(result.message === "User Id Required"){
        document.getElementById("userNameErrorText").innerHTML="User Id Required";
      }
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

async function getAllWebsites() {
  const response = await fetch("http://170-187-238-58.ip.linodeusercontent.com:7074/exuser/allWebsite");
  const websites = await response.json();
  return websites;
}

async function  showAllWebsites() {
    let allWebsites = await  getAllWebsites();
    for (let i = 0; i < allWebsites.length; i++) {
      let website = allWebsites[i];
      let websites = document.getElementById("websites");
      websites.innerHTML+=`<option value="${website.name}">${website.name}</option>`;
    }
}

showAllWebsites();

async function getAllChild() {
  const response = await fetch("http://170-187-238-58.ip.linodeusercontent.com:7074/exuser/allchild");
  const childs = await response.json();
  return childs;
}

async function  showAllChild() {
  let allChilds = await  getAllChild();
  for (let i = 0; i < allChilds.length; i++) {
    let child = allChilds[i];
    let childs = document.getElementById("childs");
    childs.innerHTML+=`
        <tr id="sadmin" style="display: table-row;text-align: end;" main_userid="sadmin">
        <td id="accountCol" style="text-align: start;" class="align-L">
          <a style="cursor: pointer;"  onclick="redirectToSamePageWithData()" id="account0" class="ico_account"><span class="lv_4" style="background:#568BC8;">DIR</span>${child.userid}</a>
        </td>
        <td class="credit-amount-member">
          <a id="creditRefBtn" class="favor-set" href="#">0.00 </a>
        </td>
        <td id="balance1">
          <a href="#" class="link-open">758.86 </a>
        </td>
        <td style="color: red">
          <span style="cursor: pointer;width: 67px;text-align: center; display: inline-block;"class="status-suspend">20.99</span>
        </td>
        <td id="available1">737.87</td>
        <td id="exposureLimit1" style="display: none">0.00</td>
        <td id="available1" style="display: table-cell">165.40</td>
        <td id="refPL1" style=>758.86</td>
        <td id="statusCol">
          <span id="status1" class="status-active" >
            <img src="img/transparent.gif" />Active
          </span>
        </td>
        <td id="actionCol" class="actionCol">
          <ul class="action">
            <li>
              <a id="p_l1" class="p_l"><span><i class="fas fa-long-arrow-up"></i><i class="fas fa-long-arrow-down"></i></span></a>
            </li>
            <li>
              <a id="betting_history1" class="betting_history"><span><i class="fas fa-line-height"></i></span></a>
            </li>
            <li>
              <a class="status"><span><i class="fas fa-cog"></i></span></a>
            </li>
            <li>
              <a class="profile"><span><i class="fas fa-user-alt"></i></span></a>
            </li>
          </ul>
        </td>
      </tr>`;
  }
}

showAllChild();

async function userSearch(){
  let childs = document.getElementById("childs");
  childs.innerHTML="";
  let allChilds = await  getAllChild();
  let userId=document.getElementById("userId").value.toLowerCase();
  let filterUser=allChilds.filter(child => child.userid === userId);
  for (let i = 0; i < filterUser.length; i++) {
    let child = filterUser[i];
    childs.innerHTML+=`
        <tr id="sadmin" style="display: table-row;text-align: end;" main_userid="sadmin">
        <td id="accountCol" style="text-align: start;" class="align-L">
          <a id="account0" class="ico_account"><span class="lv_4" style="background:#568BC8;">DIR</span>${child.userid}</a>
        </td>
        <td class="credit-amount-member">
          <a id="creditRefBtn" class="favor-set" href="#">0.00 </a>
        </td>
        <td id="balance1">
          <a href="#" class="link-open">758.86 </a>
        </td>
        <td style="color: red">
          <span style="cursor: pointer;width: 67px;text-align: center; display: inline-block;"class="status-suspend">20.99</span>
        </td>
        <td id="available1">737.87</td>
        <td id="exposureLimit1" style="display: none">0.00</td>
        <td id="available1" style="display: table-cell">165.40</td>
        <td id="refPL1" style=>758.86</td>
        <td id="statusCol">
          <span id="status1" class="status-active" >
            <img src="img/transparent.gif" />Active
          </span>
        </td>
        <td id="actionCol" class="actionCol">
          <ul class="action">
            <li>
              <a id="p_l1" class="p_l"><span><i class="fas fa-long-arrow-up"></i><i class="fas fa-long-arrow-down"></i></span></a>
            </li>
            <li>
              <a id="betting_history1" class="betting_history"><span><i class="fas fa-line-height"></i></span></a>
            </li>
            <li>
              <a class="status"><span><i class="fas fa-cog"></i></span></a>
            </li>
            <li>
              <a class="profile"><span><i class="fas fa-user-alt"></i></span></a>
            </li>
          </ul>
        </td>
      </tr>`;
  }
}

function checkUserAvailable(){
  let userid=document.getElementById("userName").value;
  const data = { "userid": `${userid}`};
  checkOnDatabase(data);
}

async function checkOnDatabase(data) {
  try {
    const response = await fetch("http://localhost:7074/exuser/checkuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    if(result.type === "Error"){
      document.getElementById("userNameErrorText").innerHTML=`${result.message}`;
      return;
    }
    else if(result.type === "Success"){
      document.getElementById("userNameErrorText").innerHTML="";
    }
  } catch (error) {
    console.error("Error:", error);
  }
}


function redirectToSamePageWithData() {
  console.log(id, userType);
  const urlParams = new URLSearchParams(window.location.search);
  urlParams.set('id', id);
  urlParams.set('usertype', userType);
  const newUrl = window.location.pathname + '/' + urlParams.toString();
  window.location.href = newUrl;
}

 // Function to get the query parameter value from the URL
 function getQueryParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}


// Function to send a fetch request
/*function fetchData(id, userType) {
  const apiUrl = 'https://your-api-endpoint.com/data'; // Replace with your API endpoint
  const urlParams = new URLSearchParams({
      id: id,
      usertype: userType
  });

  fetch(apiUrl + '?' + urlParams.toString())
      .then(response => response.json())
      .then(data => {
          // Process the fetched data here
          console.log(data);
      })
      .catch(error => {
          console.error("Error fetching data:", error);
      });
}*/

const id = getQueryParam('id');
const userType = getQueryParam('usertype');

/*if (id && userType) {
  // Data already exists in the URL, fetch the data using the parameters
  fetchData(id, userType);
} else {
  // Data not available, fetch from the API and redirect to the same page with data as query parameters
  fetch('https://your-api-endpoint.com/get-new-data') // Replace with your API endpoint to get new data
      .then(response => response.json())
      .then(data => {
          // Process the fetched data here
          // For demonstration purposes, assuming the data contains id and userType properties
          const { id, userType } = data;

          // Redirect to the same page with API data as query parameters
          redirectToSamePageWithData(id, userType);

          // Now, the page will reload, and the data will be fetched again using the query parameters
      })
      .catch(error => {
          console.error("Error fetching data:", error);
      });
}*/
