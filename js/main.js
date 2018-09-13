let weaponName,opticName,ammunitionName, imgData1,imgData2,imgData3,loudOutData, weaponImage,opticImage,ammunitionImage,loadOutName;

// Load last save loadout
//////////////////////////////////////////
function codeAddress() {
    let x =document.getElementById('weapon-img');
    let y =document.getElementById('optic-img');
    let z =document.getElementById('ammunition-img');
    let k =document.getElementById('loudout-name');
    

    let dataImage1 = localStorage.getItem('imgData1');
    if(dataImage1 === null){
        x.src = "";
    }
    else{
        x.src = dataImage1;
    }

    let dataImage2 = localStorage.getItem('imgData2');
    if(dataImage2 === null){
        y.src = "";
    }
    else{
        y.src = dataImage2;
    }

    let dataImage3 = localStorage.getItem('imgData3');
    if(dataImage3 === null){
        z.src = "";
    }
    else{
        z.src = dataImage3;
    }

    let dataLoadOutName = localStorage.getItem('loudOutData');
    if(dataLoadOutName === null){
        k.value = "";
    }
    else{
        k.value = dataLoadOutName;
    }

    
}
window.onload = codeAddress;

//Save Loadout
//////////////////////////////////////////
function SaveLoadout(){
    let img1,img2,img3,loadOut;
    weaponImage = document.getElementById("weapon-img");
    img1 = weaponImage.src;
    localStorage.setItem('imgData1',img1);

    opticImage = document.getElementById("optic-img");
    img2 = opticImage.src;
    localStorage.setItem('imgData2',img2);

    ammunitionImage = document.getElementById("ammunition-img");
    img3 = ammunitionImage.src;
    localStorage.setItem('imgData3',img3);

    loadOutName = document.getElementById('loudout-name');
    loadOut = loadOutName.value;
    localStorage.setItem('loudOutData', loadOut);
    
    let dataWeapon = localStorage.getItem('weaponName');
    let dataOptic = localStorage.getItem('opticName');
    let dataAmmunition = localStorage.getItem('ammunitionName');
    let dataLoadout = localStorage.getItem('loudOutData');

    console.log('Weapon: ' + dataWeapon +'\n'+'Optic: '+ dataOptic+'\n'+'Ammunition: ' + dataAmmunition +'\n'+'Loadout Name: ' + dataLoadout);

}
//Reset
function CancelConfig(){
    localStorage.clear();
    document.getElementById("weapon-img").src = "";
    document.getElementById("optic-img").src = "";
    document.getElementById("ammunition-img").src = "";
    document.getElementById('loudout-name').value = "";
    let x = document.getElementsByTagName('input');
    for(let i=0; i < x.length; i++){
        x[i].checked = false;
    }
}


//Change img src path to the selected one
//////////////////////////////////////////
function WeaponPick(){
    let weapon;
    let x = document.forms['configForm'].elements['weapons'];
    let y = document.getElementById("weapon-img");
            if(x.value === "1"){
                y.src ="./assets/img/ak47.png";
                weapon = document.getElementById('ak').textContent;
                localStorage.setItem('weaponName',weapon);
            }
            else{
                y.src ="./assets/img/m16.png";
                weapon = document.getElementById('m16').textContent;
                localStorage.setItem('weaponName',weapon);
            } 
}
function OpticPick(){
    let optic;
    let x = document.forms['configForm'].elements['optics'];
    let y = document.getElementById("optic-img");
            if(x.value === "1"){
                y.src ="./assets/img/reddot.png";
                optic = document.getElementById('reddot').textContent;
                localStorage.setItem('opticName',optic);
            }
            else{
                y.src ="./assets/img/acog.png";
                optic = document.getElementById('acog').textContent;
                localStorage.setItem('opticName',optic);
            } 
}
function AmmunitionPick(){
    let ammunition; 
    let x = document.forms['configForm'].elements['ammunition'];
    let y = document.getElementById("ammunition-img");
            if(x.value === "1"){
                y.src ="./assets/img/small-mag.png";
                ammunition = document.getElementById('30').textContent;
                localStorage.setItem('ammunitionName',ammunition);
            }
            else{
                y.src ="./assets/img/big-mag.png";
                ammunition = document.getElementById('50').textContent;
                localStorage.setItem('ammunitionName',ammunition);
            } 
}