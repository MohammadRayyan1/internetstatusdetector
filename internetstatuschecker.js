window.addEventListener("load",checkInternetConnection);

function checkInternetConnection(){
    const statustext= document.getElementById("statustext");
    const IPaddresstext= document.getElementById("IPaddresstext");
    const networktext= document.getElementById("networktext");

    statustext.textContent = "Checking...";

    if(navigator.onLine){
        fetch('https://api.ipify.org?format=json')
        .then((response)=> response.json())
        .then((data)=>{

            IPaddresstext.textContent = data.ip;
            statustext.textContent = "Connected"

            const connection = navigator.connection;

            const networkstrength = connection ?connection.downlink + 'Mbps' : 'Unknown';
            networktext.textContent = networkstrength;
        })
        .catch(()=>{
            statustext.textContent ='Disconnected';
            IPaddresstext.textContent = '-';
        })
    }else{
        statustext.textContent= "Disconnected";
        IPaddresstext.textContent = "-";
        networktext.textContent= "-";
    }
}