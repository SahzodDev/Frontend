






const frmSendMesssage = document.getElementById("frm-send-message");

const inpEmailEl = document.querySelector("input[name=email");

frmSendMesssage.addEventListener("submit", (e)=>{
    e.preventDefault();
    /*
    const data = e.formData();
    console.log(data.get("email"));
    */
   const valEmail = inpEmailEl.value; // input elemanlarının value property'sini kullanarak içindeki değere bakabiliriz.

    const frmData = new FormData(frmSendMesssage); 

    console.log(frmData.get("email"));

    console.log("asd", valEmail);
})

/* Preventing hyperlink's default behaviour */

const theLinkEl = document.getElementById("the-link");

theLinkEl.addEventListener("click", (e)=>{
    e.target.preventDefault();
    console.log("Hello me");
})