import _axios from 'axios'

const API_URL = process.env.BZX_API_URL

const axios = _axios.create({
  baseURL: API_URL,
  timeout: 15000,
})

export interface IProduct {
  sku: string
  name: string
  categoryName: string
  image: string
  ingredients: string
  price: number
  unitsPerCase: number
  casesPerPallet: number
  nutritionalValue: number
  transportConditions: string
  shelfLife: number
  shelfLifeAfterOpening: number
}

export interface IProducer {
  name: string
  logo: string
  originCountry: string
  currency: string
  companyAddress: string
  factoryAddress: string
  warehouseAddress: string
  moq: string
}

/**
 * Try to get the original error message from server.
 * @param {Error} error Error from a request
 */
function normalizeRequestError(error: any) {
  if (error && error.response && error.response.data) {
    const errorData = error.response.data
    if (errorData.message) {
      error.message = errorData.message
    }
    if (errorData.errorCode) {
      error.code = errorData.errorCode
    }
  }
  return error
}

/**
 * Returns an array with merch from OOKI shop
 */
export const getProducers = async () => {
  try {
    const requestUrl = `${API_URL}/producers`
    const resp = await fetch(requestUrl)
    const responseJson = await resp.json()
    return responseJson
  } catch (err) {
    throw normalizeRequestError(err)
  }
}
