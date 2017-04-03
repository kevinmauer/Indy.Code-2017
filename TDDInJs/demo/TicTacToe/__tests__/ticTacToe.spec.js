import { getWinner } from "../ticTacToe";

describe('when the board is empty', ()=> {
    const board = [];
    const noWinnerToken = '';

    beforeEach(() => {
        for(let x=0;x<=2;x++) {
            for(let y=0;y<=2;y++) {
                board[x,y] = '';
            }
        }
    });

    describe('and X is across the top row', () => {
        const expectedResult = 'X';
        let acutualResult = null;
        beforeEach(() => {
            board[0,0] = 'X';
            board[0,1] = 'X';
            board[0,2] = 'X';

            acutualResult = getWinner(board);
        });

        describe('and I determine the winner', () => {
        it('then X should be the winner', () => {
            expect(acutualResult).toBe(expectedResult);
        });

        it('then Y should not be the winner', () => {
            expect(acutualResult).not.toBe('Y');
        });
        });
    });

    describe("and I determine the winner", () => {

        it('then there should be no winner', ()=> {
            expect(getWinner(board)).toBe(noWinnerToken);
        })
    })
})