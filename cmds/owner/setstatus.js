<<<<<<< HEAD
const { owner } = require('../../config.json')
module.exports.run = async (client, message, args) => {
  if (!owner.includes(message.author.id)) return
  if (args[0] === 'online') client.user.setStatus('online')
  if (args[0] === 'idle') client.user.setStatus('idle')
  if (args[0] === 'dnd') client.user.setStatus('dnd')
  if (args[0] === 'offline') client.user.setStatus('offline')
  message.channel.send('👌')
}
module.exports.info = {
  name: 'setstatus'
}
=======
const { owner } = require('../../config.json')
module.exports.run = async (client, message, args) => {
  if (!owner.includes(message.author.id)) return
  if (args[0] === 'online') client.user.setStatus('online')
  if (args[0] === 'idle') client.user.setStatus('idle')
  if (args[0] === 'dnd') client.user.setStatus('dnd')
  if (args[0] === 'offline') client.user.setStatus('offline')
  message.channel.send('👌')
}
module.exports.info = {
  name: 'setstatus'
}
>>>>>>> 5e4656a9aa97d61b168586049118eaae5ebeaf0e