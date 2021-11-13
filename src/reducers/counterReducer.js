import ACTION_TYPES from '../actions/actionsType';
const initialState = {
  count: 0,
  step: 1,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.INCREMENT:
      return { ...state, count: state.count + state.step };
    case ACTION_TYPES.DECREMENT:
      return { ...state, count: state.count - state.step };
    case ACTION_TYPES.SET_STEP:
      return { ...state, step: action.value };
    default:
      return state;
  }
};
export default counterReducer;

/*
// redux
менеджер состояний
состояния в пределе на уровне приложения

View -> Actions -> Reducer -> Store -> ...

Provider "поставщик услуг" дает доступ к состояниям в хранилище


createStore: функция для создания store 
store хранилище состояний (state+actions) js-обьект + логика для измения состояний
srore принимает как параментр функцию reducer - чистая функция которая не мутирует параметры
(state, action) => state
action действие js-обьект type:'string'
dispatch функция которая отправляет действие action в хранилище store через reducer

connect - компонент высшего порядка, обернуть наш компонент. пробросит состояния через пропсы компонента
mapStateToProps -какие конкретно состояния используются для текущего компонента
mapDispatchToProps - тоже по действия
*/
