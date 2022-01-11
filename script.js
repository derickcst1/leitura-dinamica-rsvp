

const textDivider = () =>{

    let textInput = document.getElementById("text-input").value;

    console.log(textInput);
    let rgx = /\s/;
    let arrayOfWords = textInput.split(rgx);
    let arrayWithoutNull = arrayOfWords.filter(function (i) {
        return i;
      });      
     console.log(arrayWithoutNull);
      let x = 0;
      textWriter(arrayWithoutNull,x);
      
}

const textWriter =(arrayWithoutNull,x) =>{

    let textOutput = document.getElementById("text-output");
    
        setTimeout(() => {
            textOutput.textContent = arrayWithoutNull[x];
            x++;
            if(x<arrayWithoutNull.length){
                textWriter(arrayWithoutNull, x);
            }
        }, 500);
        


}
 