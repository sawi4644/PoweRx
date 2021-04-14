const mongoose = require('mongoose')
const Schema = mongoose.Schema
const checklistSchema = new Schema({
    //All porcelain
    "techRecommendation": {
        name: "TECH RECOMMENDATION",
        value: false,
        inputType: ""
      },
    "layeredEmax": {
        name: "Layered EMAX",
        value: false,
        inputType: "",
    },
    "monoEmax": {
        name: "Mono EMAX",
        value: false,
        inputType: "",
    },
    "layeredZ": {
        name: "Layered Zirconia",
        value: false,
        inputType: "",
    },
    "monoZ": {
        name: "Mono Zirconia",
        value: false,
        inputType: "",
    },
    "composite": {
        name: "Composite",
        value: false,
        inputType: "",
    },//Lab time:10 Days
    //PFM Section
    "pfmNp": {
        name: "PFM-Non-Precious",
        value: false,
        inputType: "",
    },
    "pfmSn": {
        name: "PFM-Semi-nobel",
        value: false,
        inputType: "",

    },
    "pfmWn": {
        name: "PFM-White-nobel",
        value: false,
        inputType: "",

    },
    "pfmHn": {
        name: "PFM-High-Nobel",
        value: false,
        inputType: "",

    }, //lab time: 10 days
    //metal collar section
    "noCollar": {
        name: "No Collar",
        value: false,
        inputType: "",

    },
    "porcButt": {
        name: "Porc. Butt",
        value: false,
        inputType: "",

    },
    "lingual": {
        name: "Lingual",
        value: false,
        inputType: "",

    },
    "halfLingual": {
        name: "180 Lingual",
        value: false,
        inputType: "",

    },
    "fullCollar": {
        name: "360 Collar",
        value: false,
        inputType: "",
        
    },// lab time: 10 days
    //all gold section
    "fullGold": {
        name: "Full Gold Type Three",
        value: false,
        inputType: "",
    },
    "inlay": {
        name: "Inlay/ Onlay Type Two",
        value: false,
        inputType: "",

    },
    "fullWhite": {
        name: "Full White Noble",
        value: false,
        inputType: "",
        
    }, //lab time: 8 days
    //end left side
    //Abutment
    "TechRecommendationTwo": {
        name: "TECH RECOMMENDATION",
        value: false,
        inputType: "",
        
    },
    "TitaniumCadCam": {
        name: "Titanium cad/cam",
        value: false,
        inputType: "",
        
    },
    "ZirconiaCadCam": {
        name: "Zirconia cad/cam",
        value: false,
        inputType: "",
        
    },
    "CustomUCLA": {
        name: "Custom UCLA",
        value: false,
        inputType: "",
        
    },
    "Stock": {
        name: "Stock",
        value: false,
        inputType: "",

    },
    //AtlantisAbutment
    "Titanium": {
        name: "Titanium",
        value: false,
        inputType: "",

    },
    "Zirconia": {
        name: "Zirconia",
        value: false,
        inputType: "",

    },
    "GoldHue": {
        name: "Gold Hue",
        value: false,
        inputType: "",

    },
    //ScrewRetainedCrown
    "Seminoble": {
        name: "Semi-nobel",
        value: false,
        inputType: "",

    },
    "CompositeTwo": {
        name: "Composite",
        value: false,
        inputType: "",

    },
    //One Piece Crown
    //Lab Time: 12 Days
    //Temps
    "DiagnosticWaxUp": {
        name: "Diagnostic wax-up",
        value: false,
        inputType: "",

    },
    //can i do a boolean and a integer????
    "AbutmentsNums": {
        name: "Abutments Numbers",
        value: false,
        inputType: "",

    },
    "PonticsNums": {
        name: "Pontics Numbers",
        value: false,
        inputType: "",

    },
    "WireCast": {
        name: "Wire Cast",
        value: false,
        inputType: "",

    },
    "Splinted": {
        name: "Splinted",
        value: false,
        inputType: "",

    },
    "MetalFrame": {
        name: "Metal Frame",
        value: false,
        inputType: "",

    },
    "Individual": {
        name: "Individual",
        value: false,
        inputType: "",

    //LabTime: 6 Days    
    },
    //IfNoOcclusalClearance
    "MetalOcclusion": {
        name: "Metal Occlusion",
        value: false,
        inputType: "",

    },
    "ReductionCoping": {
        name: "Reduction coping",
        value: false,
        inputType: "",

    },
    "SpotOpposing": {
        name: "Spot Opposing",
        value: false,
        inputType: "",

    },
    "MakePermanentNote": {
        name: "Make Permanent note",
        value: false,
        inputType: "",

    },
    "CallDoctor": {
        name: "Call Doctor",
        value: false,
        inputType: "",
        
    },
})

const ChecklistSection = mongoose.model('ChecklistSection', checklistSchema)

module.exports = ChecklistSection