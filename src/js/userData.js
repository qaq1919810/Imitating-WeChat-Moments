async function getUserData(){
    window.avatarData = "../../public/media/avatar/"
    /**
     * @type {{userName: string, userAvatar: string, userMessage: string, sendTime: string}[]}
     */
    window.userData = undefined
    await fetch("../../public/data/default.json").then(res => res.json()).then(res => window.userData = res)
}