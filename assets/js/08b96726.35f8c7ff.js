"use strict";(self.webpackChunkthingsgateway=self.webpackChunkthingsgateway||[]).push([[5168],{8608:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>k,contentTitle:()=>i,default:()=>N,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var n=e(7462),r=(e(7294),e(3905));e(4996),e(510),e(2969);const l={id:304,title:"KafkaProducer"},i=void 0,d={unversionedId:"304",id:"304",title:"KafkaProducer",description:"\u901a\u8fc7\u81ea\u5b9a\u4e49\u811a\u672c\uff0c\u53ef\u5feb\u901f\u9002\u914d\u4e1a\u52a1\u6a21\u578b",source:"@site/docs/304.mdx",sourceDirName:".",slug:"/304",permalink:"/docs/304",draft:!1,editUrl:"https://gitee.com/diego2098/ThingsGateway/tree/master/doc/docs/304.mdx",tags:[],version:"current",frontMatter:{id:"304",title:"KafkaProducer"},sidebar:"docs",previous:{title:"RabbitMQProducer",permalink:"/docs/303"},next:{title:"TDengineDBProducer",permalink:"/docs/305"}},k={},m=[{value:"\u4e00\u3001\u8bf4\u660e",id:"\u4e00\u8bf4\u660e",level:2},{value:"\u4e8c\u3001\u63d2\u4ef6\u5c5e\u6027\u914d\u7f6e\u9879",id:"\u4e8c\u63d2\u4ef6\u5c5e\u6027\u914d\u7f6e\u9879",level:2},{value:"\u811a\u672c\u4e0e\u5b9e\u4f53",id:"\u811a\u672c\u4e0e\u5b9e\u4f53",level:3}],p={toc:m},o="wrapper";function N(t){let{components:a,...l}=t;return(0,r.kt)(o,(0,n.Z)({},p,l,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"\u63d0\u793a")),(0,r.kt)("p",{parentName:"admonition"},"\u901a\u8fc7\u81ea\u5b9a\u4e49\u811a\u672c\uff0c\u53ef\u5feb\u901f\u9002\u914d\u4e1a\u52a1\u6a21\u578b"),(0,r.kt)("p",{parentName:"admonition"},"\u811a\u672c\u7684\u793a\u4f8b\u8bf7\u67e5\u770b",(0,r.kt)("strong",{parentName:"p"},"\u5e38\u89c1\u95ee\u9898"))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"\u987b\u77e5")),(0,r.kt)("p",{parentName:"admonition"},"\u63d2\u4ef6\u4f7f\u7528",(0,r.kt)("strong",{parentName:"p"},"librdkafka"),",\u6ce8\u610f\u6309\u9700\u5b89\u88c5c\u5e93"),(0,r.kt)("p",{parentName:"admonition"},"On Mac OSX, install librdkafka with homebrew:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"$ brew install librdkafka\n")),(0,r.kt)("p",{parentName:"admonition"},"On Debian and Ubuntu, install librdkafka from the Confluent APT repositories, see instructions here and then install librdkafka:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"$ apt install librdkafka-dev\n\n")),(0,r.kt)("p",{parentName:"admonition"},"On RedHat, CentOS, Fedora, install librdkafka from the Confluent YUM repositories, instructions here and then install librdkafka:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"$ yum install librdkafka-devel\n")),(0,r.kt)("p",{parentName:"admonition"},"For other platforms, follow the source building instructions below.")),(0,r.kt)("h2",{id:"\u4e00\u8bf4\u660e"},"\u4e00\u3001\u8bf4\u660e"),(0,r.kt)("p",null,"KafkaProducer\u9002\u914dKafka\u534f\u8bae\uff0c\u4e3b\u52a8\u53d1\u5e03\u5185\u5bb9\u5230\u670d\u52a1\u7aef\uff0c\u53ef\u4ee5\u5b9a\u65f6/\u53d8\u5316\u53d1\u5e03\u6570\u636e"),(0,r.kt)("p",null,"\u901a\u9053\u53ea\u652f\u6301 Other "),(0,r.kt)("h2",{id:"\u4e8c\u63d2\u4ef6\u5c5e\u6027\u914d\u7f6e\u9879"},"\u4e8c\u3001\u63d2\u4ef6\u5c5e\u6027\u914d\u7f6e\u9879"),(0,r.kt)("img",{src:e(8784).Z}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1\u5730\u5740"),(0,r.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1\u5730\u5740"),(0,r.kt)("td",{parentName:"tr",align:null},"127.0.0.1:9092")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u53d1\u5e03\u8d85\u65f6\u65f6\u95f4"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d1\u5e03\u8d85\u65f6\u65f6\u95f4"),(0,r.kt)("td",{parentName:"tr",align:null},"5000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u540d"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u540d"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5bc6\u7801"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5bc6\u7801"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SecurityProtocol"),(0,r.kt)("td",{parentName:"tr",align:null},"SecurityProtocol"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SaslMechanism"),(0,r.kt)("td",{parentName:"tr",align:null},"SaslMechanism"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u5907\u662f\u5426\u5217\u8868"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u5907\u662f\u5426\u5217\u8868\u4e0a\u4f20\uff0cfalse\u65f6\u6bcf\u4e2a\u8bbe\u5907\u5b9e\u4f53\u90fd\u4f1a\u5355\u72ec\u53d1\u5e03\uff0c\u6ce8\u610f\u6027\u80fd\u9700\u6c42\uff0c\u9ed8\u8ba4\u4e3atrue"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u53d8\u91cf\u662f\u5426\u5217\u8868"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d8\u91cf\u662f\u5426\u5217\u8868\u4e0a\u4f20\uff0cfalse\u65f6\u6bcf\u4e2a\u53d8\u91cf\u5b9e\u4f53\u90fd\u4f1a\u5355\u72ec\u53d1\u5e03\uff0c\u6ce8\u610f\u6027\u80fd\u9700\u6c42\uff0c\u9ed8\u8ba4\u4e3atrue"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u62a5\u8b66\u662f\u5426\u5217\u8868"),(0,r.kt)("td",{parentName:"tr",align:null},"\u62a5\u8b66\u662f\u5426\u5217\u8868\u4e0a\u4f20\uff0cfalse\u65f6\u6bcf\u4e2a\u62a5\u8b66\u5b9e\u4f53\u90fd\u4f1a\u5355\u72ec\u53d1\u5e03\uff0c\u6ce8\u610f\u6027\u80fd\u9700\u6c42\uff0c\u9ed8\u8ba4\u4e3atrue"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u5907Topic"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u5907\u5b9e\u4f53\u7684\u53d1\u5e03\u4e3b\u9898 \uff0c\u4f7f\u7528${key}\u4f5c\u4e3a\u5339\u914d\u9879\uff0ckey\u5fc5\u987b\u662f\u4e0a\u4f20\u5b9e\u4f53\u4e2d\u7684\u5c5e\u6027"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u53d8\u91cfTopic"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d8\u91cf\u5b9e\u4f53\u7684\u53d1\u5e03\u4e3b\u9898 \uff0c\u4f7f\u7528${key}\u4f5c\u4e3a\u5339\u914d\u9879\uff0ckey\u5fc5\u987b\u662f\u4e0a\u4f20\u5b9e\u4f53\u4e2d\u7684\u5c5e\u6027"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u62a5\u8b66Topic"),(0,r.kt)("td",{parentName:"tr",align:null},"\u62a5\u8b66\u5b9e\u4f53\u7684\u53d1\u5e03\u4e3b\u9898 \uff0c\u4f7f\u7528${key}\u4f5c\u4e3a\u5339\u914d\u9879\uff0ckey\u5fc5\u987b\u662f\u4e0a\u4f20\u5b9e\u4f53\u4e2d\u7684\u5c5e\u6027"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u5907\u5b9e\u4f53\u811a\u672c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u811a\u672c\u8fd4\u56de\u65b0\u7684\u5b9e\u4f53\u5217\u8868\uff0c\u52a8\u6001\u7c7b\u4e2d\u9700\u7ee7\u627f",(0,r.kt)("strong",{parentName:"td"},"IDynamicModel"),"\uff0c\u4f20\u5165\u5217\u8868\u4e3a",(0,r.kt)("strong",{parentName:"td"},"DeviceData"),",\u67e5\u770b\u4ee5\u4e0b\u5177\u4f53\u5c5e\u6027"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7f16\u8f91\u9875\u9762\u4e2d\uff0c\u53ef\u901a\u8fc7\u68c0\u67e5\u6309\u94ae\u9a8c\u8bc1\u811a\u672c\uff0c\u811a\u672c\u793a\u4f8b\u8bf7\u67e5\u770b",(0,r.kt)("strong",{parentName:"td"},"\u5e38\u89c1\u95ee\u9898"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u53d8\u91cf\u5b9e\u4f53\u811a\u672c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u811a\u672c\u8fd4\u56de\u65b0\u7684\u5b9e\u4f53\u5217\u8868\uff0c\u52a8\u6001\u7c7b\u4e2d\u9700\u7ee7\u627f",(0,r.kt)("strong",{parentName:"td"},"IDynamicModel"),"\uff0c\u4f20\u5165\u5217\u8868\u4e3a",(0,r.kt)("strong",{parentName:"td"},"VariableData"),",\u67e5\u770b\u4ee5\u4e0b\u5177\u4f53\u5c5e\u6027"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7f16\u8f91\u9875\u9762\u4e2d\uff0c\u53ef\u901a\u8fc7\u68c0\u67e5\u6309\u94ae\u9a8c\u8bc1\u811a\u672c\uff0c\u811a\u672c\u793a\u4f8b\u8bf7\u67e5\u770b",(0,r.kt)("strong",{parentName:"td"},"\u5e38\u89c1\u95ee\u9898"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u62a5\u8b66\u5b9e\u4f53\u811a\u672c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u811a\u672c\u8fd4\u56de\u65b0\u7684\u5b9e\u4f53\u5217\u8868\uff0c\u52a8\u6001\u7c7b\u4e2d\u9700\u7ee7\u627f",(0,r.kt)("strong",{parentName:"td"},"IDynamicModel"),"\uff0c\u4f20\u5165\u5217\u8868\u4e3a",(0,r.kt)("strong",{parentName:"td"},"AlarmVariable"),",\u67e5\u770b\u4ee5\u4e0b\u5177\u4f53\u5c5e\u6027"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7f16\u8f91\u9875\u9762\u4e2d\uff0c\u53ef\u901a\u8fc7\u68c0\u67e5\u6309\u94ae\u9a8c\u8bc1\u811a\u672c\uff0c\u811a\u672c\u793a\u4f8b\u8bf7\u67e5\u770b",(0,r.kt)("strong",{parentName:"td"},"\u5e38\u89c1\u95ee\u9898"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u9009\u62e9\u5168\u90e8\u53d8\u91cf"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u9009\u62e9\u5168\u90e8\u53d8\u91cf\uff0ctrue\u65f6\u4e0d\u9700\u8981\u5355\u4e2a\u53d8\u91cf\u6dfb\u52a0\u4e1a\u52a1\u5c5e\u6027"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u95f4\u9694\u6267\u884c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u9009\u62e9\u5168\u90e8\u53d8\u91cf\uff0ctrue\u95f4\u9694\u4e0a\u4f20\uff0cFalse\u53d8\u5316\u68c0\u6d4b\u4e0a\u4f20"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u95f4\u9694\u6267\u884c\u65f6\u95f4"),(0,r.kt)("td",{parentName:"tr",align:null},"\u95f4\u9694\u6267\u884c\u65f6\u95f4"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u542f\u7528\u7f13\u5b58"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u542f\u7528\u7f13\u5b58"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0a\u4f20\u5217\u8868\u6700\u5927\u6570\u91cf"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6bcf\u4e00\u6b21\u4e0a\u4f20\u7684\u5217\u8868\u6700\u5927\u6570\u91cf"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5185\u5b58\u961f\u5217\u6700\u5927\u6570\u91cf"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5185\u5b58\u961f\u5217\u7684\u6700\u5927\u6570\u91cf\uff0c\u8d85\u51fa\u6216\u5931\u8d25\u65f6\u8f6c\u5165\u6587\u4ef6\u7f13\u5b58\uff0c\u6839\u636e\u6570\u636e\u91cf\u8bbe\u5b9a\u9002\u5f53\u503c"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"\u811a\u672c\u4e0e\u5b9e\u4f53"},"\u811a\u672c\u4e0e\u5b9e\u4f53"),(0,r.kt)("p",null,"\u67e5\u770bMqttClient\u9875\u9762",(0,r.kt)("a",{parentName:"p",href:"/docs/301#%E8%84%9A%E6%9C%AC%E6%8E%A5%E5%8F%A3"},"\u811a\u672c\u63a5\u53e3")))}N.isMDXComponent=!0},8784:(t,a,e)=>{e.d(a,{Z:()=>n});const n=e.p+"assets/images/KafkaProducer-2bc6e495be5527e341d847e788720e15.png"}}]);