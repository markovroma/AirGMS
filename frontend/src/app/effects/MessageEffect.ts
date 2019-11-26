import axios from 'axios';

interface MessageData {
  text: string,
  recipient: string,
}

export const MessageEffect = {
  async sendMessage(message: MessageData) {
    return axios.request<MessageData>({
      method: 'post',
      url: '/api/message',
      data: message,
    }).then((response) => {
      const { data } = response;
      return data;
    })
  },
  async getMessageList() {
    return axios.request({
      method: 'get',
      url: '/api/message',
    }).then((response) => {
      const { data } = response;
      return data;
    })
  }
};
