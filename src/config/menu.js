// export default [
//   {
//     name: 'nav1',
//     meta: { title: '导航1' },
//     icon: 'shop',
//     children: [
//       {
//         name: 'shop',
//         meta: { title: '商品管理' },
//         icon: 'shop',
//         children: [
//           {
//             name: 'cate',
//             meta: { title: '商品分类' },
//             component: 'nav1/shop/Cate',
//             icon: 'icon'
//           },
//           {
//             name: 'goods',
//             meta: { title: '商品' },
//             component: 'nav1/shop/Goods',
//             icon: 'develop'
//           }
//         ]
//       },
//       {
//         name: 'member',
//         meta: { title: '会员管理' },
//         icon: 'peoples',
//         children: [
//           {
//             name: 'memberUser',
//             meta: { title: '会员' },
//             component: 'nav1/member/Member',
//             icon: 'peoples'
//           },
//           {
//             name: 'userlevel',
//             meta: { title: '会员等级' },
//             component: 'nav1/member/UserLevel',
//             icon: 'dengji'
//           },
//         ]
//       }
//     ]
//   },
//   {
//     name: 'nav2',
//     meta: { title: '导航2' },
//     icon: 'shop',
//     children: [
//       {
//         name: 'wechat',
//         meta: { title: '微信管理' },
//         icon: 'shop',
//         children: [
//           {
//             name: 'account',
//             meta: { title: '微信号管理' },
//             component: 'nav2/wechat/Account',
//             icon: 'icon'
//           },
//           {
//             name: 'group',
//             meta: { title: '微信群管理' },
//             component: 'nav2/wechat/Group',
//             icon: 'develop'
//           }
//         ]
//       },
//       {
//         name: 'ad',
//         meta: { title: '广告管理' },
//         icon: 'peoples',
//         children: [
//           {
//             name: 'resource',
//             meta: { title: '资源位管理' },
//             component: 'nav1/ad/Resource',
//             icon: 'peoples'
//           },
//           {
//             name: 'material',
//             meta: { title: '素材管理' },
//             component: 'nav1/ad/Material',
//             icon: 'dengji'
//           },
//         ]
//       }
//     ]
//   }
// ]
export default [{
  name: 'nav1',
  meta: { title: '导航1' },
  icon: 'ios-paper',
  children: [{
    name: 'shop',
    meta: { title: '商品管理' },
    icon: 'ios-paper',
    children: [
      {
        name: 'cate',
        meta: { title: '商品分类' },
        icon: 'ios-paper'
      },
      {
        name: 'goods',
        meta: { title: '商品' },
        icon: 'ios-paper'
      }
    ]
  }],
}, {
  name: 'nav2',
  meta: { title: '导航2' },
  icon: 'ios-paper',
  children: [{
    name: 'ad',
    meta: { title: '广告管理' },
    icon: 'ios-paper',
    children: [
      {
        name: 'material',
        meta: { title: '素材' },
        icon: 'ios-paper'
      },
      {
        name: 'resource',
        meta: { title: '资源位' },
        icon: 'ios-paper'
      },
    ]
  }]
}]
