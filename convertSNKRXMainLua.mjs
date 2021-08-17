import _ from 'lodash';

const getVariableInit = (bodies, key) => {
  return _.find(bodies, (body) => {
    const firstVariable = _.first(body.variables);
    return !!firstVariable && firstVariable.name === key;
  }).init[0];
};

const getStringValues = (init) => {
  return _.reduce(
    init.fields,
    (agg, field) => {
      const key = _.trim(field.key.raw, "'");
      const value = _.trim(field.value.raw, "'");
      return { ...agg, [key]: value };
    },
    {},
  );
};

const getNumericFunctionArguments = (init) => {
  return _.reduce(
    init.fields,
    (agg, field) => {
      const key = _.trim(field.key.raw, "'");
      const value = _.reduce(
        field.value.body[0].arguments,
        (numbers, argument) => {
          return [...numbers, argument.value];
        },
        [],
      );
      // const value = field.value.body[0].arguments[0].value;
      return { ...agg, [key]: _.uniq(_.compact(value)) };
    },
    {},
  );
};

const collectFlatValues = (snkrxMainLua) => {
  const init = _.find(snkrxMainLua.body, (body) => {
    return !!body.identifier && body.identifier.name === 'init';
  });

  return {
    classColors: getStringValues(getVariableInit(init.body, 'class_color_strings')),
    characterColors: getStringValues(getVariableInit(init.body, 'character_color_strings')),
    classSetNumbers: getNumericFunctionArguments(getVariableInit(init.body, 'class_set_numbers')),
  };
};

const convertSNKRXMainLua = (snkrxMainLua) => {
  const flatValues = collectFlatValues(snkrxMainLua);

  return {
    characters: _.mapValues(flatValues.characterColors, (color, key) => {
      return { key, color };
    }),
    classes: _.mapValues(flatValues.classColors, (color, key) => {
      const setNumbers = flatValues.classSetNumbers[key];
      return { key, color, setNumbers };
    }),
  };
};

export default convertSNKRXMainLua;
