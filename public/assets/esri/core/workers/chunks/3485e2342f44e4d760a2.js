"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[2916],{74669:(e,t,s)=>{s.d(t,{Z:()=>n});var i=s(69801);class n{constructor(e,t){this._storage=new i.WJ,this._storage.maxSize=e,t&&this._storage.registerRemoveFunc("",t)}put(e,t){this._storage.put(e,t,1,1)}pop(e){return this._storage.pop(e)}get(e){return this._storage.get(e)}clear(){this._storage.clearAll()}destroy(){this._storage.destroy()}}},69801:(e,t,s)=>{s.d(t,{WJ:()=>l,Xq:()=>o});var i,n,r=s(70586),a=s(44553);(n=i||(i={}))[n.ALL=0]="ALL",n[n.SOME=1]="SOME";class o{constructor(e,t,s){this._namespace=e,this._storage=t,this._removeFunc=!1,this._hit=0,this._miss=0,this._storage.register(this),this._namespace+=":",s&&(this._storage.registerRemoveFunc(this._namespace,s),this._removeFunc=!0)}destroy(){this._storage.clear(this._namespace),this._removeFunc&&this._storage.deregisterRemoveFunc(this._namespace),this._storage.deregister(this),this._storage=null}get namespace(){return this._namespace.slice(0,-1)}get hitRate(){return this._hit/(this._hit+this._miss)}get size(){return this._storage.size}get maxSize(){return this._storage.maxSize}resetHitRate(){this._hit=this._miss=0}put(e,t,s,i=0){this._storage.put(this._namespace+e,t,s,i)}get(e){const t=this._storage.get(this._namespace+e);return void 0===t?++this._miss:++this._hit,t}pop(e){const t=this._storage.pop(this._namespace+e);return void 0===t?++this._miss:++this._hit,t}updateSize(e,t,s){this._storage.updateSize(this._namespace+e,t,s)}clear(){this._storage.clear(this._namespace)}clearAll(){this._storage.clearAll()}getStats(){return this._storage.getStats()}resetStats(){this._storage.resetStats()}}class l{constructor(e=10485760){this._maxSize=e,this._db=new Map,this._size=0,this._hit=0,this._miss=0,this._removeFuncs=new a.Z,this._users=new a.Z}destroy(){this.clearAll(),this._removeFuncs.clear(),this._users.clear(),this._db=null}register(e){this._users.push(e)}deregister(e){this._users.removeUnordered(e)}registerRemoveFunc(e,t){this._removeFuncs.push([e,t])}deregisterRemoveFunc(e){this._removeFuncs.filterInPlace((t=>t[0]!==e))}get size(){return this._size}get maxSize(){return this._maxSize}set maxSize(e){this._maxSize=Math.max(e,0),this._checkSizeLimit()}put(e,t,s,n){const r=this._db.get(e);if(r&&(this._size-=r.size,this._db.delete(e),r.entry!==t&&this._notifyRemove(e,r.entry,i.ALL)),s>this._maxSize)return void this._notifyRemove(e,t,i.ALL);if(void 0===t)return void console.warn("Refusing to cache undefined entry ");if(!s||s<0)return void console.warn("Refusing to cache entry with invalid size "+s);const a=1+Math.max(n,-3)- -3;this._db.set(e,{entry:t,size:s,lifetime:a,lives:a}),this._size+=s,this._checkSizeLimit()}updateSize(e,t,s){const n=this._db.get(e);if(n&&n.entry===t){for(this._size-=n.size;s>this._maxSize;){const n=this._notifyRemove(e,t,i.SOME);if(!((0,r.pC)(n)&&n>0))return void this._db.delete(e);s=n}n.size=s,this._size+=s,this._checkSizeLimit()}}pop(e){const t=this._db.get(e);if(t)return this._size-=t.size,this._db.delete(e),++this._hit,t.entry;++this._miss}get(e){const t=this._db.get(e);if(void 0!==t)return this._db.delete(e),t.lives=t.lifetime,this._db.set(e,t),++this._hit,t.entry;++this._miss}getStats(){const e={Size:Math.round(this._size/1048576)+"/"+Math.round(this._maxSize/1048576)+"MB","Hit rate":Math.round(100*this._getHitRate())+"%",Entries:this._db.size.toString()},t={},s=new Array;this._db.forEach(((e,i)=>{const n=e.lifetime;s[n]=(s[n]||0)+e.size,this._users.forAll((s=>{const n=s.namespace;if(i.startsWith(n)){const s=t[n]||0;t[n]=s+e.size}}))}));const i={};this._users.forAll((e=>{const s=e.namespace;if(!isNaN(e.hitRate)&&e.hitRate>0){const n=t[s]||0;t[s]=n,i[s]=Math.round(100*e.hitRate)+"%"}else i[s]="0%"}));const n=Object.keys(t);n.sort(((e,s)=>t[s]-t[e])),n.forEach((s=>e[s]=Math.round(t[s]/2**20)+"MB / "+i[s]));for(let t=s.length-1;t>=0;--t){const i=s[t];i&&(e["Priority "+(t+-3-1)]=Math.round(i/this.size*100)+"%")}return e}resetStats(){this._hit=this._miss=0,this._users.forAll((e=>e.resetHitRate()))}clear(e){this._db.forEach(((t,s)=>{s.startsWith(e)&&(this._size-=t.size,this._db.delete(s),this._notifyRemove(s,t.entry,i.ALL))}))}clearAll(){this._db.forEach(((e,t)=>this._notifyRemove(t,e.entry,i.ALL))),this._size=0,this._db.clear()}_getHitRate(){return this._hit/(this._hit+this._miss)}_notifyRemove(e,t,s){let i;return this._removeFuncs.some((n=>{if(e.startsWith(n[0])){const e=n[1](t,s);return"number"==typeof e&&(i=e),!0}return!1})),i}_checkSizeLimit(){if(!(this._size<=this._maxSize))for(const[e,t]of this._db){if(this._db.delete(e),t.lives<=1){this._size-=t.size;const s=this._notifyRemove(e,t.entry,i.SOME);(0,r.pC)(s)&&s>0&&(this._size+=s,t.lives=t.lifetime,t.size=s,this._db.set(e,t))}else--t.lives,this._db.set(e,t);if(this._size<=.9*this.maxSize)return}}}},10661:(e,t,s)=>{s.d(t,{s:()=>n});var i=s(39020);class n{constructor(){this._observers=[]}observe(e){return this._observers.includes(e)||this._observers.push(e),new i.X(this._observers,e)}notify(){const e=this._observers.slice();for(let t=0;t<e.length;++t){const s=e[t];s.onInvalidated(),s.onCommitted()}}}},37455:(e,t,s)=>{s.d(t,{N:()=>i});const i={convertToGEGeometry:function(e,t){return null==t?null:e.convertJSONToGeometry(t)},exportPoint:function(e,t,s){const i=new n(e.getPointX(t),e.getPointY(t),s),r=e.hasZ(t),a=e.hasM(t);return r&&(i.z=e.getPointZ(t)),a&&(i.m=e.getPointM(t)),i},exportPolygon:function(e,t,s){return new r(e.exportPaths(t),s,e.hasZ(t),e.hasM(t))},exportPolyline:function(e,t,s){return new a(e.exportPaths(t),s,e.hasZ(t),e.hasM(t))},exportMultipoint:function(e,t,s){return new o(e.exportPoints(t),s,e.hasZ(t),e.hasM(t))},exportExtent:function(e,t,s){const i=e.hasZ(t),n=e.hasM(t),r=new l(e.getXMin(t),e.getYMin(t),e.getXMax(t),e.getYMax(t),s);if(i){const s=e.getZExtent(t);r.zmin=s.vmin,r.zmax=s.vmax}if(n){const s=e.getMExtent(t);r.mmin=s.vmin,r.mmax=s.vmax}return r}};class n{constructor(e,t,s){this.x=e,this.y=t,this.spatialReference=s,this.z=void 0,this.m=void 0}}class r{constructor(e,t,s,i){this.rings=e,this.spatialReference=t,this.hasZ=void 0,this.hasM=void 0,s&&(this.hasZ=s),i&&(this.hasM=i)}}class a{constructor(e,t,s,i){this.paths=e,this.spatialReference=t,this.hasZ=void 0,this.hasM=void 0,s&&(this.hasZ=s),i&&(this.hasM=i)}}class o{constructor(e,t,s,i){this.points=e,this.spatialReference=t,this.hasZ=void 0,this.hasM=void 0,s&&(this.hasZ=s),i&&(this.hasM=i)}}class l{constructor(e,t,s,i,n){this.xmin=e,this.ymin=t,this.xmax=s,this.ymax=i,this.spatialReference=n,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}},24470:(e,t,s)=>{s.d(t,{HH:()=>l,SO:()=>u,Ue:()=>r,al:()=>a,cS:()=>m,jE:()=>c,kK:()=>h,oJ:()=>o,r3:()=>f}),s(80442),s(22021);var i=s(70586),n=s(6570);function r(e=p){return[e[0],e[1],e[2],e[3]]}function a(e,t,s,i,n=r()){return n[0]=e,n[1]=t,n[2]=s,n[3]=i,n}function o(e,t=r()){return t[0]=e.xmin,t[1]=e.ymin,t[2]=e.xmax,t[3]=e.ymax,t}function l(e,t){return new n.Z({xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3],spatialReference:t})}function u(e){return function(e){return(0,i.Wi)(e)||e[0]>=e[2]?0:e[2]-e[0]}(e)*function(e){return e[1]>=e[3]?0:e[3]-e[1]}(e)}function c(e,t,s){return t>=e[0]&&s>=e[1]&&t<=e[2]&&s<=e[3]}function h(e,t){return Math.max(t[0],e[0])<=Math.min(t[2],e[2])&&Math.max(t[1],e[1])<=Math.min(t[3],e[3])}function f(e,t){return t[0]>=e[0]&&t[2]<=e[2]&&t[1]>=e[1]&&t[3]<=e[3]}function m(e){return e?function(e,t){return e!==t&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3]),e}(e,d):r(d)}const d=[1/0,1/0,-1/0,-1/0],p=[0,0,0,0]},82526:(e,t,s)=>{s.d(t,{aX:()=>b});var i=s(68773),n=s(20102),r=s(92604),a=s(70586),o=s(38913),l=s(58901),u=s(82971),c=s(33955);const h={102100:{maxX:20037508.342788905,minX:-20037508.342788905,plus180Line:new l.Z({paths:[[[20037508.342788905,-20037508.342788905],[20037508.342788905,20037508.342788905]]],spatialReference:u.Z.WebMercator}),minus180Line:new l.Z({paths:[[[-20037508.342788905,-20037508.342788905],[-20037508.342788905,20037508.342788905]]],spatialReference:u.Z.WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new l.Z({paths:[[[180,-180],[180,180]]],spatialReference:u.Z.WGS84}),minus180Line:new l.Z({paths:[[[-180,-180],[-180,180]]],spatialReference:u.Z.WGS84})}};function f(e,t){return Math.ceil((e-t)/(2*t))}function m(e,t){const s=d(e);for(const e of s)for(const s of e)s[0]+=t;return e}function d(e){return(0,c.oU)(e)?e.rings:e.paths}var p=s(8744),g=s(40488),y=(s(66577),s(3172)),_=s(17452);function x(e){return{geometryType:(0,c.Ji)(e[0]),geometries:e.map((e=>e.toJSON()))}}const v=r.Z.getLogger("esri.geometry.support.normalizeUtils");function S(e){return"polygon"===e[0].type}function z(e){return"polyline"===e[0].type}function F(e,t,s){if(t){const t=function(e,t){if(!(e instanceof l.Z||e instanceof o.Z)){const e="straightLineDensify: the input geometry is neither polyline nor polygon";throw v.error(e),new n.Z(e)}const s=d(e),i=[];for(const e of s){const s=[];i.push(s),s.push([e[0][0],e[0][1]]);for(let i=0;i<e.length-1;i++){const n=e[i][0],r=e[i][1],a=e[i+1][0],o=e[i+1][1],l=Math.sqrt((a-n)*(a-n)+(o-r)*(o-r)),u=(o-r)/l,c=(a-n)/l,h=l/t;if(h>1){for(let e=1;e<=h-1;e++){const i=e*t,a=c*i+n,o=u*i+r;s.push([a,o])}const e=(l+Math.floor(h-1)*t)/2,i=c*e+n,a=u*e+r;s.push([i,a])}s.push([a,o])}}return function(e){return"polygon"===e.type}(e)?new o.Z({rings:i,spatialReference:e.spatialReference}):new l.Z({paths:i,spatialReference:e.spatialReference})}(e,1e6);e=(0,g.Sx)(t,!0)}return s&&(e=m(e,s)),e}function R(e,t,s){if(Array.isArray(e)){const i=e[0];if(i>t){const s=f(i,t);e[0]=i+s*(-2*t)}else if(i<s){const t=f(i,s);e[0]=i+t*(-2*s)}}else{const i=e.x;if(i>t){const s=f(i,t);e=e.clone().offset(s*(-2*t),0)}else if(i<s){const t=f(i,s);e=e.clone().offset(t*(-2*s),0)}}return e}function w(e,t){let s=-1;for(let i=0;i<t.cutIndexes.length;i++){const n=t.cutIndexes[i],r=t.geometries[i],a=d(r);for(let e=0;e<a.length;e++){const t=a[e];t.some((s=>{if(s[0]<180)return!0;{let s=0;for(let e=0;e<t.length;e++){const i=t[e][0];s=i>s?i:s}s=Number(s.toFixed(9));const i=-360*f(s,180);for(let s=0;s<t.length;s++){const t=r.getPoint(e,s);r.setPoint(e,s,t.clone().offset(i,0))}return!0}}))}if(n===s){if(S(e))for(const t of d(r))e[n]=e[n].addRing(t);else if(z(e))for(const t of d(r))e[n]=e[n].addPath(t)}else s=n,e[n]=r}return e}async function b(e,t,s){if(!Array.isArray(e))return b([e],t);t&&"string"!=typeof t&&v.warn("normalizeCentralMeridian()","The url object is deprecated, use the url string instead");const n="string"==typeof t?t:t?.url??i.Z.geometryServiceUrl;let r,u,d,S,z,M,I,V,T=0;const A=[],Z=[];for(const t of e)if((0,a.Wi)(t))Z.push(t);else if(r||(r=t.spatialReference,u=(0,p.C5)(r),d=r.isWebMercator,M=d?102100:4326,S=h[M].maxX,z=h[M].minX,I=h[M].plus180Line,V=h[M].minus180Line),u)if("mesh"===t.type)Z.push(t);else if("point"===t.type)Z.push(R(t.clone(),S,z));else if("multipoint"===t.type){const e=t.clone();e.points=e.points.map((e=>R(e,S,z))),Z.push(e)}else if("extent"===t.type){const e=t.clone()._normalize(!1,!1,u);Z.push(e.rings?new o.Z(e):e)}else if(t.extent){const e=t.extent,s=f(e.xmin,z)*(2*S);let i=0===s?t.clone():m(t.clone(),s);e.offset(s,0),e.intersects(I)&&e.xmax!==S?(T=e.xmax>T?e.xmax:T,i=F(i,d),A.push(i),Z.push("cut")):e.intersects(V)&&e.xmin!==z?(T=e.xmax*(2*S)>T?e.xmax*(2*S):T,i=F(i,d,360),A.push(i),Z.push("cut")):Z.push(i)}else Z.push(t.clone());else Z.push(t);let N=f(T,S),E=-90;const C=N,P=new l.Z;for(;N>0;){const e=360*N-180;P.addPath([[e,E],[e,-1*E]]),E*=-1,N--}if(A.length>0&&C>0){const t=w(A,await async function(e,t,s,i){const n="string"==typeof e?(0,_.mN)(e):e,r=t[0].spatialReference,a={...i,query:{...n.query,f:"json",sr:JSON.stringify(r),target:JSON.stringify({geometryType:(0,c.Ji)(t[0]),geometries:t}),cutter:JSON.stringify(s)}},o=await(0,y.default)(n.path+"/cut",a),{cutIndexes:l,geometries:u=[]}=o.data;return{cutIndexes:l,geometries:u.map((e=>{const t=(0,c.im)(e);return t.spatialReference=r,t}))}}(n,A,P,s)),i=[],r=[];for(let s=0;s<Z.length;s++){const n=Z[s];if("cut"!==n)r.push(n);else{const n=t.shift(),o=e[s];(0,a.pC)(o)&&"polygon"===o.type&&o.rings&&o.rings.length>1&&n.rings.length>=o.rings.length?(i.push(n),r.push("simplify")):r.push(d?(0,g.$)(n):n)}}if(!i.length)return r;const o=await async function(e,t,s){const i="string"==typeof e?(0,_.mN)(e):e,n=t[0].spatialReference,r=(0,c.Ji)(t[0]),a={...s,query:{...i.query,f:"json",sr:n.wkid?n.wkid:JSON.stringify(n),geometries:JSON.stringify(x(t))}};return function(e,t,s){const i=(0,c.q9)(t);return e.map((e=>{const t=i.fromJSON(e);return t.spatialReference=s,t}))}((await(0,y.default)(i.path+"/simplify",a)).data,r,n)}(n,i,s),l=[];for(let e=0;e<r.length;e++){const t=r[e];"simplify"!==t?l.push(t):l.push(d?(0,g.$)(o.shift()):o.shift())}return l}const D=[];for(let e=0;e<Z.length;e++){const t=Z[e];if("cut"!==t)D.push(t);else{const e=A.shift();D.push(!0===d?(0,g.$)(e):e)}}return D}},69285:(e,t,s)=>{s.d(t,{k:()=>a});var i=s(70586),n=s(67900),r=s(8744);function a(e,t,s){if((0,i.Wi)(t)||(0,i.Wi)(s)||s.vcsWkid||(0,r.fS)(t,s))return null;const a=(0,n._R)(t)/(0,n._R)(s);if(1===a)return null;switch(e){case"point":case"esriGeometryPoint":return e=>function(e,t){e&&null!=e.z&&(e.z*=t)}(e,a);case"polyline":case"esriGeometryPolyline":return e=>function(e,t){if(e)for(const s of e.paths)for(const e of s)e.length>2&&(e[2]*=t)}(e,a);case"polygon":case"esriGeometryPolygon":return e=>function(e,t){if(e)for(const s of e.rings)for(const e of s)e.length>2&&(e[2]*=t)}(e,a);case"multipoint":case"esriGeometryMultipoint":return e=>function(e,t){if(e)for(const s of e.points)s.length>2&&(s[2]*=t)}(e,a);case"extent":case"esriGeometryExtent":return e=>function(e,t){e&&null!=e.zmin&&null!=e.zmax&&(e.zmin*=t,e.zmax*=t)}(e,a);default:return null}}},98370:(e,t,s)=>{s.d(t,{y:()=>y,r:()=>h});var i=s(70586),n=s(35308),r=s(49600),a=s(82397),o=s(8744),l=s(62432),u=s(8418);class c{constructor(e,t,s){this._fieldDataCache=new Map,this._returnDistinctMap=new Map,this.returnDistinctValues=e.returnDistinctValues,this.fieldsIndex=s,this.featureAdapter=t;const i=e.outFields;if(i&&!i.includes("*")){this.outFields=i;let e=0;for(const t of i){const i=(0,l.hr)(t),n=this.fieldsIndex.get(i),r=n?null:(0,l.Jc)(i,s),a=n?n.name:(0,l.nu)(t)||"FIELD_EXP_"+e++;this._fieldDataCache.set(t,{alias:a,clause:r})}}}countDistinctValues(e){return this.returnDistinctValues?(e.forEach((e=>this.getAttributes(e))),this._returnDistinctMap.size):e.length}getAttributes(e){const t=this._processAttributesForOutFields(e);return this._processAttributesForDistinctValues(t)}getFieldValue(e,t,s){const i=s?s.name:t;let n=null;return this._fieldDataCache.has(i)?n=this._fieldDataCache.get(i).clause:s||(n=(0,l.Jc)(t,this.fieldsIndex),this._fieldDataCache.set(i,{alias:i,clause:n})),s?this.featureAdapter.getAttribute(e,i):n.calculateValue(e,this.featureAdapter)}getNormalizedValue(e,t){const s=t.normalizationType,i=t.normalizationTotal;let n=this.getFieldValue(e,t.field,t.fieldInfo);if(s&&Number.isFinite(n)){const r=this.getFieldValue(e,t.normalizationField,t.normalizationFieldInfo);n=(0,u.fk)(n,s,r,i)}return n}getExpressionValue(e,t,s,i){const n={attributes:this.featureAdapter.getAttributes(e),layer:{fields:this.fieldsIndex.fields}},r=i.createExecContext(n,s);return i.executeFunction(t,r)}getExpressionValues(e,t,s,i){const n={fields:this.fieldsIndex.fields};return e.map((e=>{const r={attributes:this.featureAdapter.getAttributes(e),layer:n},a=i.createExecContext(r,s);return i.executeFunction(t,a)}))}validateItem(e,t){return this._fieldDataCache.has(t)||this._fieldDataCache.set(t,{alias:t,clause:(0,l.Jc)(t,this.fieldsIndex)}),this._fieldDataCache.get(t).clause.testFeature(e,this.featureAdapter)}validateItems(e,t){return this._fieldDataCache.has(t)||this._fieldDataCache.set(t,{alias:t,clause:(0,l.Jc)(t,this.fieldsIndex)}),this._fieldDataCache.get(t).clause.testSet(e,this.featureAdapter)}_processAttributesForOutFields(e){const t=this.outFields;if(!t||!t.length)return this.featureAdapter.getAttributes(e);const s={};for(const i of t){const{alias:t,clause:n}=this._fieldDataCache.get(i);s[t]=n?n.calculateValue(e,this.featureAdapter):this.featureAdapter.getAttribute(e,t)}return s}_processAttributesForDistinctValues(e){if((0,i.Wi)(e)||!this.returnDistinctValues)return e;const t=this.outFields,s=[];if(t)for(const i of t){const{alias:t}=this._fieldDataCache.get(i);s.push(e[t])}else for(const t in e)s.push(e[t]);const n=`${(t||["*"]).join(",")}=${s.join(",")}`;let r=this._returnDistinctMap.get(n)||0;return this._returnDistinctMap.set(n,++r),r>1?null:e}}var h,f,m=s(37427),d=s(11490),p=s(35671),g=s(59266);class y{constructor(e,t,s){this.items=e,this.query=t,this.geometryType=s.geometryType,this.hasM=s.hasM,this.hasZ=s.hasZ,this.fieldsIndex=s.fieldsIndex,this.objectIdField=s.objectIdField,this.spatialReference=s.spatialReference,this.featureAdapter=s.featureAdapter}get size(){return this.items.length}createQueryResponseForCount(){const e=new c(this.query,this.featureAdapter,this.fieldsIndex);if(!this.query.outStatistics)return e.countDistinctValues(this.items);const{groupByFieldsForStatistics:t,having:s,outStatistics:i}=this.query,n=t?.length;if(!n)return 1;const r=new Map,a=new Map,o=new Set;for(const n of i){const{statisticType:i}=n,l="exceedslimit"!==i?n.onStatisticField:void 0;if(!a.has(l)){const s=[];for(const i of t){const t=this._getAttributeValues(e,i,r);s.push(t)}a.set(l,this._calculateUniqueValues(s,e.returnDistinctValues))}const u=a.get(l);for(const t in u){const{data:i,items:n}=u[t],r=i.join(",");s&&!e.validateItems(n,s)||o.add(r)}}return o.size}async createQueryResponse(){let e;return e=this.query.outStatistics?this.query.outStatistics.some((e=>"exceedslimit"===e.statisticType))?this._createExceedsLimitQueryResponse(this.query):await this._createStatisticsQueryResponse(this.query):this._createFeatureQueryResponse(this.query),this.query.returnQueryGeometry&&((0,o.JY)(this.query.outSR)&&!(0,o.fS)(this.query.geometry.spatialReference,this.query.outSR)?e.queryGeometry=(0,d.S2)({spatialReference:this.query.outSR,...(0,m.iV)(this.query.geometry,this.query.geometry.spatialReference,this.query.outSR)}):e.queryGeometry=(0,d.S2)({spatialReference:this.query.outSR,...this.query.geometry})),e}createSnappingResponse(e,t){const s=this.featureAdapter,n=function(e,t){return e?t?4:3:t?3:2}(this.hasZ,this.hasM),{x:r,y:a}=e.point,o="number"==typeof e.distance?e.distance:e.distance.x,l="number"==typeof e.distance?e.distance:e.distance.y,u={candidates:[]},c="esriGeometryPolygon"===this.geometryType,f=this._getPointCreator(e.point,this.spatialReference,t);for(const t of this.items){const m=s.getGeometry(t);if((0,i.Wi)(m))continue;const{coords:d,lengths:p}=m;if(e.types&h.EDGE){let e=0;for(let i=0;i<p.length;i++){const c=p[i];for(let i=0;i<c;i++,e+=n){const h=d[e],m=d[e+1];if(i!==c-1){const i=d[e+n],c=d[e+n+1],{x:p,y:g}=_(r,a,h,m,i,c),y=(r-p)/o,x=(a-g)/l,v=y*y+x*x;v<=1&&u.candidates.push({type:"edge",objectId:s.getObjectId(t),distance:Math.sqrt(v),target:f(p,g),start:f(h,m),end:f(i,c)})}}}}if(e.types&h.VERTEX){const e=c?d.length-n:d.length;for(let i=0;i<e;i+=n){const e=d[i],n=d[i+1],c=(r-e)/o,h=(a-n)/l,m=c*c+h*h;m<=1&&u.candidates.push({type:"vertex",objectId:s.getObjectId(t),distance:Math.sqrt(m),target:f(e,n)})}}}return u.candidates.sort(((e,t)=>e.distance-t.distance)),u}_getPointCreator(e,t,s){const n=(0,i.pC)(s)&&!(0,o.fS)(t,s)?e=>(0,m.iV)(e,t,s):e=>e;return null!=e.z&&null!=e.m?(t,s)=>n({x:t,y:s,z:e.z,m:e.m}):null!=e.z?(t,s)=>n({x:t,y:s,z:e.z}):null!=e.m?(t,s)=>n({x:t,y:s,m:e.m}):(e,t)=>n({x:e,y:t})}async createSummaryStatisticsResponse(e){const{field:t,valueExpression:s,normalizationField:i,normalizationType:n,normalizationTotal:r,minValue:a,maxValue:o,scale:l}=e,c=this.fieldsIndex.isDateField(t),h=await this._getDataValues({field:t,valueExpression:s,normalizationField:i,normalizationType:n,normalizationTotal:r,scale:l}),f=(0,u.S5)({normalizationType:n,normalizationField:i,minValue:a,maxValue:o}),m=this.fieldsIndex.get(t),d={value:.5,fieldType:m?.type},g=(0,p.qN)(m)?(0,u.H0)({values:h,supportsNullCount:f,percentileParams:d}):(0,u.i5)({values:h,minValue:a,maxValue:o,useSampleStdDev:!n,supportsNullCount:f,percentileParams:d});return(0,u.F_)(g,c)}async createUniqueValuesResponse(e){const{field:t,valueExpression:s,domain:i,returnAllCodedValues:n,scale:r}=e,a=await this._getDataValues({field:t,valueExpression:s,scale:r}),o=(0,u.eT)(a);return(0,u.Qm)(o,i,n)}async createClassBreaksResponse(e){const{field:t,valueExpression:s,normalizationField:i,normalizationType:n,normalizationTotal:r,classificationMethod:a,standardDeviationInterval:o,minValue:l,maxValue:c,numClasses:h,scale:f}=e,m=await this._getDataValues({field:t,valueExpression:s,normalizationField:i,normalizationType:n,normalizationTotal:r,scale:f}),d=(0,u.G2)(m,{field:t,normalizationField:i,normalizationType:n,normalizationTotal:r,classificationMethod:a,standardDeviationInterval:o,minValue:l,maxValue:c,numClasses:h});return(0,u.DL)(d,a)}async createHistogramResponse(e){const{field:t,valueExpression:s,normalizationField:i,normalizationType:n,normalizationTotal:r,classificationMethod:a,standardDeviationInterval:o,minValue:l,maxValue:c,numBins:h,scale:f}=e,m=await this._getDataValues({field:t,valueExpression:s,normalizationField:i,normalizationType:n,normalizationTotal:r,scale:f});return(0,u.oF)(m,{field:t,normalizationField:i,normalizationType:n,normalizationTotal:r,classificationMethod:a,standardDeviationInterval:o,minValue:l,maxValue:c,numBins:h})}_sortFeatures(e,t,s){if(e.length>1&&t&&t.length)for(const i of t.reverse()){const t=i.split(" "),n=t[0],r=this.fieldsIndex.get(n),a=t[1]&&"desc"===t[1].toLowerCase(),o=(0,u.Lq)(r?.type,a);e.sort(((e,t)=>{const i=s(e,n,r),a=s(t,n,r);return o(i,a)}))}}_createFeatureQueryResponse(e){const t=this.items,{geometryType:s,hasM:i,hasZ:n,objectIdField:r,spatialReference:o}=this,{outFields:l,outSR:u,quantizationParameters:c,resultRecordCount:h,resultOffset:f,returnZ:m,returnM:p}=e,g=null!=h&&t.length>(f||0)+h,y=l&&(l.includes("*")?[...this.fieldsIndex.fields]:l.map((e=>this.fieldsIndex.get(e))));return{exceededTransferLimit:g,features:this._createFeatures(e,t),fields:y,geometryType:s,hasM:i&&p,hasZ:n&&m,objectIdFieldName:r,spatialReference:(0,d.S2)(u||o),transform:c&&(0,a.vY)(c)||null}}_createFeatures(e,t){const s=new c(e,this.featureAdapter,this.fieldsIndex),{hasM:i,hasZ:n}=this,{orderByFields:r,quantizationParameters:o,returnGeometry:l,returnCentroid:u,maxAllowableOffset:h,resultOffset:f,resultRecordCount:m,returnZ:p=!1,returnM:g=!1}=e,y=n&&p,_=i&&g;let x=[],v=0;const S=[...t];if(this._sortFeatures(S,r,((e,t,i)=>s.getFieldValue(e,t,i))),l||u){const e=(0,a.vY)(o);if(l&&!u)for(const t of S)x[v++]={attributes:s.getAttributes(t),geometry:(0,d.Op)(this.geometryType,this.hasZ,this.hasM,this.featureAdapter.getGeometry(t),h,e,y,_)};else if(!l&&u)for(const t of S)x[v++]={attributes:s.getAttributes(t),centroid:(0,d.EG)(this,this.featureAdapter.getCentroid(t,this),e)};else for(const t of S)x[v++]={attributes:s.getAttributes(t),centroid:(0,d.EG)(this,this.featureAdapter.getCentroid(t,this),e),geometry:(0,d.Op)(this.geometryType,this.hasZ,this.hasM,this.featureAdapter.getGeometry(t),h,e,y,_)}}else for(const e of S){const t=s.getAttributes(e);t&&(x[v++]={attributes:t})}const z=f||0;if(null!=m){const e=z+m;x=x.slice(z,Math.min(x.length,e))}return x}_createExceedsLimitQueryResponse(e){let t=!1,s=Number.POSITIVE_INFINITY,n=Number.POSITIVE_INFINITY,r=Number.POSITIVE_INFINITY;for(const t of e.outStatistics)if("exceedslimit"===t.statisticType){s=null!=t.maxPointCount?t.maxPointCount:Number.POSITIVE_INFINITY,n=null!=t.maxRecordCount?t.maxRecordCount:Number.POSITIVE_INFINITY,r=null!=t.maxVertexCount?t.maxVertexCount:Number.POSITIVE_INFINITY;break}if("esriGeometryPoint"===this.geometryType)t=this.items.length>s;else if(this.items.length>n)t=!0;else{const e=this.hasZ?this.hasM?4:3:this.hasM?3:2,s=this.featureAdapter;t=this.items.reduce(((e,t)=>{const n=s.getGeometry(t);return e+((0,i.pC)(n)&&n.coords.length||0)}),0)/e>r}return{fields:[{name:"exceedslimit",type:"esriFieldTypeInteger",alias:"exceedslimit",sqlType:"sqlTypeInteger",domain:null,defaultValue:null}],features:[{attributes:{exceedslimit:Number(t)}}]}}async _createStatisticsQueryResponse(e){const t={attributes:{}},s=[],i=new Map,n=new Map,r=new Map,a=new Map,o=new c(e,this.featureAdapter,this.fieldsIndex),l=e.outStatistics,{groupByFieldsForStatistics:u,having:h,orderByFields:f}=e,m=u&&u.length,d=!!m,p=d&&u[0],g=d&&!this.fieldsIndex.get(p);for(const e of l){const{outStatisticFieldName:l,statisticType:c}=e,f=e,y="exceedslimit"!==c?e.onStatisticField:void 0,_="percentile_disc"===c||"percentile_cont"===c,x="EnvelopeAggregate"===c||"CentroidAggregate"===c||"ConvexHullAggregate"===c,v=d&&1===m&&(y===p||g)&&"count"===c;if(d){if(!r.has(y)){const e=[];for(const t of u){const s=this._getAttributeValues(o,t,i);e.push(s)}r.set(y,this._calculateUniqueValues(e,o.returnDistinctValues))}const e=r.get(y);for(const t in e){const{count:s,data:n,items:r,itemPositions:c}=e[t],m=n.join(",");if(!h||o.validateItems(r,h)){const e=a.get(m)||{attributes:{}};if(x){e.aggregateGeometries||(e.aggregateGeometries={});const{aggregateGeometries:t,outStatisticFieldName:s}=await this._getAggregateGeometry(f,r);e.aggregateGeometries[s]=t}else{let t=null;if(v)t=s;else{const e=this._getAttributeValues(o,y,i),s=c.map((t=>e[t]));t=_&&"statisticParameters"in f?this._getPercentileValue(f,s):this._getStatisticValue(f,s,null,o.returnDistinctValues)}e.attributes[l]=t}u.forEach(((t,s)=>e.attributes[this.fieldsIndex.get(t)?t:`EXPR_${s+1}`]=n[s])),a.set(m,e)}}}else if(x){t.aggregateGeometries||(t.aggregateGeometries={});const{aggregateGeometries:e,outStatisticFieldName:s}=await this._getAggregateGeometry(f,this.items);t.aggregateGeometries[s]=e}else{const e=this._getAttributeValues(o,y,i);t.attributes[l]=_&&"statisticParameters"in f?this._getPercentileValue(f,e):this._getStatisticValue(f,e,n,o.returnDistinctValues)}s.push({name:l,alias:l,type:"esriFieldTypeDouble"})}const y=d?Array.from(a.values()):[t];return this._sortFeatures(y,f,((e,t)=>e.attributes[t])),{fields:s,features:y}}async _getAggregateGeometry(e,t){const i=await Promise.all([s.e(5837),s.e(247)]).then(s.bind(s,30247)),{statisticType:a,outStatisticFieldName:o}=e,{featureAdapter:l,spatialReference:u,geometryType:c,hasZ:h,hasM:f}=this,m=t.map((e=>(0,d.Op)(c,h,f,l.getGeometry(e)))),p=i.convexHull(u,m,!0)[0],g={aggregateGeometries:null,outStatisticFieldName:null};if("EnvelopeAggregate"===a){const e=p?(0,r._w)(p):(0,r.aO)(i.union(u,m));g.aggregateGeometries={...e,spatialReference:u},g.outStatisticFieldName=o||"extent"}else if("CentroidAggregate"===a){const e=p?(0,n.tO)(p):(0,n.$G)((0,r.aO)(i.union(u,m)));g.aggregateGeometries={x:e[0],y:e[1],spatialReference:u},g.outStatisticFieldName=o||"centroid"}else"ConvexHullAggregate"===a&&(g.aggregateGeometries=p,g.outStatisticFieldName=o||"convexHull");return g}_getStatisticValue(e,t,s,i){const{onStatisticField:n,statisticType:r}=e;let a=null;return a=s?.has(n)?s.get(n):(0,p.qN)(this.fieldsIndex.get(n))?(0,u.H0)({values:t,returnDistinct:i}):(0,u.i5)({values:t,minValue:null,maxValue:null,useSampleStdDev:!0}),s&&s.set(n,a),a["var"===r?"variance":r]}_getPercentileValue(e,t){const{onStatisticField:s,statisticParameters:i,statisticType:n}=e,{value:r,orderBy:a}=i,o=this.fieldsIndex.get(s);return(0,u.XL)(t,{value:r,orderBy:a,fieldType:o?.type,isDiscrete:"percentile_disc"===n})}_getAttributeValues(e,t,s){if(s.has(t))return s.get(t);const i=this.fieldsIndex.get(t),n=this.items.map((s=>e.getFieldValue(s,t,i)));return s.set(t,n),n}_getAttributeNormalizedValues(e,t){return this.items.map((s=>e.getNormalizedValue(s,{field:t.field,fieldInfo:this.fieldsIndex.get(t.field),normalizationField:t.normalizationField,normalizationFieldInfo:this.fieldsIndex.get(t.normalizationField),normalizationType:t.normalizationType,normalizationTotal:t.normalizationTotal})))}async _getAttributeExpressionValues(e,t,s){const{arcadeUtils:i}=await(0,g.LC)(),n=i.createFunction(t),r=s&&i.getViewInfo(s);return e.getExpressionValues(this.items,n,r,i)}_calculateUniqueValues(e,t){const s={},i=this.items,n=i.length;for(let r=0;r<n;r++){const n=i[r],a=[];for(const t of e)a.push(t[r]);const o=a.join(",");t?null==s[o]&&(s[o]={count:1,data:a,items:[n],itemPositions:[r]}):null==s[o]?s[o]={count:1,data:a,items:[n],itemPositions:[r]}:(s[o].count++,s[o].items.push(n),s[o].itemPositions.push(r))}return s}async _getDataValues(e){const t=new c(this.query,this.featureAdapter,this.fieldsIndex),{valueExpression:s,field:i,normalizationField:n,normalizationType:r,normalizationTotal:a,scale:o}=e,l=s?{viewingMode:"map",scale:o,spatialReference:this.query.outSR||this.spatialReference}:null;return s?this._getAttributeExpressionValues(t,s,l):this._getAttributeNormalizedValues(t,{field:i,normalizationField:n,normalizationType:r,normalizationTotal:a})}}function _(e,t,s,i,n,r){const a=n-s,o=r-i,l=a*a+o*o,u=(e-s)*a+(t-i)*o,c=Math.min(1,Math.max(0,u/l));return{x:s+a*c,y:i+o*c}}(f=h||(h={}))[f.NONE=0]="NONE",f[f.EDGE=1]="EDGE",f[f.VERTEX=2]="VERTEX"},62432:(e,t,s)=>{s.d(t,{nu:()=>p,hr:()=>d,Jc:()=>f,G3:()=>g,Of:()=>m,z4:()=>h,hO:()=>c});var i=s(20102),n=s(74669),r=s(41534);const a=new class{constructor(e,t){this._cache=new n.Z(e),this._invalidCache=new n.Z(t)}get(e,t){const s=`${t.uid}:${e}`,i=this._cache.get(s);if(i)return i;if(void 0!==this._invalidCache.get(s))return null;try{const i=r.WhereClause.create(e,t);return this._cache.put(s,i),i}catch{return this._invalidCache.put(s,null),null}}}(50,500),o="feature-store:unsupported-query",l=" as ",u=new Set(["esriFieldTypeOID","esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong","esriFieldTypeDate"]);function c(e,t){if(!t)return!0;const s=a.get(t,e);if(!s)throw new i.Z(o,"invalid SQL expression",{where:t});if(!s.isStandardized)throw new i.Z(o,"where clause is not standard",{where:t});return m(e,s.fieldNames,"where clause contains missing fields"),!0}function h(e,t,s){if(!t)return!0;const n=a.get(t,e);if(!n)throw new i.Z(o,"invalid SQL expression",{having:t});if(!n.isAggregate)throw new i.Z(o,"having does not contain a valid aggregate function",{having:t});const r=n.fieldNames;if(m(e,r,"having contains missing fields"),!n.getExpressions().every((t=>{const{aggregateType:i,field:n}=t,r=e.has(n)&&e.get(n).name;return s.some((t=>{const{onStatisticField:s,statisticType:n}=t;return(e.has(s)&&e.get(s).name)===r&&n.toLowerCase().trim()===i}))})))throw new i.Z(o,"expressions in having should also exist in outStatistics",{having:t});return!0}function f(e,t){return e?a.get(e,t):null}function m(e,t,s,n=!0){const r=[];for(const s of t)if("*"!==s&&!e.has(s))if(n){const t=d(s);try{const s=f(t,e);if(!s)throw new i.Z(o,"invalid SQL expression",{where:t});if(!s.isStandardized)throw new i.Z(o,"expression is not standard",{clause:s});m(e,s.fieldNames,"expression contains missing fields")}catch(e){const t=e&&e.details;if(t&&(t.clause||t.where))throw e;t&&t.missingFields?r.push(...t.missingFields):r.push(s)}}else r.push(s);if(r.length)throw new i.Z(o,s,{missingFields:r})}function d(e){return e.split(l)[0]}function p(e){return e.split(l)[1]}function g(e,t){const s=t.get(e);return!!s&&!u.has(s.type)}},37427:(e,t,s)=>{s.d(t,{_W:()=>f,iV:()=>p,oj:()=>y});var i=s(70586),n=s(44547),r=s(37455),a=s(8744),o=s(40488);const l=[0,0];function u(e,t){if(!t)return null;if("x"in t){const s={x:0,y:0};return[s.x,s.y]=e(t.x,t.y,l),null!=t.z&&(s.z=t.z),null!=t.m&&(s.m=t.m),s}if("xmin"in t){const s={xmin:0,ymin:0,xmax:0,ymax:0};return[s.xmin,s.ymin]=e(t.xmin,t.ymin,l),[s.xmax,s.ymax]=e(t.xmax,t.ymax,l),t.hasZ&&(s.zmin=t.zmin,s.zmax=t.zmax,s.hasZ=!0),t.hasM&&(s.mmin=t.mmin,s.mmax=t.mmax,s.hasM=!0),s}return"rings"in t?{rings:c(t.rings,e),hasM:t.hasM,hasZ:t.hasZ}:"paths"in t?{paths:c(t.paths,e),hasM:t.hasM,hasZ:t.hasZ}:"points"in t?{points:h(t.points,e),hasM:t.hasM,hasZ:t.hasZ}:void 0}function c(e,t){const s=[];for(const i of e)s.push(h(i,t));return s}function h(e,t){const s=[];for(const i of e){const e=t(i[0],i[1],[0,0]);s.push(e),i.length>2&&e.push(i[2]),i.length>3&&e.push(i[3])}return s}async function f(e,t){if(!t)return;const s=Array.isArray(e)?e.map((e=>(0,i.pC)(e.geometry)&&e.geometry.spatialReference)):[e];await(0,n.iQ)(s.map((e=>({source:e,dest:t}))))}const m=u.bind(null,o.hG),d=u.bind(null,o.R6);function p(e,t,s,i){if(!e)return e;if(s||(s=t,t=e.spatialReference),!(0,a.JY)(t)||!(0,a.JY)(s)||(0,a.fS)(t,s))return e;if((0,o.Q8)(t,s)){const t=(0,a.sS)(s)?m(e):d(e);return t.spatialReference=s,t}return(0,n.oj)(r.N,[e],t,s,null,i)[0]}const g=new class{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}async push(e,t,s){if(!e||!e.length||!t||!s||(0,a.fS)(t,s))return e;const i={geometries:e,inSpatialReference:t,outSpatialReference:s,resolve:null};return this._jobs.push(i),new Promise((e=>{i.resolve=e,null===this._timer&&(this._timer=setTimeout(this._process,10))}))}_process(){this._timer=null;const e=this._jobs.shift();if(!e)return;const{geometries:t,inSpatialReference:s,outSpatialReference:i,resolve:l}=e;(0,o.Q8)(s,i)?(0,a.sS)(i)?l(t.map(m)):l(t.map(d)):l((0,n.oj)(r.N,t,s,i,null,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}};function y(e,t,s){return g.push(e,t,s)}},11490:(e,t,s)=>{s.d(t,{EG:()=>x,Op:()=>v,S2:()=>F,Up:()=>S,j6:()=>z,vF:()=>d});var i=s(35454),n=s(70586),r=s(67900),a=s(49600),o=s(33955),l=s(82526),u=s(8744),c=s(98732),h=s(5428),f=s(37427);const m=new i.X({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),d=Object.freeze({}),p=new h.Z,g=new h.Z,y=new h.Z,_={esriGeometryPoint:c.fQ,esriGeometryPolyline:c.J6,esriGeometryPolygon:c.eG,esriGeometryMultipoint:c.Iv};function x(e,t,s,i=e.hasZ,r=e.hasM){if((0,n.Wi)(t))return null;const a=e.hasZ&&i,o=e.hasM&&r;if(s){const n=(0,c.Nh)(y,t,e.hasZ,e.hasM,"esriGeometryPoint",s,i,r);return(0,c.fQ)(n,a,o)}return(0,c.fQ)(t,a,o)}function v(e,t,s,i,r,a,o=t,l=s){const u=t&&o,h=s&&l,f=(0,n.pC)(i)?"coords"in i?i:i.geometry:null;if((0,n.Wi)(f))return null;if(r){let i=(0,c.zj)(g,f,t,s,e,r,o,l);return a&&(i=(0,c.Nh)(y,i,u,h,e,a)),_[e](i,u,h)}if(a){const i=(0,c.Nh)(y,f,t,s,e,a,o,l);return _[e](i,u,h)}return(0,c.hY)(p,f,t,s,o,l),_[e](p,u,h)}async function S(e,t,s){const{outFields:i,orderByFields:n,groupByFieldsForStatistics:r,outStatistics:a}=e;if(i)for(let e=0;e<i.length;e++)i[e]=i[e].trim();if(n)for(let e=0;e<n.length;e++)n[e]=n[e].trim();if(r)for(let e=0;e<r.length;e++)r[e]=r[e].trim();if(a)for(let e=0;e<a.length;e++)a[e].onStatisticField&&(a[e].onStatisticField=a[e].onStatisticField.trim());return e.geometry&&!e.outSR&&(e.outSR=e.geometry.spatialReference),z(e,t,s)}async function z(e,t,i){if(!e)return null;let{where:c}=e;if(e.where=c=c&&c.trim(),(!c||/^1 *= *1$/.test(c)||t&&t===c)&&(e.where=null),!e.geometry)return e;let h=await async function(e){const{geometry:t,distance:i,units:n}=e;if(null==i||"vertexAttributes"in t)return t;const a=t.spatialReference,o=n?m.fromJSON(n):(0,r.qE)(a),l=a&&((0,u.sT)(a)||(0,u.sS)(a))?t:await(0,f._W)(a,u.Zn).then((()=>(0,f.iV)(t,u.Zn)));return(await async function(){return(await Promise.all([s.e(5837),s.e(247)]).then(s.bind(s,30247))).geodesicBuffer}())(l.spatialReference,l,i,o)}(e);if(e.distance=0,e.units=null,"esriSpatialRelEnvelopeIntersects"===e.spatialRel){const{spatialReference:t}=e.geometry;h=(0,a.aO)(h),h.spatialReference=t}e.geometry=h,await(0,f._W)(h.spatialReference,i);const p=(await(0,l.aX)((0,o.im)(h)))[0];if((0,n.Wi)(p))throw d;const g=p.toJSON(),y=await(0,f.iV)(g,g.spatialReference,i);if(!y)throw d;return y.spatialReference=i,e.geometry=y,e}function F(e){return e&&R in e?JSON.parse(JSON.stringify(e,w)):e}const R="_geVersion",w=(e,t)=>e!==R?t:void 0}}]);