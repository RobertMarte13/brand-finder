
const getCardsList = async () => {
  const res = await fetch('/cards_list.json')

  return res.json()
}

export default getCardsList
