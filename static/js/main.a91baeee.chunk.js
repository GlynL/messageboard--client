(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,a){e.exports=a(58)},39:function(e,t,a){},43:function(e,t,a){},45:function(e,t,a){},47:function(e,t,a){},50:function(e,t,a){},52:function(e,t,a){},54:function(e,t,a){},56:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"addBoard",function(){return B}),a.d(n,"fetchBoards",function(){return M}),a.d(n,"setActive",function(){return D}),a.d(n,"updateBoard",function(){return P});var r={};a.r(r),a.d(r,"signup",function(){return L}),a.d(r,"signin",function(){return U}),a.d(r,"signout",function(){return z});var o={};a.r(o),a.d(o,"addThread",function(){return ce}),a.d(o,"setActiveThread",function(){return se}),a.d(o,"addReply",function(){return ie});var c=a(0),s=a.n(c),i=a(23),u=a.n(i),l=a(61),d=a(63),h=a(60),p=a(2),m=a(14),b=a(26),f=a(8),v={authenticated:"",errorMessage:""},y={boards:[],activeBoard:{},errorMessage:""},E={activeThread:{},errorMessage:""},j=Object(m.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth_user":return Object(f.a)({},e,{authenticated:t.payload});case"auth_error":return Object(f.a)({},e,{errorMessage:t.payload});default:return e}},boards:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"fetch_boards":return Object(f.a)({},e,{boards:t.payload});case"set_active":return Object(f.a)({},e,{activeBoard:t.payload});case"update_board":var a=e.boards.map(function(e){return e._id===t.payload._id?t.payload:e});return Object(f.a)({},e,{boards:a});case"board_error":return Object(f.a)({},e,{errorMessage:t.payload});default:return e}},threads:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"thread_error":return Object(f.a)({},e,{errorMessage:t.payload});case"SET_ACTIVE_THREAD":return console.log(t.payload),Object(f.a)({},e,{activeThread:t.payload});case"ADD_REPLY":return Object(f.a)({},e);default:return e}}}),O=a(59),g=(a(39),Object(p.b)(function(e){return{authenticated:e.auth.authenticated}})(function(e){return s.a.createElement("nav",{className:"header__nav"},s.a.createElement(O.a,{className:"header__nav-item",to:"/"},"MessageBoard"),e.authenticated?s.a.createElement("div",{className:"header__nav-group"},s.a.createElement(O.a,{className:"header__nav-item",to:"/new-board"},"New Board"),s.a.createElement(O.a,{className:"header__nav-item",to:"/signout"},"Sign out")):s.a.createElement("div",{className:"header__nav-group"},s.a.createElement(O.a,{className:"header__nav-item",to:"/signup"},"Sign Up"),s.a.createElement(O.a,{className:"header__nav-item",to:"/signin"},"Sign In")))})),_=a(3),k=a(4),w=a(6),x=a(5),S=a(7),C=a(11),N=a.n(C),T=a(15),A="https://messageboard--glyn.herokuapp.com/api",B=function(e,t,a){return function(){var n=Object(T.a)(N.a.mark(function n(r){var o,c;return N.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(A,"/boards"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:t},body:JSON.stringify(e)});case 3:if((o=n.sent).ok){n.next=6;break}throw new Error;case 6:return n.next=8,o.json();case 8:c=n.sent,r({type:"add_board",payload:c}),a(),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(0),r({type:"board_error",payload:"Board name already in use. Please use another."});case 16:case"end":return n.stop()}},n,this,[[0,13]])}));return function(e){return n.apply(this,arguments)}}()},M=function(){return function(){var e=Object(T.a)(N.a.mark(function e(t){var a,n;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(A,"/boards"));case 3:if((a=e.sent).ok){e.next=6;break}throw new Error;case 6:return e.next=8,a.json();case 8:n=e.sent,t({type:"fetch_boards",payload:n}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),t({type:"board_error",payload:"Error fetching boards. Please try again."});case 15:case"end":return e.stop()}},e,this,[[0,12]])}));return function(t){return e.apply(this,arguments)}}()},D=function(e,t){var a=e.filter(function(e){return e.name===t})[0];return a?{type:"set_active",payload:a}:{type:"board_error",payload:"Error finding board. Please try again."}},P=function(e){return{type:"update_board",payload:e}},I=(a(43),function(e){function t(){return Object(_.a)(this,t),Object(w.a)(this,Object(x.a)(t).apply(this,arguments))}return Object(S.a)(t,e),Object(k.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchBoards()}},{key:"renderBoards",value:function(){return s.a.createElement("ul",{className:"boards-list__list"},this.props.boards.boards.map(function(e){return s.a.createElement("li",{className:"boards-list__list-item",key:e._id},s.a.createElement(O.a,{className:"boards-list__list-item-link",to:"/".concat(e.name)},e.name))}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"boards-list"},this.renderBoards())}}]),t}(c.Component)),F=Object(p.b)(function(e){return{boards:e.boards}},n)(I),R=(a(45),Object(p.b)(function(e){return{authed:e.auth.authenticated}})(function(e){return s.a.createElement("section",{className:"boards"},s.a.createElement("header",{className:"boards__header"},s.a.createElement("h1",{className:"boards__header-title"},"All Boards"),s.a.createElement("p",null,"Click on a board to view threads."),e.authed&&s.a.createElement(O.a,{to:"/new-board"},"Start a new Board."),!e.authed&&s.a.createElement("p",null,"Sign up to start a new board.")),s.a.createElement(F,null))})),J=a(13),L=function(e,t){return function(){var a=Object(T.a)(N.a.mark(function a(n){var r,o;return N.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,fetch("".concat(A,"/users/signup"),{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});case 3:if((r=a.sent).ok){a.next=6;break}throw new Error;case 6:return a.next=8,r.json();case 8:o=a.sent,n({type:"auth_user",payload:o.token}),localStorage.setItem("token",o.token),t(),a.next=17;break;case 14:a.prev=14,a.t0=a.catch(0),n({type:"auth_error",payload:"Email already in use."});case 17:case"end":return a.stop()}},a,this,[[0,14]])}));return function(e){return a.apply(this,arguments)}}()},U=function(e,t){return function(){var a=Object(T.a)(N.a.mark(function a(n){var r,o;return N.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,fetch("".concat(A,"/users/login"),{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});case 3:if((r=a.sent).ok){a.next=6;break}throw new Error;case 6:return a.next=8,r.json();case 8:o=a.sent,n({type:"auth_user",payload:o.token}),localStorage.setItem("token",o.token),t(),a.next=17;break;case 14:a.prev=14,a.t0=a.catch(0),n({type:"auth_error",payload:"Email/password do not match."});case 17:case"end":return a.stop()}},a,this,[[0,14]])}));return function(e){return a.apply(this,arguments)}}()},z=function(){return localStorage.removeItem("token"),{type:"auth_user",payload:""}},H={email:"",password:""},V=function(e){function t(e){var a;return Object(_.a)(this,t),(a=Object(w.a)(this,Object(x.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(J.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.signin(a.state,function(){return a.props.history.push("/")}),a.setState(Object(f.a)({},H))},a.state={email:"",password:""},a}return Object(S.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h1",null,"Sign In"),s.a.createElement("div",null,this.props.errorMessage),s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("label",{htmlFor:"email"},"Email"),s.a.createElement("input",{type:"text",name:"email",value:this.state.email,onChange:this.handleChange}),s.a.createElement("label",{htmlFor:"password"}),s.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:this.handleChange}),s.a.createElement("button",null,"Sign Up")))}}]),t}(c.Component),Y=Object(p.b)(function(e){return{errorMessage:e.auth.errorMessage}},r)(V),q={email:"",password:""},G=function(e){function t(e){var a;return Object(_.a)(this,t),(a=Object(w.a)(this,Object(x.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(J.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.signup(a.state,function(){return a.props.history.push("/")}),a.setState(Object(f.a)({},q))},a.state={email:"",password:""},a}return Object(S.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h1",null,"Signup"),s.a.createElement("div",null,this.props.errorMessage),s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("label",{htmlFor:"email"},"Email"),s.a.createElement("input",{type:"text",name:"email",value:this.state.email,onChange:this.handleChange}),s.a.createElement("label",{htmlFor:"password"}),s.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:this.handleChange}),s.a.createElement("button",null,"Sign Up")))}}]),t}(c.Component),K=Object(p.b)(function(e){return{errorMessage:e.auth.errorMessage}},r)(G),Q=function(e){function t(){return Object(_.a)(this,t),Object(w.a)(this,Object(x.a)(t).apply(this,arguments))}return Object(S.a)(t,e),Object(k.a)(t,[{key:"componentDidMount",value:function(){this.props.signout()}},{key:"render",value:function(){return s.a.createElement("div",null,"Sorry to see you go.")}}]),t}(c.Component),W=Object(p.b)(null,r)(Q),X=function(e){var t=function(t){function a(){return Object(_.a)(this,a),Object(w.a)(this,Object(x.a)(a).apply(this,arguments))}return Object(S.a)(a,t),Object(k.a)(a,[{key:"componentDidMount",value:function(){this.shouldNavigateAway()}},{key:"componentDidUpdate",value:function(){this.shouldNavigateAway()}},{key:"shouldNavigateAway",value:function(){this.props.auth||this.props.history.push("/")}},{key:"render",value:function(){return s.a.createElement(e,this.props)}}]),a}(c.Component);return Object(p.b)(function(e){return{auth:e.auth.authenticated}})(t)},Z={name:""},$=function(e){function t(e){var a;return Object(_.a)(this,t),(a=Object(w.a)(this,Object(x.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault();var t=a.props,n=t.history,r=t.token;a.props.addBoard(a.state,r,function(){return n.push("/")})},a.handleChange=function(e){return a.setState(Object(J.a)({},e.target.name,e.target.value))},a.state=Z,a}return Object(S.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){return s.a.createElement("section",null,s.a.createElement("header",null,s.a.createElement("h1",null,"Add New Board")),s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("label",{htmlFor:"name"},"Name"),s.a.createElement("input",{type:"text",name:"name",value:this.state.name,onChange:this.handleChange}),s.a.createElement("button",null,"Add Board")))}}]),t}(c.Component),ee=Object(p.b)(function(e){return{token:e.auth.authenticated}},n)(X($)),te=a(62),ae=(a(47),function(e){function t(){return Object(_.a)(this,t),Object(w.a)(this,Object(x.a)(t).apply(this,arguments))}return Object(S.a)(t,e),Object(k.a)(t,[{key:"renderList",value:function(){var e=this.props,t=e.board,a=e.match;return t.threads.map(function(e){return s.a.createElement("li",{className:"threads__list-item",key:e._id},s.a.createElement(O.a,{className:"threads__list-item-link",to:"/".concat(a.params.board,"/").concat(e._id)},s.a.createElement("h2",{className:"threads__list-item-link-heading"},e.title),s.a.createElement("p",{className:"threads__list-item-link-subheading"},e.text)))})}},{key:"renderNewThreadLink",value:function(){return this.props.authed?s.a.createElement("div",null,s.a.createElement(O.a,{to:"/".concat(this.props.board.name,"/new-thread")},"Start new thread.")):s.a.createElement("p",null,"Sign up to start your own thread.")}},{key:"render",value:function(){return 0===Object.keys(this.props.board).length&&this.props.board.constructor===Object?s.a.createElement("div",null,"loading..."):s.a.createElement("div",{className:"threads"},s.a.createElement("h1",{className:"threads__title"},"Threads"),this.renderNewThreadLink(),s.a.createElement("ul",{className:"threads__list"},this.renderList()))}}]),t}(c.Component)),ne=Object(m.d)(te.a,Object(p.b)(function(e){return{board:e.boards.activeBoard,authed:e.auth.authenticated}}))(ae),re=(a(50),function(e){function t(){return Object(_.a)(this,t),Object(w.a)(this,Object(x.a)(t).apply(this,arguments))}return Object(S.a)(t,e),Object(k.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchBoards()}},{key:"componentDidUpdate",value:function(){this.props.setActive(this.props.boards,this.props.match.params.board)}},{key:"render",value:function(){return 0===Object.keys(this.props.board).length&&this.props.board.constructor===Object?s.a.createElement("div",null,"loading..."):s.a.createElement("section",null,s.a.createElement("h1",{className:"board__title"},this.props.board.name),s.a.createElement(ne,null))}}]),t}(c.Component)),oe=Object(p.b)(function(e){return{board:e.boards.activeBoard,boards:e.boards.boards}},n)(re),ce=function(e,t,a,n){return function(){var r=Object(T.a)(N.a.mark(function r(o){var c,s;return N.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,fetch("".concat(A,"/").concat(t,"/threads"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:a},body:JSON.stringify(e)});case 3:if((c=r.sent).ok){r.next=6;break}throw new Error;case 6:s=c.json(),o({type:"add_thread",payload:s}),n(),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(0),o({type:"thread_error",payload:"Error creating thread. Please try again."});case 14:case"end":return r.stop()}},r,this,[[0,11]])}));return function(e){return r.apply(this,arguments)}}()},se=function(e,t){return{type:"SET_ACTIVE_THREAD",payload:t.threads.filter(function(t){return t._id===e})[0]}},ie=function(e,t,a,n,r){return function(){var o=Object(T.a)(N.a.mark(function o(c){var s,i;return N.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,fetch("".concat(A,"/").concat(t,"/").concat(a,"/replies"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:n},body:JSON.stringify(e)});case 3:if((s=o.sent).ok){o.next=6;break}throw new Error;case 6:return o.next=8,s.json();case 8:i=o.sent,r&&r(i.board),c({type:"SET_ACTIVE_THREAD",payload:i.thread}),o.next=16;break;case 13:o.prev=13,o.t0=o.catch(0),c({type:"thread_error",payload:"Error adding reply. Please try again."});case 16:case"end":return o.stop()}},o,this,[[0,13]])}));return function(e){return o.apply(this,arguments)}}()},ue={title:"",text:""},le=function(e){function t(e){var a;return Object(_.a)(this,t),(a=Object(w.a)(this,Object(x.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault();var t=a.props.match.params.board;a.props.addThread(a.state,t,a.props.token,function(){return a.props.history.push("/".concat(t))})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(J.a)({},n,r))},a.state=ue,a}return Object(S.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("p",null,this.props.error),s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("label",{htmlFor:"title"},"Title"),s.a.createElement("input",{onChange:this.handleChange,value:this.state.title,type:"text",name:"title",id:"title"}),s.a.createElement("label",{htmlFor:"text"},"Text"),s.a.createElement("textarea",{onChange:this.handleChange,value:this.state.text,name:"text",id:"text"}),s.a.createElement("button",null,"Create Thread")))}}]),t}(c.Component),de=Object(p.b)(function(e){return{token:e.auth.authenticated,error:e.threads.errorMessage}},o)(X(le)),he=function(e){return 0===Object.keys(e).length&&e.constructor===Object},pe={text:""},me=function(e){function t(e){var a;return Object(_.a)(this,t),(a=Object(w.a)(this,Object(x.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault();var t=a.props.match.params,n=t.board,r=t.thread;a.props.addReply(a.state,n,r,a.props.token,a.props.updateBoard),a.setState(pe)},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(J.a)({},n,r))},a.state=pe,a}return Object(S.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){return this.props.token?s.a.createElement("div",null,s.a.createElement("h2",null,"Add your reply"),s.a.createElement("p",null,this.props.error),s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("label",{htmlFor:"text"},"Text"),s.a.createElement("textarea",{onChange:this.handleChange,value:this.state.text,name:"text",id:"text"}),s.a.createElement("button",null,"Add Reply"))):s.a.createElement("div",null,"Login to leave a reply.")}}]),t}(c.Component),be=Object(m.d)(te.a,Object(p.b)(function(e){return{token:e.auth.authenticated,error:e.threads.errorMessage}},Object(f.a)({},o,n)))(me),fe=(a(52),Object(p.b)(function(e){return{thread:e.threads.activeThread}})(function(e){return s.a.createElement("div",{className:"replies"},s.a.createElement("h1",null,"Replies"),s.a.createElement("ul",{className:"replies__list"},e.thread.replies.map(function(e){return s.a.createElement("li",{className:"replies__list-item",key:e._id},s.a.createElement("p",null,e.text))})),s.a.createElement(be,null))})),ve=(a(54),function(e){function t(){return Object(_.a)(this,t),Object(w.a)(this,Object(x.a)(t).apply(this,arguments))}return Object(S.a)(t,e),Object(k.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchBoards()}},{key:"componentDidUpdate",value:function(e,t){this.props.setActive(this.props.boards,this.props.match.params.board),he(this.props.board)||this.props.setActiveThread(this.props.match.params.thread,this.props.board)}},{key:"render",value:function(){return he(this.props.thread)?s.a.createElement("div",null,"loading..."):s.a.createElement("section",{className:"thread"},s.a.createElement("div",{className:"thread__info"},s.a.createElement(O.a,{to:"/".concat(this.props.board.name)},"Back to ",this.props.board.name),s.a.createElement("h1",null,this.props.thread.title),s.a.createElement("p",null,this.props.thread.text)),s.a.createElement(fe,null))}}]),t}(c.Component)),ye=Object(p.b)(function(e){return{board:e.boards.activeBoard,boards:e.boards.boards,thread:e.threads.activeThread}},Object(f.a)({},n,o))(ve),Ee=(a(56),Object(m.e)(j,{auth:{authenticated:localStorage.getItem("token")}},Object(m.a)(b.a)));u.a.render(s.a.createElement(p.a,{store:Ee},s.a.createElement(l.a,{basename:"/messageboard"},s.a.createElement(function(e){var t=e.children;return s.a.createElement("div",{className:"App"},s.a.createElement(g,null),t)},null,s.a.createElement(d.a,null,s.a.createElement(h.a,{exact:!0,path:"/",component:R}),s.a.createElement(h.a,{path:"/new-board",component:ee}),s.a.createElement(h.a,{path:"/signup",component:K}),s.a.createElement(h.a,{path:"/signin",component:Y}),s.a.createElement(h.a,{path:"/signout",component:W}),s.a.createElement(h.a,{path:"/:board/new-thread",component:de}),s.a.createElement(h.a,{path:"/:board/:thread",component:ye}),s.a.createElement(h.a,{path:"/:board",component:oe}))))),document.getElementById("root"))}},[[29,2,1]]]);
//# sourceMappingURL=main.a91baeee.chunk.js.map