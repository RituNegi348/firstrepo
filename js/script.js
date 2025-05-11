function change(){
    //  document.getElementById("counter")
    // var text = count.textContent;
    // var num = Number(text);
    // count.innerHTML = num+1
    const image = document.getElementById("img");
    image.src = `C:\\Users\\ritun\\OneDrive\\Pictures\\DSCF3181.JPG`
    image.style.width = "100px"
    image.style.height = "auto"
}

function fun(){
    console.log(this.textContent)
}

function changeHandler(e){
    const text = e.target.value;
    let name = document.createElement("p");
    name.innerHTML = "name: "+ text;
    name.style.color = "red";
    name.style.background = "yellow"
    name.addEventListener("click",fun);
    document.body.append(name)
    console.log(document.title)
}

