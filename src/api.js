import axios from 'axios'
// require ('dotenv').config({path: './.env'})

// for user authetication workflow
const userP = async()=>{
    const resp = await axios.get(`https://unsplash.com/oauth/authorize`,{
        headers:{
            AccessCredentials: true,
            'Access-Control-Allow-Origin':'*'
        },
        params:{
            client_id: process.env.CLIENT_ID,
            redirect_uri: process.env.REDIRECT_URL,
            response_type: 'code',
            scope: process.env.SCOPE
        }
    })


    // const response = await axios.post(`https://unsplash.com/oauth/token`,{
    //     headers:{
    //         AccessCredentials: true,
    //     },params:{
    //         client_id: process.env.CLIENT_ID,
    //         client_secret: process.env.CLIENT_SECRET,
    //         redirect_uri:process.env.REDIRECT_URL,
    //         code: '',//here code is our output from get request
    //         grant_type: 'authorization_code'
    //     }
    // })
    return resp;
}


// POST /photos/:id/like
const likeImg =async(id)=>{
    //this is the way to make links dynamic
    const response = await axios.post(`https://api.unsplash.com/photos/${id}/like`,{
        headers:{
            Authorization: 'Bearer ' //Bearer token received after post request
        },
        params:{
            id: id,
            write_likes:true	
        }
    })
    return response;
} 

//dislike img with http request
const dislikeImg =async (id)=>{
    const response = await axios.delete(`https://api.unsplash.com/photos/${id}/like`,{
        headers:{
            Authorization: 'Bearer ' //Bearer token received after post request
        },
        params:{
            id:id
        }
    })
    return response;
}

const randomImage = async (term) =>{
    const response = await axios.get('https://api.unsplash.com/photos/random',{
        headers:{
            // Authorization: `Client-ID ${process.env.CLIENT_ID}`
            Authorization: `Client-ID INDrqgaLyHpPQOS4Bn8sZ6nGPlAtbSEXRSWD2fozPVE`
        },
        params:{
            // count:2,
            //with term selecting random images
            query:term
        }
    })
    // console.log('From randomImage in api',response)
    return response.data;
}

//Note we are taking term as parameter not prop
const searchImage = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization: 'Client-ID INDrqgaLyHpPQOS4Bn8sZ6nGPlAtbSEXRSWD2fozPVE'
        },
        params:{
            query: term,
            per_page:15
        }
    })  
    return response.data.results;
}

export {randomImage,searchImage,likeImg,dislikeImg,userP}