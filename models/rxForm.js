const mongoose = require('mongoose')
const Schema = mongoose.Schema


const rxSchema = new Schema({
    AccountNumber: {
        type: Number,
        required: "Please Enter Doctor's Account Number",
    }, phoneNum: {
        type: Number,
        required: "Please enter a phone number"
    },
    doctorName: {
        type: String,
        required: "Please enter Doctor's full name"
    },
    office: {
        type: String,
        required: "Please enter Office Name"
    },
    patientLastName: {
        type: String,
        required: "Please enter Patient's last name'"
    },
    patientFirstName: {
        type: String,
        required: "Please enter Patient's first name'"
    },
    dateSent: {
        type: Date,
        required: "Please enter the date the form is submitted"
    },
    dateDue: {
        type: Date,
        required: "Please enter the date due in Office by 5pm"
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