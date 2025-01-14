console.log(document.getElementsByTagName('h1')[0].innerHTML = "New Text")

let color_button = document.getElementById('color-button')
console.log(color_button)

function color_change(){
    let header_text = document.getElementsByTagName('h1')[0].innerHTML
    if(header_text == 'New Text') {
        document.getElementsByTagName('h1')[0].className = 'color-change'
    } else {
        header_text = 'Something Else'
    }
}

color_button.addEventListener('click', color_change)

let button = document.createElement('button')
let button_display = document.createElement('h2')

button.innerHTML = "I am alive!"
document.body.append(button)

button.addEventListener('click', function() {
    button_display.innerHTML = "More JS info here..."
    document.body.append(button_display)
})

const source = document.querySelector('div.source');
source.addEventListener('copy', ( event ) => {
    console.log(ClipboardEvent)
    const selection = document.getSelection();
    event.clipboardData.setData('text/plain', selection.toString().toLowerCase())
    event.preventDefault();
})

const form = document.querySelector('#testDataForm')

form.addEventListener('submit', ( event ) => {
    let query_first = document.querySelector('#first-name')
    let query_last = document.querySelector('#last-name')
    let first_name = event.path[0][0].value;
    let last_name = event.path[0][1].value;
    console.log(event)
    console.log(first_name, last_name)
    console.log(`This came from the query selector: ${query_first.value}, ${query_last.value}`)
})