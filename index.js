const receivesAFunction = (getFunction) => {
  getFunction()
}

const returnsANamedFunction = () => (
  function getFunction(){}
)

const returnsAnAnonymousFunction = () => () => {}