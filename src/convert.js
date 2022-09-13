export default (amount) =>{
  const [valueInt, cents] = amount.split(/reais|real/gi)
  const [million, real] = valueInt.includes('mil') ?  valueInt.split(/mil/gi) : [0, valueInt]
  const valueMillion = identifyAmount(million) * 1000 
  const intValue = identifyAmount(real) + valueMillion
  const decimalValue = identifyAmount(cents)
  const formatValue = `${intValue}.${decimalValue}`
  return Number(formatValue)
}

const identifyAmount = (amount) => {
  const formatAmount = String(amount || '').split(' ') 

  const sum = formatAmount.reduce((acc, num) => {
    const number = numbers[num.toLowerCase()] ?? 0
    return number + acc
  }, 0)

  return sum
  
}



const numbers = {
  'um':  1,
  'dois': 2,
  'três': 3,
  'quatro': 4,
  'dez': 10,
  'dezoito': 18,
  'vinte': 20,
  'trinta': 30,
  'cinquenta': 50,
  'cento': 100,
  'quinhentos': 500,
  'mil': 1000
}