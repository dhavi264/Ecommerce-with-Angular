const { stringify } = require("querystring")

module.exports = mongoose =>{
    var schema = mongoose.schema({
        username:String,
        password:String,
        Email:String,
        Mobile:String
    });
    schema.method("to JSON", function(){
        const{_v, _id,...object} = this.object;
        object.id = _id;
        return object;
    });
    const data = mongoose.model("records", schema);
    return data;
};