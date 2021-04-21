import React, { Dispatch } from 'react';
import { connect } from 'dva';
import { Reducer } from '@/model/index';
import { MenuModelState } from '@/model/home';
import './index.less';

interface Props {
  dispatch: Dispatch<{ type: string }>;
  home: MenuModelState;
}

// interface IProps {}
const Index: React.FC<Props> = (props: Props) => {
  // const { dispatch, home, page } = props;
  return (
    <div className='index'>
      <p>Hello world!</p>
    </div>
  );
};
export default connect(({ home }: Reducer) => ({
  home,
}))(Index);
