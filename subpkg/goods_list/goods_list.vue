<template>
  <view>
    <van-card v-for='item in goods' :key='item.goods_id' :price="item.goods_price | toFixed" :title="item.goods_name"
      :thumb="item.goods_small_logo||defaultPic"
      :thumb-link="`/subpkg/goods_detail/goods_detail?id=${item.goods_id}`" />
  </view>
</template>

<script>
  import {
    getGoodsList
  } from ' ../../api/goods.js'
  import toast from '@/utils/toast.js'
  export default {
    data() {
      return {
        queryData: {
          query: '',
          cid: '',
          pagenum: 1,
          pagesize: 10
        },
        goods: [],
        total: 0, // 默认的空图片
        defaultPic: 'https://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png',
        isloading: false
      }
    },
    methods: {
      async setGoodsList(cb) {
        this.isloading = true
        const res = await getGoodsList(this.queryData)
        this.isloading = false
        this.goods = [...this.goods, ...res.goods]
        this.total = res.total
        cb && cb()
      }
    },
    onPullDownRefresh() {
      this.queryData = {
          query: this.queryData.query,
          cid: '',
          pagenum: 1,
          pagesize: 10
        },
        this.goods = [],
        this.total = 0, // 默认的空图片
        this.setGoodsList(() => {
          uni.stopPullDownRefresh()
        })
    },
    onReachBottom() {
      if (this.total < this.queryData.pagenum * this.queryData.pagesize) return toast('没有更多数据了')
      if (this.isloading) return
      this.queryData.pagenum++
      this.setGoodsList()
    },
    onLoad({
      query
    }) {
      console.log(query)
      this.queryData.query = query
      this.setGoodsList()
    }
  }
</script>

<style>

</style>
