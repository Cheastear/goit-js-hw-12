import{i as l,S as u}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function p(){c.innerHTML='<span class="loader"></span>'}function f(a){let r="";a.hits.length==0?l.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}):a.hits.forEach(o=>{r+=`<div class="gallery-card">
                <a href="${o.largeImageURL}"><img src="${o.webformatURL}" width="360px" alt="${o.tags}"></a>
                <ul class="card-list">
                    <li><p>Likes:</p><p>${o.likes}</p></li>
                    <li><p>Views:</p><p>${o.views}</p></li>
                    <li><p>Comments:</p><p>${o.comments}</p></li>
                    <li><p>Downloads:</p><p>${o.downloads}</p></li>
                </ul>
            </div>`}),c.innerHTML=r,new u(".gallery-card a",{captionsData:"alt",captionDelay:250}).refresh()}function d(){const a=new URLSearchParams({key:"44001471-3db462177f0e91bc0a7989cfe",q:i.value,image_type:"photo",orientation:"horizontal",safesearch:"safe"});fetch(`https://pixabay.com/api/?${a}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>{f(r)}).catch(r=>{console.log(r)})}const c=document.querySelector(".gallery"),h=document.querySelector(".search-bar"),i=document.querySelector(".search-bar input");h.addEventListener("submit",a=>{a.preventDefault(),!(i.value==""||i.value==" ")&&(p(),d(),a.currentTarget.reset())});
//# sourceMappingURL=commonHelpers.js.map
