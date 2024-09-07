let model;

async function cargarModelo() {
  model = await tf.loadLayersModel('colors/model.json');
  console.log('Modelo cargado exitosamente');
}

cargarModelo();