import axios from "axios";

const BIAN_API_BASE_URL = "http://192.168.0.113:8080/api/v1/";
const LOGIN = 'login';
const CREATE_ACCOUNT = 'createAccount';
const ACCOUNT_DETAILS_BY_ID = 'accountDetailsById';
const CUSTOMER_DETAILS_BY_ID = 'customerDetailsById';

class BianService {

    validateLoginDetails(userDetails){
        return axios.post(BIAN_API_BASE_URL + LOGIN, userDetails);
    }

    getAccountDetailsById(accountId){
        console.log('accountId ----> '+ accountId)
        console.log('url ---> '+ BIAN_API_BASE_URL + ACCOUNT_DETAILS_BY_ID  + '/' + accountId)
        return axios.get(BIAN_API_BASE_URL + ACCOUNT_DETAILS_BY_ID  + '/' + accountId);
    }

    createAccount(userDetails){
        return axios.post(BIAN_API_BASE_URL + CREATE_ACCOUNT, userDetails);
    }

    getCustomerDetailsById(accountId){
        
        console.log('url ---> '+ BIAN_API_BASE_URL + CUSTOMER_DETAILS_BY_ID  + '/' + accountId)
        return axios.get(BIAN_API_BASE_URL + CUSTOMER_DETAILS_BY_ID + '/' + accountId);
    }

}


export default new BianService()