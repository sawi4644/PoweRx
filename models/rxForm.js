const mongoose = require('mongoose')
const Schema = mongoose.Schema
const rxSchema = new Schema({
    userId: String,
    personalInformation:{
        accountNumber: Number,
        phoneNumber: Number,
        doctorName: String,
        office: String,
        patientLastName: String,
        patientFirstName: String,
        dateSent: Date,
        dateDue: Date,
    },
    attachedItems:{
        Rxforms: {type: Boolean, default: false},
        Boxes: {type: Boolean, default: false},
        MailingLabels: {type: Boolean, default: false}
    },
    //please send section of top row on RX form
    allPorcelain: {
        techRec: Boolean,
        layeredEmax: Boolean,
        monoEmax: Boolean,
        LayeredZirconia: Boolean,
        monoZirconia: Boolean,
        composite: Boolean
        //Lab time 10 days
      },
    pfm: {
        nonprecious: Boolean,
        semiNoble: Boolean,
        whiteNoble: Boolean,
        highNoble: Boolean
       //Lab time 10 days
    },
    metalCollar: {
        noCollar: Boolean,
        porcButt: Boolean,
        lingual: Boolean,
        halfLingual: Boolean,
        fullCollar: Boolean
    },
    allGold: {
        fullGoldTypeThree: Boolean,
        inlayOnlayTypeTwo: Boolean,
        fullWhiteNoble: Boolean
        //lab time  8 days
    },
    abutment: {
        techRecommendation: Boolean,
        titaniumCadCam: Boolean,
        zirconiaCadCam: Boolean,
        customUCLA: Boolean,
        stock: Boolean
    },
    atlantisAbutment: {
        titanium: Boolean,
        zirconia: Boolean,
        composite: Boolean
        //lab time 12 days
    },
    screwRetainedCrown: {
        semiNoble: Boolean,
        zirconia: Boolean,
        composite: Boolean
        //lab time 12 days
    },
    temps: {
        diagnosticWaxUp: Boolean,
        wireCast: Boolean,
        metalFrame: Boolean,
        splinted: Boolean,
        individual: Boolean
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
        1: Boolean,
        2: Boolean,
        3: Boolean,
        4: Boolean,
        5: Boolean,
        6: Boolean,
        7: Boolean,
        8: Boolean,
        9: Boolean,
        10: Boolean,
        11: Boolean,
        12: Boolean,
        13: Boolean,
        14: Boolean,
        15: Boolean,
        16: Boolean,
        17: Boolean,
        18: Boolean,
        19: Boolean,
        20: Boolean,
        21: Boolean,
        22: Boolean,
        23: Boolean,
        24: Boolean,
        25: Boolean,
        26: Boolean,
        27: Boolean,
        28: Boolean,
        29: Boolean,
        30: Boolean,
        31: Boolean,
        32: Boolean,  
},
BottomBoo: {
    DrDieTrim: Boolean,
    MetalTryIn: Boolean,
    BisqueBake: Boolean,
    Finish: Boolean,
    callDoctor: Boolean,
},
Shade: {
    Shade: String,
    StumpShade: String,
    DrLIcense: String,
    Email: String,
},

OcclutionStaining: {
    None: Boolean,
    Light: Boolean,
    Dark: Boolean,
  
},

})
    const RxForm = mongoose.model('RxForm', rxSchema)
    module.exports = RxForm