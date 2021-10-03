import { Module, VuexModule, getModule, Mutation, Action } from 'vuex-module-decorators';
import { rootStore } from '..';

export interface ILoginState {
  email: string;
  password: string;
}

@Module({ dynamic: true, name: 'loginModule', store: rootStore, namespaced: true })
class LoginModule extends VuexModule implements ILoginState {
  email: string = '';
  password: string = '';

  @Mutation
  setEmail(value: string) {
    this.email = value;
  }

  @Mutation
  setPassword(value: string) {
    this.password = value;
  }

  // Login処理
  @Action({ rawError: true })
  async doLogin() {}
}

export const loginModule = getModule(LoginModule);
