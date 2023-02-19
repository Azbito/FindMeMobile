import axios from 'axios'

export async function getPostalCode(code: number | string) {
  try {
    const { data } = await axios.get(`https://viacep.com.br/ws/${code}/json/`)
    console.log(data)
    return data
  } catch (err) {
    console.log(err)
    return err
  }
}
