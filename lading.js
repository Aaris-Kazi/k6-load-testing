import http from 'k6/http';
import {sleep, check} from 'k6';


const url = "https://zulfikaar.com/"

module.exports.options = {
    scenarios: {
        open_model: {
            executor: "constant-arrival-rate",
            rate: 10,
            timeUnit: '1s',
            duration: "10s",
            preAllocatedVUs: 5
        }
    }
}

module.exports.default = function () {
    // const payload = JSON.stringify({})
    // http.post(url, payload)
    const response = http.get(url)
    sleep(1)
    // check(response, {"RESPONSE WAS 200": (response) =>{
    //     response.status == 200
    // }})
}