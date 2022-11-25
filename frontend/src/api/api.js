export const Api = {
    baseUrl:"http://localhost:3001/",
    // baseUrl:"https://ocean-jn-fullstack-22fb.onrender.com/",

    // Endpoints de itens
    itens:{
        endpoint:function(){
            return Api.baseUrl + "itens";
        },
        readAll:function(){
            return this.endpoint() + "/" ;
        },
        readById:function(){
            return this.endpoint + "/" + id;
        },     
        create: function(){
            return this.endpoint() + "/"
        
        },
        delete: function(){
            return this.endpoint() + "/" + id
        }
    },

    // Montar as requisições
    // GET
    buildApiGetRequest: function(url){
        return fetch(url,{
            method:"GET"
        })
    },

    buildApiPostRequest:function(url,body){
        return fetch(url,{
            method:"POST",
            body:JSON.stringify(body),
            headers: new Headers({
                "Content-Type":"application/json"
            })
        })
    },
    buildApiDeleteRequest:function(url,){
        return fetch(url,{
            method:"DELETE"
        })
    },
    
};