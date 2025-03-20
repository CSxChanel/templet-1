var username = document.getElementById("kodeVoucher");
var password = document.getElementById("password");
function setpass() {
    var user = username.value;
    password.value = user;
}
username.onchange = setpass;

function showNotif() {
    document.getElementById("notification").classList.toggle("hidden");
}
function showMember() {
    document.getElementById("member").classList.toggle("hidden");
}
function showVoucher() {
    document.getElementById("voucher").classList.toggle("hidden");
}
function caraLogin() {
    document.getElementById("caraLogin").classList.toggle("hidden");
}
function loginWithVoucher() {
    document.getElementById("voucher").classList.toggle("hidden");
    showMember();
    focusVoucher();
}
function loginWithMember() {
    document.getElementById("member").classList.toggle("hidden");
    showVoucher();
    focusMember();
}
function focusMember() {
    document.getElementById("kodeMember").focus();
}
function focusVoucher() {
    document.getElementById("kodeVoucher").focus();
}

// $("#voucher").click(() => {
//     showVoucher();
//     focusVoucher();
// });
// $("#member").click(() => {
//     showMember();
//     focusMember();
// });
function showPassword() {
    var pass = document.getElementById("passwordMember");
    if (pass.type === "password") {
        pass.type = "text";
    } else {
        pass.type = "password";
    }
}
//login by-Member
function memberLogin() {
    document.loginMember.username.value = document.login.username.value;
    document.loginMember.password.value = hexMD5(
        "$(chap-id)" + document.login.password.value + "$(chap-challenge)"
    );
    document.loginMember.submit();
    console.log(post);
    return false;
}
//login by-Voucher
function doLogin() {
    document.loginvoucher.username.value = document.login.username.value;
    document.loginvoucher.password.value = hexMD5(
        "$(chap-id)" + document.login.password.value + "$(chap-challenge)"
    );

    document.loginvoucher.submit();
    return false;
}
function openLogin() {
    if (window.name != "hotspot_logout") return true;
    open("$(link-login)", "_blank", "");
    window.close();
    return false;
}

function darkMode() {
    document.getElementById("dark-mode").classList.toggle("dark-mode");
}
function whiteMode() {
    document.getElementById("white-mode").classList.toggle("white-mode");
}

function show() {
    $("#alert").show();
    document.getElementById("notif").innerHTML = "Sambungkan dulu ke Wifi!";
}
function hide() {
    $("#alert").hide();
}
function handlerButton() {
    const whatsappMessage = encodeURIComponent(
        `Halo, saya tertarik berlangganan. \n
            ┌〔 *Pasang Baru* 〕
            ├ Nama  : 
            ├ No HP :
            ├ Alamat-pemasangan :
            ├ Paket/Mbps :
            ├ Harga : 
            └──── ┈ ⳹`
    );

    const waLink = `https://wa.me/6282213452856?text=${whatsappMessage}`;
    window.open(waLink, "_blank");
}
function paketMurah() {
    const whatsappMessage = encodeURIComponent(
        `Halo, saya tertarik berlangganan. \n
            ┌〔 *Paling Murah* 〕
            ├ Nama  : 
            ├ No HP :
            ├ Alamat-pemasangan :
            ├ Paket/Mbps : 10 Mbps
            ├ Harga : Rp.150,000
            └──── ┈ ⳹`
    );

    const waLink = `https://wa.me/6282213452856?text=${whatsappMessage}`;
    window.open(waLink, "_blank");
}
function paketSilver() {
    const whatsappMessage = encodeURIComponent(
        `Halo, saya tertarik berlangganan. \n
            ┌〔 *Pasang Baru* 〕
            ├ Nama  : 
            ├ No HP :
            ├ Alamat-pemasangan :
            ├ Paket/Mbps : 15 Mbps
            ├ Harga : Rp.220,000
            └──── ┈ ⳹`
    );

    const waLink = `https://wa.me/6282213452856?text=${whatsappMessage}`;
    window.open(waLink, "_blank");
}
function paketGold() {
    const whatsappMessage = encodeURIComponent(
        `Halo, saya tertarik berlangganan. \n
            ┌〔 *Pasang Baru* 〕
            ├ Nama  : 
            ├ No HP :
            ├ Alamat-pemasangan :
            ├ Paket/Mbps : 20 Mbps
            ├ Harga : Rp.270,000
            └──── ┈ ⳹`
    );

    const waLink = `https://wa.me/6282213452856?text=${whatsappMessage}`;
    window.open(waLink, "_blank");
}

