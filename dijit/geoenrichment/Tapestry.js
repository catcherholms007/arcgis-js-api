// COPYRIGHT © 201 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["dojo/_base/declare","./BaseWidget","dojo/_base/lang","dojo/_base/array","dojo/on","require","dojo/dom-construct","dojo/dom-attr","dojo/dom-class","dojo/query","dojo/i18n!../../nls/jsapi","dojox/html/entities","./dom"],function(e,t,a,i,n,s,r,l,o,d,c,_,u){function h(e,t){return"TOP"+(e+1).toString()+t}function p(e){return"Tapestry_LifeMode"+e.match(/\d+/)[0]}function f(e){return"http://downloads.esri.com/esri_content_doc/dbl/us/tapestry/segment"+e+".pdf"}c=c.geoenrichment.dijit.Tapestry;return e(t,{baseClass:"Infographics_Tapestry",_mainTable:null,_detailsTable:null,updateUIExpanded:function(){this.inherited(arguments),this._updateUI()},updateUICollapsed:function(){this.inherited(arguments),this._updateUI()},createUIExpanded:function(e){this.inherited(arguments),this._createUI(e)},createUICollapsed:function(e){this.inherited(arguments),this._createUI(e)},_createUI:function(e){var t=this._mainTable=e.addContent("table",{class:"Tapestry_Main_Table"});n(t,".Tapestry_Main_Button:click",a.hitch(this,this._toDetailView)),this.expanded?u.createCols(t,[.25,.4,.35]):u.createCols(t,[.55,.45])},_updateUI:function(){function e(){l=s.insertCell(-1)}function t(e){o.add(l,e)}this._toMainView();var a,i;for(i=0;i<3&&this._getValue(i,"NAME");i++)a=i+1;var n,s,l,d=this;n=this._mainTable;var _,u;for(i=n.rows.length;i<a;i++)!function(){s=n.insertRow(-1)}(),o.add(s,"Tapestry_LifeMode"),this.expanded&&e(),e(),t("Tapestry_Main_Name Tapestry_Main_Button LifeModeColor"),e(),t("Tapestry_Main_Pct Tapestry_Main_Button LifeModeColor"),this.expanded&&(e(),t("Tapestry_Main_Arrow Tapestry_Main_Button"),r.create("div",null,l));for(;n.rows.length>2*a;)n.deleteRow(-1);for(_=this.expanded?1:0,u=this.expanded?2:1,i=0;i<a;i++){var h=n.rows,f=h[i].cells;this.expanded&&(f[0].removeAttribute("class"),r.empty(f[0]),function(e){var t=d._getValue(i,"CODE"),a=t.length<3?"0"+t:t;o.add(e,"Tapestry_Main_Button Tapestry_Details_Image code_"+a+" LifeModeBorder "+p(t));var n=r.create("div",null,e);r.create("span",{class:"Tapestry_thumbnail_Code LifeModeBorder "+p(t),innerHTML:t},n)}(f[0])),f[_].innerHTML=this._getValue(i,"NAME")+"<br><span class='Tapestry_Main_Value'>"+this._formatValue(i,"VALUE")+" "+c.hhLabel+"</span>",f[u].innerHTML=this._formatValue(i,"PRC")+"<br><span class='Tapestry_Main_PctLabel'>"+c.prtHhLabel+"</span>",h[i].setAttribute("data-index",i.toString())}},_getValue:function(e,t){return this.getValueByName(0,h(e,t))},_formatValue:function(e,t){return this.formatByName(0,h(e,t))},_toDetailView:function(e){for(var t,a=e.target,n=this._mainTable;a&&a!==n;){if(t=a.getAttribute("data-index")){t=+t;break}a=a.parentNode}if(this.expanded){if(this._detailsTableRow){if(this._detailsTableRow.previousSibling===a)return o.remove(a,"clicked"),void this._toMainView();this._toMainView(),function(){var e=n.rows;i.forEach(e,function(e){o.remove(e,"clicked")})}(),o.add(a,"clicked"),this.createDetailsTable(a)}else o.add(a,"clicked"),this.createDetailsTable(a);this._createDetailedViewExpanded(t)}else window.open(f(this._getValue(t,"NUM")),"_blank")},createDetailsTable:function(e){this._detailsTableRow=r.create("tr",null,e,"after");var t=r.create("td",{colSpan:"4"},this._detailsTableRow);this._detailsTable=r.create("table",{class:"Tapestry_Details_Table"},t),u.createCols(this._detailsTable,[.35,.35,.3])},_createDetailedViewExpanded:function(e){function t(){u=T.insertRow(-1)}function a(e){h=u.insertCell(-1),e&&o.add(h,e)}function i(e,t,a){var i={};return e&&(i.class=e),t&&(i.innerHTML=_.encode(t)),r.create("div",i,a||h)}function s(t){return b._getValue(e,t)}function l(t){return b._formatValue(e,t)}function d(e,t){a("Tapestry_Details_FieldCell");var n=i("LifeModeBorder");i("Tapestry_Details_Label",e,n),i(null,l(t),n)}var u,h,T=this._detailsTable,b=this,m=s("CODE");o.add(T,p(m)),m.length<3&&(m="0"+m),t(),d(c.hhTypeLabel,"TYPE"),d(c.medianAgeLabel,"AGE"),a("Tapestry_Details_Image household code_"+m),h.rowSpan=2,i(),i(null,s("TYPE")),t(),d(c.employmentLabel,"JOB"),d(c.educationLabel,"EDUCATION"),t(),d(c.incomeLabel,"INCOME"),d(c.raceEthnicityLabel,"RACE"),a("Tapestry_Details_Image housing code_"+m),h.rowSpan=2,i(),i(null,s("HOUSE")),t(),a(),h.colSpan=2;var y=i("Wizard_Link Tapestry_Details_Name","View full segment profile"),w=f(s("NUM"));n(y,"click",function(){window.open(w,"_blank")})},_toMainView:function(){this._detailsTableRow&&(r.destroy(this._detailsTableRow),this._detailsTable=null,this._detailsTableRow=null)}})});