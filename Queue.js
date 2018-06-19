/**
 * CircleQueue
 * 2018-06-14
 * sun sir
 * 
 * 先入先出
 */

let CircleQueue = function (capacity){

    this.queue = new Array(capacity);   // 队列数组
    this.queueCapacity = capacity;   // 队列容量
    this.queueHead = 0;  // 队头
    this.queueTail = 0;  // 队尾
    this.queueLength = 0;    // 队列长度

    // 重定义this 指向  在方法内部使用
    let _this = this;

    /***
     * 销毁队列
     * 删除队列中的所有元素
     */
    this.destroyQueue  = function(){
        _this.queue.splice(0,_this.queue.queueLength);
        _this.queue = null; // 清除地址
    };

    /**
     * 清空队列
     * _this.queue.splice(0,_this.queue.queueLength) 这一步并不是必要的，因为队列的头、尾和长度一旦全部置为0，就已经找不到之前的数据了
     */
    this.clearQueue = function (){
        _this.queueHead = 0;
        _this.queueTail = 0;
        _this.queueLength = 0;
    }

    /**
     * 判断队列是否为空
     * 为空 return true   不为空  return false
     */
    this.isQueueEmpty = function (){
        return _this.queueLength === 0 ;
    }

    /**
     * 判断队列内容是否达到最大长度
     * 队列容量等于队列长度 return true
     */
    this.isQueueFull = function (){
        return _this.queueCapacity === _this.queueLength;
    }

    // 获取队列长度
    this.getQueueLength = function (){
        return _this.queueLength;
    }

    // 入队
    this.enQueue = function (element){
        // 判断队列是否已满
        if(_this.isQueueFull()){
            console.log('入队失败，队列已满 入队元素为 element = ' + element);
            return false;
        }
        _this.queue[_this.queueTail] = element;
        _this.queueTail ++ ;
        _this.queueTail = _this.queueTail % _this.queueCapacity;
        _this.queueLength ++;
        return true;
    }

    // 出队
    this.deQueue = function (element){
        if(_this.isQueueEmpty()){
            // 队列为空
            return false;
        }
        element = _this.queue[_this.queueHead];
        _this.queueHead ++ ;
        _this.queueHead = _this.queueHead % _this.queueCapacity;
        _this.queueLength --;
        return element;
    }

    // 遍历队列
    this.traverseQueue = function (){
        for(let index = _this.queueHead; index < _this.queueLength + _this.queueHead; index ++){
            let element = _this.queue[index % _this.queueCapacity];
            console.log(element);
        }
    }
}

let students = function (name,age,sex){
    this.name = name;
    this.age = age;
    this.sex = sex;
}
let zhangsan = new students('张三',18,'男');
console.log(zhangsan);

let ins = new CircleQueue(5);
ins.enQueue(10);
ins.enQueue(12);
ins.enQueue(16);
ins.enQueue(18);
ins.enQueue(20);


ins.deQueue(10)
ins.deQueue(12)
ins.deQueue(16)


// ins.enQueue(10);
// ins.enQueue(12);
// ins.enQueue(16);

// js 是弱类型语言  队列操作 没有明显的类区分  int String 等 类型不限
ins.traverseQueue();
// console.log(ins);