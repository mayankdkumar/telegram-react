(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{412:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i.default}});var i=n(a(425))},425:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var i=n(a(4)),r=n(a(17)),o=n(a(5)),l=n(a(0)),s=(n(a(3)),n(a(8))),d=n(a(47)),c=n(a(6)),u=n(a(46)),h=a(36),f=function(e){return{root:{display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-14,marginRight:16,"&$disabled":{cursor:"default"}},labelPlacementStart:{flexDirection:"row-reverse",marginLeft:16,marginRight:-14},labelPlacementTop:{flexDirection:"column-reverse",marginLeft:16},labelPlacementBottom:{flexDirection:"column",marginLeft:16},disabled:{},label:{"&$disabled":{color:e.palette.text.disabled}}}};function m(e){e.checked;var t,a=e.classes,n=e.className,d=e.control,c=e.disabled,f=(e.inputRef,e.label),m=e.labelPlacement,v=e.muiFormControl,p=(e.name,e.onChange,e.value,(0,o.default)(e,["checked","classes","className","control","disabled","inputRef","label","labelPlacement","muiFormControl","name","onChange","value"])),b=c;"undefined"===typeof b&&"undefined"!==typeof d.props.disabled&&(b=d.props.disabled),"undefined"===typeof b&&v&&(b=v.disabled);var g={disabled:b};return["checked","name","onChange","value","inputRef"].forEach(function(t){"undefined"===typeof d.props[t]&&"undefined"!==typeof e[t]&&(g[t]=e[t])}),l.default.createElement("label",(0,i.default)({className:(0,s.default)(a.root,(t={},(0,r.default)(t,a["labelPlacement".concat((0,h.capitalize)(m))],"end"!==m),(0,r.default)(t,a.disabled,b),t),n)},p),l.default.cloneElement(d,g),l.default.createElement(u.default,{component:"span",className:(0,s.default)(a.label,(0,r.default)({},a.disabled,b))},f))}t.styles=f,m.defaultProps={labelPlacement:"end"};var v=(0,c.default)(f,{name:"MuiFormControlLabel"})((0,d.default)(m));t.default=v},426:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i.default}});var i=n(a(471))},427:function(e,t,a){"use strict";var n=a(396),i=a(7),r=a(10),o=a(12),l=a(11),s=a(13),d=a(0),c=a.n(d),u=a(8),h=a.n(u),f=a(6),m=a.n(f),v=(a(428),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(e){e.stopPropagation();var t=a.props,n=t.onClick;t.disabled||n(e)},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.checked,a=e.children,i=e.classes,r=e.disabled,o=e.title;return c.a.createElement("div",{className:h()(r?"media-viewer-footer-button-disabled":"media-viewer-footer-button",Object(n.a)({},i.checked,t)),title:o,onClick:this.handleClick},a)}}]),t}(c.a.Component));t.a=m()(function(e){return{checked:{color:e.palette.primary.main}}})(v)},428:function(e,t,a){},471:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var i=n(a(4)),r=n(a(17)),o=n(a(5)),l=n(a(0)),s=(n(a(3)),n(a(8))),d=n(a(433)),c=n(a(472)),u=n(a(473)),h=n(a(474)),f=a(36),m=n(a(6)),v=function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main},"&$disabled":{color:e.palette.action.disabled}}}};function p(e){var t=e.checkedIcon,a=e.classes,n=e.className,c=e.color,u=e.icon,h=e.indeterminate,m=e.indeterminateIcon,v=e.inputProps,p=(0,o.default)(e,["checkedIcon","classes","className","color","icon","indeterminate","indeterminateIcon","inputProps"]);return l.default.createElement(d.default,(0,i.default)({type:"checkbox",checkedIcon:h?m:t,className:(0,s.default)((0,r.default)({},a.indeterminate,h),n),classes:{root:(0,s.default)(a.root,a["color".concat((0,f.capitalize)(c))]),checked:a.checked,disabled:a.disabled},inputProps:(0,i.default)({"data-indeterminate":h},v),icon:h?m:u},p))}t.styles=v,p.defaultProps={checkedIcon:l.default.createElement(u.default,null),color:"secondary",icon:l.default.createElement(c.default,null),indeterminate:!1,indeterminateIcon:l.default.createElement(h.default,null)};var b=(0,m.default)(v,{name:"MuiCheckbox"})(p);t.default=b},472:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(0)),r=n(a(122)),o=n(a(98)),l=i.default.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),s=function(e){return i.default.createElement(o.default,e,l)};(s=(0,r.default)(s)).muiName="SvgIcon";var d=s;t.default=d},473:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(0)),r=n(a(122)),o=n(a(98)),l=i.default.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),s=function(e){return i.default.createElement(o.default,e,l)};(s=(0,r.default)(s)).muiName="SvgIcon";var d=s;t.default=d},474:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(0)),r=n(a(122)),o=n(a(98)),l=i.default.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),s=function(e){return i.default.createElement(o.default,e,l)};(s=(0,r.default)(s)).muiName="SvgIcon";var d=s;t.default=d},477:function(e,t,a){},478:function(e,t,a){"use strict";var n=a(7),i=a(10),r=a(12),o=a(11),l=a(13),s=a(0),d=a.n(s),c=a(8),u=a.n(c),h=(a(479),function(e){function t(){var e,a;Object(n.a)(this,t);for(var i=arguments.length,l=new Array(i),s=0;s<i;s++)l[s]=arguments[s];return(a=Object(r.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(l)))).handleClick=function(e){e.stopPropagation();var t=a.props,n=t.disabled,i=t.onClick;n||i(e)},a}return Object(l.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.disabled,a=e.grow,n=e.children,i=u()(t?"media-viewer-button-disabled":"media-viewer-button",{grow:a});return d.a.createElement("div",{className:i,onClick:this.handleClick},n)}}]),t}(d.a.Component));t.a=h},479:function(e,t,a){},480:function(e,t,a){"use strict";var n=a(7),i=a(10),r=a(12),o=a(11),l=a(13),s=a(0),d=a.n(s),c=(a(481),function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.subtitle;return d.a.createElement("div",{className:"media-viewer-footer-text"},d.a.createElement("div",{className:"media-viewer-footer-text-wrapper"},d.a.createElement("span",null,t),Boolean(a)&&d.a.createElement("span",null,"\xa0",a)))}}]),t}(d.a.Component));t.a=c},481:function(e,t,a){},482:function(e,t,a){"use strict";var n=a(7),i=a(10),r=a(12),o=a(11),l=a(13),s=a(0),d=a.n(s),c=a(483),u=a.n(c),h=a(427),f=a(392),m=(a(428),{padding:20,color:"white"}),v=function(e){function t(e){var a;Object(n.a)(this,t),(a=Object(r.a)(this,Object(o.a)(t).call(this,e))).onClientUpdateMediaBlob=function(e){var n=a.state.fileId;n===e.fileId&&a.setState({disabled:t.saveDisabled(n)})},a.handleClick=function(e){e.stopPropagation();var t=a.props.onClick;a.state.disabled||t(e)};var i=e.fileId;return a.state={prevPropsFileId:i,fileId:i,disabled:t.saveDisabled(i)},a}return Object(l.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){f.a.on("clientUpdateAnimationBlob",this.onClientUpdateMediaBlob),f.a.on("clientUpdateChatBlob",this.onClientUpdateMediaBlob),f.a.on("clientUpdateDocumentBlob",this.onClientUpdateMediaBlob),f.a.on("clientUpdatePhotoBlob",this.onClientUpdateMediaBlob),f.a.on("clientUpdateUserBlob",this.onClientUpdateMediaBlob),f.a.on("clientUpdateVideoBlob",this.onClientUpdateMediaBlob)}},{key:"componentWillUnmount",value:function(){f.a.removeListener("clientUpdateAnimationBlob",this.onClientUpdateMediaBlob),f.a.removeListener("clientUpdateChatBlob",this.onClientUpdateMediaBlob),f.a.removeListener("clientUpdateDocumentBlob",this.onClientUpdateMediaBlob),f.a.removeListener("clientUpdatePhotoBlob",this.onClientUpdateMediaBlob),f.a.removeListener("clientUpdateUserBlob",this.onClientUpdateMediaBlob),f.a.removeListener("clientUpdateVideoBlob",this.onClientUpdateMediaBlob)}},{key:"render",value:function(){var e=this.props.title,t=this.state.disabled;return d.a.createElement(h.a,{disabled:t,title:e,onClick:this.handleClick},d.a.createElement(u.a,{style:m}))}}],[{key:"getDerivedStateFromProps",value:function(e,a){var n=e.fileId;return n!==a.prevPropsFileId?{prevPropsFileId:n,fileId:n,disabled:t.saveDisabled(n)}:null}}]),t}(d.a.Component);v.saveDisabled=function(e){return!Boolean(f.a.getBlob(e))},t.a=v},483:function(e,t,a){"use strict";var n=a(97);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(0)),r=(0,n(a(119)).default)(i.default.createElement(i.default.Fragment,null,i.default.createElement("path",{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"}),i.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})),"GetApp");t.default=r},484:function(e,t,a){"use strict";var n=a(97);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(0)),r=(0,n(a(119)).default)(i.default.createElement(i.default.Fragment,null,i.default.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),i.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})),"NavigateBefore");t.default=r},485:function(e,t,a){"use strict";var n=a(97);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(0)),r=(0,n(a(119)).default)(i.default.createElement(i.default.Fragment,null,i.default.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),i.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})),"NavigateNext");t.default=r},486:function(e,t,a){"use strict";var n=a(97);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(0)),r=(0,n(a(119)).default)(i.default.createElement(i.default.Fragment,null,i.default.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),i.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})),"Delete");t.default=r},711:function(e,t,a){},712:function(e,t,a){},713:function(e,t,a){},714:function(e,t,a){"use strict";var n=a(97);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(0)),r=(0,n(a(119)).default)(i.default.createElement(i.default.Fragment,null,i.default.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),i.default.createElement("path",{d:"M13.05 9.79L10 7.5v9l3.05-2.29L16 12zm0 0L10 7.5v9l3.05-2.29L16 12zm0 0L10 7.5v9l3.05-2.29L16 12zM11 4.07V2.05c-2.01.2-3.84 1-5.32 2.21L7.1 5.69c1.11-.86 2.44-1.44 3.9-1.62zM5.69 7.1L4.26 5.68C3.05 7.16 2.25 8.99 2.05 11h2.02c.18-1.46.76-2.79 1.62-3.9zM4.07 13H2.05c.2 2.01 1 3.84 2.21 5.32l1.43-1.43c-.86-1.1-1.44-2.43-1.62-3.89zm1.61 6.74C7.16 20.95 9 21.75 11 21.95v-2.02c-1.46-.18-2.79-.76-3.9-1.62l-1.42 1.43zM22 12c0 5.16-3.92 9.42-8.95 9.95v-2.02C16.97 19.41 20 16.05 20 12s-3.03-7.41-6.95-7.93V2.05C18.08 2.58 22 6.84 22 12z"})),"SlowMotionVideo");t.default=r},715:function(e,t,a){"use strict";var n=a(97);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(0)),r=(0,n(a(119)).default)(i.default.createElement(i.default.Fragment,null,i.default.createElement("path",{fill:"none",d:"M24 0H0v24h24z"}),i.default.createElement("path",{d:"M17.66 7.93L12 2.27 6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31C7.9 20.8 9.95 21.58 12 21.58c2.05 0 4.1-.78 5.66-2.34 3.12-3.12 3.12-8.19 0-11.31zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59s.62-3.11 1.76-4.24L12 5.1v14.49z"})),"InvertColors");t.default=r},726:function(e,t,a){"use strict";a.r(t);var n=a(55),i=a(14),r=a.n(i),o=a(24),l=a(7),s=a(10),d=a(12),c=a(11),u=a(13),h=a(0),f=a.n(h),m=a(8),v=a.n(m),p=a(53),b=a(32),g=a.n(b),M=a(426),y=a.n(M),C=a(78),I=a.n(C),O=a(81),w=a.n(O),k=a(80),j=a.n(k),E=a(82),P=a.n(E),x=a(79),_=a.n(x),U=a(412),N=a.n(U),B=a(402),S=a.n(B),D=a(485),L=a.n(D),z=a(484),A=a.n(z),F=a(454),V=a.n(F),H=a(486),R=a.n(H),T=a(715),W=a.n(T),q=a(714),$=a.n(q),Y=a(397),G=a(416),J=a(404),K=a(436),X=a(394),Q=(a(477),function(e){function t(e){return Object(l.a)(this,t),Object(d.a)(this,Object(c.a)(t).call(this,e))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.chatId,a=e.messageId,n=X.a.get(t,a);if(!n)return null;var i=Object(Y.l)(n),r=Object(Y.d)(n),o=i?f.a.createElement(G.a,{userId:i}):f.a.createElement(J.a,{chatId:t});return f.a.createElement("div",{className:"media-viewer-control"},f.a.createElement("div",{className:"media-viewer-control-wrapper"},o,f.a.createElement("div",{className:"media-viewer-control-content"},f.a.createElement("div",{className:"media-viewer-row"},f.a.createElement(K.a,{chatId:t,userId:i})),f.a.createElement("div",{className:"media-viewer-row message-meta"},f.a.createElement("span",{className:"message-date"},r)))))}}]),t}(f.a.Component)),Z=a(410),ee=(a(711),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(d.a)(this,Object(c.a)(t).call(this,e))).handleClick=function(e){e.stopPropagation()},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.text;return f.a.createElement("div",{className:"media-caption",onClick:this.handleClick},f.a.createElement("div",{className:"media-caption-text"},e))}}]),t}(f.a.Component));ee.defaultProps={};var te=ee,ae=a(393),ne=a(407),ie=a(392),re=a(403),oe=a(2),le=(a(712),f.a.lazy(function(){return Promise.all([a.e(17),a.e(16)]).then(a.bind(null,723))})),se=function(e){function t(e){var a;Object(l.a)(this,t),(a=Object(d.a)(this,Object(c.a)(t).call(this,e))).onClientUpdateDocumentBlob=function(e){var t=a.props,n=t.chatId,i=t.messageId;n===e.chatId&&i===e.messageId&&a.updateAnimationData()},a.updateAnimationData=Object(o.a)(r.a.mark(function e(){var t,i,o,l,s,d,c,u;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.props,i=t.chatId,o=t.messageId,l=t.size,Object(Y.w)(i,o)){e.next=3;break}return e.abrupt("return");case 3:return s=Object(ae.f)(i,o,l),d=Object(n.a)(s,3),d[0],d[1],c=d[2],e.next=6,a.getAnimationData(c);case 6:u=e.sent,a.setState({animationData:u});case 8:case"end":return e.stop()}},e)})),a.getAnimationData=function(e){return new Promise(function(t){if(e){var a=ie.a.getBlob(e.id);if(a){var n=new FileReader;n.onload=function(e){return t(JSON.parse(e.target.result))},n.onerror=function(){return t(null)},n.onabort=function(){return t(null)},n.readAsText(a)}else t(null)}else t(null)})},a.onClientUpdateMediaBlob=function(e){var t=a.props,i=t.chatId,r=t.messageId,o=t.size;if(i===e.chatId&&r===e.messageId){var l=Object(ae.f)(i,r,o),s=Object(n.a)(l,3),d=s[0],c=s[1],u=s[2];a.setState({width:d,height:c,file:u})}},a.onClientUpdateMediaThumbnailBlob=function(e){var t=a.props,i=t.chatId,r=t.messageId;if(i===e.chatId&&r===e.messageId){var o=Object(ae.g)(i,r),l=Object(n.a)(o,3),s=l[0],d=l[1],c=l[2];a.setState({thumbnailWidth:s,thumbnailHeight:d,thumbnail:c})}},a.onUpdateMessageContent=function(e){var t=a.props,i=t.chatId,r=t.messageId,o=t.size,l=e.chat_id,s=e.message_id;if(i===l&&r===s){var d=Object(ae.f)(i,r,o),c=Object(n.a)(d,3),u=c[0],h=c[1],f=c[2],m=X.a.get(i,r),v=Object(Y.m)(m);a.setState({width:u,height:h,file:f,text:v})}},a.handleContentClick=function(e){e&&e.stopPropagation()},a.changeSpeed=function(e){a.setState({speed:e})},a.videoRef=f.a.createRef(),a.lottieRef=f.a.createRef();var i=a.props,s=i.chatId,u=i.messageId,h=i.size,m=Object(ae.f)(s,u,h),v=Object(n.a)(m,3),p=v[0],b=v[1],g=v[2];g=ie.a.get(g.id)||g;var M=Object(ae.g)(s,u),y=Object(n.a)(M,3),C=y[0],I=y[1],O=y[2];O=ie.a.get(O.id)||O;var w=X.a.get(s,u),k=Object(Y.m)(w);return a.state={speed:1,prevChatId:s,prevMessageId:u,isPlaying:!1,width:p,height:b,file:g,text:k,thumbnailWidth:C,thumbnailHeight:I,thumbnail:O},a.updateAnimationData(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){ie.a.on("clientUpdateDocumentBlob",this.onClientUpdateDocumentBlob),ie.a.on("clientUpdatePhotoBlob",this.onClientUpdateMediaBlob),ie.a.on("clientUpdateVideoBlob",this.onClientUpdateMediaBlob),ie.a.on("clientUpdateAnimationBlob",this.onClientUpdateMediaBlob),ie.a.on("clientUpdateVideoThumbnailBlob",this.onClientUpdateMediaThumbnailBlob),ie.a.on("clientUpdateAnimationThumbnailBlob",this.onClientUpdateMediaThumbnailBlob),X.a.on("updateMessageContent",this.onUpdateMessageContent)}},{key:"componentWillUnmount",value:function(){ie.a.removeListener("clientUpdateDocumentBlob",this.onClientUpdateDocumentBlob),ie.a.removeListener("clientUpdatePhotoBlob",this.onClientUpdateMediaBlob),ie.a.removeListener("clientUpdateVideoBlob",this.onClientUpdateMediaBlob),ie.a.removeListener("clientUpdateAnimationBlob",this.onClientUpdateMediaBlob),ie.a.removeListener("clientUpdateVideoThumbnailBlob",this.onClientUpdateMediaThumbnailBlob),ie.a.removeListener("clientUpdateAnimationThumbnailBlob",this.onClientUpdateMediaThumbnailBlob),X.a.removeListener("updateMessageContent",this.onUpdateMessageContent)}},{key:"componentDidUpdate",value:function(e,t,a){var n=this.props,i=n.chatId,r=n.messageId;e.chatId===i&&e.messageId===r||this.updateAnimationData()}},{key:"render",value:function(){var e=this,t=this.props,a=t.chatId,n=t.messageId,i=this.state,r=i.animationData,o=i.width,l=i.height,s=i.thumbnailWidth,d=i.thumbnailHeight,c=i.file,u=i.text,h=i.thumbnail,m=i.isPlaying;if(!c)return null;var p=ie.a.getBlob(c.id)||c.blob,b=ie.a.getBlobUrl(p)||"",g=h?ie.a.getBlob(h.id)||h.blob:null,M=ie.a.getBlobUrl(g),y=Object(ne.b)({width:s,height:d}),C=Object(Y.y)(a,n),I=Object(Y.s)(a,n),O=Object(Y.w)(a,n),w=o,k=l;if(Math.max(w,k)>640){var j=640/Math.max(w,k);k=k>(w=w>k?640:Math.floor(w*j))?640:Math.floor(k*j)}var E=null;if(C)E=f.a.createElement("div",{className:"media-viewer-content-wrapper"},f.a.createElement("video",{ref:this.videoRef,className:"media-viewer-content-video-player",src:b,onClick:this.handleContentClick,controls:!0,autoPlay:!0,width:w,height:k,onPlay:function(){e.setState({isPlaying:!0}),oe.a.clientUpdate({"@type":"clientUpdateMediaViewerPlay"})},onCanPlay:function(){var t=e.videoRef.current;t&&(t.volume=re.b.volume)},onPause:function(){oe.a.clientUpdate({"@type":"clientUpdateMediaViewerPause"})},onEnded:function(){oe.a.clientUpdate({"@type":"clientUpdateMediaViewerEnded"})},onVolumeChange:function(){var t=e.videoRef.current;t&&oe.a.clientUpdate({"@type":"clientUpdateMediaVolume",volume:t.volume})}}),!m&&(!b&&M?f.a.createElement("img",{className:v()("media-viewer-content-video-thumbnail",{"media-blurred":y}),src:M,alt:"",width:w,height:k}):f.a.createElement("div",{className:"media-viewer-content-video-thumbnail",style:{width:w,height:k}})));else if(I)E=f.a.createElement("div",{className:"media-viewer-content-wrapper"},f.a.createElement("video",{className:"media-viewer-content-video-player",src:b,onClick:this.handleContentClick,loop:!0,autoPlay:!0,width:w,height:k,onPlay:function(){e.setState({isPlaying:!0})}}),!m&&(!b&&M?f.a.createElement("img",{className:v()("media-viewer-content-video-thumbnail",{"media-blurred":y}),src:M,alt:"",width:w,height:k}):f.a.createElement("div",{className:"media-viewer-content-video-thumbnail",style:{width:w,height:k}})));else if(O){var P={loop:!0,autoplay:!0,animationData:r,rendererSettings:{preserveAspectRatio:"xMidYMid slice"}},x=this.state.speed;E=f.a.createElement(le,{ref:this.lottieRef,speed:x,options:P,height:"auto",width:400,isStopped:!1,isPaused:!1})}else E=f.a.createElement("img",{className:"media-viewer-content-image",src:b,alt:"",onClick:this.handleContentClick});return f.a.createElement("div",{className:"media-viewer-content"},f.a.createElement(f.a.Suspense,{fallback:f.a.createElement("div",null)},E),f.a.createElement(Z.a,{file:c,zIndex:2}),u&&u.length>0&&f.a.createElement(te,{text:u}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a=e.chatId,i=e.messageId,r=e.size;if(a!==t.prevChatId||i!==t.prevMessageId){var o=Object(ae.f)(a,i,r),l=Object(n.a)(o,3),s=l[0],d=l[1],c=l[2];c=ie.a.get(c.id)||c;var u=Object(ae.g)(a,i),h=Object(n.a)(u,3),f=h[0],m=h[1],v=h[2];v=ie.a.get(v.id)||v;var p=X.a.get(a,i);return{speed:1,prevChatId:a,prevMessageId:i,isPlaying:!1,width:s,height:d,file:c,text:Object(Y.m)(p),thumbnailWidth:f,thumbnailHeight:m,thumbnail:v}}return null}}]),t}(f.a.Component),de=a(478),ce=a(480),ue=a(427),he=a(482),fe=a(30),me=a(27),ve=a(16),pe=(a(713),{padding:20,transform:"scaleX(-1)"}),be={padding:20},ge={padding:35},Me=function(e){function t(e){var a;Object(l.a)(this,t),(a=Object(d.a)(this,Object(c.a)(t).call(this,e))).onKeyDown=function(e){if(27===e.keyCode){if(a.state.deleteConfirmationOpened)return;a.handleClose()}else 39===e.keyCode?a.handleNext():37===e.keyCode&&a.handlePrevious()},a.onUpdateMessageContent=function(e){var t=e.chat_id,n=e.message_id,i=e.new_content,r=e.old_content,o=a.props.chatId,l=a.state,s=l.currentMessageId,d=l.totalCount;if(o===t){var c=X.a.get(t,n);if(c){if(Object(ae.n)([c]),Object(Y.x)(i)&&!Object(Y.x)(r)){if(a.history.length>=2&&(a.firstSliceLoaded||Object(fe.b)(n,a.history[0].id,a.history[a.history.length-1].id))){for(var u=!1,h=[],f=0;f<a.history.length;f++)a.history[f].id>n?h.push(a.history[f]):(u||(u=!0,h.push(c)),h.push(a.history[f]));a.history=h}var m=a.history.findIndex(function(e){return e.id===s});a.setState({hasNextMedia:a.hasNextMedia(m),hasPreviousMedia:a.hasPreviousMedia(m),totalCount:d+1})}if(!Object(Y.x)(i)&&Object(Y.x)(r)){var v=a.history;if(a.history=a.history.filter(function(e){return e.id!==n}),s===n){var p=new Map;p.set(n,n),a.moveToNextMedia(v,p),a.setState({totalCount:Math.max(d-1,0)})}else{var b=a.history.findIndex(function(e){return e.id===s});a.setState({hasNextMedia:a.hasNextMedia(b),hasPreviousMedia:a.hasPreviousMedia(b),totalCount:Math.max(d-1,0)})}}}}},a.onUpdateDeleteMessages=function(e){var t=e.chat_id,n=e.message_ids,i=e.is_permanent,r=a.props.chatId,o=a.state,l=o.currentMessageId,s=o.totalCount;if(i&&r===t){var d=n.reduce(function(e,t){return e.set(t,t),e},new Map),c=a.history,u=c.length;a.history=a.history.filter(function(e){return!d.has(e.id)}),u-=a.history.length,a.setState({totalCount:Math.max(s-u,0)}),a.history.length?d.has(l)&&a.moveToNextMedia(c,d):ve.a.setMediaViewerContent(null)}},a.onUpdateNewMessage=function(e){var t=a.props.chatId,n=a.state,i=n.currentMessageId,r=n.totalCount,o=e.message;if(o&&Object(Y.x)(o.content)&&o.chat_id===t&&a.firstSliceLoaded){a.history=[o].concat(a.history);var l=a.history.findIndex(function(e){return e.id===i});a.setState({hasNextMedia:a.hasNextMedia(l),hasPreviousMedia:a.hasPreviousMedia(l),totalCount:r+1})}},a.getFilter=function(e,t){var a=X.a.get(e,t);if(!a)return null;var n=a.content;if(!n)return null;switch(n["@type"]){case"messageChatChangePhoto":return{"@type":"searchMessagesFilterChatPhoto"};case"messagePhoto":case"messageVideo":return{"@type":"searchMessagesFilterPhotoAndVideo"};default:return null}},a.loadHistory=Object(o.a)(r.a.mark(function e(){var t,n,i,o,l,s,d,c,u,h,f;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.props,n=t.chatId,i=t.messageId,o=a.getFilter(n,i),l={"@type":"messages",messages:[],total_count:0},!o){e.next=7;break}return e.next=6,oe.a.send({"@type":"searchChatMessages",chat_id:n,query:"",sender_user_id:0,from_message_id:i,offset:-me.k,limit:2*me.k,filter:o});case 6:l=e.sent;case 7:if(Object(Y.a)(l,a.history),X.a.setItems(l.messages),a.history=l.messages,a.firstSliceLoaded=0===l.messages.length,s=a.state.currentMessageId,d=a.history.findIndex(function(e){return e.id===s}),a.setState({hasNextMedia:a.hasNextMedia(d),hasPreviousMedia:a.hasPreviousMedia(d)}),-1!==d){e.next=19;break}a.history=[X.a.get(n,s)],Object(ae.u)(0,a.history),e.next=30;break;case 19:if(Object(ae.u)(d,a.history),c=a.getFilter(n,i)){e.next=23;break}return e.abrupt("return");case 23:u=1500,h=0,f=r.a.mark(function e(){var t,i,o;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,oe.a.send({"@type":"searchChatMessages",chat_id:n,query:"",sender_user_id:0,from_message_id:a.history.length>0?a.history[0].id:0,offset:-99,limit:100,filter:c});case 2:t=e.sent,h+=t.messages.length,Object(Y.a)(t,a.history),X.a.setItems(t.messages),a.history=t.messages.concat(a.history),a.firstSliceLoaded=0===t.messages.length,i=a.state.currentMessageId,o=a.history.findIndex(function(e){return e.id===i}),a.setState({hasNextMedia:a.hasNextMedia(o),hasPreviousMedia:a.hasPreviousMedia(o),firstSliceLoaded:a.firstSliceLoaded,totalCount:t.total_count});case 11:case"end":return e.stop()}},e)});case 26:if(a.firstSliceLoaded||!(h<u)){e.next=30;break}return e.delegateYield(f(),"t0",28);case 28:e.next=26;break;case 30:case"end":return e.stop()}},e)})),a.handleClose=function(){ve.a.setMediaViewerContent(null);var e=a.state.currentMessageId,t=a.history.findIndex(function(t){return t.id===e});-1!==t&&Object(ae.a)(t,a.history)},a.saveAnimation=function(e,t){if(t){var a=t.chat_id,n=t.id;if(e){var i=e.animation,r=e.file_name;if(i){var o=i.id;Object(ae.w)(i,r||n,t,function(){return ie.a.updateAnimationBlob(a,n,o)})}}}},a.saveDocument=function(e,t){if(t){var a=t.chat_id,n=t.id;if(e){var i=e.document,r=e.file_name;if(i){var o=i.id;Object(ae.w)(i,r||n,t,function(){return ie.a.updateDocumentBlob(a,n,o)})}}}},a.saveVideo=function(e,t){if(t){var a=t.chat_id,n=t.id;if(e){var i=e.video,r=e.file_name;if(i){var o=i.id;Object(ae.w)(i,r||n,t,function(){return ie.a.updateVideoBlob(a,n,o)})}}}},a.savePhoto=function(e,t){if(t){var a=t.chat_id,n=t.id;if(e){var i=Object(fe.m)(e.sizes,me.q);if(i){var r=i.photo;if(r){var o=r.id;Object(ae.w)(r,r.id+".jpg",t,function(){return ie.a.updatePhotoBlob(a,n,o)})}}}}},a.handleSave=function(){var e=a.props.chatId,t=a.state.currentMessageId,n=X.a.get(e,t);if(n){var i=n.content;if(i)switch(i["@type"]){case"messageAnimation":var r=i.animation;a.saveAnimation(r,n);break;case"messageChatChangePhoto":var o=i.photo;a.savePhoto(o,n);break;case"messageDocument":var l=i.document;a.saveDocument(l,n);break;case"messagePhoto":var s=i.photo;a.savePhoto(s,n);break;case"messageText":var d=i.web_page;if(!d)return;var c=d.animation,u=d.document,h=d.photo,f=d.video;if(c)return void a.saveAnimation(c,n);if(u)return void a.saveDocument(u,n);if(h)return void a.savePhoto(h,n);if(f)return void a.saveVideo(f,n);break;case"messageVideo":var m=i.video;a.saveVideo(m,n)}}},a.handleForward=function(){var e=a.props.chatId,t=a.state.currentMessageId;oe.a.clientUpdate({"@type":"clientUpdateForward",info:{chatId:e,messageIds:[t]}})},a.handleDelete=function(){a.handleDialogOpen()},a.hasPreviousMedia=function(e){return-1!==e&&e+1<a.history.length},a.handlePrevious=function(e){e&&e.stopPropagation();var t=a.state.currentMessageId,n=a.history.findIndex(function(e){return e.id===t})+1;return a.loadMedia(n,function(){n===a.history.length-1&&a.loadPrevious()})},a.loadPrevious=Object(o.a)(r.a.mark(function e(){var t,n,i,o,l,s,d;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.props,n=t.chatId,i=t.messageId,o=a.state.currentMessageId,l=a.getFilter(n,i),s={"@type":"messages",messages:[],total_count:0},!l){e.next=8;break}return e.next=7,oe.a.send({"@type":"searchChatMessages",chat_id:n,query:"",sender_user_id:0,from_message_id:o,offset:0,limit:me.k,filter:l});case 7:s=e.sent;case 8:Object(Y.a)(s,a.history),X.a.setItems(s.messages),a.history=a.history.concat(s.messages),d=a.history.findIndex(function(e){return e.id===o}),a.setState({hasNextMedia:a.hasNextMedia(d),hasPreviousMedia:a.hasPreviousMedia(d),totalCount:s.total_count});case 13:case"end":return e.stop()}},e)})),a.hasNextMedia=function(e){return-1!==e&&e-1>=0},a.handleNext=function(e){e&&e.stopPropagation();var t=a.state.currentMessageId,n=a.history.findIndex(function(e){return e.id===t})-1;return a.loadMedia(n,function(){0===n&&a.loadNext()})},a.loadNext=Object(o.a)(r.a.mark(function e(){var t,n,i,o,l,s,d;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.props,n=t.chatId,i=t.messageId,o=a.state.currentMessageId,l=a.getFilter(n,i),s={"@type":"messages",messages:[],total_count:0},!l){e.next=8;break}return e.next=7,oe.a.send({"@type":"searchChatMessages",chat_id:n,query:"",sender_user_id:0,from_message_id:o,offset:-me.k,limit:me.k+1,filter:l});case 7:s=e.sent;case 8:Object(Y.a)(s,a.history),X.a.setItems(s.messages),a.firstSliceLoaded=0===s.messages.length,a.history=s.messages.concat(a.history),d=a.history.findIndex(function(e){return e.id===o}),a.setState({hasNextMedia:a.hasNextMedia(d),hasPreviousMedia:a.hasPreviousMedia(d),firstSliceLoaded:a.firstSliceLoaded,totalCount:s.total_count});case 14:case"end":return e.stop()}},e)})),a.loadMedia=function(e,t){return!(e<0)&&(!(e>=a.history.length)&&(a.setState({currentMessageId:a.history[e].id,hasNextMedia:a.hasNextMedia(e),hasPreviousMedia:a.hasPreviousMedia(e)},t),Object(ae.u)(e,a.history),!0))},a.moveToNextMedia=function(e,t){for(var n=a.state.currentMessageId,i=e.findIndex(function(e){return e.id===n}),r=0,o=i-1;o>=0;o--)if(t&&!t.has(e[o].id)){r=e[o].id;break}if(!r)for(var l=i+1;l<e.length;l++)if(t&&!t.has(e[l].id)){r=e[l].id;break}if(r){var s=a.history.findIndex(function(e){return e.id===r});return a.loadMedia(s,function(){0===s?a.loadNext():s===a.history.length-1&&a.loadPrevious()})}},a.handleDialogOpen=function(){a.setState({deleteConfirmationOpened:!0})},a.handleDialogClose=function(){a.setState({deleteConfirmationOpened:!1})},a.handleDone=function(){a.setState({deleteConfirmationOpened:!1});var e=a.props.chatId,t=a.state,n=t.currentMessageId,i=t.deleteForAll,r=X.a.get(e,n);if(r){var o=r.can_be_deleted_only_for_self,l=r.can_be_deleted_for_all_users;(o||l)&&oe.a.send({"@type":"deleteMessages",chat_id:e,message_ids:[n],revoke:l&&i})}},a.handleChangeDeleteForAll=function(e){a.setState({deleteForAll:e.target.checked})},a.handleInvertColors=function(){var e="media-viewer-default";switch(a.state.background){case"media-viewer-default":e="media-viewer-dark";break;case"media-viewer-dark":e="media-viewer-light";break;case"media-viewer-light":e="media-viewer-default"}a.setState({background:e})},a.handleChangeSpeed=function(){if(a.contentRef){var e=a.contentRef.current;if(e){var t=a.state.speed<1?1:.1;a.setState({speed:t}),e.changeSpeed(t)}}},a.canBeForwarded=function(e,t){var a=X.a.get(e,t);if(!a)return!1;var n=a.can_be_forwarded,i=a.content;if(!i)return!1;switch(i["@type"]){case"messageChatChangePhoto":return!0;default:return n}},a.contentRef=f.a.createRef(),a.history=[];var n=a.props,i=n.chatId,s=n.messageId;return a.state={speed:1,background:"media-viewer-default",prevChatId:i,prevMessageId:s,currentMessageId:s,hasNextMedia:!1,hasPreviousMedia:!1,deleteConfirmationOpened:!1,deleteForAll:!0},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){var a=this.props,n=a.chatId,i=a.messageId,r=this.state,o=r.background,l=r.currentMessageId,s=r.deleteConfirmationOpened,d=r.firstSliceLoaded,c=r.hasNextMedia,u=r.hasPreviousMedia,h=r.speed,f=r.totalCount;return t.background!==o||(e.chatId!==n||(e.messageId!==i||(t.currentMessageId!==l||(t.hasPrevousMedia!==u||(t.hasNextMedia!==c||(t.firstSliceLoaded!==d||(t.totalCount!==f||(t.deleteConfirmationOpened!==s||t.speed!==h))))))))}},{key:"componentDidMount",value:function(){this.loadHistory(),document.addEventListener("keydown",this.onKeyDown,!1),X.a.on("updateDeleteMessages",this.onUpdateDeleteMessages),X.a.on("updateNewMessage",this.onUpdateNewMessage),X.a.on("updateMessageContent",this.onUpdateMessageContent)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.onKeyDown,!1),X.a.removeListener("updateDeleteMessages",this.onUpdateDeleteMessages),X.a.removeListener("updateNewMessage",this.onUpdateNewMessage),X.a.removeListener("updateMessageContent",this.onUpdateMessageContent)}},{key:"render",value:function(){var e=this.props,t=e.chatId,a=e.t,i=this.state,r=i.background,o=i.currentMessageId,l=i.deleteConfirmationOpened,s=i.deleteForAll,d=i.firstSliceLoaded,c=i.hasNextMedia,u=i.hasPreviousMedia,h=i.speed,m=i.totalCount,p=-1;m&&d&&(p=this.history.findIndex(function(e){return e.id===o}));var b=Math.max(this.history.length,m),M=X.a.get(t,o),C=M.can_be_deleted_for_all_users,O=M.can_be_deleted_only_for_self,k=C||O,E=this.canBeForwarded(t,o),x="";x=Object(Y.y)(t,o)?a("AreYouSureDeleteVideo"):Object(Y.s)(t,o)?a("AreYouSureDeleteGIF"):a("AreYouSureDeletePhoto");var U=l?f.a.createElement(I.a,{transitionDuration:0,open:l,onClose:this.handleDialogClose,"aria-labelledby":"form-dialog-title"},f.a.createElement(_.a,{id:"form-dialog-title"},a("AppName")),f.a.createElement(j.a,null,f.a.createElement(P.a,null,x),C&&f.a.createElement(N.a,{label:a("DeleteForAll"),control:f.a.createElement(y.a,{color:"primary",value:"deleteAll",onChange:this.handleChangeDeleteForAll}),checked:s})),f.a.createElement(w.a,null,f.a.createElement(g.a,{onClick:this.handleDialogClose,color:"primary"},a("Cancel")),f.a.createElement(g.a,{onClick:this.handleDone,color:"primary"},a("Ok")))):null,B=Object(ae.f)(t,o,me.q),D=Object(n.a)(B,3),z=(D[0],D[1],D[2]),F=z?z.id:0,H=a("AttachPhoto");return Object(Y.y)(t,o)?H=a("AttachVideo"):Object(Y.s)(t,o)?H=a("AttachGif"):Object(Y.w)(t,o)&&(H=""),f.a.createElement("div",{className:v()("media-viewer",r)},U,f.a.createElement("div",{className:"media-viewer-wrapper",onClick:this.handlePrevious},f.a.createElement("div",{className:"media-viewer-left-column"},f.a.createElement("div",{className:"media-viewer-button-placeholder"}),f.a.createElement(de.a,{disabled:!u,grow:!0,onClick:this.handlePrevious},f.a.createElement(A.a,{fontSize:"large",style:ge}))),f.a.createElement("div",{className:"media-viewer-content-column"},f.a.createElement(se,{ref:this.contentRef,chatId:t,messageId:o,size:me.q,onClick:this.handlePrevious})),f.a.createElement("div",{className:"media-viewer-right-column"},f.a.createElement(de.a,{onClick:this.handleClose},f.a.createElement(S.a,{fontSize:"large",style:ge})),f.a.createElement(de.a,{disabled:!c,grow:!0,onClick:this.handleNext},f.a.createElement(L.a,{fontSize:"large",style:ge})))),f.a.createElement("div",{className:"media-viewer-footer"},f.a.createElement(Q,{chatId:t,messageId:o}),f.a.createElement(ce.a,{title:H,subtitle:b&&p>=0?"".concat(b-p," of ").concat(b):null}),Object(Y.w)(t,o)&&f.a.createElement(f.a.Fragment,null,f.a.createElement(ue.a,{title:a("ChangeSpeed"),checked:h<1,onClick:this.handleChangeSpeed},f.a.createElement($.a,{style:be})),f.a.createElement(ue.a,{title:a("InvertBackgroundColor"),onClick:this.handleInvertColors},f.a.createElement(W.a,{style:be}))),f.a.createElement(he.a,{title:a("Save"),fileId:F,onClick:this.handleSave}),f.a.createElement(ue.a,{title:a("Forward"),disabled:!E,onClick:this.handleForward},f.a.createElement(V.a,{style:pe})),f.a.createElement(ue.a,{title:a("Delete"),disabled:!k,onClick:this.handleDelete},f.a.createElement(R.a,{style:be}))))}}]),t}(f.a.Component);t.default=Object(p.c)()(Me)}}]);
//# sourceMappingURL=9.d0a47dea.chunk.js.map