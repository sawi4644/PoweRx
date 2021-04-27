const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const rxSchema = new Schema({
  userId: String,
  personalInformation: {
    accountNumber: Number,
    phoneNumber: Number,
    doctorName: String,
    office: String,
    patientLastName: String,
    patientFirstName: String,
    dateSent: Date,
    dateDue: Date,
  },
  attachedItems: {
    Rxforms: { type: Boolean, default: false },
    Boxes: { type: Boolean, default: false },
    MailingLabels: { type: Boolean, default: false },
  },
  //please send section of top row on RX form
  allPorcelain: {
    techRec: Boolean,
    layeredEmax: Boolean,
    monoEmax: Boolean,
    LayeredZirconia: Boolean,
    monoZirconia: Boolean,
    composite: Boolean,
    //Lab time 10 days
  },
  pfm: {
    nonprecious: Boolean,
    semiNoble: Boolean,
    whiteNoble: Boolean,
    highNoble: Boolean,
    //Lab time 10 days
  },
  metalCollar: {
    noCollar: Boolean,
    porcButt: Boolean,
    lingual: Boolean,
    halfLingual: Boolean,
    fullCollar: Boolean,
  },
  allGold: {
    fullGoldTypeThree: Boolean,
    inlayOnlayTypeTwo: Boolean,
    fullWhiteNoble: Boolean,
    //lab time  8 days
  },
  abutment: {
    techRecommendation: Boolean,
    titaniumCadCam: Boolean,
    zirconiaCadCam: Boolean,
    customUCLA: Boolean,
    stock: Boolean,
  },
  atlantisAbutment: {
    titanium: Boolean,
    zirconia: Boolean,
    goldHue: Boolean,
    //lab time 12 days
  },
  screwRetainedCrown: {
    semiNoble: Boolean,
    zirconia: Boolean,
    composite: Boolean,
    //lab time 12 days
  },
  temps: {
    diagnosticWaxUp: Boolean,
    wireCast: Boolean,
    metalFrame: Boolean,
    splinted: Boolean,
    individual: Boolean,
    //lab time 6 days
  },
  temps2: {
    abutmentNums: String,
    ponticsNums: String,
    //lab time 6 days
  },
  ifNoOcclusalClearance: {
    metalOcclusion: Boolean,
    reductionCoping: Boolean,
    spotOpposing: Boolean,
    makePermanentNote: Boolean,
    callDoctor: Boolean,
  },
  teeth: {
    howMany: String,
  },
  bottomBoo: {
    drToDieTrim: Boolean,
    metalTryIn: Boolean,
    bisqueBake: Boolean,
    finishBox: Boolean,
    nothingBox: Boolean,
    lightBox: Boolean,
    darkBox: Boolean,
  },
  shade: {
    shadeBox: String,
    stumpShade: String,
    drLicense: String,
    email: String,
  },
});
const RxForm = mongoose.model("RxForm", rxSchema);
module.exports = RxForm;
