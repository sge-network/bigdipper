import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgPlaceBet } from '@models';
import PlaceBet from '.';

// ==================================
// mocks
// ==================================

jest.mock('@components', () => ({
  Name: (props) => <div id="Name" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/MsgPlaceBet', () => {
  it('matches snapshot', () => {
    const message = new MsgPlaceBet({
      category: 'bet',
      type: 'MsgPlaceBet',
      fromAddress: 'fromAddress',
      bet: {
        uid: 'abcd-12345678-efgh',
        amount: [{
          denom: 'usge',
          amount: '200000000',
        }],
        ticket: 'test_ticket1',
      },
    });
    const component = renderer.create(
      <RecoilRoot>
        <MockTheme>
          <PlaceBet
            message={message}
          />
        </MockTheme>
      </RecoilRoot>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
