let sz=""
let szamlalo=0
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 4; j++) {
        //console.log(i+" "+j)
        sz+=` 
        <img 
            id="${szamlalo}" 
            onmouseover="szegelyRajzol(this.id)" 
            onmouseleave="szegelyLevesz(this.id)" 
            onclick="nagyit(this.id)" 
            src="a${szamlalo}.jpg" alt="" style="width:100px;margin:5px;border:2px solid white">`
        szamlalo++
    }
    sz+=`<br>`
}
document.getElementById("kepekHelye").innerHTML=sz

let megoldas=""
let aktualisSorszam=-1
let elozo=-1
let helyes=0
let osszes=0

function nagyit(id){
    //alert(id)
    aktualisSorszam=id
    if (elozo!=-1){
      document.getElementById(elozo).style.filter="invert(0%)"
      document.getElementById(elozo).style.border="0px solid black"
    }
    document.getElementById(id).style.filter="invert(100%)"
    document.getElementById(id).style.border="2px solid green"

    elozo=id

    document.getElementById("nagyKep").innerHTML=`
    <img src="a${id}.jpg" alt="" style="width:640px">`

    //tombből kiszedni az adatokat
    //bekeverni
    //gombra rátenni
    megoldas=nevekTomb[id].megoldas
    let keveres=[]
    keveres.push(nevekTomb[id].megoldas)
    keveres.push(nevekTomb[id].tipp1)
    keveres.push(nevekTomb[id].tipp2)
    keveres.push(nevekTomb[id].tipp3)
    console.log(keveres)
    for (let i = 0; i < 100; i++) {
      let rSzam1=Math.floor( Math.random() *4)
      let rSzam2=Math.floor( Math.random() *4)
      //console.log(rSzam1+" "+rSzam2)
      
      let csere=keveres[rSzam1]
      keveres[rSzam1]=keveres[rSzam2]
      keveres[rSzam2]=csere
      //console.log(keveres)
    }


    document.getElementById("ki").innerHTML=`
    Ki ez a híres személyiség?
    <br>
        <button onclick="gombKattint('${keveres[0]}')">${keveres[0]}</button>
        <button onclick="gombKattint('${keveres[1]}')">${keveres[1]}</button>
        <button onclick="gombKattint('${keveres[2]}')">${keveres[2]}</button>
        <button onclick="gombKattint('${keveres[3]}')">${keveres[3]}</button>
    `
}

function szegelyRajzol(id){
    document.getElementById(id).style.border="2px solid blue"
}

function szegelyLevesz(id){
    if (id==aktualisSorszam)
        document.getElementById(id).style.border="2px solid green"
    else 
        document.getElementById(id).style.border="2px solid white"
}
function gombKattint(aktualisFelirat){
    //alert(aktualisFelirat)
    //alert(megoldas)
    osszes++
    if (megoldas==aktualisFelirat)
        {
        helyes++;
        alert("Helyes válasz!!!")
            if (aktualisSorszam==nevekTomb.length-1)
                aktualisSorszam=0
            else
                aktualisSorszam++
        nagyit(aktualisSorszam)    
        }
    else
        alert("Rossz válasz!!!")

     
    document.getElementById("pontHelye").innerHTML=`Pontok: <b> ${helyes}/${osszes} ${ Math.round( 100*helyes/osszes,0 )  }% </b>`
    //alert(aktualisSorszam)

}