<template>
  <a-layout id="ant-layout" class="ant-layout ant-layout-has-sider authed-layout">
    <a-layout-sider v-model:collapsed="state.collapsed" :trigger="null" collapsible :width="240">
      <div class="authed-layout__logo">
        <a>
          <img :src="logo" />
          <h1 v-if="!state.collapsed">Title</h1>
        </a>
      </div>
      <side-menu />
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="authed-layout__header">
        <MenuUnfoldOutlined v-if="state.collapsed" class="trigger" @click="() => (state.collapsed = !state.collapsed)" />
        <MenuFoldOutlined v-else class="trigger" @click="() => (state.collapsed = !state.collapsed)" />
        <span class="g-float-right g-pr-md">
          <a-dropdown>
            <a-avatar :size="36">UserName</a-avatar>
            <template #overlay>
              <a-menu>
                <a-menu-item class="fc-danger">
                  <a @click="onLogout">ログアウト</a>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </span>
      </a-layout-header>
      <a-layout-content class="g-pa-sm" style="overflow-y: scroll">
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue';
import { SideMenu } from '../components';
import { cookieService, setApiErrorHandler } from '../services';
import { useRouter } from 'vue-router';
import { AxiosError } from 'axios';
import logo from '../assets/images/logo.png';

const AuthedLayout = defineComponent({
  name: 'AuthedLayout',
  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    'side-menu': SideMenu,
  },
  setup() {
    const router = useRouter();
    const state = reactive({ collapsed: true });

    // ログイン処理
    const onLogout = () => {
      cookieService.removeAuthToken();
      router.push('/login');
    };

    onMounted(() => {
      let errorHandler = (e: AxiosError) => {
        const respError = e.response?.data?.error;
        if (e?.response?.status == 401) {
          onLogout();
        }

        if (respError) {
          if (respError.statusCode === 401 || respError.statusCode === 403) {
            onLogout();
          }
        }
      };
      setApiErrorHandler(errorHandler);
    });

    return { state, onLogout, logo };
  },
});

export default AuthedLayout;
</script>

<style lang="scss">
.authed-layout {
  height: 100vh;
  &__logo {
    padding: 16px 8px;
    text-align: center;
    img {
      height: 48px;
    }
    h1 {
      display: inline-block;
      height: 32px;
      margin: 0 0 0 12px;
      color: #fff;
      font-weight: 600;
      font-size: 18px;
      line-height: 32px;
      vertical-align: middle;
      animation: title-hide 0.3s;
    }
  }
  &__header {
    background: #fff;
    padding: 0;
    height: 48px;
    line-height: 48px;
    & > .trigger {
      font-size: 18px;
      height: 24px;
      padding: 0 18px;
      cursor: pointer;
      transition: color 0.3s;
      &:hover {
        color: #1890ff;
      }
    }
  }

  @keyframes title-hide {
    0% {
      display: none;
      opacity: 0;
    }

    80% {
      display: none;
      opacity: 0;
    }

    to {
      display: unset;
      opacity: 1;
    }
  }
}
</style>