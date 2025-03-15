(()=>{
  const e=document.querySelector("div.a");
  e.innerHTML += `window.screen.width: ${window.screen.width}<BR>`;
  e.innerHTML += `window.screen.height: ${window.screen.height}<BR>`;
  e.innerHTML += `screen.width:  ${screen.width}<BR>`;
  e.innerHTML += `screen.height: ${screen.height}<BR>`;
  e.innerHTML += `window.devicePixelRatio: ${window.devicePixelRatio}<BR>`;
  
	e.innerHTML += (`screen.height:                           ${screen.height}<BR>`)
	e.innerHTML += (`screen.availHeight:                      ${screen.availHeight}<BR>`)
	e.innerHTML += (`window.innerHeight:                      ${window.innerHeight}<BR>`)
	e.innerHTML += (`document.documentElement.clientHeight:   ${document.documentElement.clientHeight}<BR>`)
	e.innerHTML += (`document.documentElement.scrollHeight:   ${document.documentElement.scrollHeight}<BR>`)
	e.innerHTML += (`window.devicePixelRatio:                 ${window.devicePixelRatio}<BR>`)
	e.innerHTML += (`screen.height * window.devicePixelRatio: ${screen.height * window.devicePixelRatio}<BR>`)
})();
