
* GET: '/'

> enterLobby: 進入大廳

* GET: '/rooms'

getRooms: 取得目前的聊天室列表

* GET: '/rooms/<id>'

enterRoom: 進入聊天室

* GET: '/rooms/<id>/info'

getRoomInfo: 取得目前聊天室的資訊

* POST: '/rooms/<id>/message'

sendMessage: 發送訊息至當前聊天室

* GET '/rooms/<id>/conversations'

getConversations: 取得目前聊天室的最新 N 筆對話

* GET '/rooms/<id>/conversations/<b>to<a>'

getPastConversations: 取得目前聊天室的 b 到 a 筆對話