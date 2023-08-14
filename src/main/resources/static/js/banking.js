/*Banking Page*/
async function showBankingPage() {
  const response = await fetch("http://3.0.102.63:7074/exuser/allchild");
  const allChilds = await response.json();
  const encryptedData=allChilds.data;
  var decryptData=JSON.parse(decryptMessage(encryptedData));
  var stage=JSON.parse(decryptData.payload);
  var data=JSON.parse(stage.data);
  let childs = document.getElementById("content");
  childs.innerHTML="";
  for (let i = 0; i < data.length; i++) {
    let child = data[i];
    childs.innerHTML+=`
        <tr class="dataofAccount">
        <td id="ad" class="align-L"><span class="order">${i+1}</span>${child.userid}</td>
        <td id="sa" class="align-L">71,690.41</td>
        <td id="ma" class="align-L">67,750.07</td>
        <td id="exp" class="align-L red">3,940.34</td>
        <td id="sm" class="align-L DW-amount">
          <button id="dbtn" class="dn">D</button><button id="wbtn" class="wd">W</button>
          <div class="amblock">
              <span class="amn"></span><input type="text" name="amount" id="amountmain" maxlength="8" placeholder="0" disabled="">
          </div>
          <button _ngcontent-fus name="amount" id="amountmain" maxlength="8" placeholder="0" disabled="">
          </div>
              <button _ngcontent-xla-c42="" id="dpWdFullBtn" disabled="" style="opacity: 0.5;">Full</button>
        </td>
        <td id="mm" class="align-L credit-amount"><a href="" id="usercreditrefrencemain">0</a><button id="editcreditbtrefrenacemain" data-toggle="modal" data-target="#credRefModal" class="but_suspend openchangepwdmodal icon tdd">Edit</button></td>
        <td id="agm" class="align-L">
          <p>1,000.00</p>
        </td>
        <td id="client" class="align-L"><input type="text" placeholder="Remark" class="remarkInput"></td>
        <td id="client" class="align-L"><button id="log">Log</button></td>
    </tr>
    <tr class="lastTr"></tr>`;
  }
}
showBankingPage();