
// 下个单元工作
let nextUnitOfWork=null

function workLoop(deadline) {
    //输出阈值
    let shouldYield =false 
    while (nextUnitOfWork&&!shouldyield) {
        nextUnitOfWork =performUnitWork(
            nextUnitOfWork
        )
        shouldYield =deadline.timeRemaining()<1
    }
    requestIdleCallback(workLoop)
}
requestIdleCallback(workLoop)

function performUnitOfWork(nextUnitOfWork) {
    // todo something 我不知道
}


// 像上述代码一样，我们用requestIdleCallback()创建了一个循环，
// 它的作用类似于setTimeout()，它是一个浏览器内置的API，
// 它在浏览器主线程空闲时会被调用，从而执行里面的回调方法。
// 除此之外，requestIdleCallback()也给我们提供了一个deadline参数，
// 我们可以用它来检查浏览器控制某一个单元任务时所需要花费的时间。
// 由于Concurrent Mode在目前react版本里仅仅是一个测试阶段的东西，
// 所以在此处我们在项目开发时不建议使用，而且实际开发中大家用到的也不是特别多。
