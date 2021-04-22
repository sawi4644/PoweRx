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
        patientFirstNme: String,
        dateSent: Date,
        dateDue: Date,
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
    temps: {
        diagnosticWaxUp: Boolean,
        abutmentNums: String,
        ponticsNums: String,
        wireCast: Boolean,
        metalFrame: Boolean,
        splinted: Boolean,
        individual: Boolean
        //lab time 6 days
    },
    ifNoOcclusalClearance: {
        metalOcclusion: Boolean,
        reductionCoping: Boolean,
        spotOpposing: Boolean,
        makePermanentNote: Boolean,
        callDoctor: Boolean,
    }
}
)
   
    const RxForm = mongoose.model('RxForm', rxSchema)

    module.exports = RxForm