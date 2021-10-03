import { message } from 'ant-design-vue';
import { Consts, Enums } from '../models';

export class UIUtils {
  static showInsertSuccessed(message: string = '登録に成功しました') {
    UIUtils.showMessage(Enums.MessageType.Success, message);
  }

  static showInsertFailed(message: string = '登録に失敗しました') {
    UIUtils.showMessage(Enums.MessageType.Error, message);
  }

  static showUpdateSuccessed(message: string = '更新に成功しました') {
    UIUtils.showMessage(Enums.MessageType.Success, message);
  }

  static showUpdateFailed(message: string = '更新に失敗しました') {
    UIUtils.showMessage(Enums.MessageType.Error, message);
  }

  static showDeleteSuccessed(message: string = '削除に成功しました') {
    UIUtils.showMessage(Enums.MessageType.Success, message);
  }

  static showDeleteFailed(message: string = '削除に失敗しました') {
    UIUtils.showMessage(Enums.MessageType.Error, message);
  }

  static showCopySuccessed(message: string = 'コピーに成功しました') {
    UIUtils.showMessage(Enums.MessageType.Success, message);
  }

  static showCopyFailed(message: string = 'コピーに失敗しました') {
    UIUtils.showMessage(Enums.MessageType.Error, message);
  }

  static showUploadSuccessed(message: string = 'アップロードに成功しました') {
    UIUtils.showMessage(Enums.MessageType.Success, message);
  }

  static showUploadFailed(message: string = 'アップロードに失敗しました') {
    UIUtils.showMessage(Enums.MessageType.Error, message);
  }

  /**
   * Message表示
   * @param msgType notification 種別
   * @param title メッセージタイトル
   * @param duration 経過時間
   */
  static showMessage(msgType: Enums.MessageType, content: string = '', duration: number = 3) {
    switch (msgType) {
      case Enums.MessageType.Info:
      case Enums.MessageType.Success:
      case Enums.MessageType.Warn:
      case Enums.MessageType.Error:
        break;
      default:
        throw '[error] Wrong message type';
    }

    message[msgType]({
      content: content,
      duration: duration,
    });
  }
}
