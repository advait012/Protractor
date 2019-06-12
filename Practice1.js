

describe("Banking Project",function(){
    it("Test Case1",function(){
browser.get("http://www.globalsqa.com/angularJs-protractor/BankingProject/#/login");
element(by.buttonText("Customer Login")).click();
element.all(by.tagName("option")).each(function(item){
item.getText().then(function(value){
    if(value=="Harry Potter"){
        item.click().then(function(){
            element(by.css("button[type='submit']")).click();
        })
    }
})
})

    })
})