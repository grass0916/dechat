
// GET: '/'
// 進入大廳
enterLobby

// POST: '/rooms'
// 取得目前的聊天室列表
getRooms

// GET: '/rooms/<id>'
// 進入聊天室
enterRoom

// GET: '/rooms/<id>/message'
// 發送訊息至當前聊天室
sendMessage

// POST '/rooms/<id>/conversations'
// 取得目前聊天室的最新 N 筆對話
getConversations

// POST '/rooms/<id>/conversations/<b>to<a>'
// 取得目前聊天室的 b 到 a 筆對話
getPastConversations
