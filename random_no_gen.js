import mg from 'mongoose';

const randomSchema = new mg.Schema({
    name: String,
    salary: Number,
    language: String,
    city: String,
    isManager: String
});
export const RandomNoGen = mg.model("RandomNoGen", randomSchema);


