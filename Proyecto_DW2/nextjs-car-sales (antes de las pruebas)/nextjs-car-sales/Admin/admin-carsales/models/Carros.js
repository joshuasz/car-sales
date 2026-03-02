const { Schema, model, models, default: mongoose } = require("mongoose");

const CarroSchema = new Schema({
    marca: {type: String, required: true},
    modelo: {type: String, required: true},
    año: {
        type: String,
        required: true,
        validate: {
          validator: function(v) {
            return /^\d{4}$/.test(v);
          },
          message: (props) => `${props.value} no es un año válido. El año debe tener 4 dígitos.`,
        },
      },
    descripcion: {type: String, required: true},
    precio: {type: Number, required: true},
    images: [{type: String}],
});

export const Carro = models.Carro || model(`Carro`, CarroSchema);