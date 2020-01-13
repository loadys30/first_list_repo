document.addEventListener("DOMContentLoaded", function(event) { 
let mfav = document.getElementById("my-favs")
let meals = ['breakfast', 'lunch', 'dinner'];



for (let i = 0; i < meals.length; i++) {
    let ele = document.createElement("LI")
    let eleTxt = document.createTextNode(meals[i])
    ele.appendChild(eleTxt)
    mfav.appendChild(ele)

}
  });
