import axios from 'axios';

export class StoreRepository{

    url = "https://api.johnlawrimore.com/store/products";
    config = {
        headers:{
            Authorization: 'rachel'
        }
    };

    getProductById(id){
        return new Promise((resolve,reject)=>{
            axios.get(`${this.url}/${id}`, this.config)
            .then(x=>resolve(x.data))
            .catch(x=>{
                alert(x);
                reject();
            });            
        });
    }

    getProducts(){
        return new Promise((resolve,reject)=>{
            axios.get(`${this.url}`, this.config)
                .then(x=>resolve(x.data))
                .catch(x=>{
                    alert(x);
                    reject();
                });
        });
    }
    
    addReview(review, id){
        return new Promise((resolve,reject) =>{
            axios.post(`${this.url}/${id}/reviews`,review,this.config)
                .then(x=> resolve(x.data))
                .catch(x=>{
                    alert(x);
                    reject();
                });
        });
    }


    
    //getAccounts funciton needs to be added here... 
    // getReviews(){
    //     return new Promise((resolve,reject)=>{
    //         axios.get(`${this.url}`, this.config)
    //             .then(x=>resolve(x.data))
    //             .catch(x=>{
    //                 alert(x);
    //                 reject();
    //             });
    //     });
    // }

    // updateReview(id, review){
    //     return new Promise((resolve,reject) =>{
    //         axios.put(`${this.url}/${id}`,review,this.config)
    //             .then(x=> resolve(x.data))
    //             .catch(x=>{
    //                 alert(x);
    //                 reject();
    //             });
    //     });
    // }
    

    // deleteReview(id){
    //     return new Promise((resolve,reject) =>{
    //         axios.delete(`${this.url}/${id}`, this.config)
    //             .then(x=> resolve(x.data))
    //             .catch(x=>{
    //                 alert(x);
    //             });
    //     });
    // }

}

