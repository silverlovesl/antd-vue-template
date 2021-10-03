<template>
  <section class="side-menu">
    <a-menu mode="inline" theme="dark" @click="onSideMenuClick">
      <a-menu-item>
        <HomeOutlined />
        <span>Menu 1</span>
      </a-menu-item>
    </a-menu>
  </section>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { HomeOutlined, TeamOutlined } from '@ant-design/icons-vue';
import { useRouter } from 'vue-router';

const SideMenu = defineComponent({
  name: 'SideMenu',
  components: {
    HomeOutlined,
    TeamOutlined,
  },
  setup() {
    const subMenuOpenKeys = ref(['/pages/company']);
    const router = useRouter();

    // サイドメニュー選択時
    const onSideMenuClick = (item: any) => {
      console.log(item.key);
      subMenuOpenKeys.value[item.key];
      router.push(item.key);
    };
    return { onSideMenuClick };
  },
});
export default SideMenu;
</script>
<style lang="scss">
</style>