import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgPlaceBetSlip } from '@models';
import PlaceBetSlip from '.';

// ==================================
// mocks
// ==================================

jest.mock('@components', () => ({
  Name: (props) => <div id="Name" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/MsgPlaceBetSlip', () => {
  it('matches snapshot', () => {
    const message = new MsgPlaceBetSlip({
      category: 'bet',
      type: 'MsgPlaceBetSlip',
      fromAddress: 'fromAddress',
      bets: [{
        uid: 'abcd-12345678-efgh',
        amount: [{
          denom: 'usge',
          amount: '200000000',
        }],
        ticket: 'test_ticket1',
      }],
    });
    const component = renderer.create(
      <RecoilRoot>
        <MockTheme>
          <PlaceBetSlip
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
