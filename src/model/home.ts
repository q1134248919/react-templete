import { Effect } from 'dva';
// import { Reducer } from 'redux';

export interface MenuModelState {
  testNumber: number;
}

export interface MenuModelType {
  namespace: string;
  state: MenuModelState;
  effects: {
    fetchMenu: Effect;
  };
  reducers: {
    // saveMenuData: Reducer<MenuModelState>;
  };
}

const home: MenuModelType = {
  namespace: 'home',
  state: {
    testNumber: 0,
  },
  effects: {
    *fetchMenu({ payload }) {
      console.log(payload);
    },
  },
  reducers: {},
};
export default home;
