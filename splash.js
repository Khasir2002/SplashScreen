function removeSplashScreen() {
  var splash = document.querySelector('.splash');
  splash.parentNode.removeChild(splash);
  window.location.href = "https://khasir2002.github.io/ShoppingCart/";
}
setTimeout(removeSplashScreen, 4000);

document.addEventListener("DOMContentLoaded", function() {
  var audio = document.getElementById("bg-music");
});
