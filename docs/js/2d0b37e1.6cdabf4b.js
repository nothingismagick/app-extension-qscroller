(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d0b37e1"],{2937:function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row justify-left",staticStyle:{width:"100%"}},[o("q-dialog",{model:{value:t.displayLocale,callback:function(e){t.displayLocale=e},expression:"displayLocale"}},[o("q-card",{staticStyle:{"min-width":"300px"}},[o("q-toolbar",{staticClass:"bg-blue-8 text-grey-1"},[o("q-toolbar-title",[t._v("\n          Current local: "),o("strong",[t._v(t._s(t.displayedLocale))])])],1),o("q-card-section",{staticClass:"text-caption"},[t._v("\n        Enter a new locale:\n      ")]),o("q-card-section",[o("q-input",{attrs:{autofocus:"",label:"Locale"},model:{value:t.locale,callback:function(e){t.locale=e},expression:"locale"}})],1)],1)],1),o("q-toggle",{staticClass:"col-12",attrs:{label:"Rounded borders"},model:{value:t.roundedBorders,callback:function(e){t.roundedBorders=e},expression:"roundedBorders"}}),o("q-toggle",{staticClass:"col-12",attrs:{label:"No border"},model:{value:t.noBorder,callback:function(e){t.noBorder=e},expression:"noBorder"}}),o("q-toggle",{staticClass:"col-12",attrs:{label:"Disable"},model:{value:t.disable,callback:function(e){t.disable=e},expression:"disable"}}),o("q-btn",{staticClass:"col-12",attrs:{dense:"",label:"Change locale"},on:{click:function(e){t.displayLocale=!0}}}),o("q-toggle",{staticClass:"col-12",attrs:{label:"Hide header"},model:{value:t.noHeader,callback:function(e){t.noHeader=e},expression:"noHeader"}}),o("q-toggle",{staticClass:"col-12",attrs:{label:"Hide footer"},model:{value:t.noFooter,callback:function(e){t.noFooter=e},expression:"noFooter"}})],1)},r=[],n=o("0967"),i={name:"Playground",data:function(){return{displayLocale:!1}},mounted:function(){n["a"].is.mobile},computed:{displayedLocale:function(){return void 0===this.locale||""===this.locale?"en-US":this.locale},view:{get:function(){return this.$store.state.datetime.view},set:function(t){this.$store.commit("scroller/view",t)}},locale:{get:function(){return this.$store.state.datetime.locale},set:function(t){this.$store.commit("scroller/locale",t)}},roundedBorders:{get:function(){return this.$store.state.datetime.roundedBorders},set:function(t){this.$store.commit("scroller/roundedBorders",t)}},barColor:{get:function(){return this.$store.state.datetime.barColor},set:function(t){this.$store.commit("scroller/barColor",t)}},color:{get:function(){return this.$store.state.datetime.color},set:function(t){this.$store.commit("scroller/color",t)}},backgroundColor:{get:function(){return this.$store.state.datetime.backgroundColor},set:function(t){this.$store.commit("scroller/backgroundColor",t)}},innerColor:{get:function(){return this.$store.state.datetime.innerColor},set:function(t){this.$store.commit("scroller/innerColor",t)}},innerBackgroundColor:{get:function(){return this.$store.state.datetime.innerBackgroundColor},set:function(t){this.$store.commit("scroller/innerBackgroundColor",t)}},noHeader:{get:function(){return this.$store.state.datetime.noHeader},set:function(t){this.$store.commit("scroller/noHeader",t)}},noFooter:{get:function(){return this.$store.state.datetime.noFooter},set:function(t){this.$store.commit("scroller/noFooter",t)}},disable:{get:function(){return this.$store.state.datetime.disable},set:function(t){this.$store.commit("scroller/disable",t)}},noBorder:{get:function(){return this.$store.state.datetime.noBorder},set:function(t){this.$store.commit("scroller/noBorder",t)}},selectedDate:{get:function(){return this.$store.state.datetime.selectedDate},set:function(t){this.$store.commit("scroller/selectedDate",t)}},shortDayLabel:{get:function(){return this.$store.state.datetime.shortDayLabel},set:function(t){this.$store.commit("scroller/shortDayLabel",t)}},shortMonthLabel:{get:function(){return this.$store.state.datetime.shortMonthLabel},set:function(t){this.$store.commit("scroller/shortMonthLabel",t)}},showMonthAsString:{get:function(){return this.$store.state.datetime.showMonthAsString},set:function(t){this.$store.commit("scroller/showMonthAsString",t)}},shortYearLabel:{get:function(){return this.$store.state.datetime.shortYearLabel},set:function(t){this.$store.commit("scroller/shortYearLabel",t)}},shortWeekdayLabel:{get:function(){return this.$store.state.datetime.shortWeekdayLabel},set:function(t){this.$store.commit("scroller/shortWeekdayLabel",t)}},showWeekdayLabel:{get:function(){return this.$store.state.datetime.showWeekdayLabel},set:function(t){this.$store.commit("scroller/showWeekdayLabel",t)}},noDays:{get:function(){return this.$store.state.datetime.noDays},set:function(t){this.$store.commit("scroller/noDays",t)}},noMonths:{get:function(){return this.$store.state.datetime.noMonths},set:function(t){this.$store.commit("scroller/noMonths",t)}},noYears:{get:function(){return this.$store.state.datetime.noYears},set:function(t){this.$store.commit("scroller/noYears",t)}},selectedTime:{get:function(){return this.$store.state.datetime.selectedTime},set:function(t){this.$store.commit("scroller/selectedTime",t)}},hour24Format:{get:function(){return this.$store.state.datetime.hour24Format},set:function(t){this.$store.commit("scroller/hour24Format",t)}},showAmPmToggle:{get:function(){return this.$store.state.datetime.showAmPmToggle},set:function(t){this.$store.commit("scroller/showAmPmToggle",t)}},noMinutes:{get:function(){return this.$store.state.datetime.noMinutes},set:function(t){this.$store.commit("scroller/noMinutes",t)}},noHours:{get:function(){return this.$store.state.datetime.noHours},set:function(t){this.$store.commit("scroller/noHours",t)}}},methods:{}},l=i,a=o("2877"),c=Object(a["a"])(l,s,r,!1,null,null,null);e["default"]=c.exports}}]);