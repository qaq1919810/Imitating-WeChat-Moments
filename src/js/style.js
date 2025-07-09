function style(){
    // 定义大盒子长宽
    let mainDiv = document.getElementById('main')
    if (innerWidth > innerHeight) {
        // alert('目前对于桌面端支持度较差建议移动设备使用\n如需桌面端使用建议把浏览器窗口大小调成手机比例然后刷新此页面')
        mainDiv.style.width = `${innerWidth * 0.45}px`
    } else {
        mainDiv.style.width = `${innerWidth}px`
    }
    window.mw = parseFloat(mainDiv.style.width)

    // 定义各个元素的样式
    let style = document.createElement('style')
    style.textContent = `
            /*小盒子*/
            .basicBlock {
                width: 100%;
                display: flex;
                border-width: 0.5px 0 0.5px 0;
                border-style: solid;
                border-color: #e3e3e3;
                padding: ${0.03 * mw}px ${0.036 * mw}px ${0.04 * mw}px ${0.05 * mw}px;
            }
            /*左半边*/
            .leftContent {
                width: ${0.1 * mw}px;
                height: 100%;
            }
            /*头像*/
            .avatar {
                display: inline-block;
                height: ${0.1 * mw}px;
                width: ${0.1 * mw}px;
                border-radius: ${0.01 * mw}px;
                background-color: skyblue;
            }
            /*右半边*/
            .rightContent {
                width: ${0.784 * mw}px;
                margin-left: ${0.03 * mw}px;
                height: 100%;
            }
            /*用户名*/
            .userName {
                color: #5b6d95;
                font-size: ${0.04 * mw}px;
                margin-top: ${0.0093 * mw}px;
            }
            /*用户信息*/
            .userMessage {
                margin-top: ${0.025 * mw}px;
                color: #1a1a1a;
                font-size: ${0.04 * mw}px;
            }
            /*发送时间*/
            .sendTime {
                font-size: ${0.033 * mw}px;
                margin-top: ${0.03 * mw}px;
                color: #b1b1b3;
            }
            /*更多*/
            .more {
                display: flex;
                justify-content: space-between;
            }
            /*用户点赞和评论按钮*/
            .userLikeAndCommentButton{
                position: relative;
                margin-top: ${0.03 * mw}px;
                width: ${0.08 * mw}px;
                height: ${0.05 * mw}px;
                background-color: #f7f8fa;
                border-radius: ${0.005 * mw}px;
                display: flex;
                justify-content: space-around;
                align-items: center;
                border-radius: ${0.008 * mw}px;
            }
            .userLikeAndCommentButton>:nth-child(2),
            .userLikeAndCommentButton>:nth-child(4){
                aspect-ratio: 1 / 1;
                background-color: #606688;
                border-radius: ${mw}px;
            }
            .userLikeAndCommentButton > :nth-child(-n+6){
                width: 20%;
                aspect-ratio: 1 / 1;
            }
            /*冒泡内容*/
            .popContent {
                position: absolute;
                background-color: #4c4c4c;
                left: -13%;
                transform: translateX(-100%);
                display: flex;
                align-items: center;
            }
            .popContent > div {
                width: 100%;
                height: 60%;
                display: flex;
                color: white;
            }
            /*点赞和评论按钮*/
            .popContent > div > div {
                width: 50%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            /*用户点赞和评论内容*/
            .userLikeAndComment {
                width: 100%;
                background-color: #f7f7f7;
                font-size: ${0.03 * mw}px;
            }
        `
    document.head.appendChild(style)
}