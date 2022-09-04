const initialState = {
  firstName: 'Поляков',
  secondName: 'Алексей',
  lastName: 'Олегович',
  job: 'Программист',
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
