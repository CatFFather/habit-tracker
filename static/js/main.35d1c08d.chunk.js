(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},22:function(t,e,n){"use strict";n.r(e);var a=n(1),s=n.n(a),c=n(9),i=n.n(c),r=(n(15),n(8)),o=n(10),l=n(2),u=n(3),h=n(5),b=n(4),d=(n(16),n(0)),j=function(t){Object(h.a)(n,t);var e=Object(b.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return console.log("header"),Object(d.jsx)("header",{children:Object(d.jsxs)("h1",{className:"header__title",children:[Object(d.jsx)("i",{className:"fas fa-leaf"}),"Habit Tracker"," ",Object(d.jsx)("span",{style:{backgroundColor:"green"},className:"havit-count",children:this.props.habitTotalCount})]})})}}]),n}(a.PureComponent);function m(t){console.log("AddInputWrap!!!!!!!!!!!!!!!");var e=s.a.createRef();function n(){var n=e.current.value;n&&t.addHabit(n),e.current.value=null}return Object(d.jsxs)("div",{className:"habit__add__input__wrap",children:[Object(d.jsx)("input",{ref:e,className:"habit__add__input",onKeyDown:function(t){13===t.keyCode&&n()},placeholder:"Habit"}),Object(d.jsx)("button",{onClick:n,children:"Add"})]})}var f=Object(a.memo)(m),O=function(t){Object(h.a)(n,t);var e=Object(b.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){console.log("habit");var t=this.props.habit||{},e=t.id,n=t.name,a=t.count,s=this.props,c=s.handleIncrement,i=s.handleDecrement,r=s.handleDelete;return Object(d.jsxs)("li",{className:"habit",children:[Object(d.jsx)("span",{className:"havit-name",children:n}),Object(d.jsx)("span",{className:"havit-count",children:a}),Object(d.jsx)("button",{className:"habit-button habit-increase",onClick:function(){c(e)},children:Object(d.jsx)("i",{className:"fas fa-plus-square"})}),Object(d.jsx)("button",{className:"habit-button habit-decrease",onClick:function(){i(e)},children:Object(d.jsx)("i",{className:"fas fa-minus-square"})}),Object(d.jsx)("button",{className:"habit-button habit-delete",onClick:function(){r(e)},children:Object(d.jsx)("i",{className:"fas fa-trash"})})]})}}]),n}(a.PureComponent),p=function(t){Object(h.a)(n,t);var e=Object(b.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){console.log("Habits");var t=this.props,e=t.habits,n=t.handleIncrement,a=t.handleDecrement,s=t.handleDelete,c=t.resetHabits;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("ul",{children:e.map((function(t,e){return Object(d.jsx)(O,{habit:t,handleIncrement:n,handleDecrement:a,handleDelete:s},t&&t.id)}))}),Object(d.jsx)("button",{onClick:c,children:"Reset All"})]})}}]),n}(a.Component),v=function(t){Object(h.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={habits:JSON.parse(localStorage.getItem("habits"))||[],seq:JSON.parse(localStorage.getItem("habits-seq"))||0},t.handleIncrement=function(e){var n=t.state.habits.map((function(t){return t.id===e?{id:t.id,name:t.name,count:t.count+1}:t}));t.setState((function(){return{habits:n}}))},t.handleDecrement=function(e){var n=t.state.habits.map((function(t){return t.count>0&&t.id===e?{id:t.id,name:t.name,count:t.count-1}:t}));t.setState((function(){return{habits:n}}))},t.handleDelete=function(e){var n=t.state.habits.filter((function(t){return t.id!==e}));t.setState((function(){return{habits:n}}))},t.addHabit=function(e){var n=[].concat(Object(o.a)(t.state.habits),[{id:t.state.seq,name:e,count:0}]);t.setState((function(){return{habits:n,seq:t.state.seq+1}}))},t.resetHabits=function(){var e=t.state.habits.map((function(t){return 0!==t.count?Object(r.a)(Object(r.a)({},t),{},{count:0}):t}));console.log(e),t.setState((function(){return{habits:e}}))},t}return Object(u.a)(n,[{key:"componentDidUpdate",value:function(t,e){e.habits!=this.state.habits&&localStorage.setItem("habits",JSON.stringify(this.state.habits)),e.seq!=this.state.seq&&localStorage.setItem("habits-seq",this.state.seq+1)}},{key:"render",value:function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(j,{habitTotalCount:this.state.habits.filter((function(t){if(t.count>0)return t})).length}),Object(d.jsx)(f,{addHabit:this.addHabit}),Object(d.jsx)(p,{habits:this.state.habits,handleIncrement:this.handleIncrement,handleDecrement:this.handleDecrement,handleDelete:this.handleDelete,resetHabits:this.resetHabits})]})}}]),n}(a.Component);n(18);i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.35d1c08d.chunk.js.map