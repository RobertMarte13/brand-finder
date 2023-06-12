
const getCardsListDetails = async () => {
  const res = await fetch('/cards_list_details.json')

  return res.json()
}

export default getCardsListDetails
