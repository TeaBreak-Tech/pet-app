/* 临时模拟网络请求 */

const user = [
    {id:'1',username:"Tester_1",password:"111",token:"token_1",profile_picture:"http://106.52.96.163/img/app/profile_1.jpg",signature:"Tester's account"},
    {id:'2',username:"Tester_2",password:"222",token:"token_2",profile_picture:"http://106.52.96.163/img/app/profile_2.jpg",signature:"Tester's account"},
    {id:'3',username:"Tester_3",password:"333",token:"token_3",profile_picture:"http://106.52.96.163/img/app/profile_3.jpg",signature:"Tester's account"},
    {id:'4',username:"懂你的悲伤",password:"444",token:"token_4",profile_picture:"http://106.52.96.163/img/app/profile_4.jpg",signature:"示例个性签名"},
    {id:'5',username:"陌路",password:"444",token:"token_4",profile_picture:"http://106.52.96.163/img/app/profile_5.jpg",signature:"示例个性签名"},
    {id:'6',username:"斯文禽兽",password:"444",token:"token_4",profile_picture:"http://106.52.96.163/img/app/profile_6.jpg",signature:"示例个性签名"},
    {id:'7',username:"晚安晚安",password:"444",token:"token_4",profile_picture:"http://106.52.96.163/img/app/profile_7.jpg",signature:"示例个性签名"},
    {id:'8',username:"伤、却美╮",password:"444",token:"token_4",profile_picture:"http://106.52.96.163/img/app/profile_8.jpg",signature:"示例个性签名"},
    {id:'9',username:"旧心酸。",password:"444",token:"token_4",profile_picture:"http://106.52.96.163/img/app/profile_9.jpg",signature:"示例个性签名"},
    {id:'10',username:"我们的约定",password:"444",token:"token_4",profile_picture:"http://106.52.96.163/img/app/profile_10.jpg",signature:"示例个性签名"},
    
]

export const post_login = (username,password) => {
    const found_user = user.find(user_info => user_info.username===username);
    if (found_user === undefined){
        return {info:"User doesn't exist"}
    }else{
        if (found_user.password===password){
            return {info:"success",token:found_user.tokrn}
        }else{
            return {info:"Wrong password"}
        }
    }
}

export const get_user = (id) => {
    const found_user = user.find(user_info => user_info.id===id);
    if (found_user === undefined){
        return {info:"User doesn't exist"}
    }else{
        return found_user
    }
}

export const get_followed_users = (id) => {
    return user.slice(1,10)
}

export const randomPublish = (n) => {
    return new Array(n).fill('').map((item, index) => {
        return {
            id: ''+(index+1),
            author: get_user(Math.round(index%10)+1),
            images:[
                {id:1,uri:"http://106.52.96.163/img/app/background_"+(Math.round(index%9)+1)+".jpg"},
            ],
            text: '一段适当长度的文本作为动态的内容显示在这里',
            tags:[
                {id:"1",title:"猫猫"},
                {id:"2",title:"日常"},
                {id:"3",title:"打卡"},
            ],
            interactions:{
                view:"1.2k",
                like:"840",
                favorite:"24",
                comment:[
                    {author:get_user(Math.round((index+1)%9)+1),content:"一段文字作为回复示例1"},
                    {author:get_user(Math.round((index+2)%9)+1),content:"一段文字作为回复示例2"}
                ]
            }
        };
    });
};