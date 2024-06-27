/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript"
*/

function capitalizeWords(str) {
  let newStr = ''

  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      newStr += str[0].toUpperCase()
    } else if (str[i - 1] === ' ') {
      newStr += str[i].toUpperCase()
    } else {
      newStr += str[i]
    }
  }

  return newStr
}
