const socket=io.connect('http://localhost:3000/')
const sender=document.getElementById('sender')
const message=document.getElementById('message')
const submit=document.getElementById('submit')
const output=document.getElementById('output')
const feedback=document.getElementById('feedback')

submit.addEventListener('click',()=>{
    socket.emit('app',{
        message:message.value,
        sender:sender.value
    })
}
)
socket.on('app',data=>{
    output.innerHTML+='<p>'+data.sender+'</p>'+data.message;

}
)