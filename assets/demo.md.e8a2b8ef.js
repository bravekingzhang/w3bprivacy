import{_ as g,o,c as r,a as e,b as s,t as a,F as d,r as c,d as n,e as D,f as y}from"./app.4b515bab.js";const b={data(){return{name:"HomeContent",age:20,length:20}}};function F(h,i,u,l,t,p){return o(),r(d,null,[e(" \xA0"),s("div",null,"HomeContent: "+a(t.name)+" - "+a(t.age)+" -- "+a(t.length),1)],64)}const m=g(b,[["render",F]]),_={id:"frontmatter-title",tabindex:"-1"},v=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),f={id:"title",tabindex:"-1"},C=s("a",{class:"header-anchor",href:"#title","aria-hidden":"true"},"#",-1),k={id:"title-1",tabindex:"-1"},x=s("a",{class:"header-anchor",href:"#title-1","aria-hidden":"true"},"#",-1),A={id:"title-2",tabindex:"-1"},T=s("a",{class:"header-anchor",href:"#title-2","aria-hidden":"true"},"#",-1),B={id:"title-3",tabindex:"-1"},E=s("a",{class:"header-anchor",href:"#title-3","aria-hidden":"true"},"#",-1),w=y(`<h1 id="\u6807\u9898\u4E00" tabindex="-1">\u6807\u9898\u4E00 <a class="header-anchor" href="#\u6807\u9898\u4E00" aria-hidden="true">#</a></h1><h2 id="blog" tabindex="-1">Blog <a class="header-anchor" href="#blog" aria-hidden="true">#</a></h2><h2 id="hacker" tabindex="-1">Hacker <a class="header-anchor" href="#hacker" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>This is a tip</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This is a warning</p></div><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>This is a dangerous warning</p></div><div class="danger custom-block"><p class="custom-block-title">DON&#39;T DO THIS</p><p>Danger zone, do not proceed</p></div><h1 id="\u6807\u9898\u4E8C" tabindex="-1">\u6807\u9898\u4E8C <a class="header-anchor" href="#\u6807\u9898\u4E8C" aria-hidden="true">#</a></h1><h2 id="blog-1" tabindex="-1">Blog <a class="header-anchor" href="#blog-1" aria-hidden="true">#</a></h2><table><thead><tr><th>Tables</th><th style="text-align:center;">Are</th><th style="text-align:right;">Cool</th></tr></thead><tbody><tr><td>col 3 is</td><td style="text-align:center;">right-aligned</td><td style="text-align:right;">$1600</td></tr><tr><td>col 2 is</td><td style="text-align:center;">centered</td><td style="text-align:right;">$12</td></tr><tr><td>zebra stripes</td><td style="text-align:center;">are neat</td><td style="text-align:right;">$1</td></tr></tbody></table><p>\u{1F389} \u{1F4AF}</p><h2 id="\u4EE3\u7801" tabindex="-1">\u4EE3\u7801 <a class="header-anchor" href="#\u4EE3\u7801" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">MyComponent</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// ...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="\u9AD8\u4EAE" tabindex="-1">\u9AD8\u4EAE <a class="header-anchor" href="#\u9AD8\u4EAE" aria-hidden="true">#</a></h3><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki has-highlighted-lines"><code><span class="line highlighted"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// Highlighted</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">data</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#F07178;">      msg</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">Highlighted!</span></span>
<span class="line"><span style="color:#C3E88D;">      This line isn&#39;t highlighted,</span></span>
<span class="line highlighted"><span style="color:#C3E88D;">      but this and the next 2 are.</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#F07178;">      motd</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">VitePress is awesome</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      lorem</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ipsum</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="\u9A8C\u8BC1-\u4F7F\u7528\u52A8\u6001\u8BED\u6CD5" tabindex="-1">\u9A8C\u8BC1 \u4F7F\u7528\u52A8\u6001\u8BED\u6CD5 <a class="header-anchor" href="#\u9A8C\u8BC1-\u4F7F\u7528\u52A8\u6001\u8BED\u6CD5" aria-hidden="true">#</a></h3><div><p><code>{{ 1 + 1 }}</code></p></div><p>2</p><div><p><code>&lt;span v-for=&quot;i in 3&quot;&gt;{{ i }} &lt;/span&gt;</code></p></div>`,19),H=s("div",null,[s("p",null,[s("code",null,"{{ $page }}")])],-1),N=s("div",null,[s("p",null,[s("code",null,"{{$frontmatter}}")])],-1),$=s("h3",{id:"\u6D4B\u8BD5\u81EA\u5B9A\u4E49\u7EC4\u4EF6",tabindex:"-1"},[e("\u6D4B\u8BD5\u81EA\u5B9A\u4E49\u7EC4\u4EF6 "),s("a",{class:"header-anchor",href:"#\u6D4B\u8BD5\u81EA\u5B9A\u4E49\u7EC4\u4EF6","aria-hidden":"true"},"#")],-1),S=s("h3",{id:"\u6E32\u67D3\u5E95\u90E8",tabindex:"-1"},[e("\u6E32\u67D3\u5E95\u90E8 "),s("a",{class:"header-anchor",href:"#\u6E32\u67D3\u5E95\u90E8","aria-hidden":"true"},"#")],-1),P=JSON.parse(`{"title":"Blogging Like a Hacker","description":"","frontmatter":{"title":"Blogging Like a Hacker","lang":"en-US","features":[{"icon":"\u26A1\uFE0F","title":"Vite, The DX that can't be beat","details":"Lorem ipsum..."},{"icon":"\u{1F596}","title":"Power of Vue meets Markdown","details":"Lorem ipsum..."},{"icon":"\u{1F6E0}\uFE0F","title":"Simple and minimal, always","details":"Lorem ipsum..."}]},"headers":[{"level":3,"title":"Title","slug":"title","link":"#title","children":[]},{"level":3,"title":"Title","slug":"title-1","link":"#title-1","children":[]},{"level":3,"title":"Title","slug":"title-2","link":"#title-2","children":[]},{"level":3,"title":"Title","slug":"title-3","link":"#title-3","children":[]},{"level":2,"title":"Blog","slug":"blog","link":"#blog","children":[]},{"level":2,"title":"Hacker","slug":"hacker","link":"#hacker","children":[]},{"level":2,"title":"Blog","slug":"blog-1","link":"#blog-1","children":[]},{"level":2,"title":"\u4EE3\u7801","slug":"\u4EE3\u7801","link":"#\u4EE3\u7801","children":[{"level":3,"title":"\u9AD8\u4EAE","slug":"\u9AD8\u4EAE","link":"#\u9AD8\u4EAE","children":[]},{"level":3,"title":"\u9A8C\u8BC1 \u4F7F\u7528\u52A8\u6001\u8BED\u6CD5","slug":"\u9A8C\u8BC1-\u4F7F\u7528\u52A8\u6001\u8BED\u6CD5","link":"#\u9A8C\u8BC1-\u4F7F\u7528\u52A8\u6001\u8BED\u6CD5","children":[]},{"level":3,"title":"\u6D4B\u8BD5\u81EA\u5B9A\u4E49\u7EC4\u4EF6","slug":"\u6D4B\u8BD5\u81EA\u5B9A\u4E49\u7EC4\u4EF6","link":"#\u6D4B\u8BD5\u81EA\u5B9A\u4E49\u7EC4\u4EF6","children":[]},{"level":3,"title":"\u6E32\u67D3\u5E95\u90E8","slug":"\u6E32\u67D3\u5E95\u90E8","link":"#\u6E32\u67D3\u5E95\u90E8","children":[]}]}],"relativePath":"demo.md"}`),V={name:"demo.md"},j=Object.assign(V,{setup(h){return(i,u)=>{const l=c("Badge"),t=c("Many");return o(),r("div",null,[s("h1",_,[e(a(i.$frontmatter.title)+" ",1),v]),s("h3",f,[e("Title "),n(l,{type:"info",text:"default"}),e(),C]),s("h3",k,[e("Title "),n(l,{type:"tip",text:"^1.9.0"}),e(),x]),s("h3",A,[e("Title "),n(l,{type:"warning",text:"beta"}),e(),T]),s("h3",B,[e("Title "),n(l,{type:"danger",text:"caution"}),e(),E]),w,s("p",null,[(o(),r(d,null,D(3,p=>s("span",null,a(p),1)),64))]),H,s("p",null,a(i.$page),1),N,s("p",null,a(i.$frontmatter),1),$,n(m),S,n(t)])}}});export{P as __pageData,j as default};
