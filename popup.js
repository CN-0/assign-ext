document.getElementById("one").addEventListener("click",()=>{
    chrome.runtime.sendMessage({message:"from_popup"})
})