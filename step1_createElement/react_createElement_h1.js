
/* 
const element = <h1 title="foo">Hello</h1>
const container = document.getElementById("root")
ReactDOM.render(element, container) 
*/




const container = document.getElementById("root")

// react elements  理解为react 虚拟dom
const element = {
    type:'h1',   //createElement 时的tagName
    props:{ //jsx attributes 所有的键值对 
        title:'foo',  //
        children:'hello Uzihang'  // 通常包含更多elements 数组
    }
}

//  添加一个dom节点
const node = document.createElement(element.type)
node["title"] =element.props.title

// 添加一个文字节点
const text =document.createTextNode('')
text['nodeValue']=element.props.children

//文字节点text 添加到 h1 dom节点上
node.appendChild(text)

//dom 节点添加到 container 上
container.appendChild(node)