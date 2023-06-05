export default {
  formatDate(timestamp, fmt = 'YYYY-MM-DD hh:mm:ss') {
    if (timestamp) {
      const date = new Date(timestamp - 0);
      // 替换年份
      if (/(Y+)/.test(fmt)) {
        fmt = fmt.replace(
          RegExp.$1,
          (date.getFullYear() + '').substring(4 - RegExp.$1.length, 4)
        );
      }
      let obj = {
        'M+': date.getMonth() + 1,
        'D+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
      };
      for (let k in obj) {
        if (new RegExp(`(${k})`).test(fmt)) {
          let str = obj[k] + '';
          fmt = fmt.replace(
            RegExp.$1,
            RegExp.$1.length === 1 ? str : str.length === 1 ? '0' + str : str
          );
        }
      }
      return fmt;
    }
  },
  strJoin(arr) {
    return arr.join(' ');
  }
};
