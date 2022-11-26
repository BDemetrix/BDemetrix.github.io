"use strict";

// стемные уведомления
var oNoticeOptions = {
  theme: 'NoticeSmartlab',
  animation: {
    open: 'slide:bottom',
    close: 'slide:bottom'
  },
  stack: false,
  attributes: {
    x: 'right',
    y: 'bottom'
  },
  position: {
    x: 40,
    y: 40
  },
  responsivePositions: {
    320: {
      x: 22,
      y: 40
    },
    380: {
      x: 18,
      y: 40
    },
    480: {
      x: 25,
      y: 40
    }
  },
  color: 'green',
  width: null,
  height: null
};

function jBoxNotice(color, title, message) {
  oNoticeOptions['color'] = color;
  oNoticeOptions['title'] = title ? title : null;
  oNoticeOptions['content'] = message ? message : null;
  new jBox('Notice', oNoticeOptions);
}