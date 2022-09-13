export default (amount) => {
  const formatAmount = amount.split(' ')

  return numbers[formatAmount[0]]
  
}

const numbers = {
  'um':  1,
  'dez': 10
}