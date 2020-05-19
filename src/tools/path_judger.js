/*
# Navigation Tree：
.
├── BlogDetail
├── GoodsDetail
├── Drawer
│   └── Main
│       ├── Community
│       │   ├── Discover
│       │   ├── Discussion
│       │   └── Follow
│       ├── Marcket
│       │   ├── Marcket-Display
│       │   └── Marcket-Search
│       ├── Mine
│       └── Find
│           ├── Find-Display
│           │   ├── Feed
│           │   └── Nearby
│           └── Search
├── Settings
├── Message
├── PediaDetail
├── PessageDetail
└── Pet

# What it can return:
    main_path: ['Community','Find','Shop','Mine','Others']
    header_type: ['community','find','shop_class','shop_class+filter','shop_filter','mine]
    header_height: [80,48,97,?,?]
*/

function PathJudger(path){
    
    switch(path){
        case 'Discover':
            return({
                header_type:'community',
                header_height:80,
                search_bar_shown:true,
                searching:false,
                shop_class_bar_shown:false,
                tab_bar_shown:true,
                header_transparent:false,
                header_button_shown:true,
            })
        case 'Discussion':
            return({
                header_type:'community',
                header_height:80,
                search_bar_shown:true,
                searching:false,
                shop_class_bar_shown:false,
                tab_bar_shown:true,
                header_transparent:false,
                header_button_shown:true,
            })
        case 'Follow':
            return({
                header_type:'community',
                header_height:80,
                search_bar_shown:true,
                searching:false,
                shop_class_bar_shown:false,
                tab_bar_shown:true,
                header_transparent:false,
                header_button_shown:true,
            })
        case 'Search':
            return({
                header_type:'searching',
                header_height:80,
                search_bar_shown:true,
                searching:true,
                shop_class_bar_shown:false,
                tab_bar_shown:true,
                header_transparent:false,
                header_button_shown:false,
            })
        case 'Mine':
            return({
                header_type:'mine',
                header_height:48,
                search_bar_shown:false,
                searching:false,
                shop_class_bar_shown:false,
                tab_bar_shown:false,
                header_transparent:true,
                header_button_shown:true,
            })
        case 'Feed':
            return({
                header_type:'find',
                header_height:80,
                search_bar_shown:true,
                searching:false,
                shop_class_bar_shown:false,
                tab_bar_shown:true,
                header_transparent:false,
                header_button_shown:true,
            })
        case 'Nearby':
            return({
                header_type:'find',
                header_height:80,
                search_bar_shown:true,
                searching:false,
                shop_class_bar_shown:false,
                tab_bar_shown:true,
                header_transparent:false,
                header_button_shown:true,
            })
        default:
            return({
                header_type:'community',
                header_height:80,
                search_bar_shown:true,
                searching:false,
                shop_class_bar_shown:false,
                tab_bar_shown:true,
                header_transparent:false,
                header_button_shown:true,
            })
            
    }
    
    
}

export default PathJudger