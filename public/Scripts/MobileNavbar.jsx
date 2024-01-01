// function openNav() {
//     document.getElementById("myNav").style.width = "100%";
//   }
  
// function closeNav() {
//     document.getElementById("myNav").style.width = "0%";
// }

document.getElementById("mobileNavbar").addEventListener("click", function() {
    document.getElementById("myNav").style.width = "100%";
})

document.getElementById("closeNavbar").addEventListener("click", function() {
    document.getElementById("myNav").style.width = "0%";
})

var mobileNavItem = document.getElementsByClassName("mobileNavItem");

var i;

for (i = 0; i < mobileNavItem.length; i++) {
    mobileNavItem[i].addEventListener("click", function() {
        document.getElementById("myNav").style.width = "0%";
    })
}


