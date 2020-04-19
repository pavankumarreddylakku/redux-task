import axios from 'axios';

export default function UserRequest(data){
    return dispatch =>{
        return axios.post('https://stageapi.skuops.com/users/login',data,
        {
            headers: {
              'x-access-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaWQiOiIzIiwiY25hbWUiOiJzbGlja28gcHZ0IGx0ZCIsImlkIjoiMiIsIm5hbWUiOiJ1bmRlZmluZWQgdW5kZWZpbmVkIiwiZW1haWwiOiJzdW5mYWNlQGdtYWlsLmNvbSIsInJvbGVzIjpbImJ1eWVyIl0sInJlcG9ydGVkSWQiOltdLCJpYXQiOjE1MzM2NjY0MTAsImV4cCI6MTUzMzY3MTQxMH0.SqD5olIXqzAXnTslbAdJxV0qQCWEc5ATJanDPbKTiQ0",
              'content-type':"application/json",
              'Accept':'application/json'
    }
})
    }
}

