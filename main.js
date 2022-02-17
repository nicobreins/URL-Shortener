const longUrlEl = document.getElementById('url-input');
const shortUrlInEl = document.getElementById('short-url-rec');
const expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
const regex = new RegExp(expression);

const menuToggle = () => {
    const menu = document.getElementById('mob-menu');
    if(menu.classList.contains('active')){
        menu.classList.remove('active');
    }else{
        menu.classList.add('active')
    }
}



const shortenUrl = (e) =>{
    e.preventDefault();
    if(longUrlEl.value && longUrlEl.value.match(regex)){
        const xhr = new XMLHttpRequest();
        const url = `https://api.shrtco.de/v2/shorten?url=${longUrlEl.value}`;
        
        xhr.responseType = 'json';
        
        xhr.onreadystatechange = () => {
            if(xhr.readyState === XMLHttpRequest.DONE) {
                console.log(xhr.response.result.full_short_link2);
                let shortUrl = xhr.response.result.full_short_link2;
                shortUrlInEl.innerHTML += `<div class="short-url-container"><p>${longUrlEl.value}</p><a href="${shortUrl}" target ="_blank">${shortUrl}</a><button aria-label="Copy-url" class="btn" onclick ="copyUrl(event)">Copy</button></div>`;
                longUrlEl.value = '';
                
            }
        };
        
        xhr.open('GET', url);
        xhr.send();  
        
    }else{

    }
    
}

const copyUrl = (e) => {
    /* Get the text field */
    var copyText = e.target.previousSibling;

    // console.log(copyText);
  
    /* Select the text field */
    // copyText.select();
    // copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.innerHTML);
  
    /* Alert the copied text */
    // alert("Copied the text: " + copyText.innerHTML);

    e.target.innerHTML = "Copied!";
    e.target.classList.add('active');

}