

describe("Practice session", function () {
    it("Practice test case", function () {
        browser.get("https://qaclickacademy.github.io/protocommerce/");
        element(by.css("input[name='name']")).sendKeys("advait");
        element(by.name("email")).sendKeys("advaitsharma012@gmail.com");
        element(by.css("input#exampleInputPassword1")).sendKeys("password");
        element(by.id("exampleCheck1")).click();

        element.all(by.css("option")).each(function (item) {
            item.getAttribute("value").then(function (values) {
                if (values =="Female") {
                    item.click();
                }
            })
        })

        element(by.id("inlineRadio2")).click();
        element(by.css("input[type='date']")).sendKeys("29/08/2019");
           
        
        element(by.buttonText("Submit")).click();
        element(by.css("div.alert.alert-success.alert-dismissible")).getText().then(function(text){
            console.log(text);
        })

    })
})
