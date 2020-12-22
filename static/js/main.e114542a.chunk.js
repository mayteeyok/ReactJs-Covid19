(this["webpackJsonpreact-covid19"]=this["webpackJsonpreact-covid19"]||[]).push([[0],{17:function(t,e,s){},19:function(t,e,s){"use strict";s.r(e);var n=s(0),o=s(1),r=s.n(o),i=s(4),c=s.n(i),a=(s(17),s(10)),d=s(8),l=s(5),h=s(6),u=s(2),j=s(11),b=s(9),f=s(7),m=s.n(f),O=function(t){var e=t.Country,s=t.TotalConfirmed,o=t.TotalDeaths,r=t.TotalRecovered;return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:e}),Object(n.jsx)("td",{children:s}),Object(n.jsx)("td",{children:o}),Object(n.jsx)("td",{children:r})]})},x=function(t){Object(j.a)(s,t);var e=Object(b.a)(s);function s(t){var n;return Object(l.a)(this,s),(n=e.call(this,t)).newApiData=[],n.newApiData2=[],n.state={items:[],isLoaded:!1,latestDate:"",isSortedAsc:!1,isSortedAsc2:!1,isSortedAsc3:!1,filterText:""},n.compareBy.bind(Object(u.a)(n)),n.sortBy.bind(Object(u.a)(n)),n}return Object(h.a)(s,[{key:"handleUserInput",value:function(t){this.setState({filterText:t})}},{key:"compareBy",value:function(t){return function(e,s){return e[t]<s[t]?-1:e[t]>s[t]?1:0}}},{key:"uncompareBy",value:function(t){return function(e,s){return e[t]>s[t]?-1:e[t]<s[t]?1:0}}},{key:"sortBy",value:function(t,e){var s=Object(d.a)(this.state.items);1==e?(this.state.isSortedAsc?s.sort(this.uncompareBy(t)):s.sort(this.compareBy(t)),this.setState({items:s,isSortedAsc:!this.state.isSortedAsc})):2==e?(this.state.isSortedAsc2?s.sort(this.uncompareBy(t)):s.sort(this.compareBy(t)),this.setState({items:s,isSortedAsc2:!this.state.isSortedAsc2})):3==e&&(this.state.isSortedAsc3?s.sort(this.uncompareBy(t)):s.sort(this.compareBy(t)),this.setState({items:s,isSortedAsc3:!this.state.isSortedAsc3})),console.log(this.state.isSortedAsc),console.log(this.state.isSortedAsc2),console.log(this.state.isSortedAsc3)}},{key:"componentDidMount",value:function(){var t=this;fetch("https://api.covid19api.com/summary").then((function(t){return t.json()})).then((function(e){t.newApiData=e.Countries;var s=e.Countries.sort((function(t,e){return e.TotalConfirmed-t.TotalConfirmed}));t.setState({isLoaded:!0,items:s,latestDate:e.Date,filterText:""}),console.log(e.Countries),console.log(e.Global)}))}},{key:"onChangeHandler",value:function(t){console.log(t.target.value);var e=this.newApiData.filter((function(e){return console.log(e),-1!==e.Country.toLowerCase().indexOf(t.target.value)}));console.log(e),this.setState({items:e})}},{key:"render",value:function(){var t=this,e=this.state,s=e.isLoaded,o=e.items,r=e.latestDate,i=this.state.filterText;this.state.items.map((function(t){if(-1!==(t.Country.toString().indexOf(i)&&t.TotalConfirmed.toString().indexOf(i)&&t.TotalDeaths.toString().indexOf(i)&&t.TotalRecovered.toString().indexOf(i)))return Object(n.jsx)(O,Object(a.a)({},t),t.id)}));if(s){var c={cursor:"pointer"},d={textAlign:"right"};return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("h2",{children:"Covid-19 Report"}),Object(n.jsxs)("h3",{children:["Latest Date: ",m()(r).format("dddd, MMMM Do YYYY, hh:mm:ss a")]}),Object(n.jsx)("input",{type:"text",value:this.state.value,placeholder:"Search by Country Name",onChange:this.onChangeHandler.bind(this)}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsxs)("table",{border:"1",width:"100%",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{width:"10%",children:"Country Name"}),Object(n.jsxs)("th",{style:c,width:"7%",onClick:function(){return t.sortBy("TotalConfirmed",1)},children:["Total confirmed cases ",this.state.isSortedAsc?"\u2193":"\u2191"]}),Object(n.jsxs)("th",{style:c,width:"7%",onClick:function(){return t.sortBy("TotalDeaths",2)},children:["Total death cases ",this.state.isSortedAsc2?"\u2193":"\u2191"]}),Object(n.jsxs)("th",{style:c,width:"7%",onClick:function(){return t.sortBy("TotalRecovered",3)},children:["Total recovered cases ",this.state.isSortedAsc3?"\u2193":"\u2191"]})]})}),Object(n.jsx)("tbody",{children:o.map((function(t){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:t.Country}),Object(n.jsx)("td",{style:d,children:0==t.TotalConfirmed?"Unreported":t.TotalConfirmed}),Object(n.jsx)("td",{style:d,children:0==t.TotalDeaths?"Unreported":t.TotalDeaths}),Object(n.jsx)("td",{style:d,children:0==t.TotalRecovered?"Unreported":t.TotalRecovered})]},t.CountryCode)}))})]})]})}return Object(n.jsx)("div",{children:"Loading..."})}}]),s}(o.Component),y=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,20)).then((function(e){var s=e.getCLS,n=e.getFID,o=e.getFCP,r=e.getLCP,i=e.getTTFB;s(t),n(t),o(t),r(t),i(t)}))};c.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(x,{})}),document.getElementById("root")),y()}},[[19,1,2]]]);
//# sourceMappingURL=main.e114542a.chunk.js.map