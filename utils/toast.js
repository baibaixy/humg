function toast(title, duration = 3000) {
  uni.showToast({
    title,
    icon: 'none',
    duration,
  })
}
//失败提示
toast.err = function toast(title, duration = 3000) {
  uni.showToast({
    title,
    icon: 'error',
    duration,
  })
}
//成功提示
toast.success = function toast(title, duration = 3000) {
  uni.showToast({
    title,
    icon: 'success',
    duration,
  })
}

toast.loading = () => {
  uni.showToast({
    title: '正在加载中',
    icon: 'loading'
  })
}
export default toast
