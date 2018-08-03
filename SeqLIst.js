/**
 * List （顺序表）
 * 2018-08-02
 * sun sir
 */

let SeqList = function (capacity){

    this.List = new Array(capacity);
    this.ListSize = capacity;
    this.ListLength = 0;
    
    // 清空顺序表
    this.clearList = function (){
        this.ListLength = 0;
    }

    // 判断顺序表是否为空
    this.ListEmpty = function (){
        return this.ListLength == 0;
        // if(this.ListLength == 0){
        //     return true;
        // }else{
        //     return false;
        // }
    }
   
    // 获取顺序表的长度
    this.getListLength = function (){
        console.log('length : ' + this.ListLength);
        return this.ListLength;
    }


    this.getListElement = function (index,ele){
        
        if(index < 0 || index >= this.ListSize){
            return false;
        }
        ele = this.List[index]
        return true;
    }

    // 定位一个元素
    this.locateElement = function (ele){
        // js 中 可用some方法代替
        for(var i = 0 ; i < this.ListLength ; i ++){
            if(this.List[i] == ele){
                return i;
            }else{
                return -1;
            }
        }
    }

    // 获取指定元素的前驱
    this.getPriorElement = function (ele){
        var temp = this.locateElement(ele)
        if(temp == -1){
            return false;
        }else{
            if(temp == 0){
                return false;
            }else{
                var proirEle;
                proirEle = this.List[temp - 1];
                console.log(proirEle);
                return true;
            }
        }
    }
    // 获取指定元素的后继
    this.getNextElement = function (ele){
        var temp = this.locateElement(ele)
        if(temp == -1){
            return false;
        }else{
            if(temp == this.ListLength - 1){
                return false;
            }else{
                var nextEle;
                nextEle = this.List[temp + 1];
                console.log(nextEle);
                return true;
            }
        }
    }

    // 遍历顺序表
    this.TraverseList = function (){
        var ListStr = ''
        for(var i = 0 ; i < this.ListLength ; i ++ ){
            ListStr += this.List[i] + ''
        }
        console.log(ListStr);
    }

    // 在某一位置插入元素
    this.InsertList = function (index,ele){

        if(index < 0 || index > this.ListLength){
            return false;
        }
        for(var k = this.ListLength - 1 ; k >= index ; k --){
            this.List[k + 1] = this.List[k]; 
        } 
        this.List[index] = ele;
        this.ListLength ++;
        return true;
    }


    // 在某一位置删除元素
    this.DeleteList = function (index,ele){
        if(index < 0 || index >= this.ListLength){
            return false;
        }
        ele =  this.List[index];
        for(var k = i + 1 ; k < this.ListLength ; k ++){
            this.List[k - 1] = this.List[k]
        }

        this.ListLength --;
        return true;
    }


    // 销毁顺序表
    this.destroyList = function (){
        delete this.List;
        this.List = null;
    }
}

var newList = new SeqList(10);

var e1 = 3;
var e2 = 5;
var e3 = 7;
var e4 = 6;
var e5 = 9;
var e6 = 1;
var e7 = 8;
newList.InsertList(0,e1);
newList.InsertList(1,e2);
newList.InsertList(2,e3);
newList.InsertList(3,e4);
newList.InsertList(4,e5);
newList.InsertList(5,e6);
newList.InsertList(6,e7);

newList.getListLength();

newList.getNextElement(3);
newList.getPriorElement(8);

newList.TraverseList();