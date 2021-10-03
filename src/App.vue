<template>
  <div id="app">
    <a-config-provider :locale="jaJP">
      <component :is="layout" />
    </a-config-provider>
  </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent, computed } from 'vue';
import { useRoute } from 'vue-router';
import { Enums } from './models';
import jaJP from 'ant-design-vue/es/locale/ja_JP';
import moment from 'moment';
import 'moment/dist/locale/ja';
moment.locale('ja');

const defaultLayout = defineAsyncComponent(() => import(`./layout/DefaultLayout.vue`));
const authedLayout = defineAsyncComponent(() => import(`./layout/AuthedLayout.vue`));

const app = defineComponent({
  name: 'App',
  components: {
    defaultLayout,
    authedLayout,
  },
  setup() {
    const route = useRoute();
    const layout = computed(() => {
      return route.meta.template == Enums.LayoutTemplate.Authed ? authedLayout : defaultLayout;
    });

    return { layout, jaJP };
  },
});

export default app;
</script>

<style>
</style>
