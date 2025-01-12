---
layout: about
image: /assets/img/blog/hydejack-9.jpg
hide_description: true
redirect_from:
  - /download/
---

# About

<!--author-->

## Portfolio

<div id="loadingContainer">
    <div class="spinner"></div>
    <p>포트폴리오 로딩 중입니다...</p>
</div>

<div id="iframeContainer"></div>

<script type="text/javascript">
    function hide(){      
      document.getElementById('loadingContainer').style.display = 'none';            
    }            

    function loadIframe() {      
        let container = document.getElementById('iframeContainer');                  
        let iframe = document.createElement('iframe');                  
        
        
        iframe.src = "https://1drv.ms/p/c/e97f777dd6730be9/IQS9CRxf55uhQ703lxZvPW3UAU8AttAFxKsB8a9xt-FlhFk?em=2&wdAr=1.7777777777777777";            
        iframe.width = "952px";            
        iframe.height = "534px";            
        iframe.frameBorder = "0";                  
        iframe.onload = hide;                  
                    
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

    window.onload = loadIframe;      
</script>

<style>
    /* 로딩 메시지 스타일 */
    #loadingContainer {
        text-align: center;
        font-size: 16px;
        font-weight: bold;
        position: absolute;
        
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background: white;
    }

    /* 로딩 스피너 */
    .spinner {
        width: 40px;
        height: 40px;
        border: 4px solid #ccc;
        border-top: 4px solid #3498db;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin-bottom: 10px;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
</style>

<!-- <iframe src="https://1drv.ms/p/c/e97f777dd6730be9/IQS9CRxf55uhQ703lxZvPW3UAU8AttAFxKsB8a9xt-FlhFk?em=2&amp;wdAr=1.7777777777777777" width="952px" height="534px" frameborder="0">포함된 <a target="_blank" href="https://office.com">Microsoft Office</a> 프레젠테이션, 제공: <a target="_blank" href="https://office.com/webapps">Office</a></iframe> -->

<!-- :toc를 하면 글 목록이 리스트로 자동 정렬 및 생성 된다-->
<!-- 이거 하면 이 태그 위에 적혀있는 글을 사진 아래에 작은 설명 같은 걸로 첨부하는 것 가능{:.figcaption} -->

[blog]: /
[portfolio]: https://hydejack.com/examples/
[resume]: https://hydejack.com/resume/
[download]: https://hydejack.com/download/
[welcome]: https://hydejack.com/
[forms]: https://hydejack.com/forms-by-example/
[features]: #features
[news]: #build-an-audience
[syntax]: syntax-highlighting
[latex]: #beautiful-math
[dark]: https://hydejack.com/blog/hydejack/2018-09-01-introducing-dark-mode/
[search]: https://hydejack.com/#_search-input
[grid]: https://hydejack.com/blog/hydejack/
[lic]: LICENSE.md
[pro]: licenses/PRO.md
[docs]: docs/README.md
[ofln]: docs/advanced.md#enabling-offline-support
[math]: docs/writing.md#adding-math
[kit]: https://github.com/hydecorp/hydejack-starter-kit/releases
[src]: https://github.com/hydecorp/hydejack
[gem]: https://rubygems.org/gems/jekyll-theme-hydejack
[buy]: https://gum.co/nuOluY
[gpss]: https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fhydejack.com%2Fdocs%2F
[rouge]: http://rouge.jneen.net
[katex]: https://khan.github.io/KaTeX/
[mathjax]: https://www.mathjax.org/
[tinyletter]: https://tinyletter.com/
