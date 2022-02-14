const { Schema, model } = require("mongoose");


const commentShema = new Shema(
    {

        user: [{
            type: Schema.Types.ObjectId,
            ref: "User"
        }],

        body: {
            type: String,
            maxLength: 500,
        },

        date: {
            type: Date,
            default: Date.now
        },

    }
)



const Comment = model("Comment", commentSchema);

module.exports = User;
