// date -- class -- object

function getDate(){

    // var date = new Date();

    // // console.log(date);
    // console.log("Year ---> ", date.getFullYear());
    // console.log("Month ---> ", date.getMonth());
    // console.log("Date ---> ", date.getDate());
    // console.log("Day ---> ", date.getDay());
    // console.log("Hours ---> ", date.getHours());
    // console.log("Minutes ---> ", date.getMinutes());
    // console.log("Seconds ---> ", date.getSeconds());
    // console.log("Milliseconds ---> ", date.getMilliseconds());
    // console.log("Timezoneoffset ---> ", date.getTimezoneOffset());
    // console.log("Timezone ---> ", date.getTime());
    

    // var date = new Date("2023-10-01T10:20:30Z");
    // console.log(date);
    
    var date = new Date();
    date.setFullYear(2023);
    date.setMonth(10);
    date.setDate(1);
    date.setHours(10);
    date.setMinutes(20);
    date.setSeconds(30);
    console.log(date);

}


getDate()