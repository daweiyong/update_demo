(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e04c4d2"],{3217:function(e,t,r){},5206:function(e,t,r){e.exports=r.p+"static/img/man.6cf0f25b.gif"},"817d":function(e,t,r){var a,i,o;(function(n,s){i=[t,r("164e")],a=s,o="function"===typeof a?a.apply(t,i):a,void 0===o||(e.exports=o)})(0,(function(e,t){var r=function(e){"undefined"!==typeof console&&console&&console.error&&console.error(e)};if(t){var a=["#2ec7c9","#b6a2de","#5ab1ef","#ffb980","#d87a80","#8d98b3","#e5cf0d","#97b552","#95706d","#dc69aa","#07a2a4","#9a7fd1","#588dd5","#f5994e","#c05050","#59678c","#c9ab00","#7eb00a","#6f5553","#c14089"],i={color:a,title:{textStyle:{fontWeight:"normal",color:"#008acd"}},visualMap:{itemWidth:15,color:["#5ab1ef","#e0ffff"]},toolbox:{iconStyle:{normal:{borderColor:a[0]}}},tooltip:{backgroundColor:"rgba(50,50,50,0.5)",axisPointer:{type:"line",lineStyle:{color:"#008acd"},crossStyle:{color:"#008acd"},shadowStyle:{color:"rgba(200,200,200,0.2)"}}},dataZoom:{dataBackgroundColor:"#efefff",fillerColor:"rgba(182,162,222,0.2)",handleColor:"#008acd"},grid:{borderColor:"#eee"},categoryAxis:{axisLine:{lineStyle:{color:"#008acd"}},splitLine:{lineStyle:{color:["#eee"]}}},valueAxis:{axisLine:{lineStyle:{color:"#008acd"}},splitArea:{show:!0,areaStyle:{color:["rgba(250,250,250,0.1)","rgba(200,200,200,0.1)"]}},splitLine:{lineStyle:{color:["#eee"]}}},timeline:{lineStyle:{color:"#008acd"},controlStyle:{color:"#008acd",borderColor:"#008acd"},symbol:"emptyCircle",symbolSize:3},line:{smooth:!0,symbol:"emptyCircle",symbolSize:3},candlestick:{itemStyle:{color:"#d87a80",color0:"#2ec7c9"},lineStyle:{width:1,color:"#d87a80",color0:"#2ec7c9"},areaStyle:{color:"#2ec7c9",color0:"#b6a2de"}},scatter:{symbol:"circle",symbolSize:4},map:{itemStyle:{color:"#ddd"},areaStyle:{color:"#fe994e"},label:{color:"#d87a80"}},graph:{itemStyle:{color:"#d87a80"},linkStyle:{color:"#2ec7c9"}},gauge:{axisLine:{lineStyle:{color:[[.2,"#2ec7c9"],[.8,"#5ab1ef"],[1,"#d87a80"]],width:10}},axisTick:{splitNumber:10,length:15,lineStyle:{color:"auto"}},splitLine:{length:22,lineStyle:{color:"auto"}},pointer:{width:5}}};t.registerTheme("macarons",i)}else r("ECharts is not Loaded")}))},8945:function(e,t,r){"use strict";var a=r("3217"),i=r.n(a);i.a},9406:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"dashboard-container"},[r(e.currentRole,{tag:"component"})],1)},i=[],o=r("2f62"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"dashboard-editor-container"},[r("el-row",{staticStyle:{background:"#fff",padding:"6px 6px 0","margin-bottom":"20px"}},[r("BarChart",{attrs:{height:"360px","barchatr-data":e.barchatrData}})],1)],1)},s=[],l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:e.className,style:{height:e.height,width:e.width}})},c=[],d=r("164e"),h=r.n(d),f=r("ed08"),b={data(){return{$_sidebarElm:null}},mounted(){this.$_initResizeEvent(),this.$_initSidebarResizeEvent()},beforeDestroy(){this.$_destroyResizeEvent(),this.$_destroySidebarResizeEvent()},activated(){this.$_initResizeEvent(),this.$_initSidebarResizeEvent()},deactivated(){this.$_destroyResizeEvent(),this.$_destroySidebarResizeEvent()},methods:{$_resizeHandler(){return Object(f["b"])(()=>{this.chart&&this.chart.resize()},100)()},$_initResizeEvent(){window.addEventListener("resize",this.$_resizeHandler)},$_destroyResizeEvent(){window.removeEventListener("resize",this.$_resizeHandler)},$_sidebarResizeHandler(e){"width"===e.propertyName&&this.$_resizeHandler()},$_initSidebarResizeEvent(){this.$_sidebarElm=document.getElementsByClassName("sidebar-container")[0],this.$_sidebarElm&&this.$_sidebarElm.addEventListener("transitionend",this.$_sidebarResizeHandler)},$_destroySidebarResizeEvent(){this.$_sidebarElm&&this.$_sidebarElm.removeEventListener("transitionend",this.$_sidebarResizeHandler)}}};r("817d");var p={mixins:[b],props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"350px"},autoResize:{type:Boolean,default:!0},chartData:{type:Array,required:!0}},data(){return{chart:null}},watch:{chartData:{deep:!0,handler(e){this.setOptions(e),this.chart.hideLoading()}}},mounted(){this.$nextTick(()=>{this.initChart()})},beforeDestroy(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initChart(){this.chart=h.a.init(this.$el,"macarons"),this.setOptions(this.chartData),this.chart.showLoading({text:"数据加载中...",textStyle:{fontSize:30,color:"#444"},effectOption:{backgroundColor:"rgba(0, 0, 0, 0)"}})},setOptions(e){this.chart.setOption({title:{text:"每月新增用户数",left:"center",top:"5",textStyle:{fontSize:"18",color:"#333",fontWeight:"500"},padding:[0,0,10,0]},xAxis:{data:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],boundaryGap:!0,axisTick:{show:!1}},grid:{left:20,right:10,bottom:20,top:60,containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"cross"},padding:[5,30]},yAxis:{name:"单位（名）",nameTextStyle:{color:"#3888fa",fontSize:14,textShadowColor:"#f3f8ff",textShadowOffsetY:1},type:"value",axisTick:{show:!1}},legend:{data:["大量"]},series:[{name:"新增用户",smooth:!0,symbolSize:10,type:"line",label:{show:!0,position:"top",textStyle:{color:"#3888fa",fontSize:14,fontWeight:"bold"}},itemStyle:{normal:{color:"#3888fa",size:20,lineStyle:{color:"#3888fa",width:2},areaStyle:{color:"#f3f8ff"}}},data:e,animationDuration:2800,animationEasing:"quadraticOut"}]})}}},u=p,y=r("2877"),m=Object(y["a"])(u,l,c,!1,null,null,null),g=m.exports,S=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:e.className,style:{height:e.height,width:e.width}})},v=[];r("817d");var x={mixins:[b],props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"300px"},barchatrData:{type:Array,required:!0}},data(){return{chart:null,myColor:["#eb2100","#eb3600","#d0570e","#d0a00e","#34da62","#00e9db","#00c0e9","#0096f3","#33CCFF","#33FFCC","#33CCFF","#33FFCC"]}},watch:{barchatrData:{deep:!0,handler(e){this.setOptions(e),this.chart.hideLoading()}}},mounted(){this.$nextTick(()=>{this.initChart()})},beforeDestroy(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initChart(){this.chart=h.a.init(this.$el,"macarons"),this.setOptions(this.barchatrData),this.chart.showLoading({text:"数据加载中...",textStyle:{fontSize:30,color:"#444"},effectOption:{backgroundColor:"rgba(0, 0, 0, 0)"}})},setOptions(e){var t=this;this.chart=h.a.init(this.$el,"macarons"),this.chart.setOption({title:{text:"每月发帖量",left:"center",top:"5",textStyle:{fontSize:"18",color:"#333",fontWeight:"500"}},backgroundColor:"#fff",grid:{left:"5%",top:"12%",right:"25%",bottom:"8%",containLabel:!0},xAxis:[{show:!1}],yAxis:[{axisTick:"none",axisLine:"none",offset:"30",axisLabel:{textStyle:{color:"#333",fontSize:"16"}},data:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]},{axisTick:"none",axisLabel:{textStyle:{color:"#333",fontSize:"0"}},data:[0,0,0,0,0,0,0,0,0,0,0,0]},{textStyle:{left:"center"},nameGap:"30",nameTextStyle:{color:"#333",fontSize:"30"},axisLine:{lineStyle:{color:"rgba(0,0,0,0)"}},data:[]}],series:[{name:"篇",type:"bar",yAxisIndex:0,data:e,label:{formatter:"{b}",normal:{show:!0,position:"right",textStyle:{color:"#333",fontSize:"16"},formatter:function(e){return`${e.value}条`}}},barWidth:15,itemStyle:{normal:{color:function(e){var r=t.myColor.length;return t.myColor[e.dataIndex%r]},opacity:.7}},z:2},{name:"外圆",type:"scatter",hoverAnimation:!1,data:[0,0,0,0,0,0,0,0,0,0,0,0],yAxisIndex:2,symbolSize:20,itemStyle:{normal:{color:function(e){var r=t.myColor.length;return t.myColor[e.dataIndex%r]},opacity:.7}},z:2}]})}}},O=x,w=Object(y["a"])(O,S,v,!1,null,null,null),_=w.exports,C={name:"DashboardAdmin",components:{LineChart:g,BarChart:_},data(){return{LineChartData:[],barchatrData:[]}},created(){},methods:{handleSetLineChartData(e){}}},z=C,E=(r("fe17"),Object(y["a"])(z,n,s,!1,null,"69c74ff7",null)),$=E.exports,j=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"dashboard-editor-container"},[r("div",{staticClass:"clearfix"},[r("div",{staticClass:"info-container",staticStyle:{color:"#409EFF"}},[r("span",{staticStyle:{"font-size":"30px","padding-top":"20px",display:"inline-block"}},[r("svg-icon",{staticStyle:{"margin-right":"1em"},attrs:{"icon-class":"rulsetitle"}}),e._v("亲爱的撰稿人您好\n      ")],1),e._v(" "),r("strong",[r("span",[e._v("\n          发表文章\n          "),r("br"),e._v(e._s(e.editorall)+"篇\n        ")])]),e._v(" "),r("strong",[r("span",[e._v("\n          成功发布\n          "),r("br"),e._v(e._s(e.editorbook)+"篇\n        ")])])])]),e._v(" "),r("div",[r("img",{staticClass:"emptyGif",attrs:{src:e.emptyGif}})])])},D=[];function L(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?L(Object(r),!0).forEach((function(t){P(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function P(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var R={name:"DashboardEditor",data(){return{emptyGif:r("5206"),editorall:"",editorbook:""}},computed:k({},Object(o["b"])(["name","avatar","roles"])),created(){}},A=R,F=(r("8945"),Object(y["a"])(A,j,D,!1,null,"251e3b3a",null)),T=F.exports;function H(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function N(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?H(Object(r),!0).forEach((function(t){W(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):H(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function W(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var B={name:"Dashboard",components:{adminDashboard:$,editorDashboard:T},data(){return{currentRole:"adminDashboard"}},computed:N({},Object(o["b"])(["roles"])),created(){this.roles.includes("admin")||(this.currentRole="editorDashboard")}},G=B,I=Object(y["a"])(G,a,i,!1,null,null,null);t["default"]=I.exports},e2ec:function(e,t,r){},fe17:function(e,t,r){"use strict";var a=r("e2ec"),i=r.n(a);i.a}}]);