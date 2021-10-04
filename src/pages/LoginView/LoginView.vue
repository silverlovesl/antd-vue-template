<template>
  <article class="login-view">
    <div class="login-view__top">
      <div class="login-view__header">
        <span class="login-view__logo">
          <img alt="logo" :src="logo" />
        </span>
        <span class="login-view__title">Your Header</span>
      </div>
      <div class="login-view__description">Input your sub title here XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div>
    </div>
    <div class="login-view__form-wrap">
      <a-form :label-col="state.labelCol" :wrapper-col="state.wrapperCol" :autocomplete="false">
        <a-form-item v-bind="validateInfos.email">
          <a-input size="large" v-model:value="modelRef.email" placeholder="Email">
            <template #prefix>
              <UserOutlined />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item v-bind="validateInfos.password">
          <a-input-password size="large" placeholder="Password" v-model:value="modelRef.password">
            <template #prefix>
              <LockOutlined />
            </template>
          </a-input-password>
        </a-form-item>
      </a-form>
      <a-row>
        <a-col :span="12">
          <a-checkbox class="g-text-left">Remember me</a-checkbox>
        </a-col>
        <a-col :span="12" class="g-text-right">
          <a>Forgot password ?</a>
        </a-col>
        <a-col :span="24" class="g-mt-md">
          <a-button type="primary" htmlType="submit" block size="large" @click="onSubmit" :loading="state.loading">Login</a-button>
        </a-col>
      </a-row>
    </div>
  </article>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import logo from '../../assets/images/logo.png';
import {
  WechatOutlined,
  GoogleOutlined,
  UserOutlined,
  LockOutlined,
  // Force break line
} from '@ant-design/icons-vue';
import { Form } from 'ant-design-vue';

interface LoginForm {
  email: string;
  password: string;
}

const LoginView = defineComponent({
  name: 'LoginView',
  components: {
    WechatOutlined,
    GoogleOutlined,
    UserOutlined,
    LockOutlined,
  },
  setup() {
    const state = reactive({
      labelCol: { xs: { span: 24 }, sm: { span: 4 }, md: { span: 8 } },
      wrapCol: { xs: { span: 24 }, sm: { span: 20 }, md: { span: 16 } },
      loading: false,
    });

    const router = useRouter();
    const route = useRoute();
    const modelRef = reactive<LoginForm>({
      email: '',
      password: '',
    });

    const rulesRef = reactive({
      email: [{ required: true, message: 'Email is required' }],
      password: [{ required: true, message: 'Password is reqiured' }],
    });
    const { validate, validateInfos } = Form.useForm(modelRef, rulesRef);

    const onSubmit = (e: any) => {
      e.preventDefault();
      state.loading = true;
      validate().then(async () => {});
    };

    return { state, logo, validateInfos, modelRef, onSubmit };
  },
});
export default LoginView;
</script>
<style lang="scss">
.login-view {
  padding-top: 104px;
  &__top {
    text-align: center;
  }
  &__header {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 44px;
    line-height: 44px;
  }
  &__title {
    position: relative;
    top: 2px;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 600;
    font-size: 33px;
  }
  &__description {
    margin-top: 12px;
    margin-bottom: 40px;
    color: rgba(0, 0, 0, 0.45);
    font-size: 14px;
  }
  &__logo {
    width: 44px;
    height: 44px;
    margin-right: 16px;
    vertical-align: top;
    > img {
      width: 100%;
    }
  }
  &__form-wrap {
    padding: 0 1rem;
    margin: 0 auto;
    max-width: 360px;
  }
}
</style>