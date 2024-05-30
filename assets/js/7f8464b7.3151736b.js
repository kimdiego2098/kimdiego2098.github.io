"use strict";(self.webpackChunkthingsgateway=self.webpackChunkthingsgateway||[]).push([[4303],{841:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>d,default:()=>o,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));a(4996),a(510),a(2969);const l={id:302,title:"MqttServer"},d=void 0,p={unversionedId:"302",id:"302",title:"MqttServer",description:"\u901a\u8fc7\u81ea\u5b9a\u4e49\u811a\u672c\uff0c\u53ef\u5feb\u901f\u9002\u914d\u4e1a\u52a1\u6a21\u578b",source:"@site/docs/302.mdx",sourceDirName:".",slug:"/302",permalink:"/docs/302",draft:!1,editUrl:"https://gitee.com/diego2098/ThingsGateway/tree/master/doc/docs/302.mdx",tags:[],version:"current",frontMatter:{id:"302",title:"MqttServer"},sidebar:"docs",previous:{title:"MqttClient",permalink:"/docs/301"},next:{title:"RabbitMQProducer",permalink:"/docs/303"}},i={},m=[{value:"\u4e00\u3001\u8bf4\u660e",id:"\u4e00\u8bf4\u660e",level:2},{value:"\u4e8c\u3001\u63d2\u4ef6\u5c5e\u6027\u914d\u7f6e\u9879",id:"\u4e8c\u63d2\u4ef6\u5c5e\u6027\u914d\u7f6e\u9879",level:2},{value:"\u811a\u672c\u4e0e\u5b9e\u4f53",id:"\u811a\u672c\u4e0e\u5b9e\u4f53",level:3},{value:"\u4e09\u3001\u53d8\u91cf\u4e1a\u52a1\u5c5e\u6027",id:"\u4e09\u53d8\u91cf\u4e1a\u52a1\u5c5e\u6027",level:2},{value:"\u5141\u8bb8\u5199\u5165",id:"\u5141\u8bb8\u5199\u5165",level:3},{value:"\u56db\u3001Rpc",id:"\u56dbrpc",level:2}],k={toc:m},N="wrapper";function o(t){let{components:e,...l}=t;return(0,r.kt)(N,(0,n.Z)({},k,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"\u63d0\u793a")),(0,r.kt)("p",{parentName:"admonition"},"\u901a\u8fc7\u81ea\u5b9a\u4e49\u811a\u672c\uff0c\u53ef\u5feb\u901f\u9002\u914d\u4e1a\u52a1\u6a21\u578b"),(0,r.kt)("p",{parentName:"admonition"},"\u811a\u672c\u7684\u793a\u4f8b\u8bf7\u67e5\u770b",(0,r.kt)("strong",{parentName:"p"},"\u5e38\u89c1\u95ee\u9898"))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"\u6743\u9650\u6ce8\u610f")),(0,r.kt)("p",{parentName:"admonition"},"Server\u7684\u8fde\u63a5\u6743\u9650\u9664\u4e86Id\u524d\u7f00\u9650\u5236\u5916\uff0c\u8d26\u53f7\u5bc6\u7801\u540c\u6837\u8981\u6c42\uff0c\u5728\u7f51\u5173\u540e\u53f0\u521b\u5efa\u7684\u6240\u6709\u8d26\u53f7\u5bc6\u7801\u90fd\u53ef\u4ee5\u767b\u5f55MqttServer")),(0,r.kt)("h2",{id:"\u4e00\u8bf4\u660e"},"\u4e00\u3001\u8bf4\u660e"),(0,r.kt)("p",null,"MqttServer\u652f\u6301Tcp/webSocket\u65b9\u5f0f\u63a5\u5165\uff0c\u53ef\u4ee5\u5b9a\u65f6/\u53d8\u5316\u53d1\u5e03\u6570\u636e\uff0c\u652f\u6301Rpc\u5199\u5165"),(0,r.kt)("p",null,"\u901a\u9053\u53ea\u652f\u6301 Other "),(0,r.kt)("h2",{id:"\u4e8c\u63d2\u4ef6\u5c5e\u6027\u914d\u7f6e\u9879"},"\u4e8c\u3001\u63d2\u4ef6\u5c5e\u6027\u914d\u7f6e\u9879"),(0,r.kt)("img",{src:a(4517).Z}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IP"),(0,r.kt)("td",{parentName:"tr",align:null},"ServerIP,\u4e3a\u7a7a\u65f6\u6307\u4efb\u610fIP"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u7aef\u53e3"),(0,r.kt)("td",{parentName:"tr",align:null},"Tcp\u7ed1\u5b9a\u7aef\u53e3"),(0,r.kt)("td",{parentName:"tr",align:null},"1883")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"WebSocket\u7aef\u53e3"),(0,r.kt)("td",{parentName:"tr",align:null},"WebSocket\u7ed1\u5b9a\u7aef\u53e3"),(0,r.kt)("td",{parentName:"tr",align:null},"8083\uff0c\u56fa\u5b9a/mqtt\u8def\u7531")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8\u8fde\u63a5\u7684ID(\u524d\u7f00)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8\u8fde\u63a5\u7684ID(\u524d\u7f00)"),(0,r.kt)("td",{parentName:"tr",align:null},"ClientId\u5fc5\u987b\u4ee5\u8fd9\u4e2a\u5c5e\u6027\u5f00\u5934")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8Rpc\u5199\u5165"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5141\u8bb8\u5199\u5165\u53d8\u91cf"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Rpc\u5199\u5165Topic"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5199\u5165\u53d8\u91cf\u7684\u4e3b\u9898"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b9e\u9645\u7684\u5199\u5165\u4e3b\u9898\u4e3a\u56fa\u5b9a\u901a\u914d {ThingsGateway.Rpc/+/","[\u586b\u5165\u503c]","} ,\u5176\u4e2dRpcWrite\u4e3a\u8be5\u5c5e\u6027\u586b\u5165\u5185\u5bb9\uff0c+\u901a\u914d\u7b26\u662f\u4e0d\u56fa\u5b9aGUID\u503c\uff0c\u6bcf\u6b21\u6267\u884c\u5199\u5165\u65f6\u4f1a\u5728\u4e0d\u540c\u7684\u4e3b\u9898\u4e2d\u8fd4\u56de\uff1b\u8fd4\u56de\u7ed3\u679c\u4e3b\u9898\u4f1a\u5728\u4e3b\u9898\u540e\u6dfb\u52a0Response , \u4e5f\u5c31\u662f{ThingsGateway.Rpc/+/","[\u586b\u5165\u503c]","/Response}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u5907\u662f\u5426\u5217\u8868"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u5907\u662f\u5426\u5217\u8868\u4e0a\u4f20\uff0cfalse\u65f6\u6bcf\u4e2a\u8bbe\u5907\u5b9e\u4f53\u90fd\u4f1a\u5355\u72ec\u53d1\u5e03\uff0c\u6ce8\u610f\u6027\u80fd\u9700\u6c42\uff0c\u9ed8\u8ba4\u4e3atrue"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u53d8\u91cf\u662f\u5426\u5217\u8868"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d8\u91cf\u662f\u5426\u5217\u8868\u4e0a\u4f20\uff0cfalse\u65f6\u6bcf\u4e2a\u53d8\u91cf\u5b9e\u4f53\u90fd\u4f1a\u5355\u72ec\u53d1\u5e03\uff0c\u6ce8\u610f\u6027\u80fd\u9700\u6c42\uff0c\u9ed8\u8ba4\u4e3atrue"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u62a5\u8b66\u662f\u5426\u5217\u8868"),(0,r.kt)("td",{parentName:"tr",align:null},"\u62a5\u8b66\u662f\u5426\u5217\u8868\u4e0a\u4f20\uff0cfalse\u65f6\u6bcf\u4e2a\u62a5\u8b66\u5b9e\u4f53\u90fd\u4f1a\u5355\u72ec\u53d1\u5e03\uff0c\u6ce8\u610f\u6027\u80fd\u9700\u6c42\uff0c\u9ed8\u8ba4\u4e3atrue"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u5907Topic"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u5907\u5b9e\u4f53\u7684\u53d1\u5e03\u4e3b\u9898 \uff0c\u4f7f\u7528${key}\u4f5c\u4e3a\u5339\u914d\u9879\uff0ckey\u5fc5\u987b\u662f\u4e0a\u4f20\u5b9e\u4f53\u4e2d\u7684\u5c5e\u6027"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u53d8\u91cfTopic"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d8\u91cf\u5b9e\u4f53\u7684\u53d1\u5e03\u4e3b\u9898 \uff0c\u4f7f\u7528${key}\u4f5c\u4e3a\u5339\u914d\u9879\uff0ckey\u5fc5\u987b\u662f\u4e0a\u4f20\u5b9e\u4f53\u4e2d\u7684\u5c5e\u6027"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u62a5\u8b66Topic"),(0,r.kt)("td",{parentName:"tr",align:null},"\u62a5\u8b66\u5b9e\u4f53\u7684\u53d1\u5e03\u4e3b\u9898 \uff0c\u4f7f\u7528${key}\u4f5c\u4e3a\u5339\u914d\u9879\uff0ckey\u5fc5\u987b\u662f\u4e0a\u4f20\u5b9e\u4f53\u4e2d\u7684\u5c5e\u6027"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u5907\u5b9e\u4f53\u811a\u672c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u811a\u672c\u8fd4\u56de\u65b0\u7684\u5b9e\u4f53\u5217\u8868\uff0c\u52a8\u6001\u7c7b\u4e2d\u9700\u7ee7\u627f",(0,r.kt)("strong",{parentName:"td"},"IDynamicModel"),"\uff0c\u4f20\u5165\u5217\u8868\u4e3a",(0,r.kt)("strong",{parentName:"td"},"DeviceData"),",\u67e5\u770b\u4ee5\u4e0b\u5177\u4f53\u5c5e\u6027"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7f16\u8f91\u9875\u9762\u4e2d\uff0c\u53ef\u901a\u8fc7\u68c0\u67e5\u6309\u94ae\u9a8c\u8bc1\u811a\u672c\uff0c\u811a\u672c\u793a\u4f8b\u8bf7\u67e5\u770b",(0,r.kt)("strong",{parentName:"td"},"\u5e38\u89c1\u95ee\u9898"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u53d8\u91cf\u5b9e\u4f53\u811a\u672c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u811a\u672c\u8fd4\u56de\u65b0\u7684\u5b9e\u4f53\u5217\u8868\uff0c\u52a8\u6001\u7c7b\u4e2d\u9700\u7ee7\u627f",(0,r.kt)("strong",{parentName:"td"},"IDynamicModel"),"\uff0c\u4f20\u5165\u5217\u8868\u4e3a",(0,r.kt)("strong",{parentName:"td"},"VariableData"),",\u67e5\u770b\u4ee5\u4e0b\u5177\u4f53\u5c5e\u6027"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7f16\u8f91\u9875\u9762\u4e2d\uff0c\u53ef\u901a\u8fc7\u68c0\u67e5\u6309\u94ae\u9a8c\u8bc1\u811a\u672c\uff0c\u811a\u672c\u793a\u4f8b\u8bf7\u67e5\u770b",(0,r.kt)("strong",{parentName:"td"},"\u5e38\u89c1\u95ee\u9898"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u62a5\u8b66\u5b9e\u4f53\u811a\u672c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u811a\u672c\u8fd4\u56de\u65b0\u7684\u5b9e\u4f53\u5217\u8868\uff0c\u52a8\u6001\u7c7b\u4e2d\u9700\u7ee7\u627f",(0,r.kt)("strong",{parentName:"td"},"IDynamicModel"),"\uff0c\u4f20\u5165\u5217\u8868\u4e3a",(0,r.kt)("strong",{parentName:"td"},"AlarmVariable"),",\u67e5\u770b\u4ee5\u4e0b\u5177\u4f53\u5c5e\u6027"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7f16\u8f91\u9875\u9762\u4e2d\uff0c\u53ef\u901a\u8fc7\u68c0\u67e5\u6309\u94ae\u9a8c\u8bc1\u811a\u672c\uff0c\u811a\u672c\u793a\u4f8b\u8bf7\u67e5\u770b",(0,r.kt)("strong",{parentName:"td"},"\u5e38\u89c1\u95ee\u9898"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u9009\u62e9\u5168\u90e8\u53d8\u91cf"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u9009\u62e9\u5168\u90e8\u53d8\u91cf\uff0ctrue\u65f6\u4e0d\u9700\u8981\u5355\u4e2a\u53d8\u91cf\u6dfb\u52a0\u4e1a\u52a1\u5c5e\u6027"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u95f4\u9694\u6267\u884c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u9009\u62e9\u5168\u90e8\u53d8\u91cf\uff0ctrue\u95f4\u9694\u4e0a\u4f20\uff0cFalse\u53d8\u5316\u68c0\u6d4b\u4e0a\u4f20"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u95f4\u9694\u6267\u884c\u65f6\u95f4"),(0,r.kt)("td",{parentName:"tr",align:null},"\u95f4\u9694\u6267\u884c\u65f6\u95f4"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u542f\u7528\u7f13\u5b58"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u542f\u7528\u7f13\u5b58"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0a\u4f20\u5217\u8868\u6700\u5927\u6570\u91cf"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6bcf\u4e00\u6b21\u4e0a\u4f20\u7684\u5217\u8868\u6700\u5927\u6570\u91cf"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5185\u5b58\u961f\u5217\u6700\u5927\u6570\u91cf"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5185\u5b58\u961f\u5217\u7684\u6700\u5927\u6570\u91cf\uff0c\u8d85\u51fa\u6216\u5931\u8d25\u65f6\u8f6c\u5165\u6587\u4ef6\u7f13\u5b58\uff0c\u6839\u636e\u6570\u636e\u91cf\u8bbe\u5b9a\u9002\u5f53\u503c"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"\u811a\u672c\u4e0e\u5b9e\u4f53"},"\u811a\u672c\u4e0e\u5b9e\u4f53"),(0,r.kt)("p",null,"\u67e5\u770bMqttClient\u9875\u9762",(0,r.kt)("a",{parentName:"p",href:"/docs/301#%E8%84%9A%E6%9C%AC%E6%8E%A5%E5%8F%A3"},"\u811a\u672c\u63a5\u53e3")," "),(0,r.kt)("h2",{id:"\u4e09\u53d8\u91cf\u4e1a\u52a1\u5c5e\u6027"},"\u4e09\u3001\u53d8\u91cf\u4e1a\u52a1\u5c5e\u6027"),(0,r.kt)("h3",{id:"\u5141\u8bb8\u5199\u5165"},"\u5141\u8bb8\u5199\u5165"),(0,r.kt)("p",null,"\u5355\u72ec\u914d\u7f6e\u53d8\u91cf\u662f\u5426\u5141\u8bb8\u5199\u5165"),(0,r.kt)("h2",{id:"\u56dbrpc"},"\u56db\u3001Rpc"),(0,r.kt)("p",null,"\u67e5\u770bMqttClient\u9875\u9762",(0,r.kt)("a",{parentName:"p",href:"/docs/301#%E5%9B%9Brpc"},"Rpc")))}o.isMDXComponent=!0},4517:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/MqttServer-1f7af322f6a2a2a17dd6a43f78cd568c.png"}}]);