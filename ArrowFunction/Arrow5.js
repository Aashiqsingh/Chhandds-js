const wordHandler = (option)=>{
    return option.fname + " upload in wordHandler function"
    
}

const pdfHandler = (option)=>{
    return option.fname + " upload in pdfHandler function"
}

const excelHandler = (option)=>{
    return option.fname + " upload in excelHandler function"
}

const pngHandler = (option)=>{
    return option.fname + " upload in pngHandler function"
}


var fileName = "abc.png";
var flag;


if(fileName.endsWith(".word"))
{
    flag = wordHandler({fname:fileName,size:"1000kb"})
}
else if(fileName.endsWith(".pdf")){
    flag = pdfHandler(
        {
            fname:fileName,
            size:"2000kb"
        }
    )
}
else if(fileName.endsWith(".excel")) {
    flag = excelHandler({fname:fileName, size:"3000kb"})
}
else if(fileName.endsWith(".png")) {
    flag = pngHandler({fname:fileName, size:"4000kb"})
}
else{
    console.log("Invalid file format");
}

console.log(flag);
