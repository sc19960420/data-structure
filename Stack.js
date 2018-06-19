/**
 * Stack
 * 2018-06-15
 * sun sir
 * 
 * 后入先出
 */

let CircleStack = function (capacity){

    this.Stack = new Array(capacity);
    this.StackSize = capacity;  //栈内容量
    this.StackTop = 0;  //栈顶 == 栈中个数


    // 重定义this 指向  在方法内部使用
    let _this = this;


    // 释放内存  销毁栈
    this.destroyStack  = function(){
        _this.Stack.splice(0,_this.StackSize);
        _this.Stack = null; // 清除地址
    };

    // 判断当前栈 是否为空
    this.isStackEmpty = function (){
        if(_this.StackTop === 0){
            console.log('当前栈内为空')
            return true;
        }
        return false;
    }

    // 判断当前栈  是否已满
    this.isStackFull = function (){
        if(_this.StackTop == _this.StackSize){
            console.log('当前栈内已满')
            return true;
        }
        return false;
    }

    // 清空当前栈
    this.clearStack = function () {
        
        _this.Stack.splice(0,_this.StackSize);
        _this.StackTop = 0;
    }

    // 获取当前栈  已有元素
    this.getStackLength = function (){
        console.log(_this.StackTop);
        return _this.StackTop;
    }

    // 入栈
    this.enStack = function (element){
        if(_this.isStackFull()){
            return false;
        }
        _this.Stack[_this.StackTop] = element;
        _this.StackTop ++;
        return true;
    }

    // 出栈
    this.deStack = function (element){
        if(_this.isStackEmpty()){
            return false;
        }
        _this.StackTop --;
        element = _this.Stack[_this.StackTop];
        return true;
    }

    // 遍历栈内元素
    this.traverseStack = function (){
        var StackStr = '';
        for(let index = 0; index < _this.StackTop ; index ++){
            StackStr += _this.Stack[index] + ',';
            // console.log(_this.Stack[index]);
        }
        console.log(StackStr);
    }
}

let ins = new CircleStack(5);

// ins.isStackEmpty();

ins.enStack(5);
ins.enStack(10);
ins.enStack(15);
ins.enStack(20);
ins.enStack(25);

ins.deStack(5);
// ins.getStackLength();
ins.getStackLength();


ins.traverseStack();