<template>
    <div class="menu">
            <router-link to="/">
                <span class="icon is-small"><i class="fa fa-bar-chart-o"></i></span>
                Home
            </router-link>
             <router-link to="/online" aria-expanded="show" @click.native="show = !show">
                <span class="icon is-small"><i class="fa fa-bar-chart-o"></i></span>
                在线工具
                <span class="icon is-small is-angle"><i class="fa fa-angle-down"></i></span>
            </router-link>
            <!--child-->
            <expanding>
                <ul v-show="show" class="">
                    <li>
                        <router-link to="/online/base64">
                        图片base64
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/online/codeformat">
                        代码格式化
                        </router-link>
                    </li>
                </ul>
            </expanding>
    </div>
</template>
<script>
import Expanding from 'vue-bulma-expanding'
export default {
  name: 'menu',
  components: {
    Expanding
  },
  data () {
    return {
      items: ['brace', 'base64'],
      show: false
    }
  }
}
</script>

<style lang="less" scoped>
.menu {
 
}
a {
    color:#4a4a4a;
    display: block;
    padding: 10px 0;
}
</style>

