const nem = require('nem-sdk').default;

export const mosaic = nem.model.objects.create("mosaicAttachment")("choice.NZDC", "NZDC", 1000000000)
