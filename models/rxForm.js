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
        techRec: {type: Boolean, default: false},
        layeredEmax: {type: Boolean, default: false},
        monoEmax: {type: Boolean, default: false},
        LayeredZirconia: {type: Boolean, default: false},
        monoZirconia: {type: Boolean, default: false},
        composite: {type: Boolean, default: false}
        //Lab time 10 days
      },
    pfm: {
        nonprecious: {type: Boolean, default: false},
        semiNoble: {type: Boolean, default: false},
        whiteNoble: {type: Boolean, default: false},
        highNoble: {type: Boolean, default: false}
       //Lab time 10 days
    },
    metalCollar: {
        noCollar: {type: Boolean, default: false},
        porcButt: {type: Boolean, default: false},
        lingual: {type: Boolean, default: false},
        halfLingual: {type: Boolean, default: false},
        fullCollar: {type: Boolean, default: false}
    },
    allGold: {
        fullGoldTypeThree: {type: Boolean, default: false},
        inlayOnlayTypeTwo: {type: Boolean, default: false},
        fullWhiteNoble: {type: Boolean, default: false}
        //lab time  8 days
    },
    abutment: {
        techRecommendation: {type: Boolean, default: false},
        titaniumCadCam: {type: Boolean, default: false},
        zirconiaCadCam: {type: Boolean, default: false},
        customUCLA: {type: Boolean, default: false},
        stock: {type: Boolean, default: false}
    },
    atlantisAbutment: {
        titanium: {type: Boolean, default: false},
        zirconia: {type: Boolean, default: false},
        composite: {type: Boolean, default: false}
        //lab time 12 days
    },
    temps: {
        diagnosticWaxUp: {type: Boolean, default: false},
        abutmentNums: String,
        ponticsNums: String,
        wireCast: {type: Boolean, default: false},
        metalFrame: {type: Boolean, default: false},
        splinted: {type: Boolean, default: false},
        individual: {type: Boolean, default: false}
        //lab time 6 days
    },
    ifNoOcclusalClearance: {
        metalOcclusion: {type: Boolean, default: false},
        reductionCoping: {type: Boolean, default: false},
        spotOpposing: {type: Boolean, default: false},
        makePermanentNote: {type: Boolean, default: false},
        callDoctor: {type: Boolean, default: false},
    }
}
)
    const RxForm = mongoose.model('RxForm', rxSchema)
    module.exports = RxForm