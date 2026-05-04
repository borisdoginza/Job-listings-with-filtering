(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))g(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&g(i)}).observe(document,{childList:!0,subtree:!0});function o(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerPolicy&&(l.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?l.credentials="include":n.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function g(n){if(n.ep)return;n.ep=!0;const l=o(n);fetch(n.href,l)}})();let s=[],r=[];async function c(){s=await(await fetch("./data.json")).json(),console.log(s),a()}function a(){const e=document.getElementById("jobs");e.innerHTML=d().map(t=>p(t)).join(""),u()}function d(){return r.length===0?s:s.filter(e=>{const t=[e.role,e.level,...e.languages,...e.tools];return r.every(o=>t.includes(o))})}function u(){const e=document.querySelector(".container"),t=document.querySelector(".filters");if(r.length===0){e.classList.add("hidden");return}e.classList.remove("hidden"),t.innerHTML=`
        ${r.map(o=>`
            <div class=" flex flex-row bg-green-50 rounded-lg">
                <span class=" text-green-400 px-4 py-1 rounded-full font-bold">${o}</span>
                <div class="w-8 h-8 bg-green-400 hover:bg-black transition-all duration-100 ease-in-out rounded-r-lg flex items-center justify-center">
                    <button onclick="toggleFilter('${o}')" class="text-green-50 text-[24px]">
                    
                    <svg width="18" height="18" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.11 2.697L2.698 4.11 6.586 8l-3.89 3.89 1.415 1.413L8 9.414l3.89 3.89 1.413-1.415L9.414 8l3.89-3.89-1.415-1.413L8 6.586l-3.89-3.89z" fill="#FFF"></path>
                    </svg></button>
                </div>
            </div>
            `).join("")}
    `}window.toggleFilter=function(e){r.includes(e)?r=r.filter(t=>t!==e):r.push(e),a()};window.clearFilters=function(){r=[],a()};function p(e){return`
        <div class="bg-white rounded-lg shadow-xl transition-all duration-200 ease-in-out flex flex-col h-64.75 lg:h-38 lg:items-center lg:flex-row lg:w-full lg:justify-between lg:pt-0  relative px-4 pt-10 justify-items-start gap-2 md:pb-3 lg:pb-0 w-[clamp(336px,100%,360px)] ${e.featured?"border-l-6 border-green-400":""}"
        >
        <img src="${e.logo}" alt="${e.company}" class="transition-all duration-200 w-12 h-12 -top-5.75 rounded-full absolute left-[-16] lg:top-8 lg:left-6 lg:w-22 lg:h-22">
            
            <div class="flex flex-col gap-2 lg:pl-32 lg:pt-0">
            <div class="flex flex-row items-center gap-4">
                <span class="text-green-400 font-bold transition-all duration-1200">${e.company}</span>
                ${e.new?'<span class="bg-green-400 font-bold text-white text-xs px-2 py-1 rounded-full transition-all duration-1200">NEW!</span>':""}
                ${e.featured?'<span class="bg-green-900 font-bold text-white text-xs px-2 py-1 rounded-full transition-all duration-1200">FEATURED</span>':""}    
            </div>   
            
            <h2 class="font-bold text-lg hover:text-green-400 transition-text duration-100 cursor-pointer">${e.position}</h2>

            <div class="flex flex-row gap-2 mb-2 pb-0">
                <span class="text-gray-400">${e.postedAt}</span>
                <span class="text-gray-300">•</span>
                <span class="text-gray-400">${e.contract}</span>
                <span class="text-gray-300">•</span>
                <span class="text-gray-400">${e.location}</span>
            </div>
            <div class="w-full h-0.5 bg-gray-200 lg:hidden mb-1"></div>
        </div>

            <div class="flex gap-2 flex-wrap lg:flex-row lg:h-10">
                <span onclick="toggleFilter('${e.role}')" class="
                ${r.includes(e.role)?"bg-green-400 text-green-50 hover:bg-green-400/80 hover:text-green-50":"text-green-400 bg-green-50 hover:bg-green-400 hover:text-green-50"}
                 font-bold  px-4 py-2 rounded  transition-all duration-100 cursor-pointer">${e.role}</span>
                <span onclick="toggleFilter('${e.level}')" class="
                ${r.includes(e.level)?"bg-green-400 text-green-50 hover:bg-green-400/80 hover:text-green-50":"text-green-400 bg-green-50 hover:bg-green-400 hover:text-green-50"}

                 font-bold  px-4 py-2 rounded  transition-all duration-100 cursor-pointer">${e.level}</span>
                ${e.languages.map(t=>`
                    <span onclick="toggleFilter('${t}')" class="
                    ${r.includes(t)?"bg-green-400 text-green-50 hover:bg-green-400/80 hover:text-green-50":"text-green-400 bg-green-50 hover:bg-green-400 hover:text-green-50"}
                     font-bold  px-4 py-2 rounded transition-all duration-100 cursor-pointer">${t}</span>
                    `).join("")}
                ${e.tools.map(t=>`
                    <span onclick="toggleFilter('${t}')" class="
                    ${r.includes(t)?"bg-green-400 text-green-50 hover:bg-green-400/80 hover:text-green-50":"text-green-400 bg-green-50 hover:bg-green-400 hover:text-green-50"}
                    font-bold  px-4 py-2 rounded transition-all duration-100 cursor-pointer">${t}</span>
                    `).join("")}
                
            </div>
        </div>            
    `}const f=document.querySelector(".clearButton");f.addEventListener("click",clearFilters);c();
