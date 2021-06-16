export default [{
  name: 'nav1',
  meta: { title: '微信公众号管理' },
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
  }, {
    name: 'member',
    meta: { title: '会员管理' },
    icon: 'ios-paper',
    children: [
      {
        name: 'member',
        meta: { title: '会员' },
        icon: 'ios-paper'
      },
      {
        name: 'userLevel',
        meta: { title: '会员等级' },
        icon: 'ios-paper'
      }
    ]
  }],
}, {
  name: 'nav2',
  meta: { title: '增长运营管理' },
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
  }, {
    name: 'wechat',
    meta: { title: '微信管理' },
    icon: 'ios-paper',
    children: [
      {
        name: 'account',
        meta: { title: '微信号管理' },
        icon: 'ios-paper'
      },
      {
        name: 'group',
        meta: { title: '微信群管理' },
        icon: 'ios-paper'
      },
    ]
  }]
}]
