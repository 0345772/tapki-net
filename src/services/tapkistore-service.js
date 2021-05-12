import {data} from '../data.json'

export default class TapkistoreService {
  getTapkis() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data)
        reject(new Error('Something bad happened!'))      
        
      }, 500)
    })
  }
}