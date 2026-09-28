const leftBtn1 = document.getElementById("leftbtn1");
const rightBtn1 = document.getElementById("rightbtn1");
const img1 = document.getElementById("img1");
const img1_number_desc = document.getElementById("img1-number");
const img1_desc = document.getElementById("img1-text");
let img1_number = 0;
const total_img1 = 3;
const imgs1 = {
    0 : {
        "src":"src/language-program/language-program-1.jpg",
        "description":"Preparatory program for engineering and French language studies"
    },
    1 : {
        "src":"src/language-program/language-program-2.jpg",
        "description":"Last day of the program"
    },
    2 :  {
        "src":"src/language-program/language-program-3.jpg",
        "description":"First day of the arriving in Tours, France"
    }
}

const leftBtn2 = document.getElementById("leftbtn2");
const rightBtn2 = document.getElementById("rightbtn2");
const img2 = document.getElementById("img2");
const img2_number_desc = document.getElementById("img2-number");
const img2_desc = document.getElementById("img2-text");
let img2_number = 0;
const total_img2 = 3;
const imgs2 = {
    0 : {
        "src":"src/toulouse-studies/toulouse-studies-1.jpg",
        "description":"View of the Garonne river in Toulouse"
    },
    1 : {
        "src":"src/toulouse-studies/toulouse-studies-2.jpg",
        "description":"Toulouse during night time"
    },
    2 :  {
        "src":"src/toulouse-studies/toulouse-studies-3.jpg",
        "description":"Visiting other cities in the south of France"
    }
}

const leftBtn3 = document.getElementById("leftbtn3");
const rightBtn3 = document.getElementById("rightbtn3");
const img3 = document.getElementById("img3");
const img3_number_desc = document.getElementById("img3-number");
const img3_desc = document.getElementById("img3-text");
let img3_number = 0;
const total_img3 = 3;
const imgs3 = {
    0 : {
        "src":"src/lam-berambeh/lam-berambeh-1.jpg",
        "description":"Lam Berambeh"
    },
    1 : {
        "src":"src/lam-berambeh/lam-berambeh-2.jpg",
        "description":"Tower Bridge"
    },
    2 :  {
        "src":"src/lam-berambeh/lam-berambeh-3.jpg",
        "description":"King's Cross Bridge"
    }
}

const leftBtn4 = document.getElementById("leftbtn4");
const rightBtn4 = document.getElementById("rightbtn4");
const img4 = document.getElementById("img4");
const img4_number_desc = document.getElementById("img4-number");
const img4_desc = document.getElementById("img4-text");
let img4_number = 0;
const total_img4 = 5;
const imgs4 = {
    0 : {
        "src":"src/travel/travel-1.jpg",
        "description":"Tower of Pisa in Pisa, Italy"
    },
    1 : {
        "src":"src/travel/travel-2.jpg",
        "description":"Riding camels in Morocco"
    },
    2 :  {
        "src":"src/travel/travel-3.jpg",
        "description":"Lisbon, Portugal"
    },
    3 :  {
        "src":"src/travel/travel-4.jpg",
        "description":"Tromso, Norway"
    },
    4 :  {
        "src":"src/travel/travel-5.jpg",
        "description":"Arthur's Seat in Edinburgh"
    }
}

function changeImage(img,img_num,total_img,img_num_desc,img_desc,imgs){
    img.classList.remove('fade');
    void img.offsetWidth;
    img.classList.add('fade');
    img.setAttribute("src",imgs[img_num]["src"])
    img_num_desc.textContent=`${img_num+1}/${total_img}`;
    img_desc.textContent=imgs[img_num]["description"];
}

function addEventListenerToLeftBtn(leftBtn,img_num,total_img,img,img_num_desc,img_desc,imgs){
    leftBtn.addEventListener("click",function(){
        img_num=(img_num-1+total_img)%total_img;
        console.log(img_num);
        changeImage(img,img_num,total_img,img_num_desc,img_desc,imgs);
    })
}
function addEventListenerToRightBtn(rightBtn,img_num,total_img,img,img_num_desc,img_desc,imgs){
    rightBtn.addEventListener("click",function(){
        img_num=(img_num+1)%total_img;
        changeImage(img,img_num,total_img,img_num_desc,img_desc,imgs);
    })
}
/** Initialization */
changeImage(img1,img1_number,total_img1,img1_number_desc,img1_desc,imgs1);
changeImage(img2,img2_number,total_img2,img2_number_desc,img2_desc,imgs2);
changeImage(img3,img3_number,total_img3,img3_number_desc,img3_desc,imgs3);
changeImage(img4,img4_number,total_img4,img4_number_desc,img4_desc,imgs4);

/** Add event listeners to buttons */
addEventListenerToLeftBtn(leftBtn1,img1_number,total_img1,img1,img1_number_desc,img1_desc,imgs1);
addEventListenerToRightBtn(rightBtn1,img1_number,total_img1,img1,img1_number_desc,img1_desc,imgs1);
addEventListenerToLeftBtn(leftBtn2,img2_number,total_img2,img2,img2_number_desc,img2_desc,imgs2);
addEventListenerToRightBtn(rightBtn2,img2_number,total_img2,img2,img2_number_desc,img2_desc,imgs2);
addEventListenerToLeftBtn(leftBtn3,img3_number,total_img3,img3,img3_number_desc,img3_desc,imgs3);
addEventListenerToRightBtn(rightBtn3,img3_number,total_img3,img3,img3_number_desc,img3_desc,imgs3);
addEventListenerToLeftBtn(leftBtn4,img4_number,total_img4,img4,img4_number_desc,img4_desc,imgs4);
addEventListenerToRightBtn(rightBtn4,img4_number,total_img4,img4,img4_number_desc,img4_desc,imgs4);