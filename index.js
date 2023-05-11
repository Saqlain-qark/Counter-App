let saveEl = document.getElementById("save-el")

let countEl = document. getElementById("count-el")
let count = 0

function increment() {
count += 1
countEl.innerText = count //here also we can use textContent
}

function save() {
    let records =  " " + count
    saveEl.innerText += records + " - " //instead we can use textContent and then add '(" + ")' part next to count to make space after colon
    count = 0
    countEl.innerText = count

}
