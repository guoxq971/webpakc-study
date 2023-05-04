function addHeader (){
    const div = document.createElement('div');
    div.innerText = '我是头部';
    document.body.appendChild(div);
}

module.exports = addHeader;

