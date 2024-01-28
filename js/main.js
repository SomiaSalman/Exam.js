///////////////////////////side bar///////////////////////////////////////////

$('.barIcon').on('click',function(){
    $('.blackBar li').animate({marginBottom:'10px'},1000);
})


$('.barIcon').on('click',function(){
    $('.blackBar').animate({width:'toggle',paddingInlie:'toggle'},1000);
    console.log('bar');
})

$('.blackBar li').on('click',function(){
    $('.blackBar').animate({width:'toggle',paddingInlie:'toggle'},1000);

})

/////////////////////////links pages////////////////////////
let homepage=document.getElementById('items') ;
let searchpage=document.getElementById('Search') ;
let categorypage=document.getElementById('categories');
let areapage=document.getElementById('area');
let ingridpage=document.getElementById('ingredient');
let categItempage=document.getElementById('categoryitem');
let areaItempage=document.getElementById('areaitem');
let ingredItempage=document.getElementById('ingreditem');



///////////////////////search page//////////////////////////////////////////////////
let searchLink=document.getElementById('searchLink');
let searchNameInput=document.getElementById('searchName');
let searchLetterInput=document.getElementById('searchLetter');
let searchItemsLetter=document.getElementById('searchItemsLetter');

searchLink.addEventListener('click',function(){
    $(homepage).css('display','none');
    $(areapage).css('display','none');
    $(categorypage).css('display','none');
    $(searchpage).css('display','block');
    $(categItempage).css('display','none');
    $(areaItempage).css('display','none');
    
    
})

let dataSerchName=[];

async function getDataSearchName(searchName){
    let response=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchName}`);
    
    let finalresponse=await response.json();
    dataSerchName=finalresponse.meals;
    console.log('search');
    console.log(finalresponse);
    console.log(dataSerchName);
    displayDataSearchName()
}

function displayDataSearchName(){
    var cartona=``;
    for (var i=0; i<dataSerchName.length ;i++){
     cartona +=`
     <div class="col-md-3">
     <div class="meal position-relative">
         <img class="rounded-3 " width="250px" height="270px" src="${dataSerchName[i].strMealThumb}" alt="Title" />
                    <div class="meal-layer position-absolute d-flex align-items-center text-black p-2 rounded-3">
                        <h3>${dataSerchName[i].strMeal}</h3>
                    </div>
          </div>
          </div>
        `
    }

    document.getElementById('searchItems').innerHTML= cartona;
}

searchNameInput.addEventListener('keyup',function(){
    getDataSearchName(searchNameInput.value)

})

//////search with first litter////////
let dataSerchLetter=[];

async function getDataSearchLetter(searchLetter){
    let response=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchLetter}`);
    
    let finalresponse=await response.json();
    dataSerchLetter=finalresponse.meals;
    
    displayDataSearchLetter()
}
function displayDataSearchLetter(){
    var cartona=``;
    for (var i=0; i<dataSerchLetter.length ;i++){
     cartona +=`
     <div class="col-md-3">
     <div class="meal position-relative">
         <img class="rounded-3 " width="250px" height="270px" src="${dataSerchLetter[i].strMealThumb}" alt="Title" />
                    <div class="meal-layer position-absolute d-flex align-items-center text-black p-2 rounded-3">
                        <h3>${dataSerchLetter[i].strMeal}</h3>
                    </div>
          </div>
          </div>
        `
    }

    document.getElementById('searchItems').innerHTML= cartona;
}

searchLetterInput.addEventListener('keyup',function(){
    getDataSearchLetter(searchLetterInput.value);
    searchLetterInput.value = searchLetterInput.value.replace(/\W|\d/g, '').substr(0, 1).toLowerCase();

})

/////////////////////////////////////home page/////////////////////////////////

let data=[];

async function getData(){
    let response=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
    
    let finalresponse=await response.json();
     data=finalresponse.meals;
    // console.log(finalresponse);
    displayData()
}

getData()

   function displayData(){
    var cartona=``;
    for (var i=0; i<data.length ;i++){
     cartona +=`
     <div class="col-md-3">
     <div class="meal position-relative">
         <img  class="rounded-3 " width="250px" height="270px" src="${data[i].strMealThumb}" alt="Title" />
                    <div class="meal-layer position-absolute d-flex align-items-center text-black p-2 rounded-3">
                        <h3 class="myMeal">${data[i].strMeal}</h3>
                    </div>
          </div>
          </div>
        `
    }

    document.getElementById('items').innerHTML= cartona;
}
  
    
/////////////////////////Categories///////////////////////////////////////////////////////////////////////////////////
 let dataCateg=[]
async function getDataCateg(){
    let response=await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
    
    let finalresponse=await response.json();
     dataCateg=finalresponse.categories;//[]
    console.log(finalresponse);
    displayDataCateg()
}
document.getElementById('category').addEventListener('click',function(){
    $(homepage).css('display','none');
    // $(categorypage).css('display','block');
    $(areapage).css('display','none');
    $(searchpage).css('display','none');
    $(yourInfoPage).css('display','none');
    $(ingridpage).css('display','none');
    $(ingredItempage).css('display','none');
    $(areaItempage).css('display','none');
    // $(categItempage).css('display','none');
    getDataCateg()



    console.log("category");
       
    })
    
function displayDataCateg(){
    var cartona=``;
    for (let i=0; i<dataCateg.length ;i++){
     cartona +=`
     <div class="col-md-3">
     <div class="meal  position-relative">
         <img class="rounded-3 " width="250px" height="250px" src="${dataCateg[i].strCategoryThumb}" alt="Title" />
                    <div id="categ" onclick="hidePages()" class="meal-layer position-absolute text-center text-black p-2 rounded-3">
                        <h3 id="chooseMeal">${dataCateg[i].strCategory}</h3>
                        <p >${dataCateg[i].strCategoryDescription}</p>
                    </div>
          </div>
          </div>
          `

    }   
    document.getElementById('categories').innerHTML= cartona;
}
//////////////////////get category item////////////////
 let dataCategItem=[]
async function getDataCategItem(meal){
    // let meal=dataCategItem.strMeal;
    let response=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${meal}`);
    let finalresponse=await response.json();
     dataCategItem=finalresponse.meals;//[]
    console.log(finalresponse);
    displayDataCategItem()
}
    //  getDataCategItem()

   function displayDataCategItem(){
    var cartona=``;
    for (var i=0; i<dataCategItem.length ;i++){
     cartona +=`
     <div class="col-md-3">
     <div class="meal position-relative">
         <img onclick="getMealDetails() " class="rounded-3 " width="250px" height="250px" src="${dataCategItem[i].strMealThumb}" alt="Title" />
                    <div  class=" meal-layer position-absolute text-center text-black p-2 rounded-3">
                        <h3 class="showMeal">${dataCategItem[i].strMeal}</h3>
                    </div>
          </div>
          </div>
          `

    }

    document.getElementById('categoryitem').innerHTML= cartona;
}
////////////////////////////////////////////////////////////////////////////////////////
async function hidePages(){
    let currentMeal=document.getElementById('chooseMeal').innerText
    await getDataCategItem(currentMeal)
       
    $(homepage).css('display','none');
    $(areapage).css('display','none');
    $(categorypage).css('display','none');

        console.log('categ');
    }

  //  ////////////////one meal details/////////////
let dataMeal=[]
let mealimg=document.getElementById('mealimg');
// let mymeal=document.getElementById('myMeal');
// $('#mymeal').on('click',async function(e){
//     let text=await e.target.innerText;
//     console.log(text);
// })
// console.log(mealimg);
// mealimg.innerHTML=dataMeal[meals.idMeal].strMealThumb;
async function getMealDetails(){
    let response=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
    
    let finalresponse=await response.json();
     dataMeal=finalresponse.meals;
    console.log(finalresponse);
    // displaydataMeal()
}
// getdataMeal()

///////////// area   ////////////////////////////////////////////////////////

let dataArea=[]
async function getdataArea(){
    let response=await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);  
    let finalresponse=await response.json();
     dataArea=finalresponse.meals;//[]
    console.log(finalresponse);
    displaydataArea()
    // console.log(dataArea);

}
document.getElementById('areaLink').addEventListener('click',function(){
    $(homepage).css('display','none');
    $(categorypage).css('display','none');
    $(searchpage).css('display','none');
    $(yourInfoPage).css('display','none');
    $(ingridpage).css('display','none');

    getdataArea()

})

   function displaydataArea(){
    var cartona=``;
    for (var i=0; i<dataArea.length ;i++){
     cartona +=`
     <div class="col-md-3" onclick="hidePagesArea()">
     <div class="meal">
        <i class="fa-solid fa-house-laptop fa-4x"></i>
                    <h3 id="country">${dataArea[i].strArea}</h3>
          </div>
          </div>
        `
    }

    document.getElementById('area').innerHTML= cartona;
}

///////////////////////////Area Items///////////////////////////
let dataAreaItem=[]
async function getDataAreaItem(country){
    // let meal=dataCategItem.strMeal;
    let response=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`);
    let finalresponse=await response.json();
     dataAreaItem=finalresponse.meals;//[]
    console.log(finalresponse);
    displayDataAreaItem()
}
    //  getDataCategItem()

   function displayDataAreaItem(){
    var cartona=``;
    for (var i=0; i<dataAreaItem.length ;i++){
     cartona +=`
     <div class="col-md-3">
     <div class="meal position-relative">
         <img  class="rounded-3 " width="250px" height="270px" src="${dataAreaItem[i].strMealThumb}" alt="Title" />
                    <div class="meal-layer position-absolute d-flex align-items-center text-black p-2 rounded-3">
                        <h3 class="myMeal">${dataAreaItem[i].strMeal}</h3>
                    </div>
          </div>
          </div>
        `
    }

    document.getElementById('areaitem').innerHTML= cartona;
}
async function hidePagesArea(){
    let currentArea=document.getElementById('country').innerText;
    await getDataAreaItem(currentArea)
       
    $(homepage).css('display','none');
    $(areapage).css('display','none');
    $(categorypage).css('display','none');

        console.log('area');
    }
/////////////////////////////igredient////////////////////////////////////////////////

 let dataIngred=[]
async function getdataIngred(){
    // let date=new Date();
    let response=await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`); 
    let finalresponse=await response.json();
     dataIngred=finalresponse.meals;//[]
    console.log(finalresponse);
    displaydataIngred()
    // console.log(dataIngred);
}
document.getElementById('IngredientLink').addEventListener('click',function(){
    $(homepage).css('display','none');
    $(categorypage).css('display','none');
    $(areapage).css('display','none');
    $(searchpage).css('display','none');
    $(yourInfoPage).css('display','none');
    $(areaItempage).css('display','none');

    getdataIngred()
})

   function displaydataIngred(){
    var cartona=``;
    for (var i=0; i<20 ;i++){
     cartona +=`
     <div class="col-md-3 h-25">
     <div class="meal integ text-center">
            <i onclick="hidePagesIngred()" class="fa-solid fa-drumstick-bite fa-4x"></i>
            <h3 id="ckIngred">${dataIngred[i].strIngredient}</h3>
            <p >${dataIngred[i].strDescription}</p>
          </div>
          </div>
        `
    }

    document.getElementById('ingredient').innerHTML= cartona;
}

///////////////////////ingred items///////////////////////
let dataIngredItem=[]
async function getDataIngredItem(ingrd){
    // let meal=dataCategItem.strMeal;
    let response=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingrd}`);
    let finalresponse=await response.json();
     dataIngredItem=finalresponse.meals;//[]
    console.log(finalresponse);
    displayDataIngredItem()
}
// getDataIngredItem()

   function displayDataIngredItem(){
    var cartona=``;
    for (let i=0; i<dataIngredItem.length ;i++){
     cartona +=`
     <div class="col-md-3">
     <div class="meal position-relative">
         <img  class="rounded-3 " width="250px" height="270px" src="${dataIngredItem[i].strMealThumb}" alt="Title" />
         <div class="meal-layer position-absolute d-flex align-items-center text-black p-2 rounded-3">
            <h3 class="">${dataIngredItem[i].strMeal}</h3>
                        </div>
          </div>
          </div>
        `
    }

    document.getElementById('ingreditem').innerHTML= cartona;
}
async function hidePagesIngred(){
    let ingrdItem=document.getElementById('ckIngred').innerText;
    await getDataIngredItem(ingrdItem)    
    $(homepage).css('display','none');
    $(areapage).css('display','none');
    $(categorypage).css('display','none');
    $(categItempage).css('display','none');
    $(ingridpage).css('display','none');
    $(searchpage).css('display','none');
    $(yourInfoPage).css('display','none');

        console.log('ingred');
    }

/////////////////form yourinfo//////////////////////////////////
let yourContactInfo=document.getElementById('contactUs');
let yourInfoPage=document.getElementById('yourInfo');

let userName=document.getElementById('userName');
let userEmail=document.getElementById('userEmail');
let userPhone=document.getElementById('userPhone');
let userAge=document.getElementById('userAge');
let userPass=document.getElementById('userPass');
let userRepass=document.getElementById('userRepass');

let errorName=document.getElementById('errorName');
let errorPhone=document.getElementById('errorPhone');
let errorAge=document.getElementById('errorAge');
let errorEmail=document.getElementById('errorEmail');
let errorPass=document.getElementById('errorPass');
let errorRepass=document.getElementById('errorRepass');

let regexPhone=/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
let regexName=/^[a-zA-Z]+$/;
let regexAge=/^(0?[1-9]|[1-9][0-9])$/;
let regexMail=/^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/;
let regexPass=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;


yourContactInfo.addEventListener('click', function(){

    $(homepage).css('display','none');
    $(yourInfoPage).css('display','block');
     $(areapage).css('display','none');
    $(categorypage).css('display','none');
    $(searchpage).css('display','none');
    $(ingridpage).css('display','none');
    console.log("contact");

})

///////validation/////
userName.addEventListener('keyup',function(){   
    if(regexName.test(userName.value)==false){
        $(errorName).css('display','block');
    }else{
        $(errorName).css('display','none');
    }
})

userPhone.addEventListener('keyup',function(){   
    if(regexPhone.test(userPhone.value)==false){
        $(errorPhone).css('display','block');
    }else{
        $(errorPhone).css('display','none');
    }
})

userEmail.addEventListener('keyup',function(){    
    if(regexMail.test(userEmail.value)==false){
        $(errorEmail).css('display','block');
    }else{
        $(errorEmail).css('display','none');
    }
})

userAge.addEventListener('keyup',function(){  
    if(regexAge.test(userAge.value)==false){
        $(errorAge).css('display','block');
    }else{
        $(errorAge).css('display','none');
    }        
})

userPass.addEventListener('keyup',function(){
    
    if(regexPass.test(userPass.value)==false){
        $(errorPass).css('display','block');
    }else{
        $(errorPass).css('display','none');
    }        
})

userRepass.addEventListener('keyup',function(){   
    if(userRepass.value!=userPass.value){
        $(errorRepass).css('display','block');
    }else{
        $(errorRepass).css('display','none');
    }        
})


if(regexName.test(userName.value)==true && regexPhone.test(userPhone.value)==true&&  regexMail.test(userEmail.value)==true 
&& regexAge.test(userAge.value)==true && regexPass.test(userPass.value)==true && userRepass.value==userPass.value){
    document.querySelector('.formBtn').disabled = false;
    console.log('yes');
}
else{
    console.log('212');
}












