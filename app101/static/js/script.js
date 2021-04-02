function loginFunction() {
    location.replace("{% url 'login' %}")
}

async function getWebcam(){
    try{
        const videoSrc=await navigator.madiaDevices.getUserMedia({video:true});
        var video=document.getElementById("video");
        video.srcObject=videoSrc;
    }catch(e){
        console.log(e);
    }
}

getWebcam();