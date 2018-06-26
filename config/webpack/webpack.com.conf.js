let titleFun = function(chunkName, title) {
  let titleDef = '加速器网站';
  if (chunkName.indexOf('index') !== -1) {
    return titleDef;
  } else {
    return title + '_' + titleDef;
  }
};

module.exports = {
  titleFun,
};
