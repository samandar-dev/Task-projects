
let elemArr = ['{}', '[]', '()'] // saralash belgilari --/-- sorting elements
const form = document.querySelector('#form')
const input = document.querySelector('#input')
const output = document.querySelector('#output')

form.addEventListener('submit', FormHandler)

// = = = = = input changes handler = = = = =
function FormHandler(e) {
  e.preventDefault()
  let func = Str_is_Check(input.value, elemArr)
  output.innerHTML = `Output: <span style="color: ${func ? 'green' : "red"}">${func ? 'YES' : "NO"}</span>`
}

// = = = = = input change value check handler = = = = =
function Str_is_Check(value, elemArr) {
  let i = 0
  while (i < elemArr.length) {
    value = value.split(elemArr[i]).toString().replaceAll(",", " ").trim()
    i++;
  }
  return value === ""
}

/*
Belgilarni array qilib ishlaganim sababi, har bir belgi uchun (if or else) ishlatmasdan While yordamida yana bir qancha belgilarni tekshirish mumkinligi uchun.
ex: let elemArr = ['Green', '+', '!', '$', '@']
*/