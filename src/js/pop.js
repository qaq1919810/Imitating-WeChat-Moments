// 点赞评论冒泡处理
let popStatus = false

function popMore(e) {
    // noinspection CssInvalidPropertyValue
    const popButton = `
                <div class="popContent" style="width: ${0.48 * mw}px; height: ${0.1 * mw}px;border-radius: ${0.008 * mw}px;">
                    <div style="font-size: ${0.033 * mw}px;">
                        <div style="border-right: 0.5px solid #858585;" onclick="userLike(this)">赞</div>
                        <div style="border-left: 0.5px solid #858585;" onclick="userComment(this)">评论</div>
                    </div>
                </div>
            `
    const popButtonBack = `
                <div></div><div></div><div></div><div></div><div></div>
            `
    // 清除上次监听
    document.removeEventListener("click", clc)
    document.removeEventListener("scroll", scr)
    if (popStatus) {
        popStatus = false
        e.innerHTML = popButtonBack
    } else {
        popStatus = true
        e.innerHTML += popButton
        // 等待当前点击完成后再监听外部点击（否则点自己也被当成外部）
        setTimeout(() => {
            document.addEventListener("click", clc)
        }, 0)
        document.addEventListener("scroll", scr)
    }

    function clc() {
        popStatus = false
        e.innerHTML = popButtonBack
        document.removeEventListener("click", clc)
        document.removeEventListener("scroll", scr)
    }

    function scr() {
        popStatus = false
        e.innerHTML = popButtonBack
        document.removeEventListener("click", clc)
        document.removeEventListener("scroll", scr)
    }
}



// 没做呢会有的😭
function userLike(e) {

}

function userComment(e) {

}