import Axios from "axios";

const Api = Axios.create({
    baseURL: 'https://autoluby.k8s.luby.me/'
})

export default Api