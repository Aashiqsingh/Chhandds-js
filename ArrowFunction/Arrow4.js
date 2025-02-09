const wordHandler = (option)=>{
    console.log(option.fname + " upload in wordHandler function");
    
}

const pdfHandler = (option)=>{
    console.log(option.fname + " upload in pdfHandler function");
}

const excelHandler = (option)=>{
    console.log(option.fname + " upload in excelHandler function");
}

const pngHandler = (option)=>{
    console.log(option.fname + " upload in pngHandler function");
}


var fileName = "abc.excel";

if(fileName.endsWith(".word"))
{
    wordHandler({fname:fileName,size:"1000kb"})
}
else if(fileName.endsWith(".pdf")){
    pdfHandler(
        {
            fname:fileName,
            size:"2000kb"
        }
    )
}
else if(fileName.endsWith(".excel")) {
    excelHandler({fname:fileName, size:"3000kb"})
}
else if(fileName.endsWith(".png")) {
    pngHandler({fname:fileName, size:"4000kb"})
}
else{
    console.log("Invalid file format");
}