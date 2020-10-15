import {getData} from "../utils/http"

const search = {
  searchData(city,content){
    return getData(`/api/search?city=${city}&content=${content}`)
  }
}

export default search