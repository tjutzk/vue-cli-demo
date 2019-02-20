export default {
    // 置空 数组
    emptyArray(arr) {
        return arr.every((item, index) => {
            return !item || item === undefined || item === "";
        });
    },
    //判断一个对象是否为空,为空返回true
    isNull(obj){
        //字符串类型不能使用instanceof判断
        if(typeof(obj) === "string"){
            return obj === "" ? true : false
        }
        if (obj instanceof Array){
            return obj.length == 0 ? true : false
        }
        if (obj instanceof Number){
            return String(obj) == '' ? true : false
        }
        if(obj instanceof Object){
            return Object.keys(obj).length == 0 ? true : false 
        }

    },
    //判断一个对象在包含许多对象的数组中是否存在,存在返回true
    isExistObj(json1,arr){
        if(JSON.stringify(arr).indexOf(JSON.stringify(json1))==-1){
            return false;
        }else{
            return true;
        }
    },
    //将一个对象添加到数组中,如果这个对象已经在数组中直接修改相关value值
    addObjToArray(key,json1,arr){
        if(arr.length == 0 || !this.isExistObj(json1, arr)){
            arr.push(json1)
            return
        }

        if(this.isExistObj(json1, arr)){
            arr.forEach((item)=>{
                if(item[key] === json1[key]){
                    item = json1
                }
            })
            return
        }
    },
};
