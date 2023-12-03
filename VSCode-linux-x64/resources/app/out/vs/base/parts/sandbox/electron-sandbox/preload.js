(function(){"use strict";const{ipcRenderer:o,webFrame:n,contextBridge:u}=require("electron");function s(e){if(!e||!e.startsWith("vscode:"))throw new Error(`Unsupported event IPC channel '${e}'`);return!0}function a(e){for(const r of process.argv)if(r.indexOf(`--${e}=`)===0)return r.split("=")[1]}let t;const i=(async()=>{const e=a("vscode-window-config");if(!e)throw new Error("Preload: did not find expected vscode-window-config in renderer process arguments list.");try{if(s(e))return t=await o.invoke(e),Object.assign(process.env,t.userEnv),n.setZoomLevel(t.zoomLevel??0),t}catch(r){throw new Error(`Preload: unable to fetch vscode-window-config: ${r}`)}})(),d=(async()=>{const[e,r]=await Promise.all([(async()=>(await i).userEnv)(),o.invoke("vscode:fetchShellEnv")]);return{...process.env,...r,...e}})(),c={ipcRenderer:{send(e,...r){s(e)&&o.send(e,...r)},invoke(e,...r){if(s(e))return o.invoke(e,...r)},on(e,r){if(s(e))return o.on(e,r),this},once(e,r){if(s(e))return o.once(e,r),this},removeListener(e,r){if(s(e))return o.removeListener(e,r),this}},ipcMessagePort:{acquire(e,r){if(s(e)){const f=(v,p)=>{r===p&&(o.off(e,f),window.postMessage(r,"*",v.ports))};o.on(e,f)}}},webFrame:{setZoomLevel(e){typeof e=="number"&&n.setZoomLevel(e)}},process:{get platform(){return process.platform},get arch(){return process.arch},get env(){return{...process.env}},get versions(){return process.versions},get type(){return"renderer"},get execPath(){return process.execPath},cwd(){return process.env.VSCODE_CWD||process.execPath.substr(0,process.execPath.lastIndexOf(process.platform==="win32"?"\\":"/"))},shellEnv(){return d},getProcessMemoryInfo(){return process.getProcessMemoryInfo()},on(e,r){process.on(e,r)}},context:{configuration(){return t},async resolveConfiguration(){return i}}};if(process.contextIsolated)try{u.exposeInMainWorld("vscode",c)}catch(e){console.error(e)}else window.vscode=c})();

//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/1a5daa3a0231a0fbba4f14db7ec463cf99d7768e/core/vs/base/parts/sandbox/electron-sandbox/preload.js.map
