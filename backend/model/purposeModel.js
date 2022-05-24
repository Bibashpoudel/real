import mongoose from "mongoose";

const purposeSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Purpose = mongoose.model("Purpose", purposeSchema);
export default Purpose;
