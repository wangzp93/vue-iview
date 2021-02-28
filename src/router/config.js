export const navList = [
  {
    name: 'nav1',
    meta: { title: '导航1' },
    icon: 'shop',
    children: [
      {
        name: 'shop',
        meta: { title: '商品管理' },
        icon: 'shop',
        children: [
          {
            name: 'cate',
            meta: { title: '商品分类' },
            component: 'nav1/shop/Cate',
            icon: 'icon'
          },
          {
            name: 'goods',
            meta: { title: '管理商品' },
            component: 'nav1/shop/Goods',
            icon: 'develop'
          }
        ]
      },
      {
        name: 'member',
        meta: { title: '会员管理' },
        icon: 'peoples',
        children: [
          {
            name: 'member',
            meta: { title: '会员' },
            component: 'nav1/member/Member',
            icon: 'peoples'
          },
          {
            name: 'userlevel',
            meta: { title: '会员等级' },
            component: 'nav1/member/UserLevel',
            icon: 'dengji'
          },
        ]
      }
    ]
  },
  {
    name: 'nav2',
    meta: { title: '导航2' },
    icon: 'shop',
    children: []
  }
]
