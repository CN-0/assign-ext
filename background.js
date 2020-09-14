let num1, num2
chrome.runtime.onMessage.addListener((function(request,sender){
    if(request.message==="from_popup"){
        chrome.tabs.create({ url: "http://avrl-vikash-arena-dot-vikash-avrl-live.appspot.com/static/test_page1.html" }, function(tab) {
            chrome.tabs.executeScript(tab.id, {file:"content.js"}, function() {
                chrome.tabs.sendMessage(tab.id,{message:"first_page"});
            });
        })
    }
    if(request.message==="first_number"){
        num1 = request.number
        chrome.tabs.create({ url: "http://avrl-vikash-arena-dot-vikash-avrl-live.appspot.com/static/test_page2.html" }, function(tab) {
            chrome.tabs.executeScript(tab.id, {file:"content.js"}, function() {
                chrome.tabs.sendMessage(tab.id,{message:"second_page"});
            });
        })
    }
    if(request.message==="second_number"){
        num2 = request.number
        chrome.tabs.create({ url: "http://avrl-vikash-arena-dot-vikash-avrl-live.appspot.com/static/test_page3.html" }, function(tab) {
            chrome.tabs.executeScript(tab.id, {file:"content.js"}, function() {
                const result = Number.parseInt(num1)+Number.parseInt(num2)
                chrome.tabs.sendMessage(tab.id,{message:"final", answer:result});
            });
        })
        
    }
}))