export class AppStorage {

    //si el día de mañana quiero migrar a un movil solo debo cambiar localStorage por AsyncStorage

    static async save(key, value){
        return localStorage.setItem(key,JSON.stringify(value));

    }
    static async get(key) {
        return  JSON.parse(localStorage.getItem(key));

    }
    static async remove(key){
        return localStorage.removeItem(key);
    }

    static async clear(){
        return  localStorage.clear();
    }



}