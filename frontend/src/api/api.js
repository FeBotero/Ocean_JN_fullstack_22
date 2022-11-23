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
            return this.endpoint + "/:id";
        },       
    },

    // Montar as requisições
    // GET
    buildApiGetRequest: function(url){
        return fetch(url,{
            method:"GET"
        })
    }
};