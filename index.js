let hr=document.getElementById("hours")
let min=document.getElementById("min")
let sec=document.getElementById("sec")
let ms=document.getElementById("mili")
let castele=document.getElementById("cast")
let i=0
let started
let castIndex = 1

function start(){
    started=setInterval(()=>{
        if(i<=98){
            ms.innerHTML = `0${i}`
        }
       else ms.innerHTML=i
        if(i===1000){
            if(sec.innerHTML<=8){
                let secvalue=parseInt(sec.innerHTML) + 1
                sec.innerHTML = `0${secvalue}`
            }
           else sec.innerHTML=parseInt(sec.innerHTML) + 1
            i=0
        }
        if(sec.innerHTML===60){
            min.innerHTML = parseInt(min.innerHTML) + 1 
        }
        if(min.innerHTML===60){
            hr.innerHTML =parseInt(hr.innerHTML)+1
        }
        
        i=i+10
    },10)
}
function pause(){
    clearInterval(started)
}

function reset(){
    i=0
    ms.innerHTML="000"
    sec.innerHTML="00"
    min.innerHTML="00"
    hr.innerHTML="00"
    castele.innerHTML=""
    clearInterval(started)
    castIndex = 1
}

function cast(){
    let castms=ms.innerHTML
    let castsec=sec.innerHTML
    let castmin=min.innerHTML
    let casthr=hr.innerHTML
    castele.innerHTML=castele.innerHTML +  ` <p>Cast ${castIndex} : ${casthr} : ${castmin} : ${castsec} : ${castms}</p> `
    castIndex = castIndex+1
}
// setInterval(()=>{
//  console.log(i)
//  i=i+1
// },1000)

