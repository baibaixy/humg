import fly from '@/utils/request.js'

//获取首页轮播图
export const getBannersApi = () => fly.get('/home/swiperdata')

//获取导航分类
export const getNavs = () => fly.get('/home/catitems')


//获取楼层
export const getFloorList = () => fly.get('/home/floordata')
