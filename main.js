(()=>{"use strict";var e={d:(t,n)=>{for(var d in n)e.o(n,d)&&!e.o(t,d)&&Object.defineProperty(t,d,{enumerable:!0,get:n[d]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{VI:()=>v,mj:()=>c,Tz:()=>A});class t{constructor(e,t,n,d){this.title=e,this.description=t,this.dueDate=n,this.priority=d,this.taskArray=[],this.checked=!0}createArray(){return this.taskArray.push(this.title),this.taskArray.push(this.description),this.taskArray.push(this.dueDate),this.taskArray.push(this.priority),this.taskArray.push(this.checked),this.taskArray}}const n=document.createElement("button");class d{constructor(e){this.title=e,this.taskList=[],this.id=Math.floor(Math.random()*Math.pow(1e3,2)),this.projectArr=[]}createArray(){return this.projectArr.push(this.title),this.projectArr.push(this.taskList),this.projectArr.push(this.id),this.projectArr}}function i(){const e=document.createElement("dialog");document.getElementById("content").appendChild(e),e.open=!0;const i=document.createElement("p");i.innerHTML="What's the name of your project?",e.appendChild(i);const a=document.createElement("form");a.setAttribute("method","dialog"),e.appendChild(a);const o=document.createElement("input");o.setAttribute("input","text"),a.appendChild(o);const s=document.createElement("button");s.innerHTML="OK",a.appendChild(s),s.onclick=()=>{let i=new d(o.value),a=i.createArray();c.push(a),function(e){const d=document.createElement("div");d.classList.add("project");const i=document.createElement("div");i.setAttribute("id",e.id),i.innerHTML=e.title,i.onclick=()=>{!function(e){if(v.hasChildNodes())for(;v.firstChild;)v.removeChild(v.firstChild);for(let t=0;t<e.projectArr[1].length;t++){let n=document.createElement("div");n.classList.add("task-div");const d=e.projectArr[1][t];let i=document.createElement("input");i.classList.add("task-check"),i.setAttribute("type","checkbox"),i.checked=d[4];let c=document.createElement("div");c.classList.add("title-div"),c.innerHTML=d[0];let a=document.createElement("div");a.classList.add("due-date-div"),a.innerHTML=d[2];let o=document.createElement("div");o.classList.add("priority-div"),o.innerHTML=d[3];let s=document.createElement("button");s.classList.add("edit-task-button"),s.innerHTML="Edit Task";let r=document.createElement("button");r.classList.add("delete-task-button"),r.innerHTML="X",v.appendChild(n),n.appendChild(i),n.appendChild(c),n.appendChild(a),n.appendChild(o),n.appendChild(s),n.appendChild(r)}n.setAttribute("class","task-button"),n.classList.add("button"),n.setAttribute("id","task-button"),n.innerHTML="+ Add task",v.appendChild(n),n.onclick=()=>{!function(e){const d=document.createElement("dialog");document.getElementById("content").appendChild(d),d.open=!0;const i=document.createElement("form");i.setAttribute("method","dialog"),d.appendChild(i);const a=document.createElement("p");a.innerHTML="What's the name of your task?",i.appendChild(a);const o=document.createElement("input");o.setAttribute("type","text"),i.appendChild(o);const s=document.createElement("p");s.innerHTML="Describe your task",i.appendChild(s);const r=document.createElement("input");r.setAttribute("type","text"),i.appendChild(r);const l=document.createElement("p");l.innerHTML="When is it due?",i.appendChild(l);const p=document.createElement("input");p.setAttribute("type","date"),i.appendChild(p);const u=document.createElement("p");u.innerHTML="Is it important?",i.appendChild(u);const m=document.createElement("input");m.setAttribute("type","checkbox"),i.appendChild(m);const h=document.createElement("button");h.innerHTML="OK",i.appendChild(h),h.onclick=()=>{let i=new t(o.value,r.value,p.value,m.checked),a=i.createArray(),s=document.createElement("div");s.classList.add("task-div");let l=document.createElement("input");l.classList.add("task-check"),l.setAttribute("type","checkbox"),l.checked=i.checked;let u=document.createElement("div");u.classList.add("title-div"),u.innerHTML=i.title;let h=document.createElement("div");h.classList.add("due-date-div"),h.innerHTML=i.dueDate;let C=document.createElement("div");C.classList.add("priority-div"),C.innerHTML=i.priority;let b=document.createElement("button");b.classList.add("edit-task-button"),b.innerHTML="Edit Task";let E=document.createElement("button");E.classList.add("delete-task-button"),E.innerHTML="X",e.push(a),v.insertBefore(s,n),s.appendChild(l),s.appendChild(u),s.appendChild(h),s.appendChild(C),s.appendChild(b),s.appendChild(E),setTimeout((function(){d.parentNode.removeChild(d)}),1),console.log(c)};const C=document.createElement("button");C.innerHTML="Cancel",i.appendChild(C),C.onclick=()=>{d.parentNode.removeChild(d)}}(e.taskList)}}(e)};const a=document.createElement("button");a.classList.add("project-delete-button"),a.innerHTML="X",a.onclick=()=>{for(let t=0;t<c.length;t++)c[t][2]===e.id&&c.splice(t,1);var t;console.log(c),(t=a).parentNode.parentNode.removeChild(t.parentNode)},A.appendChild(d),d.appendChild(i),d.appendChild(a)}(i),setTimeout((function(){e.parentNode.removeChild(e)}),1)};const r=document.createElement("button");r.innerHTML="Cancel",a.appendChild(r),r.onclick=()=>{e.parentNode.removeChild(e)}}document.title="To-Do List";const c=[],a=document.getElementById("content"),o=document.createElement("div");o.setAttribute("id","header"),a.appendChild(o);const s=document.createElement("h1");s.setAttribute("id","header-title"),s.innerHTML="To-Do List",o.appendChild(s);const r=document.createElement("div");r.setAttribute("id","side-panel"),a.appendChild(r);const l=document.createElement("div");l.setAttribute("id","home-section"),l.classList.add("side-panel-section"),r.appendChild(l);const p=document.createElement("div");p.setAttribute("id","home-title"),p.innerHTML="Home",l.appendChild(p);const u=document.createElement("button");u.setAttribute("id","all-tasks"),u.innerHTML="All Tasks",l.appendChild(u);const m=document.createElement("button");m.setAttribute("id","today"),m.innerHTML="Today",l.appendChild(m);const h=document.createElement("button");h.setAttribute("id","this-week"),h.innerHTML="This Week",l.appendChild(h);const C=document.createElement("button");C.setAttribute("id","important"),C.innerHTML="Important",l.appendChild(C);const b=document.createElement("div");b.setAttribute("id","projects-section"),b.classList.add("side-panel-section"),r.appendChild(b);const E=document.createElement("div");E.setAttribute("id","projects-title"),E.innerHTML="Projects",b.appendChild(E);const L=document.createElement("button");L.setAttribute("id","project-button"),L.classList.add("button"),L.innerHTML="+ Add Project",b.appendChild(L);const A=document.createElement("div");A.setAttribute("id","project-container"),b.appendChild(A);const k=document.createElement("div");k.setAttribute("id","main-panel"),a.appendChild(k);const T=document.createElement("h1");T.setAttribute("id","main-panel-title"),k.appendChild(T);const v=document.createElement("h1");v.setAttribute("id","main-panel-div"),k.appendChild(v);const M=document.createElement("footer");M.innerHTML="Copyright © Melchs40's Computer Whiz Coding 2023",a.appendChild(M),L.onclick=()=>{i()}})();