document.getElementById("business-hosting").addEventListener("click", function() {
    location.href = "/CyperWebb/business-hosting.html";
});

document.getElementById("web-hosting").addEventListener("click", function() {
    location.href = "/CyperWebb/web-hosting.html";
});

//set on clock listener to button with id domain-serach-button
document.getElementById('domain-serach-button').addEventListener("click", function() {
    //remove class hidden from div with id domain-search-results
    const domain = document.getElementById("domain-search").value;
    document.getElementById("domain-search-results").classList.remove("hidden");
    const dostupan = myRandom();
    resetResults();    
    document.getElementById("domain-info").innerHTML = "Domen " + domain + (dostupan?" nije":" je") + " dostupan";
    const domains = document.getElementsByClassName("domain");
    for(let i=0; i<domains.length; i++){
        if(myRandom()){
        domains[i].classList.remove("enabled")
        domains[i].classList.add("disabled")
        }
    }
});

//set on input listener to input with id domain-search
document.getElementById('domain-search').addEventListener("input", function() {
    document.getElementById("domain-search-results").classList.add("hidden");
    resetResults();
});


function resetResults(){
    const domains = document.getElementsByClassName("domain");
    for(let i=0; i<domains.length; i++){
        domains[i].classList.add("enabled")
        domains[i].classList.remove("disabled")
    }
}

function myRandom(){
    return Math.random()<0.5;
}