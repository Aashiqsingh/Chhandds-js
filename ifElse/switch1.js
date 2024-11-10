// var num = 16;

// switch(num % 2 == 0)
// {
//     case true:
//         console.log("Even number ");
//         break;

//     case false:
//         console.log("Odd number ");
//         break;
// }

var n1 = parseInt(prompt("Enter the number :"))
var n2 = parseInt(prompt("Enter the number :"))

var choice = parseInt(prompt(" 1 for Add \n 2 for Subtract \n 3 for Multiply \n 4 for Divide \n\n\n Enter your choice :"))

switch(choice){
    case 1:
        console.log("Addition = ",n1+n2);
        break;
    case 2:
        console.log("Subtraction = ",n1-n2);
        break;
    case 3:
        console.log("Multiplication = ",n1*n2);
        break;
    case 4:
        console.log("Division = ",n1/n2);
        break;

    default:
        console.log("Invalid choice");
        break;
        
        
}