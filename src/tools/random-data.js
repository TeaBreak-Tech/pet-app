const profile_picture_addresses = [
    "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=577964280,3915570273&fm=11&gp=0.jpg",
    "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3986743611,3563403135&fm=11&gp=0.jpg",
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591856832785&di=04510375f6f9a935dfa63555d822f0c1&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201805%2F21%2F20180521223327_epuax.jpeg",
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591856832785&di=f0ae1c1afec128d021f131a3b5087009&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201503%2F14%2F20150314210331_sNT8z.jpeg",
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591856832785&di=df7a5b2721160a6411792b32e300e5c3&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fbde477ea5a56ebd9d526d186b058a35115add2acf218-FjiUbW_fw658",
    "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1912326405,1374665325&fm=11&gp=0.jpg",
    "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2914867381,2544818320&fm=11&gp=0.jpg",
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591856832785&di=61d770ea2465053bef0165e8ce422a66&imgtype=0&src=http%3A%2F%2Fa-ssl.duitang.com%2Fuploads%2Fitem%2F201503%2F14%2F20150314210304_weyB5.thumb.700_0.jpeg",
    "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2174996434,3110335964&fm=26&gp=0.jpg",
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591856832785&di=98ee58266f0e63d1aa4034463b371418&imgtype=0&src=http%3A%2F%2Fpic2.zhimg.com%2F50%2Fv2-e67071490b229107749a22f99d85dd43_hd.jpg",
]

const usernames = [
    "懂你的悲伤",
    "陌路",
    "斯文禽兽",
    "晚安晚安",
    "伤、却美╮",
    "旧心酸。",
    "我们的约定",
    "牵痛了手づ",
    "夜夜醉っ",
    "时光ヽ",
]


export const randomUser = () => {
    random = Math.floor(Math.random() * 10)
    user_id = Math.floor(Math.random() * 1000000)
    return{
        user_id:user_id,
        username:usernames[random],
        profile_picture:profile_picture_addresses[random],
        signature:"个性签名示例"
    };
}

export const getUser = (n) => {
    random = n%10
    user_id = Math.floor(Math.random() * 1000000)
    return{
        user_id:user_id,
        username:usernames[random],
        profile_picture_address:profile_picture_addresses[random],
        signature:"个性签名示例"
    };
}

// 
export const randomUsers = (n) => {
    return new Array(n).fill('').map((item, index) => {
        return getUser(index)
    });
}

export const randomPublish = (n) => {
    return new Array(n).fill('').map((item, index) => {
        return {
            id:index+1,
            author: getUser(index),
            images:[
                {id:1,uri:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592556455647&di=d0d0f86cdaa6f17075823082dc99cddf&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F3%2F4fcebb779ffbd.jpg"},
            ],
            text: '动态'+index+1+'：偷拍儿子睡觉的n种方式\n啊呢哦弄哦i美女客服女看出v的那我去我就你的口味v口味默认v我们v人能不能',
            tags:[
                {id:1,title:"猫猫"},
                {id:2,title:"日常"},
                {id:3,title:"打卡"},
            ],
            interactions:{
                view:"1.2k",
                like:"840",
                favorite:"24",
                comment:[{author:getUser(index+1),content:"学到了学到了"},{author:getUser(index+2),content:"哇，好可爱"}]
            }
        };
    });
};

export const getRandomData = () => {
    return new Array(100).fill('').map((item, index) => {
        return {
            id:index + 2,
            title: '标题' + (index + 2),
            images:[
                {id:1,uri:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590150539755&di=5a30b5270fcf91969102730c5ea7103e&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201803%2F09%2F20180309203626_qgnvp.thumb.700_0.jpeg"},
            ],
            detail: '这里是简短的内容',
        };
    });
}