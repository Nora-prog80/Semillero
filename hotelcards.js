import { hotelsData } from "./resources/data.js";

const continerImage = document.getElementById("container__images");

export const mostrarHotels = ()=>{
    hotelsData.forEach((element)=>{
        const image = document.createElement("img");
        image.setAttribute("src", element.photo);
        image.setAttribute("alt", element.name);
        continerImage.appendChild(image);
    })   
}

let estado = "close";
function showhideSideBar(){
    alert("close");
}

