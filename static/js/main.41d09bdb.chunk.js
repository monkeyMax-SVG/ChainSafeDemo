(this.webpackJsonpweb3gl=this.webpackJsonpweb3gl||[]).push([[20],{269:function(n,e,t){},282:function(n,e){},292:function(n,e){},294:function(n,e){},303:function(n,e){},305:function(n,e){},330:function(n,e){},332:function(n,e){},333:function(n,e){},338:function(n,e){},340:function(n,e){},347:function(n,e){},349:function(n,e){},361:function(n,e){},363:function(n,e){},375:function(n,e){},378:function(n,e){},381:function(n,e){},431:function(n,e){},437:function(n,e){},535:function(n,e,t){"use strict";t.r(e);var o,s=t(81),c=t.n(s),r=t(146),a=t.n(r),i=(t(269),t(76)),u=t(2),w=t.n(u),f=t(38),d=t(235),p=t(240),l=t.n(p);window.web3gl={connect:b,connectAccount:"",sendContract:function(n,e,t,o,s,c,r){return x.apply(this,arguments)},sendContractResponse:"",sendTransaction:function(n,e,t,o){return m.apply(this,arguments)},sendTransactionResponse:"",signMessage:function(n){return k.apply(this,arguments)},signMessageResponse:"",networkId:window.web3NetworkId};var g=!0,h=Object(d.a)({networkId:window.web3NetworkId,subscriptions:{address:function(){g||(window.location.reload(),b())},wallet:function(n){o=new l.a(n.provider)},network:function(n){window.web3gl.networkId=n}},walletSelect:{wallets:[{walletName:"metamask",preferred:!0}]}});function b(){return v.apply(this,arguments)}function v(){return(v=Object(f.a)(w.a.mark((function n(){return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,h.walletSelect();case 2:return n.sent||window.location.reload(),n.next=6,h.walletCheck();case 6:return n.sent||window.location.reload(),g=!1,n.next=11,o.eth.net.getId();case 11:if(n.t0=n.sent,n.t1=window.web3NetworkId,n.t0!==n.t1){n.next=17;break}return n.next=16,o.eth.getAccounts();case 16:window.web3gl.connectAccount=n.sent[0];case 17:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function k(){return(k=Object(f.a)(w.a.mark((function n(e){var t,s;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.eth.getAccounts();case 3:return t=n.sent[0],n.next=6,o.eth.personal.sign(e,t,"");case 6:s=n.sent,window.web3gl.signMessageResponse=s,n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),window.web3gl.signMessageResponse=n.t0.message;case 13:case"end":return n.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}function x(){return(x=Object(f.a)(w.a.mark((function n(e,t,s,c,r,a,u){var f,d;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.eth.getAccounts();case 2:d=n.sent[0],(f=new o.eth.Contract(JSON.parse(t),s).methods)[e].apply(f,Object(i.a)(JSON.parse(c))).send({from:d,value:r,gas:a||void 0,gasPrice:u||void 0}).on("transactionHash",(function(n){window.web3gl.sendContractResponse=n})).on("error",(function(n){window.web3gl.sendContractResponse=n.message}));case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(){return(m=Object(f.a)(w.a.mark((function n(e,t,s,c){var r;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.eth.getAccounts();case 2:r=n.sent[0],o.eth.sendTransaction({from:r,to:e,value:t,gas:s||void 0,gasPrice:c||void 0}).on("transactionHash",(function(n){window.web3gl.sendTransactionResponse=n})).on("error",(function(n){window.web3gl.sendTransactionResponse=n.message}));case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var j=t(79);var O=function(){return Object(j.jsx)("div",{})},y=function(n){n&&n instanceof Function&&t.e(79).then(t.bind(null,1794)).then((function(e){var t=e.getCLS,o=e.getFID,s=e.getFCP,c=e.getLCP,r=e.getTTFB;t(n),o(n),s(n),c(n),r(n)}))};a.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root")),y()}},[[535,21,22]]]);
