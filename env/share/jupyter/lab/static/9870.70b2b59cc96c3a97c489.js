"use strict";(self["webpackChunk_jupyterlab_application_top"]=self["webpackChunk_jupyterlab_application_top"]||[]).push([[9870],{42555:(e,t,n)=>{n.r(t);n.d(t,{Accordion:()=>w,AccordionItem:()=>D,Anchor:()=>b,AnchoredRegion:()=>N,Avatar:()=>C,Badge:()=>R,Breadcrumb:()=>x,BreadcrumbItem:()=>E,Button:()=>k,Card:()=>G,Checkbox:()=>M,Combobox:()=>L,DataGrid:()=>H,DataGridCell:()=>$,DataGridRow:()=>z,DateField:()=>q,Dialog:()=>Q,Divider:()=>X,Listbox:()=>Z,Menu:()=>te,MenuItem:()=>se,NumberField:()=>oe,Option:()=>ae,Progress:()=>ce,ProgressRing:()=>ye,Radio:()=>le,RadioGroup:()=>ge,Search:()=>he,Select:()=>we,Slider:()=>De,SliderLabel:()=>be,Switch:()=>Ne,Tab:()=>Re,TabPanel:()=>Ce,Tabs:()=>xe,TextArea:()=>Ee,TextField:()=>ke,Toolbar:()=>Ge,Tooltip:()=>Me,TreeItem:()=>Le,TreeView:()=>$e});var s=n(40765);var r=n(81351);var o=n(16904);const p=new Set(["children","localName","ref","style","className"]);const a=Object.freeze(Object.create(null));const i="_default";const c=new Map;function d(e,t){if(typeof e==="function"){e(t)}else{e.current=t}}function y(e,t){if(!t.name){const n=r.FASTElementDefinition.forType(e);if(n){t.name=n.name}else{throw new Error("React wrappers must wrap a FASTElement or be configured with a name.")}}return t.name}function u(e){return e.events||(e.events={})}function l(e,t,n){if(p.has(n)){console.warn(`${y(e,t)} contains property ${n} which is a React `+`reserved property. It will be used by React and not set on `+`the element.`);return false}return true}function m(e,t){if(!t.keys){if(t.properties){t.keys=new Set(t.properties.concat(Object.keys(u(t))))}else{const n=new Set(Object.keys(u(t)));const s=r.Observable.getAccessors(e.prototype);if(s.length>0){for(const r of s){if(l(e,t,r.name)){n.add(r.name)}}}else{for(const s in e.prototype){if(!(s in HTMLElement.prototype)&&l(e,t,s)){n.add(s)}}}t.keys=n}}return t.keys}function g(e,t){let n=[];const s={register(e,...t){n.forEach((n=>n.register(e,...t)));n=[]}};function r(s,r={}){var p,l;if(s instanceof o.FoundationElementRegistry){if(t){t.register(s)}else{n.push(s)}s=s.type}const g=c.get(s);if(g){const e=g.get((p=r.name)!==null&&p!==void 0?p:i);if(e){return e}}class v extends e.Component{constructor(){super(...arguments);this._element=null}_updateElement(e){const t=this._element;if(t===null){return}const n=this.props;const s=e||a;const o=u(r);for(const r in this._elementProps){const e=n[r];const p=o[r];if(p===undefined){t[r]=e}else{const n=s[r];if(e===n){continue}if(n!==undefined){t.removeEventListener(p,n)}if(e!==undefined){t.addEventListener(p,e)}}}}componentDidMount(){this._updateElement()}componentDidUpdate(e){this._updateElement(e)}render(){const t=this.props.__forwardedRef;if(this._ref===undefined||this._userRef!==t){this._ref=e=>{if(this._element===null){this._element=e}if(t!==null){d(t,e)}this._userRef=t}}const n={ref:this._ref};const o=this._elementProps={};const p=m(s,r);const a=this.props;for(const e in a){const t=a[e];if(p.has(e)){o[e]=t}else{n[e==="className"?"class":e]=t}}return e.createElement(y(s,r),n)}}const h=e.forwardRef(((t,n)=>e.createElement(v,Object.assign(Object.assign({},t),{__forwardedRef:n}),t===null||t===void 0?void 0:t.children)));if(!c.has(s)){c.set(s,new Map)}c.get(s).set((l=r.name)!==null&&l!==void 0?l:i,h);return h}return{wrap:r,registry:s}}var v=n(28416);var h=n.n(v);const{wrap:J}=g(h(),(0,s.provideJupyterDesignSystem)());const w=J((0,s.jpAccordion)(),{events:{onChange:"change"}});w.displayName="Jupyter.Accordion";const{wrap:f}=g(h(),(0,s.provideJupyterDesignSystem)());const D=f((0,s.jpAccordionItem)(),{events:{onChange:"change"}});D.displayName="Jupyter.AccordionItem";const{wrap:S}=g(h(),(0,s.provideJupyterDesignSystem)());const b=S((0,s.jpAnchor)());b.displayName="Jupyter.Anchor";const{wrap:j}=g(h(),(0,s.provideJupyterDesignSystem)());const N=j((0,s.jpAnchoredRegion)());N.displayName="Jupyter.AnchoredRegion";const{wrap:T}=g(h(),(0,s.provideJupyterDesignSystem)());const C=T((0,s.jpAvatar)());C.displayName="Jupyter.Avatar";const{wrap:_}=g(h(),(0,s.provideJupyterDesignSystem)());const R=_((0,s.jpBadge)());R.displayName="Jupyter.Badge";const{wrap:A}=g(h(),(0,s.provideJupyterDesignSystem)());const x=A((0,s.jpBreadcrumb)());x.displayName="Jupyter.Breadcrumb";const{wrap:I}=g(h(),(0,s.provideJupyterDesignSystem)());const E=I((0,s.jpBreadcrumbItem)());E.displayName="Jupyter.BreadcrumbItem";const{wrap:F}=g(h(),(0,s.provideJupyterDesignSystem)());const k=F((0,s.jpButton)());k.displayName="Jupyter.Button";const{wrap:B}=g(h(),(0,s.provideJupyterDesignSystem)());const G=B((0,s.jpCard)());G.displayName="Jupyter.Card";const{wrap:P}=g(h(),(0,s.provideJupyterDesignSystem)());const M=P((0,s.jpCheckbox)(),{events:{onChange:"change"}});M.displayName="Jupyter.Checkbox";const{wrap:O}=g(h(),(0,s.provideJupyterDesignSystem)());const L=O((0,s.jpCombobox)(),{events:{onChange:"change",onInput:"input"}});L.displayName="Jupyter.Combobox";const{wrap:V}=g(h(),(0,s.provideJupyterDesignSystem)());const $=V((0,s.jpDataGridCell)(),{events:{onFocus:"cell-focused"}});$.displayName="Jupyter.DataGridCell";const z=V((0,s.jpDataGridRow)(),{events:{onFocus:"row-focused"}});z.displayName="Jupyter.DataGridRow";const H=V((0,s.jpDataGrid)());H.displayName="Jupyter.DataGrid";const{wrap:U}=g(h(),(0,s.provideJupyterDesignSystem)());const q=U((0,s.jpDateField)(),{events:{onChange:"change"}});q.displayName="Jupyter.DateField";const{wrap:K}=g(h(),(0,s.provideJupyterDesignSystem)());const Q=K((0,s.jpDialog)());Q.displayName="Jupyter.Dialog";const{wrap:W}=g(h(),(0,s.provideJupyterDesignSystem)());const X=W((0,s.jpDivider)());X.displayName="Jupyter.Divider";const{wrap:Y}=g(h(),(0,s.provideJupyterDesignSystem)());const Z=Y((0,s.jpListbox)());Z.displayName="Jupyter.Listbox";const{wrap:ee}=g(h(),(0,s.provideJupyterDesignSystem)());const te=ee((0,s.jpMenu)());te.displayName="Jupyter.Menu";const{wrap:ne}=g(h(),(0,s.provideJupyterDesignSystem)());const se=ne((0,s.jpMenuItem)(),{events:{onExpand:"expanded-change"}});se.displayName="Jupyter.MenuItem";const{wrap:re}=g(h(),(0,s.provideJupyterDesignSystem)());const oe=re((0,s.jpNumberField)(),{events:{onChange:"change",onInput:"input"}});oe.displayName="Jupyter.NumberField";const{wrap:pe}=g(h(),(0,s.provideJupyterDesignSystem)());const ae=pe((0,s.jpOption)());ae.displayName="Juypter.Option";const{wrap:ie}=g(h(),(0,s.provideJupyterDesignSystem)());const ce=ie((0,s.jpProgress)(),{name:"jp-progress"});ce.displayName="Jupyter.Progress";const{wrap:de}=g(h(),(0,s.provideJupyterDesignSystem)());const ye=de((0,s.jpProgressRing)(),{name:"jp-progress-ring"});ye.displayName="Jupyter.ProgressRing";const{wrap:ue}=g(h(),(0,s.provideJupyterDesignSystem)());const le=ue((0,s.jpRadio)(),{events:{onChange:"change"}});le.displayName="Jupyter.Radio";const{wrap:me}=g(h(),(0,s.provideJupyterDesignSystem)());const ge=me((0,s.jpRadioGroup)(),{events:{onChange:"change"}});ge.displayName="Jupyter.RadioGroup";const{wrap:ve}=g(h(),(0,s.provideJupyterDesignSystem)());const he=ve((0,s.jpSearch)(),{events:{onChange:"change",onInput:"input"}});he.displayName="Jupyter.Search";const{wrap:Je}=g(h(),(0,s.provideJupyterDesignSystem)());const we=Je((0,s.jpSelect)(),{events:{onChange:"change",onInput:"input"}});we.displayName="Jupyter.Select";const{wrap:fe}=g(h(),(0,s.provideJupyterDesignSystem)());const De=fe((0,s.jpSlider)(),{events:{onChange:"change"}});De.displayName="Jupyter.Slider";const{wrap:Se}=g(h(),(0,s.provideJupyterDesignSystem)());const be=Se((0,s.jpSliderLabel)());be.displayName="Jupyter.SliderLabel";const{wrap:je}=g(h(),(0,s.provideJupyterDesignSystem)());const Ne=je((0,s.jpSwitch)(),{events:{onChange:"change"}});Ne.displayName="Jupyter.Switch";const{wrap:Te}=g(h(),(0,s.provideJupyterDesignSystem)());const Ce=Te((0,s.jpTabPanel)());Ce.displayName="Jupyter.TabPanel";const{wrap:_e}=g(h(),(0,s.provideJupyterDesignSystem)());const Re=_e((0,s.jpTab)());Re.displayName="Jupyter.Tab";const{wrap:Ae}=g(h(),(0,s.provideJupyterDesignSystem)());const xe=Ae((0,s.jpTabs)(),{events:{onChange:"change"}});xe.displayName="Jupyter.Tabs";const{wrap:Ie}=g(h(),(0,s.provideJupyterDesignSystem)());const Ee=Ie((0,s.jpTextArea)(),{events:{onChange:"change"}});Ee.displayName="Jupyter.TextArea";const{wrap:Fe}=g(h(),(0,s.provideJupyterDesignSystem)());const ke=Fe((0,s.jpTextField)(),{events:{onChange:"change",onInput:"input"}});ke.displayName="Jupyter.TextField";const{wrap:Be}=g(h(),(0,s.provideJupyterDesignSystem)());const Ge=Be((0,s.jpToolbar)());Ge.displayName="Jupyter.Toolbar";const{wrap:Pe}=g(h(),(0,s.provideJupyterDesignSystem)());const Me=Pe((0,s.jpTooltip)());Me.displayName="Jupyter.Tooltip";const{wrap:Oe}=g(h(),(0,s.provideJupyterDesignSystem)());const Le=Oe((0,s.jpTreeItem)(),{events:{onExpand:"expanded-change",onSelect:"selected-change"}});Le.displayName="Jupyter.TreeItem";const{wrap:Ve}=g(h(),(0,s.provideJupyterDesignSystem)());const $e=Ve((0,s.jpTreeView)());$e.displayName="Jupyter.TreeView"}}]);