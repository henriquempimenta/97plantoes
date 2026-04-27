import{r as l,j as e}from"./index-DEfumUBm.js";/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),f=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,r,o)=>o?o.toUpperCase():r.toLowerCase()),i=s=>{const t=f(s);return t.charAt(0).toUpperCase()+t.slice(1)},d=(...s)=>s.filter((t,r,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===r).join(" ").trim(),C=s=>{for(const t in s)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var v={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=l.forwardRef(({color:s="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:o,className:n="",children:a,iconNode:x,...c},h)=>l.createElement("svg",{ref:h,...v,width:t,height:t,stroke:s,strokeWidth:o?Number(r)*24/Number(t):r,className:d("lucide",n),...!a&&!C(c)&&{"aria-hidden":"true"},...c},[...x.map(([m,p])=>l.createElement(m,p)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=(s,t)=>{const r=l.forwardRef(({className:o,...n},a)=>l.createElement(g,{ref:a,iconNode:t,className:d(`lucide-${u(i(s))}`,`lucide-${s}`,o),...n}));return r.displayName=i(s),r};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]],b=j("headphones",w);function y(){return e.jsx("footer",{className:"pt-16 pb-10 border-t px-4",style:{background:"#0e1c2e",borderColor:"#1C5A90"},children:e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between gap-8 mb-10",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("img",{src:"./logo.svg",alt:"97plantões logo",className:"h-10 w-auto rounded-lg"}),e.jsxs("div",{children:[e.jsxs("div",{className:"font-extrabold text-xl",style:{color:"white"},children:["97",e.jsx("span",{style:{color:"#55BCCD"},children:"plantões"})]}),e.jsx("div",{className:"text-xs",style:{color:"#6b7280"},children:"Conectando a Saúde do Brasil"})]})]}),e.jsxs("div",{className:"flex items-center gap-8 text-sm flex-wrap",style:{color:"#9ca3af"},children:[e.jsx("a",{href:"?page=sobre-nos",className:"hover:text-white transition",children:"Sobre Nós"}),e.jsx("a",{href:"?page=termos-de-uso",className:"hover:text-white transition",children:"Termos de Uso"}),e.jsx("a",{href:"?page=termos-de-uso#privacidade",className:"hover:text-white transition",children:"Política de Privacidade"}),e.jsxs("a",{href:"?page=suporte",className:"flex items-center gap-2 px-5 py-2 rounded-full border border-[#32B3C5] text-[#32B3C5] hover:bg-[#32B3C5]/10 hover:text-[#32B3C5] transition font-medium",children:[e.jsx(b,{size:18}),"Suporte"]})]})]}),e.jsxs("div",{className:"border-t pt-8 text-center text-sm",style:{borderColor:"#1C5A9055",color:"#6b7280"},children:[e.jsxs("p",{children:["© ",new Date().getFullYear()," SANT-E TECNOLOGIA EM SAUDE LTDA · CNPJ 63.478.081/0001-50"]}),e.jsx("p",{className:"mt-1",children:"Todos os direitos reservados."})]})]})})}export{y as F,j as c};
