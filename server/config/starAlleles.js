// server/config/starAlleles.js

const starAlleles = {
  CYP2D6: {
    "*1": [], // Wild-type (no variant required)

    "*2": [
      { rsId: "rs16947", alt: "A" },
    ],

    "*4": [
      { rsId: "rs3892097", alt: "A" },
    ],
  },

  CYP2C19: {
    "*1": [],

    "*2": [
      { rsId: "rs4244285", alt: "A" },
    ],

    "*3": [
      { rsId: "rs4986893", alt: "A" },
    ],

    "*17": [
      { rsId: "rs12248560", alt: "T" },
    ],
  },

  CYP2C9: {
    "*1": [],

    "*2": [
      { rsId: "rs1799853", alt: "T" },
    ],

    "*3": [
      { rsId: "rs1057910", alt: "C" },
    ],
  },

  SLCO1B1: {
    "*1": [],

    "*5": [
      { rsId: "rs4149056", alt: "C" },
    ],

    "*15": [
      { rsId: "rs4149056", alt: "C" },
      { rsId: "rs2306283", alt: "G" },
    ],
  },

  TPMT: {
    "*1": [],

    "*2": [
      { rsId: "rs1800462", alt: "G" },
    ],

    "*3A": [
      { rsId: "rs1800460", alt: "C" },
      { rsId: "rs1142345", alt: "T" },
    ],

    "*3C": [
      { rsId: "rs1142345", alt: "T" },
    ],
  },

  DPYD: {
    "*1": [],

    "*2A": [
      { rsId: "rs3918290", alt: "A" },
    ],

    "*13": [
      { rsId: "rs55886062", alt: "T" },
    ],
  },
};

export default starAlleles;
