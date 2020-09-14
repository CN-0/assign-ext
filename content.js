chrome.runtime.onMessage.addListener(function(request,sender, sendResponse){
    if(request.message === "first_page"){
        setTimeout(()=>{
            const value = document.getElementById("ran_num1").value
            chrome.runtime.sendMessage({
                message:"first_number",
                number:value
            })
        },500)
    }
    if(request.message === "second_page"){
        setTimeout(()=>{
            const value = document.getElementById("ran_num2").value
            chrome.runtime.sendMessage({
                message:"second_number",
                number:value
            })
        },500)
    }
    if(request.message === "final"){
        document.getElementById("random_number_sum").value = request.answer
    }
})