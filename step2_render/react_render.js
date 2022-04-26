







// 最基础
function render1(element, container) {
    //使用react_createElement的element对象创造DOM
    const dom = document.createElement(element.type)


    //  绑定到dom上
    container.appendChild(dom)
}
// 递归createElement 那里封装的
function render2(element, container) {

    //使用react_createElement的element对象创造DOM
    const dom = document.createElement(element.type)

    // 递归为每个child创造dom
        element.props.children.forEach(child => render2(child.dom))

    //  绑定到dom上
    container.appendChild(dom)
}

// 处理文本元素   见react_createElement
function render3(element, container) {
    // 判断是否为TEXT_ELEMENT (不是对象就创造文本节点)
    const dom = element.type === 'TEXT_ELEMENT'
        ? document.createTextNode('')
        : document.createElement(element.type)

    // 递归为每个child创造dom
    element.props.children.forEach(child => render3(child.dom))

    //  绑定到dom上
    container.appendChild(dom)
}



//  给element props 分配DOM node
function render(element, container) {
    // 判断是否为TEXT_ELEMENT (不是对象就创造文本节点)
    const dom = element.type === 'TEXT_ELEMENT'
        ? document.createTextNode('')
        : document.createElement(element.type)


  // 将 element props 分配给 DOM node
    const isProperty = key => key !== 'children'
    Object.keys(element.props)
        .filter(isProperty)  //下面会递归来children
        .forEach(name =>
            dom[name]=element.props[name]
        )

    // 递归为每个child创造dom
    element.props.children.forEach(child => render(child.dom))

    //  绑定到dom上
    container.appendChild(dom)
}

 //  为自己的React 库起个名字
 const MyReact = {
    createElement,
    render,
    render1,
    render2,
    render3
}


/** @jsx MyReact.createElement */
const element =MyReact.createElement(
    'div',
    {id:'foo'},
    MyReact.createElement('div',null,'bar'),
    MyReact.createElement('h1')
    )

    
    console.log(element);


 const container =document.getElementById('root')

    MyReact.render(element,container)
      


