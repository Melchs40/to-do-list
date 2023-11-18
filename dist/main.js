(()=>{"use strict";var e={d:(t,n)=>{for(var i in n)e.o(n,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:n[i]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{VI:()=>y,mj:()=>o,Tz:()=>k});class t{constructor(e){this.title=e,this.taskList=[],this.id=Math.floor(Math.random()*Math.pow(1e7,2))}set editTitle(e){this.title=e}set addTask(e){this.taskList.push(e)}set removeTask(e){for(let t=0;t<this.taskList.length;t++)e==this.taskList[t][4]&&this.taskList.splice(t,1)}get viewTasks(){return this.taskList}}class n{constructor(e,t,n,i){this.title=e,this.description=t,this.dueDate=n,this.priority=i,this.id=Math.floor(Math.random()*Math.pow(1e7,2)),this.checked=!1}set editTitle(e){return this.title=e,this.title}set editDescription(e){return this.description=e,this.description}set editDueDate(e){return this.dueDate=e,this.title}set editPriority(e){return this.priority=e,this.priority}editChecked(){return this.checked=!this.checked}}function i(e){const t=document.createElement("dialog");document.getElementById("content").appendChild(t),t.open=!0;const n=document.createElement("form");n.setAttribute("method","dialog"),t.appendChild(n);const i=document.createElement("p");i.innerHTML="What's the name of your task?",n.appendChild(i);const d=document.createElement("input");d.setAttribute("type","text"),d.value=e.title,n.appendChild(d);const c=document.createElement("p");c.innerHTML="Describe your task",n.appendChild(c);const o=document.createElement("input");o.setAttribute("type","text"),o.value=e.description,n.appendChild(o);const a=document.createElement("p");a.innerHTML="When is it due?",n.appendChild(a);const s=document.createElement("input");s.setAttribute("type","date"),s.value=e.dueDate,n.appendChild(s);const l=document.createElement("p");l.innerHTML="Is it important?",n.appendChild(l);const r=document.createElement("input");r.setAttribute("type","checkbox"),r.checked=e.priority,n.appendChild(r);const p=document.createElement("button");p.innerHTML="OK",n.appendChild(p),p.onclick=()=>{e.editTitle=d.value;let n=document.querySelector(".title-div.active");n.innerHTML=e.title,e.editDescription=o.value,e.editDueDate=s.value;let i=document.querySelector(".due-date-div.active");i.innerHTML=e.dueDate,e.editPriority=r.checked;let c=document.querySelector(".priority-div.active");c.innerHTML=e.priority,setTimeout((function(){n.classList.remove("active"),i.classList.remove("active"),c.classList.remove("active")}),1),setTimeout((function(){t.parentNode.removeChild(t)}),1)}}const d=document.createElement("button");function c(e){const t=document.createElement("div");t.classList.add("project");const c=document.createElement("div");c.setAttribute("id",e.id),c.innerHTML=e.title,c.onclick=()=>{!function(e){if(y.hasChildNodes())for(;y.firstChild;)y.removeChild(y.firstChild);for(let t=0;t<e.taskList.length;t++){let n=e.taskList[t],d=document.createElement("div");d.classList.add("task-div"),d.setAttribute("id",n.id);let c=document.createElement("input");c.classList.add("task-check"),c.setAttribute("type","checkbox"),c.checked=n.checked;let o=document.createElement("div");o.classList.add("title-div"),o.innerHTML=n.title;let a=document.createElement("div");a.classList.add("due-date-div"),a.innerHTML=n.dueDate;let s=document.createElement("div");s.classList.add("priority-div"),s.innerHTML=n.priority;let l=document.createElement("button");l.classList.add("edit-task-button"),l.innerHTML="Edit Task",l.onclick=()=>{o.classList.add("active"),a.classList.add("active"),s.classList.add("active"),i(n)};let r=document.createElement("button");r.classList.add("delete-task-button"),r.innerHTML="X",r.onclick=()=>{var i;console.log("from new-project-button"),console.log(n.id),console.log(r.parentNode.id),n.id==r.parentNode.id&&e.taskList.splice(t,1),(i=r).parentNode.parentNode.removeChild(i.parentNode)},y.appendChild(d),d.appendChild(c),d.appendChild(o),d.appendChild(a),d.appendChild(s),d.appendChild(l),d.appendChild(r)}d.setAttribute("class","task-button"),d.classList.add("button"),d.setAttribute("id","task-button"),d.innerHTML="+ Add task",y.appendChild(d),d.onclick=()=>{console.log("task button press"),function(e){const t=document.createElement("dialog");document.getElementById("content").appendChild(t),t.open=!0;const c=document.createElement("form");c.setAttribute("method","dialog"),t.appendChild(c);const a=document.createElement("p");a.innerHTML="What's the name of your task?",c.appendChild(a);const s=document.createElement("input");s.setAttribute("type","text"),c.appendChild(s);const l=document.createElement("p");l.innerHTML="Describe your task:",c.appendChild(l);const r=document.createElement("input");r.setAttribute("type","text"),c.appendChild(r);const p=document.createElement("p");p.innerHTML="When is it due?",c.appendChild(p);const u=document.createElement("input");u.setAttribute("type","date"),c.appendChild(u);const m=document.createElement("p");m.innerHTML="Is it important?",c.appendChild(m);const h=document.createElement("input");h.setAttribute("type","checkbox"),c.appendChild(h);const C=document.createElement("button");C.innerHTML="OK",c.appendChild(C),C.onclick=()=>{let c=new n(s.value,r.value,u.value,h.checked);e.push(c),console.log(c),console.log(e),function(e){let t=document.createElement("div");t.classList.add("task-div"),t.setAttribute("id",e.id);let n=document.createElement("input");n.classList.add("task-check"),n.setAttribute("type","checkbox"),n.checked=e.checked;let c=document.createElement("div");c.classList.add("title-div"),c.innerHTML=e.title;let a=document.createElement("div");a.classList.add("due-date-div"),a.innerHTML=e.dueDate;let s=document.createElement("div");s.classList.add("priority-div"),s.innerHTML=e.priority;let l=document.createElement("button");l.classList.add("edit-task-button"),l.innerHTML="Edit Task",l.onclick=()=>{c.classList.add("active"),a.classList.add("active"),s.classList.add("active"),i(e)};let r=document.createElement("button");r.classList.add("delete-task-button"),r.innerHTML="X",r.onclick=()=>{for(let e=0;e<o.length;e++){let t=o[e];for(let e=0;e<t.taskList.length;e++)t.taskList[e].id==r.parentNode.id&&t.taskList.splice(e,1)}var e;(e=r).parentNode.parentNode.removeChild(e.parentNode)},y.insertBefore(t,d),t.appendChild(n),t.appendChild(c),t.appendChild(a),t.appendChild(s),t.appendChild(l),t.appendChild(r)}(c),setTimeout((function(){t.parentNode.removeChild(t)}),1)};const L=document.createElement("button");L.innerHTML="Cancel",c.appendChild(L),L.onclick=()=>{t.parentNode.removeChild(t)}}(e.taskList)}}(e)};const a=document.createElement("button");a.classList.add("project-edit-button"),a.innerHTML="Edit this",a.onclick=()=>{!function(e){const t=document.createElement("dialog");document.getElementById("content").appendChild(t),t.open=!0;const n=document.createElement("form");n.setAttribute("method","dialog"),t.appendChild(n);const i=document.createElement("p");i.innerHTML="Please rename your project:",n.appendChild(i);const d=document.createElement("input");d.setAttribute("type","text"),d.value=e.title,n.appendChild(d);const c=document.createElement("button");c.innerHTML="OK",n.appendChild(c),c.onclick=()=>{document.getElementById(e.id).innerHTML=d.value,e.editTitle=d.value,setTimeout((function(){t.parentNode.removeChild(t)}),1)}}(e)};const s=document.createElement("button");s.classList.add("project-delete-button"),s.innerHTML="X",s.onclick=()=>{for(let t=0;t<o.length;t++)o[t].id===e.id&&o.splice(t,1);var t;(t=s).parentNode.parentNode.removeChild(t.parentNode)},k.appendChild(t),t.appendChild(c),t.appendChild(a),t.appendChild(s)}document.title="To-Do List";const o=[],a=document.getElementById("content"),s=document.createElement("div");s.setAttribute("id","header"),a.appendChild(s);const l=document.createElement("h1");l.setAttribute("id","header-title"),l.innerHTML="To-Do List",s.appendChild(l);const r=document.createElement("div");r.setAttribute("id","side-panel"),a.appendChild(r);const p=document.createElement("div");p.setAttribute("id","home-section"),p.classList.add("side-panel-section"),r.appendChild(p);const u=document.createElement("div");u.setAttribute("id","home-title"),u.innerHTML="Home",p.appendChild(u);const m=document.createElement("button");m.setAttribute("id","all-tasks"),m.innerHTML="All Tasks",p.appendChild(m);const h=document.createElement("button");h.setAttribute("id","today"),h.innerHTML="Today",p.appendChild(h);const C=document.createElement("button");C.setAttribute("id","this-week"),C.innerHTML="This Week",p.appendChild(C);const L=document.createElement("button");L.setAttribute("id","important"),L.innerHTML="Important",p.appendChild(L);const E=document.createElement("div");E.setAttribute("id","projects-section"),E.classList.add("side-panel-section"),r.appendChild(E);const b=document.createElement("div");b.setAttribute("id","projects-title"),b.innerHTML="Projects",E.appendChild(b);const v=document.createElement("button");v.setAttribute("id","project-button"),v.classList.add("button"),v.innerHTML="+ Add Project",E.appendChild(v);const k=document.createElement("div");k.setAttribute("id","project-container"),E.appendChild(k);const T=document.createElement("div");T.setAttribute("id","main-panel"),a.appendChild(T);const M=document.createElement("h1");M.setAttribute("id","main-panel-title"),T.appendChild(M);const y=document.createElement("h1");y.setAttribute("id","main-panel-div"),T.appendChild(y);const H=document.createElement("footer");H.innerHTML="Copyright © Melchs40's Computer Whiz Coding 2023",a.appendChild(H),v.onclick=()=>{!function(){const e=document.createElement("dialog");document.getElementById("content").appendChild(e),e.open=!0;const n=document.createElement("p");n.innerHTML="What's the name of your project?",e.appendChild(n);const i=document.createElement("form");i.setAttribute("method","dialog"),e.appendChild(i);const d=document.createElement("input");d.setAttribute("input","text"),i.appendChild(d);const a=document.createElement("button");a.innerHTML="OK",i.appendChild(a),a.onclick=()=>{let n=new t(d.value);o.push(n),console.log(n),console.log(o),c(n),setTimeout((function(){e.parentNode.removeChild(e)}),1)};const s=document.createElement("button");s.innerHTML="Cancel",i.appendChild(s),s.onclick=()=>{e.parentNode.removeChild(e)}}()}})();