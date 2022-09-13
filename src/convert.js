export default (amount) => {
  const formatAmount = amount.split(' ') 

  const sum = formatAmount.reduce((acc, num) => {
    const number = numbers[num] ?? 0
    return number + acc
  },0)

  return sum
  
}



const numbers = {
  'um':  1,
  'dois': 2,
  'dez': 10,
  'vinte': 20
}