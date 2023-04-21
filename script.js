// var input-1 = document.getElementById("input")
// var add = document.getElementById("add")
// var remove = document.getElementById("removes")
// var names = document.getElementById("names")

// add.addEventListener("click", function(){

//     if(input-1.value){
//         var name = document.createElement("th")
//         name.innerText = input.value
//         names.append(name)

//         // Isvalo input
//         input.value = ""
//     } else {
//         alert("laukelis tuscias")
//     }
// })

// remove.addEventListener("click", function(){
//     var p = document.getElementsByTagName("p")
   

//     if(p.length){
//         p[p.length - 1].remove()
//     } else {
//         alert("nebera ka trinti")
//     }
// })

let btnAdd = document.querySelector('button');
let table = document.querySelector('table');

let nameInput = document.querySelector('#name');
let lastNameInput = document.querySelector('#last_name');
let ageInput = document.querySelector('#age');
let btnRemoveLast = document.getElementById('remove-last');
let btnRemove = document.getElementById('remove');


btnAdd.addEventListener('click', () => {
    let name = nameInput.value;
    let lastName = lastNameInput.value;
    let age = ageInput.value;

    if(age <= 0){
        alert("neteisingai ivestas amzius")
    } else {
        let template = `
                        <tr>
                            <td>${name}</td>
                            <td>${lastName}</td>
                            <td>${age}</td>
                        </tr>`
        
        table.innerHTML += template;
    }

});

btnRemoveLast.addEventListener("click", function(){
    var tr = document.getElementsByTagName("tr")
   

    if(tr.length){
        tr[tr.length - 1].remove()
    } else {
        alert("nebera ka trinti")
    }
})

btnRemove.addEventListener("click", function(){
    var tr = document.querySelector("tbody tr")
    tr.remove()
   
})

