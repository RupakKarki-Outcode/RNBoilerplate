import axios, { AxiosInstance } from "axios"
import Config from "../../config"

const api: AxiosInstance = axios.create({
  baseURL: Config.API_URL,
})

// api.interceptors.request.use(async config => {
//   const sessionFromStorage = await AsyncStorage.getItem('session')

//   const session: ISession = await JSON.parse(sessionFromStorage as string)

//   if (session) {
//     config.headers!.Authorization = `Bearer ${session.token}`
//   }

//   return config
// })

export default api
