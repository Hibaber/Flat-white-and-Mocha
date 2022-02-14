const { Schema, model } = require("mongoose");

const cafeteriaSchema = new Schema(
    {
        name: {
            type: String,
            unique: true,
            required: true,
            default: 'nombre desconocido'
        },

        type: {
            type: String,
            required: true,
            enum: ['shop', 'cafeteria']// aquí habría que modificarlo porque hay algunas que son las dos cosas
        },

        image: {
            type: String,
            required: true,
            default: "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG"
        },

        location: {
            type: {
                type: String,
            },
            coordinates: [Number]
        },

        description: {
            type: String,
            required: true,
            default: 'introduce description'
        },

        transport: {
            type: String,
            default: 'introduce closest transport'
        },

        website: {
            type: String,

        },

        rating: {
            type: Number,
            required: true,
            default: 'introduce rating'
        }

    },

    {
        timestamps: true
    }

);


const Cafeteria = model("Cafeteria", cafeteriaSchema);

module.exports = Cafeteria;
