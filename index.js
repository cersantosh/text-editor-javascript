
/* 
main concept
1. adding all the clicked options to array
2. checking which button is clicked using class name
3. when user clicked on the option 'selected' class is added
4. for alignment options 'only-one' class is added
5. saving data using Blob() constructor
6. to download file add a tag

*/



let textarea = document.querySelector(".textarea textarea")

let selectedOptions = []
function changeStyle(element, value = ''){
  // there are multiple class so choosing first class
  let className = element.classList[0]
  // highlighting font-size and color option is not necessary
  if(className !== "font-size" && className !== "color"){
    element.classList.toggle("selected")
  }

  // for alignment we can select only one option
  if(className === "left" || className === "center" || className === "right"){
    let alignment = document.querySelectorAll(".only-one")
    for(let i of alignment){
      i.classList.remove("only-one")
      // above code add selected class to the alignment option so removing it
      i.classList.remove("selected")
    }
    element.classList.toggle("only-one")
  }

  selectedOptions.push(element)
  // reflecting when usr clicked
  applyChanges(value)
}


// console.log(selectedOptions)
function applyChanges(value){
  // checking class to apply changes
  // when option is not clicked selected class will not be there
  for(let i of selectedOptions){
    let className = i.classList[0]
    if(className === "font-size"){
      textarea.style.fontSize = `${value}px`
    }
    else if(className === "bold"){
      i.classList.contains("selected") ? textarea.style.fontWeight = "bold" : textarea.style.fontWeight = "normal"
    }
    else if(className === "italic"){
      i.classList.contains("selected") ? textarea.style.fontStyle = "italic" : textarea.style.fontStyle = "normal"
    }
    else if(className === "underline"){
      i.classList.contains("selected") ? textarea.style.textDecoration = "underline" : textarea.style.textDecoration = ""
    }
    else if(className === "left"){
     textarea.style.textAlign = "left"
    }
    else if(className === "center"){
      textarea.style.textAlign = "center"
    }
    else if(className === "right"){
      textarea.style.textAlign = "right"
    }
    else if(className === "capital"){
      i.classList.contains("selected") ? textarea.style.textTransform = "uppercase" : textarea.style.textTransform = ""
    }
    else if(className === "color"){
      textarea.style.color = value
    }
  }
}


function saveAsText(){
  let text = textarea.value
  const blob = new Blob([text], { type: "text/plain" });
  let a = document.createElement("a")
  a.download = "my-text.txt"
  a.href = URL.createObjectURL(blob)
  a.click()
}
