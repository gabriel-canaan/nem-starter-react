const nem = require('nem-sdk').default;

export const mosaic = nem.model.objects.create("mosaicAttachment")("MyNameSpaceName", "MyMosaic", 1000000000)

