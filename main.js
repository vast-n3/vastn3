// axios api
let config = {
    baseURL: '{{base}}api.v1/',
    timeout: 8000,
    headers: {'X-Custom-Header': 'foobar'}
};
if(localStorage.token){
    config.headers.Authorization = `Bearer ${localStorage.token}`;
}

const api = axios.create(config);

// "session" mixin

const session = {
    data: function(){
        return {
            token: localStorage.token,
            validThrough: localStorage.validThrough,
            user: {},
            expiration: new Date(Number(localStorage.validThrough))
        }
    },
    created(){
      try{
          this.user = JSON.parse(localStorage.user);
      } catch (e) {
          this.user = {}
      }
    },
    methods: {
        refreshToken: function(){
            api.put('login').then(result =>{
                ['token','validThrough'].forEach((prop) => {
                    localStorage.setItem(prop,result.data[prop]);
                    this._data[prop] = result.data[prop];
                });
            })
        }
    }
};
