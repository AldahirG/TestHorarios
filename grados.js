const Alexa = require('ask-sdk-core');

const ConvertTemperatureIntentHandler = {
  canHandle(handlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
      Alexa.getIntentName(handlerInput.requestEnvelope) === 'ConvertTemperatureIntent'
    );
  },
  handle(handlerInput) {
    const { slots } = handlerInput.requestEnvelope.request.intent;

    const celsius = slots['Celsius'].value;
    const fahrenheit = (celsius * 9/5) + 32;

    const speechOutput = `${celsius} grados Celsius son aproximadamente ${fahrenheit} grados Fahrenheit.`;

    return handlerInput.responseBuilder
      .speak(speechOutput)
      .getResponse();
  },
};

const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
  .addRequestHandlers(ConvertTemperatureIntentHandler)
  .lambda();
