export const getItem = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key))
  } catch (error) {
    console.log(`Ошибка получения данных из localStorage ${error.message}`)
    return null
  }
}

export const setItem = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data))
  } catch (error) {
    console.log(`Ошибка сохранения данных в localStorage ${error.message}`)
  }
}
