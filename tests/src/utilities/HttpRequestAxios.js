const axios=require('axios');
async function GetRequest(getData){
    try{
        const response=await axios.get(getData.url,{
            headers:getData.headers
        })
        return response;
    }catch(err){
        throw err;
    }
}

async function PostGraphQLRequest(postData){
    try{
        const response = await axios.post(postData.url, {
            query:postData.query
          }, {
              headers: postData.headers
            })  
        return response;
    }catch(err){
        throw err;
    }
}

async function PostRequest(postData){
    try{
        const response = await axios.post(postData.url,postData.body,{
            headers:postData.headers
        });
        return response;
    }catch(err){
        throw err;
    }
}

async function PutRequest(putData){
    try{
        const response = await axios.put(putData.url,putData.body,{
            headers:putData.headers
        });
        return response;
    }catch(err){
        throw err;
    }
}

async function DeleteRequest(deleteData){
    try{
        const response=await axios.delete(deleteData.url,{
            headers:deleteData.headers
        })
        return response;
    }catch(err){
        throw err;
    }
}
export {GetRequest,PostRequest,PutRequest,DeleteRequest,PostGraphQLRequest};