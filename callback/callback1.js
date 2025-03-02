function demo()
{
    console.log("demo function called...");
    
}



function test(x)
{
    // console.log(x);
    x()
    
}


// test(10)
// test("ram")
// test(true)
// test(12.55)

test(demo)