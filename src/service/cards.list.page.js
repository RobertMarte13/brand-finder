export const getAllCardsPages = async (page) => {
  const res = await fetch('/page_list_cards.json')

  return res.json()
}
