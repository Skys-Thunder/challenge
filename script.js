function ok(){
    z=CryptoJS.AES.decrypt("U2FsdGVkX181jY2mprYO+OJz1DfT7RaZF6mEsmsSU9wOX1FsmGDX8LyXiA/jgLNs", document.getElementById("pass").value).toString(CryptoJS.enc.Utf8);
    document.getElementById("return").innerText=(z=="")?"パスワードが違います。":z;
}