export const sendWhatsApp = (data) => {
  const { namber, message, direccion } = data;

  const urlDesktop = "https://web.whatsapp.com/";
  const urlMobile = "whatsapp://";
  const telefonoSend = import.meta.env.VITE_PHONE;
  setTimeout(() => {
    let mensaje =
      "send?phone=" +
      telefonoSend +
      "&text=*_Mensajeria Franco (Pagina)_*%0A%0A+*_Solocitud de Cliente_* %0A%0A*¿Nombre?*%0A" +
      namber +
      "*%0A%0A*!_ Direccion _!*%0A" +
      direccion +
      "%0A%0A*¿Mensajer?*%0A" +
      message +
      "";
    if (isMobile()) {
      window.open(urlMobile + mensaje, "_blank");
    } else {
      window.open(urlDesktop + mensaje, "_blank");
    }
  }, 3000);
};

function isMobile() {
  if (sessionStorage.desktop) return false;
  else if (localStorage.mobile) return true;
  var mobile = [
    "iphone",
    "ipad",
    "android",
    "blackberry",
    "nokia",
    "opera mini",
    "windows mobile",
    "windows phone",
    "iemobile",
  ];
  for (var i in mobile)
    if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0)
      return true;
  return false;
}
