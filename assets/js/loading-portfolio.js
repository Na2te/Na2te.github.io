
function hide(){
  console.log("hide 실행")
  document.getElementById('loadingContainer').style.display = 'none';
}
function loadIframe() {
  console.log("iframe 로딩 실행")
    let container = document.getElementById('iframeContainer');
    let iframe = document.createElement('iframe');
    iframe.src = "https://1drv.ms/p/c/e97f777dd6730be9/IQS9CRxf55uhQ703lxZvPW3UAU8AttAFxKsB8a9xt-FlhFk?em=2&wdAr=1.7777777777777777";
    iframe.width = "952px";
    iframe.height = "534px";
    iframe.frameBorder = "0";
    iframe.onload = hide;
    // a 태그 생성
    const officeLink = document.createElement('a');
    officeLink.href = "https://office.com";
    officeLink.target = "_blank";
    officeLink.textContent = "Microsoft Office";
    
    const webappsLink = document.createElement('a');
    webappsLink.href = "https://office.com/webapps";
    webappsLink.target = "_blank";
    webappsLink.textContent = "Office";

    iframe.appendChild(officeLink);
    iframe.appendChild(webappsLink);

    container.appendChild(iframe);
}

// // 페이지가 로드된 후 iframe 로드
// window.onload = loadIframe;