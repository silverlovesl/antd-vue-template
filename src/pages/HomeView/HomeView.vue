<template>
  <article class="home-view">
    <a-result status="500" :title="state.errorMessage" v-if="state?.errorMessage?.length > 0">
      <template #extra>
        <a-button type="primary" @click="onGo2Login">ログイン画面へ</a-button>
      </template>
    </a-result>
    <div style="width: 500px; margin: 64px auto 0" v-else>
      <a-spin tip="一生懸命取得中...">
        <a-alert message="認証中" description="少々お待ち下さい" />
      </a-spin>
    </div>
  </article>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const HomeView = defineComponent({
  name: 'HomeView',
  setup() {
    const state = reactive({
      errorMessage: [] as string[],
      loading: false,
    });
    const router = useRouter();
    const route = useRoute();

    const onGo2Login = () => {
      router.push('login');
    };

    onMounted(() => {});
    return { state, onGo2Login };
  },
});
export default HomeView;
</script>
<style lang="scss">
</style>