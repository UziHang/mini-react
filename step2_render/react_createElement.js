

//   创建 createElement 方程  ...保证children 永远是数组https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/rest_parameters


function createElement(type,props,...children) {
    return {
        type,
        props:{  //动态拼接 数组
            ...props,
            children:children.map(child =>
                typeof child ==='object' ? //不是对象就创造文本
                child
                : createTextElement(child)
                )
        }
    }
}

// 不是对象的内容创建一个独立的元素，并为其创建一个特殊的类型： TEXT_ELEMENT 

function createTextElement (text) {
    return {
        type:'TEXT_ELEMENT',
        props:{
            nodeValue:text,
            children:[]
        }
    }
}










