function ok(){
    z="";
    try{
    z=CryptoJS.AES.decrypt("U2FsdGVkX1+27XpGh9JVMQUPTttcEDwecPjUz9obImqPoi7ET/R+2HPYBP8LBFow", document.getElementById("pass").value).toString(CryptoJS.enc.Utf8);

    }
    catch(e){
        
    }
    document.getElementById("return").innerText=(z=="")?"パスワードが違います。":z;
}
