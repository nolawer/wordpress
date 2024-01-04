import{D as P,f as C,A as O,e as j,a as I}from"./links.7c59a081.js";import{l as A}from"./license.6b332f88.js";import{n as w}from"./numbers.c7cb4085.js";import{W as R}from"./WpTable.84fcbcef.js";import{_ as D}from"./ScoreButton.ebdf14dd.js";import{C as U}from"./Table.08a8d42c.js";import{C as B}from"./Index.03e7c6f4.js";import{V as L,S as V,T as N,c as H}from"./LicenseConditions.5ceeb16a.js";import{x as p,o as l,c as h,C as u,t as a,b as f,l as r,a as c,H as E,D as d,k as m}from"./vue.runtime.esm-bundler.4a881941.js";import{_ as S}from"./_plugin-vue_export-helper.abeb2ae0.js";import{I as M}from"./IndexStatus.21a7e8cc.js";import{P as W}from"./PostTypes.797a4244.js";const Z={components:{apexchart:L},props:{points:{type:Object,required:!0},peak:{type:Number,default(){return 0}},recovering:{type:Boolean,default(){return!1}},height:{type:Number,default(){return 50}}},data(){return{strings:{recovering:this.$t.__("Slowly Recovering",this.$td),peak:this.$t.__("Peak",this.$td)}}},computed:{getSeries(){const e=this.points,i=[];return Object.keys(e).forEach(s=>{i.push({x:s,y:e[s]})}),[{data:i}]},chartOptions(){const e=this.peak;return{colors:[function({value:i}){return i===e?"#005AE0":"#99C2FF"}],chart:{type:"bar",sparkline:{enabled:!0},zoom:{enabled:!1},toolbar:{show:!1},parentHeightOffset:0,background:"#fff"},grid:{show:!1,padding:{top:2,right:2,bottom:0,left:2}},plotOptions:{bar:{columnWidth:"85%",barHeight:"100%"}},fill:{type:"solid"},tooltip:{enabled:!0,x:{show:!0,formatter:i=>P.fromFormat(i,"yyyy-MM").setZone(P.zone).toLocaleString({month:"long",year:"numeric"})},y:{formatter:i=>{const s=this.$t.sprintf(this.$t.__("%1$s points",this.$td),w.numberFormat(i,0));let n="";return i===e&&(n=`<span class="peak">${this.strings.peak}</span>`),s+n}},marker:{show:!1}}}}}},z={class:"aioseo-graph-decay"},G={key:0,class:"aioseo-graph-decay-recovering"};function q(e,i,s,n,o,g){const b=p("apexchart");return l(),h("div",z,[u(b,{width:"100%",height:s.height,ref:"apexchart",options:g.chartOptions,series:g.getSeries,class:"aioseo-graph-decay-chart"},null,8,["height","options","series"]),s.recovering?(l(),h("div",G,a(o.strings.recovering),1)):f("",!0)])}const J=S(Z,[["render",q]]),K={};function Q(e,i){return l(),h("div")}const X=S(K,[["render",Q]]);const Y={setup(){return{licenseStore:C(),searchStatisticsStore:O(),settingsStore:j(),optionsStore:I()}},components:{CoreScoreButton:D,CoreWpTable:U,Cta:B,GraphDecay:J,IndexStatus:M,ObjectActions:X,Statistic:V},mixins:[W,R,N],data(){return{numbers:w,tableId:"aioseo-search-statistics-post-table",changeItemsPerPageSlug:"searchStatisticsSeoStatistics",showUpsell:!1,sortableColumns:[],strings:{position:this.$t.__("Position",this.$td),ctaButtonText:this.$t.__("Unlock Post Tracking",this.$td),ctaHeader:this.$t.sprintf(this.$t.__("Post Tracking is a %1$s Feature",this.$td),"PRO")},license:A}},props:{posts:Object,isLoading:Boolean,showHeader:{type:Boolean,default(){return!0}},showTableFooter:Boolean,showItemsPerPage:Boolean,columns:{type:Array,default(){return["postTitle","seoScore","clicks","impressions","position"]}},appendColumns:{type:Object,default(){return{}}},defaultSorting:{type:Object,default(){return{}}},initialFilter:{type:String,default(){return""}},updateAction:{type:String,default(){return"updateSeoStatistics"}}},computed:{allColumns(){var s,n;const e=H(this.columns),i=((n=(s=this.posts)==null?void 0:s.filters)==null?void 0:n.find(o=>o.active))||{};return this.appendColumns[i.slug||"all"]&&e.push(this.appendColumns[i.slug||"all"]),e.map(o=>(o.endsWith("Sortable")&&(o=o.replace("Sortable",""),this.sortableColumns.push(o)),o))},tableColumns(){return[{slug:"row",label:"#",width:"40px"},{slug:"postTitle",label:this.$t.__("Title",this.$td),width:"100%"},{slug:"seoScore",label:this.$t.__("TruSEO Score",this.$td),width:"130px"},{slug:"indexStatus",label:this.$t.__("Indexed",this.$td),width:"80px",coreFeature:"index-status"},{slug:"clicks",label:this.$t.__("Clicks",this.$td),width:"80px"},{slug:"impressions",label:this.$t.__("Impressions",this.$td),width:"110px"},{slug:"position",label:this.$t.__("Position",this.$td),width:"90px"},{slug:"lastUpdated",label:this.$t.__("Last Updated On",this.$td),width:"160px"},{slug:"decay",label:this.$t.__("Loss",this.$td),width:"140px"},{slug:"decayPercent",label:this.$t.__("Drop (%)",this.$td),width:"120px"},{slug:"performance",label:this.$t.__("Performance Score",this.$td),width:"150px"},{slug:"diffDecay",label:this.$t.__("Diff",this.$td),width:"95px"},{slug:"diffPosition",label:this.$t.__("Diff",this.$td),width:"80px"}].filter(e=>e.coreFeature&&(!this.$isPro||this.licenseStore.isUnlicensed||!this.license.hasCoreFeature("search-statistics",e.coreFeature))?!1:e.slug==="seoScore"?this.optionsStore.options.advanced.truSeo:this.allColumns.includes(e.slug)).map(e=>(e.sortable=this.isSortable&&this.sortableColumns.includes(e.slug),e.sortable&&(e.sortDir=e.slug===this.orderBy?this.orderDir:"asc",e.sorted=e.slug===this.orderBy),e))},isSortable(){return this.filter==="all"&&this.$isPro&&!this.licenseStore.isUnlicensed}},watch:{isLoading(e){e||this.$nextTick(()=>{this.loadInspectionResult()})}},methods:{resetSelectedFilters(){this.selectedFilters.postType="",this.processAdditionaFilterOptionSelected({name:"postType",selectedValue:""})},fetchData(e){if(typeof this.searchStatisticsStore[this.updateAction]=="function")return this.searchStatisticsStore[this.updateAction](e)},loadInspectionResult(){var i;if(!((i=this.posts)!=null&&i.rows))return;const e=Object.values(this.posts.rows).filter(s=>{var n;return!s.inspectionResult||((n=s.inspectionResult)==null?void 0:n.length)===0});e.length&&(e.forEach(s=>{this.posts.rows[s.page].inspectionResultLoading=!0}),this.searchStatisticsStore.getInspectionResult(e.map(s=>s.page)).then(s=>{e.forEach(n=>{this.posts.rows[n.page].inspectionResult=s[n.page],this.posts.rows[n.page].inspectionResultLoading=!1})}))}},mounted(){this.initialFilter&&this.processFilter({slug:this.initialFilter}),this.loadInspectionResult()}},ee={class:"aioseo-search-statistics-post-table"},te={class:"object-row"},se={class:"object-title"},ie=["onClick"],oe={key:1,class:"object-title"},ne={key:0,class:"row-actions"},re=["href"],ae=["href"];function le(e,i,s,n,o,g){const b=p("object-actions"),x=p("core-score-button"),$=p("index-status"),_=p("statistic"),T=p("graph-decay"),F=p("cta"),v=p("core-wp-table");return l(),h("div",ee,[u(v,{ref:"table",class:"posts-table",id:o.tableId,columns:g.tableColumns,rows:Object.values(s.posts.rows),totals:s.posts.totals,filters:s.posts.filters,"additional-filters":s.posts.additionalFilters,"selected-filters":e.selectedFilters,loading:s.isLoading,"initial-page-number":e.pageNumber,"initial-search-term":e.searchTerm,"initial-items-per-page":n.settingsStore.settings.tablePagination[o.changeItemsPerPageSlug],"show-header":s.showHeader,"show-bulk-actions":!1,"show-table-footer":s.showTableFooter,"show-items-per-page":s.showItemsPerPage,"show-pagination":"","blur-rows":o.showUpsell,onFilterTable:e.processFilter,onProcessAdditionalFilters:e.processAdditionalFilters,onAdditionalFilterOptionSelected:e.processAdditionaFilterOptionSelected,onPaginate:e.processPagination,onProcessChangeItemsPerPage:e.processChangeItemsPerPage,onSearch:e.processSearch,onSortColumn:e.processSort},{row:r(({index:t})=>[c("div",te,a(t+1),1)]),postTitle:r(({row:t})=>[c("div",se,[t.objectId&&t.objectType==="post"?(l(),h("a",{key:0,href:"#",onClick:E(y=>e.openPostDetail(t),["prevent"])},a(t.objectTitle),9,ie)):(l(),h("span",oe,a(t.objectTitle),1))]),u(b,{row:t},null,8,["row"]),t.objectId&&t.objectType==="post"?(l(),h("div",ne,[c("span",null,[c("a",{class:"view",href:t.context.permalink,target:"_blank"},[c("span",null,a(e.viewPost(t.context.postType.singular)),1)],8,re),d(" | ")]),c("span",null,[c("a",{class:"edit",href:t.context.editLink,target:"_blank"},[c("span",null,a(e.editPost(t.context.postType.singular)),1)],8,ae)])])):f("",!0)]),seoScore:r(({row:t})=>[t.seoScore?(l(),m(x,{key:0,class:"table-score-button",score:t.seoScore},null,8,["score"])):f("",!0)]),indexStatus:r(({row:t})=>{var y,k;return[u($,{result:(y=t.inspectionResult)==null?void 0:y.indexStatusResult,"result-link":(k=t.inspectionResult)==null?void 0:k.inspectionResultLink,loading:t.inspectionResultLoading},null,8,["result","result-link","loading"])]}),clicks:r(({row:t})=>[d(a(o.numbers.compactNumber(t.clicks)),1)]),impressions:r(({row:t})=>[d(a(o.numbers.compactNumber(t.impressions)),1)]),position:r(({row:t})=>[d(a(Math.round(t.position).toFixed(0)),1)]),lastUpdated:r(({row:t})=>[d(a(t.context.lastUpdated||"-"),1)]),decay:r(({row:t})=>[u(_,{type:"decay","show-difference":!1,total:t.decay,showZeroValues:!0,class:"no-margin"},null,8,["total"])]),decayPercent:r(({row:t})=>[u(_,{type:"decayPercent","show-difference":!1,total:t.decayPercent,showZeroValues:!0,class:"no-margin"},null,8,["total"])]),performance:r(({row:t})=>[u(T,{points:t.points,peak:t.peak,recovering:t.recovering,height:38},null,8,["points","peak","recovering"])]),diffPosition:r(({row:t})=>[t.difference.comparison?(l(),m(_,{key:0,type:"position","show-original":!1,difference:t.difference.position,"tooltip-offset":"-100px,0"},null,8,["difference"])):f("",!0)]),diffDecay:r(({row:t})=>[t.difference.comparison?(l(),m(_,{key:0,type:"diffDecay","show-original":!1,difference:t.difference.decay,"tooltip-offset":"-100px,0"},null,8,["difference"])):f("",!0)]),cta:r(()=>[o.showUpsell?(l(),m(F,{key:0,"cta-link":e.$links.getPricingUrl("search-statistics","search-statistics-upsell"),"button-text":o.strings.ctaButtonText,"learn-more-link":e.$links.getUpsellUrl("search-statistics","search-statistics-upsell",e.$isPro?"pricing":"liteUpgrade"),"hide-bonus":!n.licenseStore.isUnlicensed},{"header-text":r(()=>[d(a(o.strings.ctaHeader),1)]),_:1},8,["cta-link","button-text","learn-more-link","hide-bonus"])):f("",!0)]),_:1},8,["id","columns","rows","totals","filters","additional-filters","selected-filters","loading","initial-page-number","initial-search-term","initial-items-per-page","show-header","show-table-footer","show-items-per-page","blur-rows","onFilterTable","onProcessAdditionalFilters","onAdditionalFilterOptionSelected","onPaginate","onProcessChangeItemsPerPage","onSearch","onSortColumn"])])}const ke=S(Y,[["render",le]]);export{ke as P};