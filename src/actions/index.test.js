import { actionTypes, correctGuess } from './index'

// import { storeFactory } from '../../test/testUtils';
// import { getSecretWord } from './';

describe('getSecretWord action creator', () => {
    test('check output of getSecretWord action ', () => {
        const action = correctGuess();
        expect(action).toEqual({ type: actionTypes.CORRECT_GUESS })
    });
});
